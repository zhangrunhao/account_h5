import { lazy } from "react";

export default [{
  path: "/login",
  component: lazy(() => import('./page/login/login.jsx'))
}, {
  path: "/register",
  component: lazy(() => import('./page/register/register.jsx'))
}, {
  path: "/bill",
  component: lazy(() => import('./page/bill/bill.jsx'))
}, {
  path: "/trade/:id",
  component: lazy(() => import('./page/trade/trade.jsx'))
}, {
  path: "/trade-detail/:id",
  component: lazy(() => import('./page/trade-detail/trade-detail.jsx'))
}, {
  path: "/trade-cate-list/:type",
  component: lazy(() => import('./page/trade-cate-list/trade-cate-list.jsx'))
}, {
  path: "/trade-cate-edit/:id",
  component: lazy(() => import('./page/trade-cate-edit/trade-cate-edit.jsx'))
}, {
  path: "/account",
  component: lazy(() => import('./page/account/account.jsx'))
}, {
  path: "/account-detail/:id",
  component: lazy(() => import('./page/account-detail/account-detail.jsx'))
}, {
  path: "/account-edit/:id",
  component: lazy(() => import('./page/account-edit/account-edit.jsx'))
},  {
  path: "/borrow-lend/:type",
  component: lazy(() => import('./page/borrow-lend/borrow-lend.jsx'))
}, {
  path: "/borrow-lend-edit/:id",
  component: lazy(() => import('./page/borrow-lend-edit/borrow-lend-edit.jsx'))
}, {
  path: "/borrow-lend-detail/:id",
  component: lazy(() => import('./page/borrow-lend-detail/borrow-lend-detail.jsx'))
}, {
  path: "/repayment-receive-edit/:id/:targetId", 
  component: lazy(() => import('./page/repayment-receive-edit/repayment-receive-edit.jsx'))
}, {
  path: "/home",
  component: lazy(() => import('./page/home/home.jsx'))
}, {
  path: "/",
  component: lazy(() => import('./page/bill/bill.jsx'))
}]