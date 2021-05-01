import React from "react"
import RecentMatches from "../components/RecentMatches/index.js";

import UserNav from "../components/UserNav/index.js"

function MatchHistory(params) {
    return (
        <>
            <UserNav />
            <h2>Recent Matches</h2>
            <RecentMatches />

        </>
    )
}

export default MatchHistory;