import React, { useEffect, useState } from "react";
import axios from "axios";
import firebase from "../../firebase";
import "./style.css";

// import PlayerScoreCard from "../PlayerScorecard";

function CurrentMatch() {
  const [user, setUser] = useState(false);
  const [matchData, setMatchData] = useState([])
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        getCurrentRound(user);
      } else {
      }
    });
  }, []);

  const getCurrentRound = function (_user) {
    axios({
      method: "GET",
      url: `/api/current/${_user.uid}/`,
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
            playerId: md.id,
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
      console.log(matchData);
    });
  };

  const handleBlur = (playerId, roundId) => {
    console.log(matchData);
    axios({
      method: "PUT",
      data: matchData.find(player => player.playerId === playerId),
      url: `/api/scores/${playerId}/${roundId}/`,
    })
      .then((results) => {
        console.log(results);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (value, playerId, holeId) => {
    setMatchData(
      matchData.map((player) => {
        if (player.playerId !== playerId) return player;
        player[holeId] = parseInt(value);
        return player;
      })
    );
  };

  let numOfHolesArr = [...Array(18)].map((_, i) => i + 1);

  return (
    <>

      <div className="table-container">
        { matchData.length > 0 ?
        <table className="table is-bordered is-narrow is-hoverable">
          <thead>
            <tr>
              <th></th>
              {numOfHolesArr.map((each, index) => (
                <td hole={"hole" + each} key={"hole" + each} className="">
                  {"Hole " + each}
                </td>
              ))}
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {matchData.map((array, index) => (
              <tr>
                <td>{array.playerName}</td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole1"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole1}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole2"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole2}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole3"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole3}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole4"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole4}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole5"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole5}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole6"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole6}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole7"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole7}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole8"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole8}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole9"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole9}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole10"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole10}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole11"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole11}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole12"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole12}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole13"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole13}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole14"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole14}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole15"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole15}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole16"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole16}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole17"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole17}
                  ></input>
                </td>
                <td>
                  <input
                    className="scoreInput"
                    name={"hole18"}
                    input="text"
                    onBlur={handleBlur(array.playerId, array.roundId)}
                    onChange={(event) => {
                      event.preventDefault();
                      event.persist();
                      handleChange(
                        event.target.value,
                        array.playerId,
                        event.target.name
                      );
                    }}
                    playerid={array.playerId}
                    Value={array.hole18}
                  ></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        :<div>LOADING IMAGE HERE</div>}
        <button onClick="">End Round</button>
     </div>
    </>
  );
}

export default CurrentMatch;
