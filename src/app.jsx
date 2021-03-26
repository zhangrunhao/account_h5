import React from 'react'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Home from './page/Home/Home.jsx'
import Login from './page/Login/Login.jsx'
import Register from './page/Register/Register.jsx'
import Bill from './page/Bill/Bill.jsx'

import './app.less'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='/login'><Login /></Route>
          <Route path='/register'><Register /></Route>
          <Route path='/bill'><Bill /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}