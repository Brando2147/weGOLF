import React, { useEffect, useState } from "react"
import UserNav from "../components/UserNav/index.js"
import UserFooter from "../components/UserFooter/index.js"
import Scorecard from "../components/Scorecard/index.js"
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase"

function StartRound() {
    //array of states that user can pick from
    let states = ["", "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY",
        "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR",
        "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]


    //array of # of holes that user can pick from
    let holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

    //array of # of players that can be in a match
    let numOfPlayersOptions = [1, 2, 3, 4]


    useEffect(() => {
        console.log('happens');
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user)
                // setInputs({
                //     ...inputs, playerNameArr: [{ "player1": user.email }],
                // })
                // setPlayerName({
                //     ...playerName, "player1": user.email
                // })
            } else {
                history.push("/")
            }
        })
    }, [])

    //state holding authenticatd user
    const [user, setUser] = useState(false)

    //state holding details of match
    const [inputs, setInputs] = useState({
        numOfHoles: 1,
        numOfPlayers: 1,
        playerNameArr: [],
        roundState: ""
    })

    console.log(inputs)

    //state holding names of players
    const [playerName, setPlayerName] = useState({
        player1: "",
        player2: "",
        player3: "",
        player4: "",

    })

    let history = useHistory();

    let numOfPlayers = parseInt(inputs.numOfPlayers)
    let numOfPlayersArr = [...Array(numOfPlayers)].map((_, i) => i);

    const handleInputs = (e) => {
        e.preventDefault()
        var clone = inputs
        clone[e.target.name] = e.target.value
        setInputs({ ...clone })
        console.log(inputs)
    }

    const handlePlayerNames = (e) => {
        e.preventDefault()

        setPlayerName({
            ...playerName, [e.target.name]: e.target.value
        })
        console.log(playerName)
        console.log(playerName.playerNameArr)
    }

    const handleStartRound = (e) => {
        e.preventDefault()
        let playerNameArr = []
        for (let i = 1; i < 5; i++) {
            let currentPlayer = "player" + i
            let currentPlayerName = playerName[currentPlayer]
            console.log(currentPlayerName)
            if (currentPlayerName != "") {
                playerNameArr.push(currentPlayerName)
            }

        }

        // if (playerName.player1 != "") {
        //     playerNameArr.push(playerName.player1)
        // }
        // playerNameArr.push(playerName.player2)
        // playerNameArr.push(playerName.player3)
        // playerNameArr.push(playerName.player4)

        console.log(playerNameArr)
        setInputs({
            ...inputs, playerNameArr
        })
        console.log(inputs)

    }

    return (
        <>
            <UserNav />

            <div className="container " id="roundDetails">
                <form className="" onSubmit={handleStartRound}>
                    <div className="field column is-2">
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="City" name="roundCity" onChange={handleInputs} />
                        </p>
                    </div>
                    <div className="field column is-2">
                        <p className="control has-icons-left">
                            <span className="select">
                                <select name="roundState" onChange={handleInputs}>
                                    {states.map((each) =>
                                        <option valeue={each}>{each}</option>
                                    )}
                                </select>
                            </span>
                        </p>
                    </div>
                    <div className="field column is-2">
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="Course Name" name="roundCourseName" onChange={handleInputs} />
                        </p>
                    </div>

                    <div className="field column is-2">
                        <label className="label">Number of Players</label>
                        <p className="control has-icons-left">
                            <span className="select">
                                <select name="numOfPlayers" onChange={handleInputs}>
                                    {numOfPlayersOptions.map((each) =>
                                        <option value={each}>{each}</option>
                                    )}

                                </select>
                            </span>
                        </p>
                    </div>

                    <div className="field column is-2">
                        <label className="label">Number of Holes</label>
                        <p className="control has-icons-left">
                            <span className="select">
                                <select name="numOfHoles" onChange={handleInputs} >
                                    {holes.map((each) =>
                                        <option value={each}>{each}</option>)}
                                </select>
                            </span>
                        </p>
                    </div>

                    <div className="field column is-3">
                        <p className="control has-icons-left">
                        </p>
                        {
                            numOfPlayersArr.map(each => (
                                <p className="control has-icons-left">
                                    <label className="label">Player {each + 1}: </label>
                                    <input className="input" type="text" placeholder={"player" + " " + (each + 1)} name={"player" + (each + 1)} onChange={handlePlayerNames} />
                                </p>
                            ))
                        }
                    </div>
                    <button className="button is-success" onClick={handleStartRound}>Start Round</button>
                </form>
            </div>

            <Scorecard details={inputs} />
            <UserFooter />

        </>
    )
}

export default StartRound;