import React, { useState } from "react";
import axios from 'axios';
import "./style.css"


const PlayerScoreCard = (props) => {
    console.log(props)
    // playerId={each} roundId={props.roundInfo.roundId} holes={numOfHoles}

    let numOfHoles = parseInt(props.holes);
    let numOfHolesArr = [...Array(numOfHoles)].map((_, i) => i + 1);

    // console.log(props)
    const [state, setState] = useState({
        hole1: '',
        hole2: '',
        hole3: '',
        hole4: '',
        hole5: '',
        hole6: '',
        hole7: '',
        hole8: '',
        hole9: '',
        hole10: '',
        hole11: '',
        hole12: '',
        hole13: '',
        hole14: '',
        hole15: '',
        hole16: '',
        hole17: '',
        hole18: '',
        total: ''
    })

    const handleBlur = (e) => {
        axios({
            method: 'PUT',
            data: state,
            url: `/api/scores/${props.playerID}/${props.roundId}/`
        }).then(
            console.log(state)
        )
    }


    return (
        <>
            <tr>
                <td>{props.playerName}</td>

                {numOfHolesArr.map((each, index) => (
                    <>
                        <td hole={'hole' + each}>

                            <input className="scoreInput" playerName={props.playerName} holeNumber={"hole" + (index + 1)} input="text" onBlur={handleBlur} onChange={(value) => setState({ ...state, ["hole" + (index + 1)]: value })}>
                            </input>
                        </td>
                    </>
                ))}
                <td>
                    <input playerName={props.playerName} input="text" onChange={(value) => setState({ ...state, total: value })}></input>
                </td>
            </tr>
        </>
    )

}
export default PlayerScoreCard
