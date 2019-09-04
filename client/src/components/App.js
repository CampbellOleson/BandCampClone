import React, { Component } from "react";
import { Query } from "react-apollo";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AuthRoute from "../util/route_util";
import Nav from "./Nav";
import Home from "./Home";
import AlbumUpload from "./upload/AlbumUpload";
import HomePageFeature from "./HomePageFeature";
import SongIndex from './SongIndex';
import './cssreset.css'
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div>
      <img id="form-fader" className="close" src='./black.jpg'></img>
      <Route path='/' component={Nav} />
      <HomePageFeature />

      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} routeType='auth' />
        <AuthRoute exact path="/register" component={Register} routeType='auth' />
        <AuthRoute exact path="/songindex" component={SongIndex} />
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute
          exact
          path="/register"
          component={Register}
          routeType="auth"
        />
        <AuthRoute exact path="/upload" component={AlbumUpload} />
      </Switch>
    </div>
  );
};

export default App;
