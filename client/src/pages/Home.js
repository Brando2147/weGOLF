import React from "react";
import { Link } from "react-router-dom";
// import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";

function Home() {
  return (
    <>
      <UserNav />
      <div class="columns is-centered is-mobile">
        <div class="row">
          <div class="column">
            <div class="box">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
              Click here to go to your current round.<p></p>If no current round
              exists; this will create a new match.<p></p>
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
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
              Click here to see a list of users and their high scores.<p></p>{" "}
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
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
              This button will take you to see your best scores. <p></p>This
              should be filterable (reddit or similar style) to "top all time"
              "top this month" etc.<p></p>
              <button class="button is-primary">
                <Link className="bestscores" to="/best">
                  <h3>Best Scores</h3>
                </Link>
              </button>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
              Unfortunately we still are not sure what to do with this button.{" "}
              <p></p>but it will someday have a home! <p></p>
              <button class="button is-primary">
                <Link className="nowplaying" to="/nowplaying">
                  <h3>Playing Now</h3>
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
