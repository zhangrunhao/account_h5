import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import { Delete, Left } from "@icon-park/react";
import { Modal, Toast, NavBar } from "antd-mobile";
import History from "../../util/history.js";
import {
  getRecordSort,
  addRecordSort,
  updateRecordSort,
  deleteRecordSort,
} from "../../api/recordSort";
const alert = Modal.alert;
const Wrapper = styled.div`
  padding-top: 1rem;
`;

const ErrorTip = styled.div`
  color: red;
`;

class RecordSortEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  componentDidMount() {
    const id = History.getParam(this, "id");
    if (id === "new") {
      this.setState({
        title: "新建收支记录类型",
      });
    } else {
      this.setState({
        title: "修改收支记录类型",
      });
    }
  }

  onSubmit(values) {
    if (this.state.title === "新建收支记录类型") {
      addRecordSort(values).then((r) => {
        Toast.success("添加成功");
        History.back(this);
      });
    } else {
      values = Object.assign(values, {
        recordSortId: History.getParam(this, "id"),
      });
      updateRecordSort(values).then((r) => {
        Toast.success("修改成功");
        History.back(this);
      });
    }
  }

  deleteClick() {
    alert("删除", "确定删除此记录类型吗?", [
      { text: "取消" },
      {
        text: "确定",
        onPress: () => {
          deleteRecordSort(History.getParam(this, "id")).then((r) => {
            Toast.success("删除成功");
            History.back(this);
          });
        },
      },
    ]);
  }

  render() {
    const id = History.getParam(this, "id");
    return (
      <Wrapper>
        <NavBar
          mode="light"
          icon={<Left size="26" />}
          onLeftClick={() => History.back(this)}
          rightContent={
            id === "new"
              ? []
              : [
                  <Delete
                    key="0"
                    size="26"
                    onClick={() => this.deleteClick()}
                  />,
                ]
          }
        >
          账户
        </NavBar>
        <EditForm id={id} onSubmit={this.onSubmit.bind(this)}></EditForm>
      </Wrapper>
    );
  }
}

function EditForm(props) {
  const [data, setDate] = React.useState({});
  React.useEffect(() => {
    props.id !== "new" &&
      getRecordSort(props.id).then((r) => {
        setDate(r.data);
      });
  }, [props.id]);
  return (
    <Formik
      initialValues={{
        name: "",
        icon: "",
        type: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").required("Required"),
        icon: Yup.string().required("Required!"),
        type: Yup.string().required("Required!"),
      })}
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      <Form>
        <MyFiled data={data} name="icon"></MyFiled>
        <br />
        <MyFiled data={data} name="name"></MyFiled>
        <br />
        <MyFiled data={data} name="type"></MyFiled>
        <br />
        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  );
}
EditForm.propTypes = {
  id: PropTypes.string,
  onSubmit: PropTypes.func,
};

function MyFiled(props) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  React.useEffect(() => {
    props &&
      props.data &&
      props.name &&
      props.data[props.name] &&
      setFieldValue(props.name, props.data[props.name]);
  }, [props.data]);
  return (
    <>
      <label>{props.name}: </label>
      <input {...props} {...field}></input>
      {meta.touched && meta.error ? <ErrorTip>{meta.error}</ErrorTip> : null}
    </>
  );
}

MyFiled.propTypes = {
  name: PropTypes.string,
  data: PropTypes.object,
};

export default withRouter(RecordSortEdit);
