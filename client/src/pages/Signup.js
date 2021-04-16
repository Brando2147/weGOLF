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

                                <input type="email" id="email-input" onChange={e => setRegisterUsername(e.target.value)} ></input>
                                <lable for="email">Email</lable>
                            </div>
                            <div>
                                <input type="password" id="password-input" onChange={e => setRegisterPassword(e.target.value)}></input>
                                <lable for="password">Password</lable>
                            </div>
                            <button type="submit" name="action" onClick={register} onClick={goToHome}>Sign Up</button>
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