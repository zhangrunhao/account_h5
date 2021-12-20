import React, { Suspense, lazy} from "react";
import {HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes.js";

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {routes.map((item) => {
            return (
              <Route
                exact
                name={item.path}
                path={item.path}
                key={item.path}
                render={(props) => (
                  <item.component
                    {...props}
                    routes={item.children}
                  ></item.component>
                )}
              ></Route>
            );
          })}
        </Switch>
      </Suspense>
    </Router>
  );
}
