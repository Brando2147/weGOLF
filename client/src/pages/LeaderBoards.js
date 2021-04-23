// import React from "react";
import { Link } from "react-router-dom";
// import UserFooter from "../components/UserFooter/i.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";
import Home from "../pages/Home.js";
import React, { useState } from "react";
import axios from "axios";

// <tr class="is-selected">
// <th>1</th>
// <td class="Top1"> Martin M <strong>(W)</strong></td>
// <td class="Low">-6</td>
// <td class="CourseName">The Links</td>
// <td class="City">San Diego</td>
// <td class="State">CA</td>
// </tr>

function LeaderBoards() {
  // const [state, setState] = useState({
  //   playerName: "",
  // });

var leaders = () => {
return axios({
      method: "GET",
      url: `/api/leaderboards`,
    }).then((data) => {
      const leaderData = data.data;
      leaderData.map((ld) => {
        return (
          <tr>{ld.playerName}</tr>
        )
      });
    });
  
  };
  
  return (
    <>
      <UserNav />
      <div class="columns is-centered is-mobile">
        <div class="row">
          <div class="column">
            <table class="table is-striped is-bordered">
              <thead>
                <tr>
                  <th>
                    <abbr title="Rank">Rank</abbr>
                  </th>
                  <th>User (Player) </th>
                  <th>
                    <abbr title="Score">Best Round</abbr>
                  </th>
                  <th>
                    <abbr title="CourseName">Course</abbr>
                  </th>
                  <th>
                    <abbr title="City">City</abbr>
                  </th>
                  <th>
                    <abbr title="State">State</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>{leaders}</tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <UserFooter /> */}
    </>
  );
}

export default LeaderBoards;
