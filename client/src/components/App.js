import React, { Component } from "react";
import { Query } from "react-apollo";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AuthRoute from '../util/route_util';
import Nav from './Nav';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Route path='/' component={Nav}/> 
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} routeType='auth' />
        <AuthRoute exact path="/register" component={Register} routeType='auth' />
      </Switch>
    </div>
  );
};

export default App;
