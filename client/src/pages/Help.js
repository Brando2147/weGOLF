import React from "react";
import UserNav from "../components/UserNav/index.js"
import HelpIMG from "../utils/images/weGOLFHelp.png"

function Help() {
    return (
        <>
            <UserNav />
            <div className="column has-text-centered">
                <h1 className="title is-1">Help</h1>
            </div>
            <div className="column is-centered has-text-centered">
                <img src={HelpIMG} alt="app walkthrough" width="750px" />
            </div>
        </>
    )
}

export default Help;