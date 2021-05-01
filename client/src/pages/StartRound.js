import React, { useEffect, useState } from "react";
import UserNav from "../components/UserNav/index.js";
// import UserFooter from "../components/UserFooter/index.js"
import Scorecard from "../components/Scorecard/index.js";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase";
import axios from "axios";
function StartRound() {
  //array of states that user can pick from
  let states = [
    "",
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY",
  ];
  //array of # of holes that user can pick from
  let holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  //array of # of players that can be in a match
  let numOfPlayersOptions = [1, 2, 3, 4];
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        history.push("/");
      }
    });
  }, []);
  //state holding authenticated user
  const [user, setUser] = useState(false);
  const [startRound, setStartRound] = useState(false);
  //state holding details of match
  const [inputs, setInputs] = useState({
    numOfHoles: 18,
    numOfPlayers: 1,
    playerNameArr: [],
    playerIdArr: [],
    courseName: "",
    courseState: "",
    courseCity: "",
    roundId: 0,
  });
  //state holding names of players
  const [playerName, setPlayerName] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
  });
  let history = useHistory();
  let numOfPlayersInt = parseInt(inputs.numOfPlayers);
  let numOfPlayersArr = [...Array(numOfPlayersInt)].map((_, i) => i);
  // const handleCourse = (e) => {
  //     e.preventDefault()
  //     var newInfo = inputs
  //     newInfo[e.target.name] = e.target.value
  //     setInputs({ ...inputs,  })
  // }
  const handleInputs = (e) => {
    e.preventDefault();
    var clone = inputs;
    clone[e.target.name] = e.target.value;
    setInputs({ ...clone });
  };
  const handlePlayerNames = (e) => {
    e.preventDefault();
    var nameClone = playerName;
    nameClone[e.target.name] = e.target.value;
    setPlayerName({
      ...nameClone,
    });
  };
  const handleStartRound = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      data: {
        ownerId: user.uid,
        courseName: inputs.courseName,
        courseCity: inputs.courseCity,
        courseState: inputs.courseState,
      },
      url: "/api/round",
    }).then((res) => {
      let updatedPlayerNameArr = [...inputs.playerNameArr];
      //adding player names to inputs state
      for (let i = 1; i < 5; i++) {
        let currentPlayer = "player" + i;
        let currentPlayerName = playerName[currentPlayer];
        if (currentPlayerName != "") {
          updatedPlayerNameArr.push(currentPlayerName);
        }
      }
      // setInputs({
      //     ...inputs, playerNameArr: updatedPlayerNameArr, roundId: res.data.id
      // })
      let playerIdArrTemp = [];
      // let newRoundId = res.data.id
      // setInputs({
      //     ...inputs, roundId: newRoundId
      // })
      for (let i = 0; i < updatedPlayerNameArr.length; i++) {
        const element = updatedPlayerNameArr[i];
        axios({
          method: "post",
          data: {
            playerName: element,
            roundId: res.data.id,
          },
          url: "/api/scores",
        }).then((result) => {
          playerIdArrTemp.push(result.data.id);
          setInputs({
            ...inputs,
            playerIdArr: playerIdArrTemp,
            playerNameArr: updatedPlayerNameArr,
            roundId: res.data.id,
          });
        });
      }
    });
    setStartRound(true);
  };
  return (
    <>
      <UserNav />
      <div class="box is-mobile has-background-success">
        <div class="columns is-centered is-mobile">
          {!startRound && (
            <form className="field" onSubmit={handleStartRound}>
              <div className="field is-horizontal">
                <div className="field column is-2">
                  <label className="label">City</label>
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="City"
                      name="courseCity"
                      onChange={handleInputs}
                    />
                  </p>
                </div>
                <div className="field column is-2">
                  <label className="label">State</label>
                  <p className="control has-icons-left">
                    <span className="select">
                      <select name="courseState" onChange={handleInputs}>
                        {states.map((each) => (
                          <option valeue={each}>{each}</option>
                        ))}
                      </select>
                    </span>
                  </p>
                </div>
                <div className="field column is-2">
                  <label className="label">Course</label>
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Course Name"
                      name="courseName"
                      onChange={handleInputs}
                    />
                  </p>
                </div>
                <div className="field column is-2">
                  <label className="label">Number of Players</label>
                  <p className="control has-icons-left">
                    <span className="select">
                      <select name="numOfPlayers" onChange={handleInputs}>
                        {numOfPlayersOptions.map((each) => (
                          <option value={each}>{each}</option>
                        ))}
                      </select>
                    </span>
                  </p>
                </div>
              </div>
              <div className="field column is-2">
                <p className="control has-icons-left"></p>
                {numOfPlayersArr.map((each) => (
                  <p className="control has-icons-left">
                    <label className="label">Player {each + 1}: </label>
                    <input
                      className="input"
                      type="text"
                      placeholder="Name"
                      name={"player" + (each + 1)}
                      onChange={handlePlayerNames}
                    />
                  </p>
                ))}
              </div>
              <button className="button has-background-white-bis">
                Start Round
              </button>
            </form>
          )}
          {startRound && <Scorecard details={inputs} />}
        </div>
      </div>
      {/* <UserFooter /> */}
    </>
  );
}
export default StartRound;
