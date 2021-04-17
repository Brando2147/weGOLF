import React, { useEffect, useState } from "react"
import UserNav from "../components/UserNav/index.js"
import Scorecard from "../components/Scorecard/index.js"
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase"

function StartRound() {
    let states = ["", "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY",
        "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR",
        "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]

    let holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

    useEffect(() => {
        console.log('happens');
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user.uid);
                setUser(user)
                setInputs({
                    ...inputs, playerNameArr: [{ "player1": user.email }],
                })
                console.log(user)
            } else {
                console.log('user is not signed in');

                history.push("/")
            }
        })
    }, [])

    const [user, setUser] = useState(false)



    const [inputs, setInputs] = useState({
        numOfHoles: 1,
        numOfPlayers: 1,
        playerNameArr: [{ "player1": userEmail }],
        roundState: ""
    })

    const [playerName, setPlayerName] = useState({



    })

    let history = useHistory();



    console.log(inputs)

    let numOfPlayers = parseInt(inputs.numOfPlayers)
    console.log(numOfPlayers)
    let numOfPlayersArr = [...Array(numOfPlayers)].map((_, i) => i);
    console.log(numOfPlayersArr)

    const handleInputs = (e) => {
        e.preventDefault()
        var clone = inputs
        clone[e.target.name] = e.target.value
        setInputs({ ...clone })
        console.log(clone)
    }

    const handlePlayerNames = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        console.log(e.target.value)

        inputs.playerNameArr.push({ [e.target.name]: e.target.value })
        for (let index = 0; index < inputs.playerNameArr.length; index++) {
            if (inputs.playerNameArr[index] == e.target.name) {
                console.log("hello")
            }
        }


        console.log(inputs.playerNameArr)

        // if (inputs.playerNameArr[e.target.name]) {
        //     console.log("new player")
        // } else {
        //     inputs.playerNameArr.push({ [e.target.name]: e.target.value })
        //     console.log(inputs.playerNameArr)
        // }

    }

    const handleStartRound = () => {

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
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3"> 3</option>
                                    <option value="4">4</option>
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
                            Player 1: {user.email}
                        </p>
                        {
                            numOfPlayersArr.map(each => (
                                <p className="control has-icons-left">
                                    <input className="input" type="text" placeholder={"Player" + " " + (each + 2)} name={"Player" + (each + 2)} onChange={handlePlayerNames} />
                                </p>
                            ))
                        }
                    </div>


                    <button className="button is-success">Start Round</button>

                </form>
            </div>

            <Scorecard details={inputs} />
        </>
    )

}

export default StartRound;