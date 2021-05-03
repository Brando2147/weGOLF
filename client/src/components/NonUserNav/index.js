import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function NonUserNav() {
    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    weGOLF
                </Link>
            </div>
        </nav >
    )
}
export default NonUserNav