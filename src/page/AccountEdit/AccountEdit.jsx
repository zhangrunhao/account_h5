import * as Yup from 'yup'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
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
import Toast from '../../components/Toast/Toast.jsx'
import {
  addAccount,
  updateAccount,
  getAccountDetail
} from '../../api/account.js'

const Wrapper = styled.div`
padding-top: 1rem;
`

const ErrorTip = styled.div`
  color: red;
`

class AccountEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '账户相关'
    }
  }

  componentDidMount () {
    const id = History.getParam(this, 'id')
    if (id === 'new') {
      this.setState({
        title: '新建账户'
      })
    } else {
      this.setState({
        title: '编辑账户',
        id: id
      })
    }
  }

  onSubmit (data) {
    if (this.state.title === '新建账户') {
      addAccount(data).then(r => {
        Toast.success('操作成功')
      })
    } else if (this.state.title === '编辑账户') {
      data = Object.assign(data, {
        accountId: this.state.id
      })
      updateAccount(data).then(r => {
        Toast.success('操作成功')
      })
    }
  }

  render () {
    const id = History.getParam(this, 'id')
    return (
      <Wrapper>
        <TopNav back>
          {
            this.state.title
          }
        </TopNav>
        <EditForm id={id} onSubmit={this.onSubmit.bind(this)}></EditForm>
      </Wrapper>
    )
  }
}

function EditForm (props) {
  const [data, setData] = React.useState({})
  React.useEffect(() => {
    (props.id !== 'new') && getAccountDetail(props.id).then(r => {
      setData(r.data)
    })
  }, [props.id])
  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        icon: '',
        color: ''
      }}
      validationSchema={
        Yup.object().shape({
          name: Yup.string().min(2, 'Too Short!').required('Required!'),
          type: Yup.string().required('Required!'),
          icon: Yup.string().required('Required!'),
          color: Yup.string().required('Required!')
        })
      }
      onSubmit={(values) => {
        props.onSubmit(values)
      }}
    >
      <Form>
        <MyFiled data={data} name="name"/>
        <br/>
        <MyFiled data={data} name="type"/>
        <br/>
        <MyFiled data={data} name="icon"/>
        <br/>
        <MyFiled data={data} name="color"/>
        <br/>
        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  )
}

EditForm.propTypes = {
  id: PropTypes.string,
  onSubmit: PropTypes.func
}

function MyFiled (props) {
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
      <input {...props} {...field} />
      {
        meta.touched && meta.error
          ? (<ErrorTip>{meta.error}</ErrorTip>)
          : null
      }
    </>
  )
}
MyFiled.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string
}

export default withRouter(AccountEdit)
