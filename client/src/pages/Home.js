import React from "react";
import { Link } from "react-router-dom";
// import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";
import fakeLogo from "../utils/images/weGolfStoreA.png";
import scoreCardHome from "../utils/images/bestScoresA.png";
import currentRoundIMG from "../utils/images/currentRoundA.png";
import usersIcon from "../utils/images/userSearchA.png";

function Home() {
  return (
    <>
      <UserNav />
      {/* <NewsFeed /> */}

      <div class="columns is-centered is-mobile">
        <div class="row">
          <div class="column">
            <div class="box">
              <div class="card">
                <Link to="/newmatch">
                  <div class="card-image is-clickable">
                    <figure class="image is-256x256">
                      <img
                        class="is-clickable"
                        src={currentRoundIMG}
                        alt="Placeholder image"
                      ></img>
                    </figure>
                  </div>
                </Link>
              </div>

              <p></p>
              <p></p>
            </div>
          </div>

          <div class="column is-centered">
            <div class="box">
              <div class="card">
                <Link to="/newmatch">
                  <div class="card-image is-clickable">
                    <figure class="image is-256x256">
                      <img src={usersIcon} alt="Placeholder image"></img>
                    </figure>
                  </div>
                </Link>
              </div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="box">
              <div class="card">
                <Link to="/newmatch">
                  <div class="card-image">
                    <figure class="image is-256x256">
                      <img src={scoreCardHome} alt="Placeholder image"></img>
                    </figure>
                  </div>
                </Link>
              </div>
              <p></p>
              <p></p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              {" "}
              <div class="card">
                <Link to="/newmatch">
                  <div class="card-image">
                    <figure class="image is-256x256 ">
                      <img src={fakeLogo} alt="Placeholder image"></img>
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
