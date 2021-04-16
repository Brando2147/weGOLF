import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/index.js"
import NonUserNav from "../components/NonUserNav/index.js"


function Signup() {
    return (
        <>
            <NonUserNav />
            <main>
                <div>
                    <div className="signup-window">
                        <h2>Sign Up</h2>
                        <form className="Signup">
                            <div>
                                <input type="firstName" id="firstName-input"></input>
                                <lable for="firstName">First name</lable>
                            </div>
                            <div>
                                <input type="email" id="email-input"></input>
                                <lable for="email">Email</lable>
                            </div>
                            <div>
                                <input type="password" id="password-input"></input>
                                <lable for="password">Password</lable>
                            </div>
                            <button type="submit" name="action">Sign Up</button>
                        </form>
                        <br></br>
                        <p>Or log in <Link to="/">here</Link></p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Signup;