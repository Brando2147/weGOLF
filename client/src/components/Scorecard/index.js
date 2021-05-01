import { Link, Redirect, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PlayerScoreCard from "../PlayerScorecard/index.js";
import axios from "axios";

// const ScoreCard = (props) => {
//   const { roundId, players = [], holes = [] } = props
//   return (
//     players.map(player => <PlayerScoreCard playerId={player} roundId={roundid} holes={player.holes} />)
//   )
// }

function Scorecard(props) {
  const [players, setPlayers] = useState([]);
  const [roundId, setRoundId] = useState();

  useEffect(() => {
    console.log(props.details.playerIdArr);
    const playersArr = props.details.playerIdArr.map((playerId) => {
      return {
        playerId,
        score: {
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
      };
    });
    setPlayers(playersArr);
    setRoundId(props.details.roundId);
  }, [props.details]);

  // Function call to update status of round to completed
  const updateComplete = function () {
    axios({
      method: "PUT",
      data: {
        isComplete: 1,
      },
      url: `/api/round/${roundId}`,
    }).then((res) => {
      console.log(res);
    });
  };

  console.log(props.details.roundId);

  // Function to calculate total score from player score card
  var totalScore = function (scores) {
    let _total = Object.values(scores).reduce((prev, next) => prev + next, 0);
    return _total;
  };

  // Function to send the total when the round is ended
  const handleEndRound = (event) => {
    // event.preventDefault();
    for (let i = 0; i < players.length; i++) {
      const element = players[i];
      console.log(element.playerId);

      axios({
        method: "PUT",
        data: { Total: totalScore(element.score) },
        url: `/api/addTotal/${element.playerId}/${roundId}`,
      }).then((response) => console.log(response));
    }
    updateComplete();
  };

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
                  setPlayers={setPlayers}
                  index={index}
                  players={players}
                />
              );
            })}
          </tbody>
        </table>

        <Link to="/home">
          <button
            className="button has-background-danger"
            onClick={handleEndRound}
          >
            End Round
          </button>
        </Link>
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
