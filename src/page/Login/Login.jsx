import React from 'react'
import {
  Formik,
  Field,
  Form
} from 'formik'
import NavTop from '../../common/TopNav/TopNav.jsx'
import Toast from '../../components/Toast/Toast.jsx'
import request from '../../util/request.js'
import {
  setToken
} from '../../util/auth'
import styled from 'styled-components'
const Wrapper = styled.div`
padding-top: 1rem;
`
function validateEmail (value) {
  let error
  if (!value) {
    error = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address"
  }
  return error
}
function validatePassword (value) {
  let error
  if (!value) {
    error = "Required"
  }
  return error
}
export default class Login extends React.Component {
  constructor (props) {
    super(props)
  }
  postSignin (data) {
    request({
      url: '/api/users/login',
      method: 'POST',
      data
    }).then(res => {
      if (res && res.data && res.data.token) {
        setToken(res.data.token)
        Toast.success("登录成功")
      }
    }).catch(err => {
      console.log(err)
    })
  }
  render () {
    return (
      <Wrapper>
        <NavTop back>登录</NavTop>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit = {(values => {
            this.postSignin(values)
          })}
        >
          {
            ({
              errors,
              touched
            }) => 
            <Form>
              <label htmlFor="email">Email: </label>
              <Field id="email" name="email" validate={validateEmail}></Field>
              {errors.email && touched.email && <div>Error: {errors.email}</div>}
              <br/>

              <label htmlFor="password">Password: </label>
              <Field id="password" type="password" name="password" validate={validatePassword}></Field>
              {errors.password && touched.password && <div>Error: {errors.password}</div>}
              <br/>

              <button type="submit">Login</button>
            </Form>
          }
        </Formik>
      </Wrapper>
    );
  }
}