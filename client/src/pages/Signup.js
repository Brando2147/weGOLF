import React from "react";
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
                        <p>Or log in<a href="/">here</a></p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Signup;