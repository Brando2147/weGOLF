import React from "react";
import "./style.css"

function UserFooter() {
    return (
        <footer className="footer">
            <div className="container">
                <h4>Collaborators</h4>
                <p>
                    <a href="https://github.com/abgabbard" target="_blank" rel="noreferrer">Andrew Gabbard</a>
                    | <a href="https://github.com/Brando2147" target="_blank" rel="noreferrer">Brandon Dana</a> |
                            <a href="https://github.com/JAA459" target="_blank" rel="noreferrer">Joshua Arroyo</a> |
                            <a href="https://github.com/martinmondaca" target="_blank" rel="noreferrer">Martin Mondaca</a>
                </p>
                <hr />
                <a href="https://github.com/Brando2147/weGOLF" target="_blank" className="fab fa-github fa-3x"></a>
            </div>
        </footer>
    )

}

export default UserFooter;