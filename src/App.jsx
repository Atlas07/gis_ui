import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';

import Login from './components/Login';

import EmployerRegister from './components/EmployerRegister';
import RecruiterRegister from './components/RecruiterRegister';
import WorkerRegister from './components/WorkerRegister';

import Vacancy from './components/Vacancy';

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register/employer" component={EmployerRegister} />
    <Route path="/register/recruiter" component={RecruiterRegister} />
    <Route path="/register/worker" component={WorkerRegister} />
    <Route path="/vacancy/:id" component={Vacancy} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default App;
