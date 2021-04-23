import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Home from './page/Home/Home.jsx'
import Login from './page/Login/Login.jsx'
import Register from './page/Register/Register.jsx'
import Bill from './page/Bill/Bill.jsx'
import Record from './page/Record/Record.jsx'
import Balance from './page/Balance/Balance.jsx'

import './animation/animation.js'


const routes = [{
  path: '/', name: 'Home', Component: Home, animation: false
}, {
  path: '/login', name: 'Login', Component: Login, animation: false
}, {
  path: '/register', name: 'Register', Component: Register, animation: false
}, {
  path: '/bill', name: 'Bill', Component: Bill, animation: false
}, {
  path: '/record', name: 'Record', Component: Record, animation: true
}, {
  path: '/balance', name: 'Balance', Component: Balance, animation: false
}]

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {
          routes.map(({path, Component, animation}) => 
            <Route key={path} exact path={path}>
              {
                ({match}) =>
                  match && <Component />
              }
            </Route>
          )
        }
      </div>
    </BrowserRouter>
  )
}