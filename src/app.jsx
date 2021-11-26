import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./page/home/home.jsx";
import Login from "./page/login/login.jsx";
import Register from "./page/register/register.jsx";
import Bill from "./page/bill/bill.jsx";

import Trade from "./page/trade/trade.jsx";
import TradeDetail from "./page/trade-detail/trade-detail.jsx";

import TradeCateList from "./page/trade-cate-list/trade-cate-list.jsx";
import TradeCateEdit from "./page/trade-cate-edit/ trade-cate-edit.jsx";

import Account from "./page/account/account.jsx";
import AccountDetail from "./page/account-detail/account-detail.jsx";
import AccountEdit from "./page/account-edit/account-edit.jsx";


export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/bill" component={Bill}></Route>

          <Route path="/trade/:id" component={Trade}></Route>
          <Route path="/trade-detail/:id" component={TradeDetail}></Route>

          <Route path="/trade-cate-list/:type" component={TradeCateList}></Route>
          <Route path="/trade-cate-edit/:id" component={TradeCateEdit}></Route>

          <Route path="/account" component={Account}></Route>
          <Route path="/account-detail/:id" component={AccountDetail}></Route>
          <Route path="/account-edit/:id" component={AccountEdit}></Route>

          <Route path="/home" component={Home}></Route>
          <Route path="/" component={Bill}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
