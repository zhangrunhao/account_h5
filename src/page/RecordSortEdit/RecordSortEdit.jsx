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

import TopNav from '../../common/TopNav/TopNav.jsx'
import History from '../../util/history.js'
const Wrapper = styled.div`
padding-top: 1rem;
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
    console.log(values)
  }
  render() {
    const id = History.getParam(this, 'id')
    return (
      <Wrapper>
        <TopNav back>{this.state.title}</TopNav>
        <EditForm id={id} onSubmit={this.onSubmit.bind(this)}></EditForm>
      </Wrapper>
    )
  }
}

function EditForm(props) {
  const [data, setDate] = React.useState({})
  React.useEffect(() => {
    // TODO: 获取数据并注入data
    // (props.id !== 'new') && 
  }, [props.id])
  return (
    <Formik
      initialValues={{
        name: '',
        icon: ''
      }}
      validationSchema={
        Yup.object().shape({
          name: Yup.string().min(2, 'Too Short!').required('Required'),
          icon: Yup.string().required('Required!')
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
        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  )
}

function MyFiled(props) {
  const {
    setFiledValue
  } = useFormikContext()
  const [field, meta] = useField(props)
  React.useEffect(() => {
    let i
    (i = props) && (i = i.data) && (i = i.name) && setFiledValue(i)
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