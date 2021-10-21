import React from "react";
import { Formik, Field, Form } from "formik";
import TopBackNav from "../../common/top-back-nav/top-back-nav.jsx";
import { loginUser } from "../../api/user.js";
import { setToken } from "../../util/token.js";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import History from "../../util/history.js";
import { Toast } from "antd-mobile";
const Wrapper = styled.div`
  padding-top: 1rem;
`;
function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}
function validatePassword(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}
class Login extends React.Component {
  postSignin(values) {
    loginUser(values).then((res) => {
      if (res && res.data && res.data.token) {
        setToken(res.data.token);
        Toast.success("登录成功");
        if (history.length > 2) {
          History.back(this);
        } else {
          location.href = `${location.origin}/#/home`;
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <TopBackNav>登录</TopBackNav>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            this.postSignin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="email">Email: </label>
              <Field id="email" name="email" validate={validateEmail}></Field>
              {errors.email && touched.email && (
                <div>Error: {errors.email}</div>
              )}
              <br />

              <label htmlFor="password">Password: </label>
              <Field
                id="password"
                type="password"
                name="password"
                validate={validatePassword}
              ></Field>
              {errors.password && touched.password && (
                <div>Error: {errors.password}</div>
              )}
              <br />

              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    );
  }
}

export default withRouter(Login);
