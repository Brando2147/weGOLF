import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserNav from "../components/UserNav/index.js";
import fakeLogo from "../utils/images/weGolfStoreA.png";
import scoreCardHome from "../utils/images/bestScoresA.png";
import currentRoundIMG from "../utils/images/currentRoundA.png";
import usersIcon from "../utils/images/golfNews.png";
import firebase from "../firebase.js"
import axios from "axios";
import newMatch from "../utils/images/newMatch.png"

function Home() {

  const [user, setUser] = useState(false);

  const [continueRound, setContinueRound] = useState(false)

  let history = useHistory();


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

  const currentRoundCheck = function () {
    axios({
      method: "GET",
      url: `/api/complete/${user.uid}/`,
    }).then((result) => {
      if (result.data.length === 0) {
        setContinueRound(false)
      } else {
        setContinueRound(true)
      }
    });
  };
  currentRoundCheck();

  return (
    <>
      <UserNav />
      <div className="columns is-centered is-mobile">
        <div className="row">
          {continueRound &&
            <div className="column">
              <div className="box">
                <div className="card">

                  <Link to="/CurrentRound">
                    <div className="card-image is-clickable">
                      <figure className="image is-256x256">
                        <img
                          className="is-clickable"
                          src={currentRoundIMG}
                          alt="current round button"
                        ></img>
                      </figure>
                    </div>
                  </Link>
                </div>
                <p></p>
                <p></p>
              </div>
            </div>
          }
          {!continueRound &&
            <div className="column">
              <div className="box">
                <div className="card">

                  <Link to="/newmatch">
                    <div className="card-image is-clickable">
                      <figure className="image is-256x256">
                        <img
                          className="is-clickable"
                          src={newMatch}
                          alt="new match button"
                        ></img>
                      </figure>
                    </div>
                  </Link>
                </div>
                <p></p>
                <p></p>
              </div>
            </div>
          }
          <div className="column is-centered">
            <div className="box">
              <div className="card">
                <Link to="/news">
                  <div className="card-image is-clickable">
                    <figure className="image is-256x256">
                      <img src={usersIcon} alt="golf news button"></img>
                    </figure>
                  </div>
                </Link>
              </div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="box">
              <div className="card">
                <Link to="/newmatch">
                  <div className="card-image">
                    <figure className="image is-256x256">
                      <img src={scoreCardHome} alt="wegolf store button"></img>
                    </figure>
                  </div>
                </Link>
              </div>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              {" "}
              <div className="card">
                <Link to="/newmatch">
                  <div className="card-image">
                    <figure className="image is-256x256 ">
                      <img src={fakeLogo} alt="new match button"></img>
                    </figure>
                  </div>
                </Link>
              </div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
