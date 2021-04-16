import React, { useState } from "react";
import Footer from "../components/Footer/index.js";
import NonUserNav from "../components/NonUserNav/index.js";
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
    return (
        <>
            <NonUserNav />
            <main>
                <div>
                    <div className="signup-window">
                        <h2>Sign Up</h2>
                        <form className="Signup">
                            <div>
                                <input type="email" id="email-input" onChange={e => setRegisterUsername(e.target.value)} ></input>
                                <lable for="email">Email</lable>
                            </div>
                            <div>
                                <input type="password" id="password-input" onChange={e => setRegisterPassword(e.target.value)}></input>
                                <lable for="password">Password</lable>
                            </div>
                            <button type="submit" name="action" onClick={register}>Sign Up</button>
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