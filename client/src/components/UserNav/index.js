import React from "react";
import { Link } from "react-router-dom";

function UserNav() {
    return (
        <nav>
            <Link to="/home">weGolf</Link>
            <div>
                <ul>
                    <li>
                        <Link to="newmatch">New Match</Link>
                    </li>
                    <li>
                        <Link to="courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="leaderboards">Leaderboards</Link>
                    </li>
                    <li>
                        <Link to="myaccount">My Account</Link>
                    </li>
                    <li>
                        <Link to="help">Help</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default UserNav;