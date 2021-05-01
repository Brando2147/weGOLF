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
      bestScore: '',
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
  bestScore: leadername.Total,
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
     <div className="columns is-centered has-background-success">
        <div className="row">
          <div className="column">
            <table className="table is-narrow is-striped is-bordered is-hoverable">
              <thead>
                <tr>
                  <th>User (Player) </th>
                  <th>
                    <abbr title="bestScore">Low Scores</abbr>
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
                <td>{players.map(t =><tr>{t.bestScore}</tr>)}</td>
                <td>{players.map(c =><tr>{c.course}</tr>)}</td>
                <td>{players.map(d =><tr>{d.city}</tr>)}</td>
                <td>{players.map(e =><tr>{e.state}</tr>)}</td>
                
                </tbody>
            </table>
          </div>
        </div>
      </div>
       {/* <UserFooter /> */}
    </>
  );
}
export default LeaderBoards;
