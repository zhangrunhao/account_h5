import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import NavTop from '../../common/TopNav/TopNav.jsx'
class BalanceDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: ''
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    this.setState({
      id
    })
  } 
  render () {
    return (
      <>
        <NavTop back>账户详情</NavTop>
        <h3>账户id: {this.state.id}</h3>
      </>
    )
  }
}

export default withRouter(BalanceDetail)