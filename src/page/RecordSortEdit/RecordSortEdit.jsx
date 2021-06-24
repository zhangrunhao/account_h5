import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import {
  withRouter
} from 'react-router-dom'
import {
  Formik,
  Form,
  useField,
  useFormikContext
} from 'formik'
import {
  Delete
} from '@icon-park/react'

import alert from '../../components/Modal/alert.jsx'
import Toast from '../../components/Toast/Toast.jsx'
import TopNav from '../../common/TopNav/TopNav.jsx'
import History from '../../util/history.js'
import {
  getRecordSort,
  addRecordSort,
  updateRecordSort,
  deleteRecordSort
} from '../../api/recordSort'
import { isFunction, remove } from 'lodash'

const Wrapper = styled.div`
padding-top: 1rem;
`

const ErrorTip = styled.div`
  color: red;
`

class RecordSortEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  componentDidMount() {
    const id = History.getParam(this, 'id')
    if (id === 'new') {
      this.setState({
        title: '新建收支记录类型'
      })
    } else {
      this.setState({
        title: '修改收支记录类型'
      })
    }
  }
  onSubmit(values) {
    console.log('submit')
    if (this.state.title === '新建收支记录类型') {
      console.log('add submit', values)
      addRecordSort(values).then(r => {
        Toast.success('添加成功', 1000, () => {
          History.back(this)
        })
      })
    } else {
      values = Object.assign(values, {
        recordSortId: History.getParam(this, 'id')
      })
      console.log('update submit', values)
      updateRecordSort(values).then(r => {
        Toast.success('修改成功', 1000, () => {
          History.back(this)
        })
      })
    }
  }
  deleteClick() {
    function close() {
      alertOrig && isFunction(alertOrig.close) && alertOrig.close()
    }
    function remove() {
      close()
      deleteRecordSort(History.getParam(this, 'id')).then(r => {
        Toast.success('删除成功', null, () => {
          History.back(this)
        })
      })
    }

    const alertOrig = alert({
      footer: () => {
        return (
          <div>
            <button onClick={remove.bind(this)}>确定</button>
          </div>
        )
      }
    })
  }
  render() {
    const id = History.getParam(this, 'id')
    return (
      <Wrapper>
        <TopNav
          rightIconComponents={[
            {
              component: Delete,
              props: {
                key: 'delete',
                onClick: this.deleteClick.bind(this),
                theme: 'outline',
                size: '24',
                fill: '#333'
              }
            }
          ]}
          back
        >
          {this.state.title}
        </TopNav>
        <EditForm id={id} onSubmit={this.onSubmit.bind(this)}></EditForm>
      </Wrapper>
    )
  }
}

function EditForm(props) {
  const [data, setDate] = React.useState({})
  React.useEffect(() => {
    (props.id !== 'new') && getRecordSort(props.id).then(r => {
      setDate(r.data)
    })
  }, [props.id])
  return (
    <Formik
      initialValues={{
        name: '',
        icon: '',
        type: '',
      }}
      validationSchema={
        Yup.object().shape({
          name: Yup.string().min(2, 'Too Short!').required('Required'),
          icon: Yup.string().required('Required!'),
          type: Yup.string().required('Required!')
        })
      }
      onSubmit={values => {
        props.onSubmit(values)
      }}
    >
      <Form>
        <MyFiled data={data} name="icon"></MyFiled>
        <br/>
        <MyFiled data={data} name="name"></MyFiled>
        <br/>
        <MyFiled data={data} name="type"></MyFiled>
        <br/>
        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  )
}

function MyFiled(props) {
  const {
    setFieldValue
  } = useFormikContext()
  const [field, meta] = useField(props)
  React.useEffect(() => {
    props && props.data && props.name && props.data[props.name] && setFieldValue(props.name, props.data[props.name])
  }, [props.data])
  return (
    <>
      <label>{props.name}: </label>
      <input {...props} {...field}></input>
      {
        meta.touched && meta.error
        ?
        (<ErrorTip>{meta.error}</ErrorTip>)
        :
        null
      }
    </>
  )
}

export default withRouter(RecordSortEdit)