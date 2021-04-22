import React from "react";
import { Link } from "react-router-dom";
import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";
import fakeLogo from "../utils/images/webstore.jpeg"
import scoreCardHome from "../utils/images/bestScores.jpeg"
import currentRoundIMG from "../utils/images/currentRounds.jpeg"
import usersIcon from "../utils/images/userDirectory.png"

function Home() {
  return (
    <>
      <UserNav />
      <div class="columns is-centered is-mobile">
        <div class="row">
          <div class="column">
            <div class="box">
              {" "}
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src={currentRoundIMG}
                      alt="Placeholder image"
                    ></img>
                  </figure>
                </div>
              </div>
              <p></p>
              <p></p>
              <button class="button is-primary">
                <Link className="currentornew" to="/newmatch">
                  <h3>Current Round</h3>
                </Link>
              </button>
            </div>
          </div>
          {/* <NewsFeed /> */}

          <div class="column is-centered">
            <div class="box">
              {" "}
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src={usersIcon}
                      alt="Placeholder image"
                    ></img>
                  </figure>
                </div>
              </div>
              <p></p>{" "}
              See how your game compares to the competition!<p></p>
              <button class="button is-primary">
                <Link className="userdirectory" to="/directory">
                  <h3>User Search</h3>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="box">
              {" "}
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src={scoreCardHome}
                      alt="Placeholder image"
                    ></img>
                  </figure>
                </div>
              </div>

              <button class="button is-primary">
                <Link className="bestscores" to="/best">
                  <h3>Best Scores</h3>
                </Link>
              </button>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src={fakeLogo}
                      alt="Placeholder image"
                    ></img>
                  </figure>
                </div>
              </div>
              Click here to shop the weGOLF store! <p></p>Browse from T-Shirts,
              Coffee Mugs, Golf Balls, and Club Covers! <p></p>
              <button class="button is-primary">
                <Link className="nowplaying" to="/nowplaying">
                  <h3>weGOLF Store</h3>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <UserFooter /> */}
    </>
  );
}

export default Home;
