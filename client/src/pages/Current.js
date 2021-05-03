import React from "react"
import CurrentMatch from "../components/CurrentMatch/index.js";
import UserNav from "../components/UserNav/index.js"




function CurrentRound() {


    return (
        <>
            <UserNav />
            <div className="column has-text-centered">
                <h1 className="title is-1">Match</h1>
            </div>
            <div className="roundInfoInput container box">
                <CurrentMatch />
            </div>
        </>
    )
}

export default CurrentRound;
