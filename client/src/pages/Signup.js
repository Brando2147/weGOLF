import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/index.js"
import firebase from "../firebase"
import NonUserNav from "../components/NonUserNav/index.js"
import Home from "../pages/Home.js"
import axios from 'axios';


function Signup() {
    // const [registerUsername, setRegisterUsername] = useState("");
    // const [registerPassword, setRegisterPassword] = useState("");
    // const register = () => {

    //     axios({
    //         method: "post",
    //         data: {
    //             email: registerUsername,
    //             password: registerPassword
    //         },
    //         withCredentials: true,
    //         url: "/api/signup",
    //     }).then((res) => console.log(res));
    // };

    // function goToHome() {
    //     window.location.replace("/home", function (data) {

    //     })
    // }
    const [inputs, setInputs] = useState({})


    const handleInputs = (e) => {
        var clone = inputs
        clone[e.target.name] = e.target.value
        setInputs({ ...clone })
        console.log(inputs.createUserEmail);
        console.log(inputs.createUserPassword)
    }

    const handleSignUpFormSubmit = (e) => {
        e.preventDefault()
        console.log(inputs.createUserEmail, inputs.createUserPassword);

        firebase.auth().createUserWithEmailAndPassword(inputs.createUserEmail, inputs.createUserPassword)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;

                window.location.href = "/home"
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }

    return (
        <>
            {/* <NonUserNav /> */}

            <main className="container">
                <form className="box column is-5 is-offset-6" onSubmit={handleSignUpFormSubmit}>
                    <h1>Sign Up</h1>

                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="name" placeholder="First name" id="firstName-input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="email" placeholder="Email" id="email-input" name="createUserEmail" onChange={handleInputs} required />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" id="password-input" name="createUserPassword" onChange={handleInputs} required />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <button className="button is-success" type="submit" name="action">Sign Up</button>

                    <br></br>
                    <p>Or log in <Link to="/">here</Link></p>

                </form>
            </main>
            <Footer />
        </>
    )
}

export default Signup;