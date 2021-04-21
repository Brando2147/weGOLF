import React from "react";
import { Link } from "react-router-dom";
import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";

function Home() {

  return (
    <>
      <UserNav />
      <div class="columns is-centered is-mobile">
        <div class="row">
          <div class="column">
            <div class="box">This button will go to "current round" page <p></p>or if no current round exists it will take the user to the new match page.<p></p>
              <button class="button is-primary"><Link className="currentornew" to="/newmatch"><h3>Current Round</h3></Link></button></div>
          </div>
          {/* <NewsFeed /> */}


          <div class="column is-centered">
            <div class="box">This button will take the user to a table<p></p> that allows them to search / filter users to find people to add / play against? <p></p><button class="button is-primary"><Link className="userdirectory" to="/directory"><h3>User Search</h3></Link></button></div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="box">This button will take the user to a table view of their best scores. <p></p>This should be filterable (reddit or similar style) to "top all time" "top this month" etc.<p></p><button class="button is-primary"><Link className="bestscores" to="/best"><h3>Best Scores</h3></Link></button></div>
          </div>
          <div class="column">
            <div class="box">This button will take the user to a list of their friends or something similar who are currently playing today. <p></p>Table that shows perosn playing / course / and score through the current spot of the course? <p></p><button class="button is-primary"><Link className="nowplaying" to="/nowplaying"><h3>Playing Now</h3></Link></button></div>
          </div>
        </div>
      </div>
      {/* <UserFooter /> */}
    </>
  );
}

export default Home;
