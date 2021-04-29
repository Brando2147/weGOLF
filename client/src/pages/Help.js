import React from "react";
import { Link } from "react-router-dom";
// import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js"
import NewsFeed from "../components/NewsFeed/index.js"
import Home from "../pages/Home.js";
import HelpIMG from "../utils/images/weGOLFHelp.png"


function Help() {
    return (
        <>
            <UserNav />
            <img src={HelpIMG} alt="Help image" />
            {/* <UserFooter /> */}
        </>
    )
}

export default Help;