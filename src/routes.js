import { lazy } from "react";
export default [{
  path: "/login",
  exact: true,
  component: lazy(() => import('./page/login/login.jsx'))
}, {
  path: "/register",
  exact: true,
  component: lazy(() => import('./page/register/register.jsx'))
}, {
  path: "/bill",
  exact: true,
  component: lazy(() => import('./page/bill/bill.jsx'))
}, {
  path: "/trade/:id",
  exact: true,
  component: lazy(() => import('./page/trade/trade.jsx'))
}, {
  path: "/trade-detail/:id",
  exact: true,
  component: lazy(() => import('./page/trade-detail/trade-detail.jsx'))
}, {
  path: "/trade-cate-list/:type",
  exact: true,
  component: lazy(() => import('./page/trade-cate-list/trade-cate-list.jsx'))
}, {
  path: "/trade-cate-edit/:id",
  exact: true,
  component: lazy(() => import('./page/trade-cate-edit/trade-cate-edit.jsx'))
}, {
  path: "/account",
  exact: true,
  component: lazy(() => import('./page/account/account.jsx'))
}, {
  path: "/account-detail/:id",
  exact: true,
  component: lazy(() => import('./page/account-detail/account-detail.jsx'))
}, {
  path: "/account-edit/:id",
  exact: true,
  component: lazy(() => import('./page/account-edit/account-edit.jsx'))
},  {
  path: "/borrow-lend/:type",
  exact: true,
  component: lazy(() => import('./page/borrow-lend/borrow-lend.jsx'))
}, {
  path: "/borrow-lend-edit/:id",
  exact: true,
  component: lazy(() => import('./page/borrow-lend-edit/borrow-lend-edit.jsx'))
}, {
  path: "/borrow-lend-detail/:id",
  exact: true,
  component: lazy(() => import('./page/borrow-lend-detail/borrow-lend-detail.jsx'))
}, {
  path: "/repayment-receive-edit/:id/:targetId", 
  exact: true,
  component: lazy(() => import('./page/repayment-receive-edit/repayment-receive-edit.jsx'))
}, {
  path: "/home",
  exact: true,
  component: lazy(() => import('./page/home/home.jsx'))
}, {
  path: "/",
  exact: true,
  component: lazy(() => import('./page/bill/bill.jsx'))
}]