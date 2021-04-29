
import { Link, Redirect, useHistory } from "react-router-dom";

import React, { useState } from "react";
import PlayerScoreCard from "../PlayerScorecard/index.js";
import axios from "axios";

// const ScoreCard = (props) => {
//   const { roundId, players = [], holes = [] } = props
//   return (
//     players.map(player => <PlayerScoreCard playerId={player} roundId={roundid} holes={player.holes} />)
//   )
// }

function Scorecard(props) {
  const updateComplete = function () {
    axios({
      method: "PUT",
      data: {
        isComplete: 1,
      },
      url: `/api/round/${props.details.roundId}`,
    }).then((res) => {
      console.log(res);
    });
  };

  // console.log(props);
  // console.log(props.details)

  let numOfHoles = parseInt(props.details.numOfHoles);
  let numOfHolesArr = [...Array(numOfHoles)].map((_, i) => i + 1);

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

        <Link to="/home"><button className="button has-background-danger" onClick={updateComplete}>End Round</button></Link>


        <button
          className="button has-background-danger"
          onClick={updateComplete}
        >
          End Round
        </button>

      </div>

      {/* <p>
        Course Name: {props.details.roundCourseName} | Location:{" "}
        {props.details.roundCity}, {props.details.roundState}{" "}
        {props.details.RoundId}
      </p>
      <div className="table-container container column is-10">
        <table className="table is-bordered is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Player/Hole</th>
              {numOfHolesArr.map((each, index) => (
                <td id={"hole" + each} className="">
                  {each}
                </td>
              ))}
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {props.details.playerNameArr.map((playerName, i) => (
              <tr id={playerName} player={"player" + (i + 1)} key={playerName}>
                <th id={playerName} player={"player" + (i + 1)}>
                  {playerName}
                </th>
                {numOfHolesArr.map((each, index) => (
                  <td
                    id={playerName}
                    hole={"hole" + each}
                    player={"player" + (i + 1)}
                    key={each}
                    contentEditable="true"
                  ></td>
                ))}
                <td id={playerName + "Total"}></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button>Suspend Round</button>
        <button>End Round</button>
      </div> */}
    </>
  );
}

export default Scorecard;
