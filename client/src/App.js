
import './App.css';
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import StartRound from "./pages/StartRound.js"
import Home from "./pages/Home.js"
// import Courses from "./pages/Courses"
import MatchHistory from "./pages/MatchHistory.js"
import LeaderBoards from './pages/LeaderBoards';
import MyAccount from './pages/MyAccount';
import Help from './pages/Help';
// import Directory from './pages/Directory';
import NewsFeed from "./pages/NewsFeed.js"
import Footer from "./components/Footer/index.js"
import UserFooter from "./components/UserFooter/index.js"
import firebase from "./firebase";
import grassBanner from "./utils/images/grassbanner.png"
import CurrentRound from './pages/Current';
import BestRounds from './pages/BestRounds';
// import Directory from "./pages/Directory.js"

function App() {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false)
      }
    });
  }, []);

  const [user, setUser] = useState(false);

  //state holding authenticated user
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/newmatch" component={StartRound} />
            <Route exact path="/recentmatches" component={MatchHistory} />
            {/* <Route exact path="/courses" component={Courses} /> */}
            <Route exact path="/leaderboards" component={LeaderBoards} />
            <Route exact path="/BestRounds" component={BestRounds} />
            <Route exact path="/myaccount" component={MyAccount} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/news" component={NewsFeed} />
            {/* <Route exact path="/directory" component={Directory} /> */}
            <Route exact path="/CurrentRound" component={CurrentRound} />
          </Router>
        </div>
        <img src={grassBanner} height="50px" alt="grass banner above footer"></img>
        {user ? <UserFooter /> : <Footer />}
      </div>
    </>
  );
}

export default App;
