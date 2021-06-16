import React from 'react'
import styled from 'styled-components'
import { registerUser } from '../../api/user.js'
import NavTop from '../../common/TopNav/TopNav.jsx'
import {
  Formik,
  Field,
  Form
} from 'formik'
import Toast from '../../components/Toast/Toast.jsx'

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
export default class Register extends React.Component {
  constructor (props) {
    super(props)
  }

  postSignin (values) {
    registerUser(values).then(() => {
      Toast.success("注册成功")
    }).catch(err => {
      console.log(err)
    })
  }
  render () {
    return (
      <Wrapper>
        <NavTop back>注册</NavTop>
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

              <button type="submit">Register</button>
            </Form>
          }
        </Formik>
      </Wrapper>
    )
  }
}
