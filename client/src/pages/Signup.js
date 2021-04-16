import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/index.js"
import NonUserNav from "../components/NonUserNav/index.js"
import Home from "../pages/Home.js"
import axios from 'axios';


function Signup() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const register = () => {
        axios({
            method: "post",
            data: {
                email: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: "/api/signup",
        }).then((res) => console.log(res));
    };

    function goToHome() {
        window.location.replace("/home", function (data) {

        })
    }


    return (
        <>
            <NonUserNav />

            <main className="container">
                <div className="column is-4 is-offset-7">
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
                            <input className="input" type="email" placeholder="Email" id="email-input" onChange={e => setRegisterUsername(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" id="password-input" onChange={e => setRegisterPassword(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <button className="button is-success" type="submit" name="action" onClick={register} onClick={goToHome}>Sign Up</button>

                    <br></br>
                    <p>Or sign up <Link to="/">here</Link></p>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default Signup;