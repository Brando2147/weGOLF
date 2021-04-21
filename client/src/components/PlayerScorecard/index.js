import React, { useState } from "react";
import axios from 'axios';


const PlayerScoreCard = (props) => {
    // playerId={each} roundId={props.roundInfo.roundId} holes={numOfHoles}
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
    })

    const handleBlur = (e) => {
        axios({
            method: 'PUT',
            data: state,
            url: `/api/scores/${props.playerId}/${props.roundId}`
        })
    }


    console.log(props)
    return (
        <>
            <tr>
                {props.holes.map((each, index) => (

                    <td><input holeNumber={"hole" + index + 1} input="text" onBlur={handleBlur} onChange={(value) => setState({ ...state, ["hole" + (index + 1)]: value })}>
                    </input></td>


                ))}
            </tr>
        </>
    )

}
export default PlayerScoreCard
