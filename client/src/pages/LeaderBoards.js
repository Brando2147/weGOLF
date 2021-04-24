// import React from "react";
import { Link } from "react-router-dom";
// import UserFooter from "../components/UserFooter/i.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";
import Home from "../pages/Home.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserFooter from "../components/UserFooter/index.js";

function LeaderBoards() {
  const [players, setPlayers] = useState([
    {
      playerName: '',
      rank: '',
      best: '',
      course: '',
      city: '',
      state: '',

    }
  ]);
  useEffect(() => {
    var leaders = () => {
      axios({
        method: "GET",
        url: `/api/leaderboards`,
      }).then((data) => {
        console.log(data)
        const leaderData = data.data;
       setPlayers(leaderData.map(leadername =>
        {
return {
  playerName: leadername.playerName,
  rank: '1',
  best: '1',
  course: leadername.courseName,
  city: leadername.courseCity,
  state: leadername.courseState,

}
        }));
      });
    };
    leaders();
  }, []);
  console.log("players:", players)
  return (
    <>
    
  
     <UserNav />
     <div class="columns is-centered is-mobile">
        <div class="row">
          <div class="column">
            <table class="table is-striped is-bordered">
              <thead>
                <tr>
                  <th>User (Player) </th>
                  <th>
                    <abbr title="Rank">Rank</abbr>
                  </th>
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
              
              <tbody>
                <td>{players.map(p => <tr>{p.playerName}</tr>)}</td>
                <td></td>
                <td></td>
                <td>{players.map(c =><tr>{c.course}</tr>)}</td>
                <td>{players.map(d =><tr>{d.city}</tr>)}</td>
                <td>{players.map(e =><tr>{e.state}</tr>)}</td>
                
                </tbody>
            </table>
          </div>
        </div>
      </div>
       <UserFooter />
    </>
  );
}
export default LeaderBoards;
