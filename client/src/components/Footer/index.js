import React from "react";
import "./style.css"

function Footer() {
    return (
        <footer className="footer nonUserFooter">
            <div className="container content">
                <strong className="footerTitle">Collaborators</strong>
                <p>
                    <a href="https://github.com/abgabbard" target="_blank" rel="noopener noreferrer">Andrew Gabbard</a>
                    &nbsp;| <a href="https://github.com/Brando2147" target="_blank" rel="noopener noreferrer">Brandon Dana</a>
                    &nbsp;| <a href="https://github.com/JAA459" target="_blank" rel="noopener noreferrer">Joshua Arroyo</a>
                    &nbsp;| <a href="https://github.com/martinmondaca" target="_blank" rel="noopener noreferrer">Martin Mondaca</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;