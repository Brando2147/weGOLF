import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/index.js"
import NonUserNav from "../components/NonUserNav/index.js"
import Signup from "./Signup.js"


function Login() {
    return (
        <>
            <NonUserNav />
            <main className="container">
                <div className="column is-4 is-offset-7">
                    <h1>Login</h1>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="email" placeholder="Email" id="email-input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" id="password-input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <button className="button is-success">Login</button>

                    <br></br>
                    <p>Or sign up <Link to="/signup">here</Link></p>

                </div>

            </main>
            <Footer />
        </>
    )
}

export default Login;