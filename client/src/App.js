import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import StartRound from "./pages/StartRound.js"
import Home from "./pages/Home.js"
import MatchHistory from "./pages/MatchHistory.js"
import Courses from "./pages/Courses"
import LeaderBoards from './pages/LeaderBoards';
import MyAccount from './pages/MyAccount';
import Help from './pages/Help';
import Directory from './pages/Directory';



function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/newmatch" component={StartRound} />
        <Route exact path="/matchhistory" component={MatchHistory} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/leaderboards" component={LeaderBoards} />
        <Route exact path="/myaccount" component={MyAccount} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/directory" component={Directory} />

      </Router>
    </>
  );
}

export default App;
