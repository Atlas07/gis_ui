import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default App;
