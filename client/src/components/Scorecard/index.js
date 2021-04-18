import React from "react"

function Scorecard(props) {



    let numOfHoles = parseInt(props.details.numOfHoles)
    let numOfHolesArr = [...Array(numOfHoles)].map((_, i) => i + 1);

    // let numOfPlayers = parseInt(props.details.numOfPlayers)
    // let numOfPlayersArr = [...Array(numOfPlayers)].map((_, i) => i);

    // console.log(props.details.playerNameArr)


    return (
        <>

            <div className="table-container container column is-10">

                <table className="table is-bordered is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Player/Hole</th>
                            {numOfHolesArr.map((each, index) => (

                                <td id={"hole" + (each)} className="">{each}</td>
                            )
                            )}
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.details.playerNameArr.map((playerName, i) => (

                            <tr id={playerName} player={"player" + (i + 1)} key={playerName}>
                                <th id={playerName} player={"player" + (i + 1)}>{playerName}</th>
                                {numOfHolesArr.map((each, index) => (

                                    <td id={playerName} hole={"hole" + each} player={"player" + (i + 1)} key={each} contentEditable="true"></td>
                                )
                                )}
                                <td id={playerName + "Total"}></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <button>Suspend Round</button>
                <button>End Round</button>
            </div>
        </>
    )

}

export default Scorecard