import React from "react";
import Footer from "../components/Footer/index.js"
import NonUserNav from "../components/NonUserNav/index.js"


function Login() {
    return (
        <>
            <NonUserNav />
            <main>
                <div>
                    <div className="login-window">
                        <h2>Login</h2>
                        <form className="Login">
                            <div>
                                <input type="email" id="email-input"></input>
                                <lable for="email">Email</lable>
                            </div>
                            <div>
                                <input type="password" id="password-input"></input>
                                <lable for="password">Password</lable>
                            </div>
                            <button type="submit" name="action">Login</button>
                        </form>
                        <br></br>
                        <p>Or sign up<a href="/signup">here</a></p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login;