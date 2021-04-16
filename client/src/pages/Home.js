import React from "react";
import { Link } from "react-router-dom";
import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js"
import NewsFeed from "../components/NewsFeed/index.js"

function Home() {
    return (
        <>
            <UserNav />
            {/* <NewsFeed /> */}

            <UserFooter />
        </>
    )
}

export default Home;