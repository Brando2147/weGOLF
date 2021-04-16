import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function UserNav() {
    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/home"><h3>weGolf</h3></Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>


            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link className="navbar-item is-tab" to="/newmatch">
                        <span className="icon is-small"><i className="fas fa-golf-ball" aria-hidden="true"></i></span>
                        <span> New Match</span>
                    </Link>

                    <Link className="navbar-item is-tab" to="/courses">
                        <span className="icon is-small"><i className="fas fa-flag" aria-hidden="true"></i></span>
                        <span>Courses</span>
                    </Link>

                    <Link className="navbar-item is-tab" to="/leaderboards">
                        <span className="icon is-small"><i className="fas fa-trophy" aria-hidden="true"></i></span>
                        <span>Leaderboards</span>
                    </Link>

                    <Link className="navbar-item is-tab" to="/myaccount">
                        <span className="icon is-small"><i className="fas fa-user" aria-hidden="true"></i></span>
                        <span>My Account</span>
                    </Link>

                    <Link className="navbar-item is-tab" to="/help">
                        <span className="icon is-small"><i className="fas fa-question" aria-hidden="true"></i></span>
                        <span>Help</span>
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default UserNav;