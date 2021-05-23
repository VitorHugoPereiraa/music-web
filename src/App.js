import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import { createGlobalStyle } from "styled-components";
import isAuthenticate from './utils/isAuthenticate'
import { Redirect } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: "Roboto";
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  }
  @font-face {
    font-family: "Teste";
    src: url('https://fonts.googleapis.com/css2?family=Chela+One&display=swap');
  }
  `;

function PrivateRoute(props) {
  return (isAuthenticate() ?
    <Route {...props} /> :
    <Redirect to='/login' />)
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
