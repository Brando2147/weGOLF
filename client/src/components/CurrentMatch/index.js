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
      playerId: 0,
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
    });
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

    // const handleBlur = (e) => {
    //   console.log(state);
    //   axios({
    //     method: "PUT",
    //     data: state,
    //     url: `/api/scores/${matchData.playerId}/${matchData.roundId}/`,
    //   });
    // };

    // const handleChange = (event) => {
    //   event.preventDefault();
    //   event.persist();
    //   var clone = state;
    //   clone[event.target.name] = parseInt(event.target.value);
    //   setState({ ...clone });
    //   totalScore();
    // };
  };

  let numOfHolesArr = [...Array(18)].map((_, i) => i + 1);

  return (
    <>
      <button onClick={getCurrentRound}>Get Current Round</button>

      <div className="table-container">
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
                {/* <td hole={"hole" + array}>
                  <input
                    className="scoreInput"
                    playerName={array.playerName}
                    name={"hole" + (index + 1)}
                    input="text"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    //  playerid={array.playerId}
                    ></input>
                </td> */}


                <td>{array.playerName}</td>
                
                <td>
                  <input
                    className="scoreInput"
                    name={"hole1"}
                    input="text"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                     playerid={array.playerId}
                     defaultValue={array.hole1}
                    ></input>
                </td>

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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CurrentMatch;
