import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./page/home/home.jsx";
import Login from "./page/login/login.jsx";
import Register from "./page/register/register.jsx";
import Bill from "./page/bill/bill.jsx";

import Record from "./page/record/record.jsx";
import RecordSortList from "./page/record-sort-list/record-sort-list.jsx";
import RecordSortEdit from "./page/record-sort-edit/record-sort-edit.jsx";

import Account from "./page/account/account.jsx";
import AccountDetail from "./page/account-detail/account-detail.jsx";
import AccountEdit from "./page/account-edit/account-edit.jsx";

import "./animation/animation.js";

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/bill" component={Bill}></Route>
          <Route path="/record" component={Record}></Route>
          <Route path="/record-sort-list" component={RecordSortList}></Route>
          <Route
            path="/record-sort-edit/:id"
            component={RecordSortEdit}
          ></Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/account-detail/:id" component={AccountDetail}></Route>
          <Route path="/account-edit/:id" component={AccountEdit}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
