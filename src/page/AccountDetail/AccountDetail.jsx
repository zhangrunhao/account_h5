import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import NavTop from '../../common/TopNav/TopNav.jsx'
import AccountBillDayDetail from '../../common/AccountBillDayDetail/AccountBillDayDetail.jsx'
import styled from 'styled-components'
import History from '../../util/history.js'
import {
  deleteAccount
} from '../../api/account'
import {
  Edit,
  Delete
} from '@icon-park/react'
import alert from '../../components/Modal/alert.jsx'
import { isFunction } from 'loadsh'
import Toast from '../../components/Toast/Toast.jsx'
const Summary = styled.div`
  background-color: #fff;
  margin: .3rem;
  border-radius: .1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: .34rem;
`

const Wrapper = styled.div`
  padding-top: 1rem;
`

class AccountDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: ''
    }
  }

  componentDidMount () {
    const id = History.getParam(this, 'id')
    this.setState({
      id
    })
  }

  deleteClick () {
    function close () {
      alertOrig && isFunction(alertOrig.close) && alertOrig.close()
    }
    function remove (id) {
      console.log('remove id', id)
      deleteAccount(id).then(r => {
        Toast.success('删除成功')
        close()
        History.back(this)
      })
    }
    const alertOrig = alert({
      footer: () => {
        return (
          <div>
            <button onClick={close}>取消</button>
            <button onClick={remove.bind(this, this.state.id)}>确定</button>
          </div>
        )
      }
    })
  }

  editClick () {
    const path = `/account_edit/${this.state.id}`
    History.push(this, path)
  }

  render () {
    return (
      <Wrapper>
        <NavTop
          back
          rightIconComponents={[
            {
              component: Edit,
              props: {
                key: 'edit',
                onClick: this.editClick.bind(this),
                theme: 'outline',
                size: '24',
                fill: '#333'
              }
            },
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
        >
          账户id: {this.state.id}
        </NavTop>
        <Summary>余额: 200.00</Summary>
        <ul>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
        </ul>
      </Wrapper>
    )
  }
}

export default withRouter(AccountDetail)
