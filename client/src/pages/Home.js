import React from "react";
import { Link } from "react-router-dom";
// import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";
import fakeLogo from "../utils/images/weGolfStoreA.png";
import scoreCardHome from "../utils/images/bestScoresA.png";
import currentRoundIMG from "../utils/images/currentRoundA.png";
import usersIcon from "../utils/images/golfNews.png";

function Home() {
  return (
    <>
      <UserNav />
      <div className="columns is-centered is-mobile has-background-success">
        <div className="row">
          <div className="column">
            <div className="box">
              <div className="card">
                <Link to="/newmatch">
                  <div className="card-image is-clickable">
                    <figure className="image is-256x256">
                      <img
                        className="is-clickable"
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
          {/* <NewsFeed /> */}

          <div className="column is-centered">
            <div className="box">
              <div className="card">
                <Link to="/directory">
                  <div className="card-image is-clickable">
                    <figure className="image is-256x256">
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
        <div className="row">
          <div className="column">
            <div className="box">
              <div className="card">
                <Link to="/newmatch">
                  <div className="card-image">
                    <figure className="image is-256x256">
                      <img src={scoreCardHome} alt="Placeholder image"></img>
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
      {/* <UserFooter /> */}
    </>
  );
}

export default Home;
