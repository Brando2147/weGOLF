import React, { useState } from "react";
import axios from 'axios';
import "./style.css"


const PlayerScoreCard = (props) => {
    console.log(props)
    // playerId={each} roundId={props.roundInfo.roundId} holes={numOfHoles}

    let numOfHoles = parseInt(props.holes);
    let numOfHolesArr = [...Array(numOfHoles)].map((_, i) => i + 1);

    // console.log(props)
    const [total, setTotal] = useState(0)
    const [state, setState] = useState({
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
        hole18: 0
    })

    var totalScore = function() {

        let _total = Object.values(state).reduce((prev, next) => prev + next, 0)
     setTotal(_total)
    }

    const handleBlur = (e) => {
        console.log(state)
        axios({
            method: 'PUT',
            data: state,
            url: `/api/scores/${props.playerID}/${props.roundId}/`
        }).then(
            console.log(state)
        )
    }

     const handleChange = event => {
         event.preventDefault();
        event.persist();
        var clone = state;
        clone[event.target.name] = parseInt(event.target.value);
        setState({ ...clone})
        totalScore();
    }
      


    return (
        <>
            <tr>
                <td>{props.playerName}</td>
                

                {numOfHolesArr.map((each, index) => (
                    <>
                        <td hole={'hole' + each}>

                            <input className="scoreInput" playerName={props.playerName} name={"hole" + (index + 1)} input="text" onBlur={handleBlur} onChange={handleChange}>
                            </input>
                        </td>
                    </>
                ))}
                <td>
                {total}
                </td>
            </tr>
        </>
    )

}
export default PlayerScoreCard
