import React, { useEffect, useState } from "react";
import axios from "axios";
import firebase from "../../firebase";
import "./style.css";
// import PlayerScoreCard from "../PlayerScorecard";

function CurrentMatch() {
  const [user, setUser] = useState(false);
  const [matchData, setMatchData] = useState([
    {
      playerName: "",
      courseName: "",
      courseCity: "",
      courseState: "",
      roundId: 0,
      hole1: 0,
      hole2: 0,
      hole3: 0,
      hole4: 0,
      hole5: 0,
      hole6: 0,
      hole7: 0,
      hole8: 0,
      hole9: 0,
      hole10: 0,
      hole11: 0,
      hole12: 0,
      hole13: 0,
      hole14: 0,
      hole15: 0,
      hole16: 0,
      hole17: 0,
      hole18: 0,
    },
  ]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
      }
    })
  }, []);

  const getCurrentRound = function () {
    axios({
      method: "GET",
      url: `/api/current/${user.uid}/`,
    }).then((results) => {
      console.log(results.data);
      setMatchData(
        results.data.map((md) => {
          return {
            playerName: md.playerName,
            courseName: md.courseName,
            courseCity: md.courseCity,
            courseState: md.courseState,
            roundId: md.roundId,
            hole1: md.hole1,
            hole2: md.hole2,
            hole3: md.hole3,
            hole4: md.hole4,
            hole5: md.hole5,
            hole6: md.hole6,
            hole7: md.hole7,
            hole8: md.hole8,
            hole9: md.hole9,
            hole10: md.hole10,
            hole11: md.hole11,
            hole12: md.hole12,
            hole13: md.hole13,
            hole14: md.hole14,
            hole15: md.hole15,
            hole16: md.hole16,
            hole17: md.hole17,
            hole18: md.hole18,
          };
        })
      );
      console.log(matchData)
    });
  };

  return <>
  <button onClick={getCurrentRound}>Get Current Round</button>
  
  <div className="table-container">
  <table className="table is-bordered is-narrow is-hoverable">
    <thead>
    <th>Player/Hole</th>
  <tbody>
    {matchData.map((array) => (
      
      <tr>
    <td>{array.playerName}</td>
    <td>{array.hole1}</td>
    <td>{array.hole2}</td>
    <td>{array.hole3}</td>
    <td>{array.hole4}</td>
    <td>{array.hole5}</td>
    <td>{array.hole6}</td>
    <td>{array.hole7}</td>
    <td>{array.hole8}</td>
    <td>{array.hole9}</td>
    <td>{array.hole10}</td>
    <td>{array.hole11}</td>
    <td>{array.hole12}</td>
    <td>{array.hole13}</td>
    <td>{array.hole14}</td>
    <td>{array.hole15}</td>
    <td>{array.hole16}</td>
    <td>{array.hole16}</td>
    <td>{array.hole17}</td>
    <td>{array.hole18}</td>
    </tr>
  ) )}
  </tbody>
  </thead>
  </table>
  </div>
  </>;
}

export default CurrentMatch;

