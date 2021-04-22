import React, { useState } from "react";
import PlayerMatchHistory from "../PlayerMatchHistory/index.js";
import axios from "axios";
import "./style.css";

//State data to retrieve from /api/recent/
const [state, setState] = useState({
  playerName: "",
  createdAt: "",
  courseName: "",
  courseCity: "",
  courseState: "",
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
});


// GET call to retrieve recent matches from database
axios({
  method: "GET",
  data: state,
  url: `/api/recent/${props.user.uid}/`,
});

// Recent matches component copied from PlayerScoreCard component
function RecentMatches() {
  let numOfHoles = parseInt(props.details.numOfHoles);
  let numOfHolesArr = [...Array(numOfHoles)].map((_, i) => i + 1);
console.log(props)
  return (
    <>
      <div className="table-container">
        <table className="table is-bordered is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Player/Hole</th>
              {numOfHolesArr.map((each, index) => (
                <td hole={"hole" + each} key={"hole" + each} className="">
                  {each}
                </td>
              ))}
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {props.details.playerNameArr.map((each, index) => {
              return (
                <PlayerScoreCard
                  playerName={each}
                  player={"player" + (index + 1)}
                  playerID={props.details.playerIdArr[index]}
                  roundId={props.details.roundId}
                  holes={props.details.numOfHoles}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}


export default RecentMatches;
