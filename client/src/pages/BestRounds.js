import UserNav from "../components/UserNav/index.js";
import React, { useState, useEffect } from "react";
import axios from "axios";

function BestRounds() {
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
        const leaderData = data.data;
        {/*
        setPlayers(leaderData.map(leadername => {
          return {
            playerName: leadername.playerName,
            rank: '1',
            best: '1',
            course: leadername.courseName,
            city: leadername.courseCity,
            state: leadername.courseState,
*/}
        setPlayers(leaderData.map(leadername => {
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
  return (
    <>
      <UserNav />
      <div className="column has-text-centered">
        <h1 className="title is-1">Best Rounds</h1>
      </div>
      <div className="roundInfoInput container box">
        <div className="row">
          <div className="column table-container">
            <table className="leaderboardTable table is-narrow is-striped is-bordered is-hoverable">

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

                <td>{players.map(t => <tr>{t.bestScore}</tr>)}</td>
                <td>{players.map(c => <tr>{c.course}</tr>)}</td>
                <td>{players.map(d => <tr>{d.city}</tr>)}</td>
                <td>{players.map(e => <tr>{e.state}</tr>)}</td>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestRounds;
