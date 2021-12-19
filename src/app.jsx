import React, {Suspense} from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history.js'
import routes from './routes.js'
export default function App() {
  return (
    <Router history={history} >
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {
            routes.map((item) => {
              return (
                <Route exact={item.exact} path={item.path} key={item.path} render={
                  props => (
                    <item.component {...props} routes={item.children}></item.component>
                  )
                }></Route>
              )
            })
          }
        </Switch>
      </Suspense>
    </Router>
  );
}
