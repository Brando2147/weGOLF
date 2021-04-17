import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase"
import Footer from "../components/Footer/index.js"
import NonUserNav from "../components/NonUserNav/index.js"
import Signup from "./Signup.js"


function Login() {
    const [inputs, setInputs] = useState({})

    const handleInputs = (e) => {
        var clone = inputs
        clone[e.target.name] = e.target.value
        setInputs({ ...clone })
        console.log(clone)
        console.log(inputs.logInEmail)
        console.log(inputs.logInPassword)
    }

    const handleLoginInFormSubmit = (e) => {
        e.preventDefault()
        console.log(inputs.logInEmail, inputs.logInPassword);

        firebase.auth().signInWithEmailAndPassword(inputs.logInEmail, inputs.logInPassword)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                window.location.href = "/home"
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <>
            <NonUserNav />
            <main className="container">
                <form className="box column is-5 is-offset-6" onSubmit={handleLoginInFormSubmit}>
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

                    <button className="button is-success">Login</button>

                    <br></br>
                    <p>Or sign up <Link to="/signup">here</Link></p>

                </form>

            </main>
            <Footer />
        </>
    )
}

export default Login;