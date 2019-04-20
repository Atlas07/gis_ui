import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default App;
