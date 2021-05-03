import React from "react"
import RecentMatches from "../components/RecentMatches/index.js";
import UserNav from "../components/UserNav/index.js"

function MatchHistory() {
    return (
        <>
            <UserNav />
            <div className="column has-text-centered">
                <h1 className="title is-1">Recent Matches</h1>
            </div>
            <div className="roundInfoInput container box">
                <RecentMatches />
            </div>
        </>
    )
}

export default MatchHistory;