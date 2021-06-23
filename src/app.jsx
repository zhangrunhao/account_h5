import React from 'react'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'

import Home from './page/Home/Home.jsx'
import Login from './page/Login/Login.jsx'
import Register from './page/Register/Register.jsx'
import Bill from './page/Bill/Bill.jsx'
import Record from './page/Record/Record.jsx'
import RecordTypeList from './page/RecordTypeList/RecordTypeList.jsx'

import Account from './page/Account/Account.jsx'
import AccountDetail from './page/AccountDetail/AccountDetail.jsx'
import AccountEdit from './page/AccountEdit/AccountEdit.jsx'

import './animation/animation.js'


export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/bill" component={Bill}></Route>
          <Route path="/record" component={Record}></Route>
          <Route path="/record_type_list" component={RecordTypeList}></Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/account_detail/:id" component={AccountDetail}></Route>
          <Route path="/account_edit/:id" component={AccountEdit}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </HashRouter>
  )
}
