import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import firebase from "../../firebase";
import "./style.css";
import axios from "axios";

function UserNav() {

    let history = useHistory();
    const [isActive, setisActive] = React.useState(false);

    const [user, setUser] = useState(false);

    const [route, setRoute] = useState("");

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user.uid);
                setUser(user)
            } else {
                console.log('user is not signed in');

                history.push("/")
            }
        })
    }, [])

    const handleSignOut = () => {
        firebase.auth().signOut()
        setUser(false)
    }

    const currentRoundCheck = function() {
        axios({
            method: "GET",
            url: `/api/complete/${user.uid}/`,
          }).then((result) => {
            console.log(result.data) 
            if (result.data.length === 0) {
                 setRoute("/newMatch")
             } else {
                 setRoute("/CurrentRound")
             }
          })
    }
// currentRoundCheck();

    return (
        <>
            <nav className="navbar is-success" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/home"><h3>weGolf</h3></Link>

                    <a onClick={() => {
                        setisActive(!isActive)
                    }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-end">
                        <Link className="navbar-item is-tab" to="/newMatch">
                            <span className="icon is-small"><i className="fas fa-golf-ball" aria-hidden="true"></i></span>
                            <span> New Match</span>
                        </Link>

                        <Link className="navbar-item is-tab" to="/RecentMatches">
                            <span className="icon is-small"><i className="fas fa-table" aria-hidden="true"></i></span>
                            <span>Recent Matches</span>
                        </Link>

                        <Link className="navbar-item is-tab" to="/leaderboards">
                            <span className="icon is-small"><i className="fas fa-trophy" aria-hidden="true"></i></span>
                            <span>Leaderboards</span>
                        </Link>

                        <Link className="navbar-item is-tab" to="/myaccount">
                            <span className="icon is-small"><i className="fas fa-user" aria-hidden="true"></i></span>
                            <span>My Account</span>
                        </Link>

                        <Link className="navbar-item is-tab" to="/help">
                            <span className="icon is-small"><i className="fas fa-question" aria-hidden="true"></i></span>
                            <span>Help</span>
                        </Link>
                        <Link className="navbar-item is-tab" to="/" onClick={handleSignOut}>
                            <span className="icon is-small"><i className="fas fa-sign-out-alt" aria-hidden="true"></i></span>
                            <span>Sign Out</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <p>Hi {user.email}</p>
        </>
    )

  let history = useHistory();
  const [isActive, setisActive] = React.useState(false);

  const [user, setUser] = useState(false);

  const [route, setRoute] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("user is not signed in");

        history.push("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    firebase.auth().signOut();
    setUser(false);
  };

  const currentRoundCheck = function () {
    axios({
      method: "GET",
      url: `/api/complete/${user.uid}/`,
    }).then((result) => {
      if (result.data.length === 0) {
        setRoute("/newMatch");
      } else {
        setRoute("/RecentMatches");
      }
    });
  };
  currentRoundCheck();

  return (
    <>
      <nav
        className="navbar is-success"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/home">
            <h3>weGolf</h3>
          </Link>

          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <Link className="navbar-item is-tab" to={route}>
              <span className="icon is-small">
                <i className="fas fa-golf-ball" aria-hidden="true"></i>
              </span>
              <span> New Match</span>
            </Link>

            <Link className="navbar-item is-tab" to="/RecentMatches">
              <span className="icon is-small">
                <i className="fas fa-table" aria-hidden="true"></i>
              </span>
              <span>Recent Matches</span>
            </Link>

            <Link className="navbar-item is-tab" to="/leaderboards">
              <span className="icon is-small">
                <i className="fas fa-trophy" aria-hidden="true"></i>
              </span>
              <span>Leaderboards</span>
            </Link>

            <Link className="navbar-item is-tab" to="/myaccount">
              <span className="icon is-small">
                <i className="fas fa-user" aria-hidden="true"></i>
              </span>
              <span>My Account</span>
            </Link>

            <Link className="navbar-item is-tab" to="/help">
              <span className="icon is-small">
                <i className="fas fa-question" aria-hidden="true"></i>
              </span>
              <span>Help</span>
            </Link>
            <Link className="navbar-item is-tab" to="/" onClick={handleSignOut}>
              <span className="icon is-small">
                <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
              </span>
              <span>Sign Out</span>
            </Link>
          </div>
        </div>
      </nav>

      <p>Hi {user.email}</p>
    </>
  );

}

export default UserNav;
