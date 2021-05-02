import { Link, Redirect, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PlayerScoreCard from "../PlayerScorecard/index.js";
import axios from "axios";
import "./style.css"

function Scorecard(props) {
  const [players, setPlayers] = useState([]);
  const [roundId, setRoundId] = useState();

  useEffect(() => {
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

  // Function to calculate total score from player score card
  var totalScore = function (scores) {
    let _total = Object.values(scores).reduce((prev, next) => prev + next, 0);
    return _total;
  };

  // Function to send the total when the round is ended
  const handleEndRound = (event) => {
    event.preventDefault();
    for (let i = 0; i < players.length; i++) {
      const element = players[i];
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
      <div className="table-container column is-centered has-text-centered">

        <table className="scoreCardTable table is-bordered is-narrow is-hoverable">
          {props.loadingDetails &&
            <>
              <caption>
                Course Name: <strong>{props.details.courseName}</strong> | Location:
          <strong>{props.details.courseCity}, {props.details.courseState}</strong>
              </caption>
              <thead>
                <tr className="tableHeader">
                  <th></th>
                  {numOfHolesArr.map((each, index) => (
                    <td hole={"hole" + each} key={"hole" + each} className="">
                      {each}
                    </td>
                  ))}
                  <td>Total</td>
                </tr>
              </thead></>}
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
          {props.loadingDetails &&
            <div className="column has-text-centered">
              <button
                className="button is-medium is-rounded is-danger"
                onClick={handleEndRound}
              >
                End Round
          </button>
            </div>}
        </Link>
      </div>
    </>
  );
}

export default Scorecard;
