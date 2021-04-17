import React from "react"

function Scorecard(props) {



    console.log(props.details)
    console.log(typeof parseInt(props.details.numOfHoles))
    let numOfHoles = parseInt(props.details.numOfHoles)
    console.log(numOfHoles)
    let numOfHolesArr = [...Array(numOfHoles)].map((_, i) => i);
    console.log(numOfHolesArr)

    let numOfPlayers = parseInt(props.details.numOfPlayers)
    console.log(numOfPlayers)
    let numOfPlayersArr = [...Array(numOfPlayers)].map((_, i) => i);
    console.log(numOfPlayersArr)




    return (
        <>

            <div className="table-container container column is-10">

                <table className="table is-bordered is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Player/Hole</th>
                            {numOfHolesArr.map(each => (

                                <td className="">{each + 1}</td>
                            )
                            )}

                        </tr>
                    </thead>
                    <tbody>
                        {numOfPlayersArr.map(each => (
                            <tr>
                                <th>{each}</th>
                                {numOfHolesArr.map(each => (

                                    <td contentEditable="true"></td>
                                )
                                )}
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )

}

export default Scorecard