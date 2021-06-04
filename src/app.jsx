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
import Balance from './page/Balance/Balance.jsx'
import BalanceDetail from './page/BalanceDetail/BalanceDetail.jsx'
import BalanceEdit from './page/BalanceEdit/BalanceEdit.jsx'

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
          <Route path="/balance" component={Balance}></Route>
          <Route path="/balance_detail/:id" component={BalanceDetail}></Route>
          <Route path="/balance_edit/:id" component={BalanceEdit}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </HashRouter>
  )
}
