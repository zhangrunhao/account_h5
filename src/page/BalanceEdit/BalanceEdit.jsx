import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import {
  Formik,
  Field,
  Form
} from 'formik'

import TopNav from '../../common/TopNav/TopNav.jsx'
import History from '../../util/history.js'

function validateName(value) {
  let error
  if (!value) {
    error = "Required"
  }
  return error
}

class BalanceEdit extends React.Component {
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
      // TODO: 此处需要根据账户id查询账户信息, 并显示
      this.setState({
        title: '编辑账户'
        // name: 
      })
    }
  }
  onSubmit (data) {
    console.log('submit', data)
  }
  render () {
    return (
      <>
        <TopNav back>
          {
            this.state.title
          }
        </TopNav>
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={values => {
            this.onSubmit(values)
          }}
        >
          {
            ({errors, touched}) => 
              <Form>
                <label htmlFor="name">Name: </label>
                <Field id="name" name="name" validate={validateName}></Field>
                {errors.name && touched.name && <div>Errors: {errors.name}</div>}
                <br />

                <button type="submit">Confirm</button>
              </Form>
          }
        </Formik>
      </>
    )
  }
}

export default withRouter(BalanceEdit)
