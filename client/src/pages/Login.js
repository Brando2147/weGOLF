import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase"
import "./style.css"
import NonUserNav from "../components/NonUserNav/index.js"

function Login() {
    const [inputs, setInputs] = useState({})
    const [errorMessage, setErrorMessage] = useState("")

    const handleInputs = (e) => {
        var clone = inputs
        clone[e.target.name] = e.target.value
        setInputs({ ...clone })
    }

    const handleLoginInFormSubmit = (e) => {
        e.preventDefault()

        firebase.auth().signInWithEmailAndPassword(inputs.logInEmail, inputs.logInPassword)
            .then((userCredential) => {
                // Signed in 
                // var user = userCredential.user;
                window.location.href = "/home"
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                setErrorMessage(errorMessage)
            });
    }

    return (
        <>
            <NonUserNav />
            <main className="container">
                <form className="box column is-4-fullhd is-offset-4-fullhd is-4-widescreen is-offset-4-widescreen 
                is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile"
                    onSubmit={handleLoginInFormSubmit}>
                    <h1>Login</h1>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="email" placeholder="Email" id="email-input" name="logInEmail" onChange={handleInputs} required />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" id="password-input" name="logInPassword" onChange={handleInputs} required />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="errorMessage message is-danger">
                        {errorMessage}
                    </div>

                    <button className="loginButton button is-success">Login</button>
                    <p>
                        Or sign up <Link to="/signup">here</Link>
                    </p>
                </form>
            </main>
        </>
    )
};

export default Login;