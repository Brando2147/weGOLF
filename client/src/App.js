import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import StartRound from "./pages/StartRound.js"
import Home from "./pages/Home.js"


function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/newmatch" component={StartRound} />
      </Router>
    </>
  );
}

export default App;
