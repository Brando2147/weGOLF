import React from "react";
import { Link } from "react-router-dom";
import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js"
import Home from "../pages/Home.js";

function Directory() {
    return (
        <>
        <UserNav />

        <UserFooter />
    </>
    )
}

export default Directory;