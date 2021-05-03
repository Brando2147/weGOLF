import React, { useEffect, useState } from "react";
import UserNav from "../components/UserNav/index.js";
// import UserFooter from "../components/UserFooter/index.js"
import Scorecard from "../components/Scorecard/index.js";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import axios from "axios";
import loadingImg from "../utils/images/Spin-1s-200px.gif"

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
  // let holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  //array of # of players that can be in a match
  let numOfPlayersOptions = [1, 2, 3, 4];
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        history.push("/");
        setUser(false)
      }
    });
  }, []);

  const [showLoader, setShowLoader] = useState(false);

  //state holding authenticatd user
  const [user, setUser] = useState(false);

  //state holding boolean on whether the match has started or not
  const [startRound, setStartRound] = useState(false);

  const [displaySorecard, setDisplayScorecard] = useState(false)
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

  //state holding the responsiveness of the input fields for player names
  const [playerNameStyle, setPlayerNameStyle] = useState(
    "field column is-3-fullhd is-offset-4-fullhd is-3-widescreen is-offset-4-widescreen is-4-desktop is-offset-4-desktop is-4-tablet is-offset-3-tablet is-6-mobile is-offset-1-mobile"
  )

  let history = useHistory();

  let numOfPlayersInt = parseInt(inputs.numOfPlayers);
  let numOfPlayersArr = [...Array(numOfPlayersInt)].map((_, i) => i);

  const handleInputs = (e) => {
    e.preventDefault();
    var clone = inputs;
    clone[e.target.name] = e.target.value;
    setInputs({ ...clone });
  };

  const handleNumberOfPlayers = (e) => {
    e.preventDefault();
    var clone = inputs;
    clone[e.target.name] = parseInt(e.target.value);
    setInputs({ ...clone });

    if (inputs.numOfPlayers === 1) {
      setPlayerNameStyle(" field column is-3-fullhd is-3-widescreen is-3-desktop  is-4-tablet  is-6-mobile ")
    } else if (inputs.numOfPlayers === 2) {
      setPlayerNameStyle("field column is-3-fullhd if-offset-2-fullhd is-3-widescreen is-offset-2-widescreen is-3-desktop is-offset-2-desktop is-3-tablet is-offset-2-tablet is-6-mobile is-offset-1-mobile")
    } else if (inputs.numOfPlayers === 3) {
      setPlayerNameStyle("column")
    } else if (inputs.numOfPlayers === 4) {
      setPlayerNameStyle("column")
    }
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
    setShowLoader(true)
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
        if (currentPlayerName !== "") {
          updatedPlayerNameArr.push(currentPlayerName);
        }
      }

      let playerIdArrTemp = [];

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
          setShowLoader(false)
          setDisplayScorecard(true)
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
      <div className="column has-text-centered">
        <h1 className="title is-1">Match</h1>
      </div>
      <div className="roundInfoInput container box">
        {!startRound &&
          <form className="field" onSubmit={handleStartRound}>
            <div className="field is-horizontal columns">
              <div className="field column is-3-fullhd if-offset-4-fullhd is-3-widescreen is-offset-4-widescreen
                is-3-desktop is-offset-4-desktop is-4-tablet is-offset-3-tablet is-6-mobile is-offset-1-mobile">
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
              <div className="field column is-2-fullhd is-2-widescreen is-2-desktop is-2-tablet is-4-mobile is-offset-1-mobile">
                <label className="label">State</label>
                <p className="control has-icons-left">
                  <span className="select">
                    <select name="courseState" onChange={handleInputs}>
                      {states.map((each) => (
                        <option key={each} valeue={each}>{each}</option>
                      ))}
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="field column is-3-fullhd if-offset-4-fullhd is-3-widescreen is-offset-4-widescreen
                is-3-desktop is-offset-4-desktop is-4-tablet is-offset-3-tablet is-6-mobile is-offset-1-mobile">
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
              <div className="field column is-3-fullhd is-3-widescreen is-3-desktop is-3-tablet is-5-mobile is-offset-1-mobile">
                <label className="label">Number of Players</label>
                <p className="control has-icons-left">
                  <span className="select">
                    <select name="numOfPlayers" onChange={handleNumberOfPlayers}>
                      {numOfPlayersOptions.map((each) => (
                        <option key={each} value={each}>{each}</option>
                      ))}
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="columns">
              {numOfPlayersArr.map((each) => (
                <div key={each} className={playerNameStyle}>

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
                </div>
              ))}
            </div>
            <div className="column has-text-centered">
              <button className="button is-medium is-rounded is-info">
                Start Match
              </button>
            </div>
          </form>
        }
        {startRound && <Scorecard details={inputs} loadingDetails={displaySorecard} />}
        {showLoader &&
          <div className="column center has-text-centered">
            <img src={loadingImg} alt="loading spinner"></img>
          </div>
        }
      </div>
    </>
  );
}

export default StartRound;

