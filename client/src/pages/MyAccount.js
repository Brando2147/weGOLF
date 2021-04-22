import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js"
import NewsFeed from "../components/NewsFeed/index.js"
import Home from "../pages/Home.js";
import firebase from "../firebase";



function MyAccount() {
    const [currentUser, setCurrentUser] = useState(false)

    var auth = firebase.auth();

    var user = firebase.auth().currentUser;

    var userProvidedPassword = "";

    let history = useHistory();


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user)
            } else {

                history.push("/")
            }
        })
    }, [])

    const handleResetPassword = () => {
        auth.sendPasswordResetEmail(currentUser.email).then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    }

    const handleDeleteMyAccount = () => {
        handleReauthenticateUser()

        user.delete().then(function () {
            // User deleted.
        }).catch(function (error) {
            // An error happened.
        });
    }

    const handleReauthenticateUser = () => {
        userProvidedPassword = prompt("Please provide your password")

        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            userProvidedPassword
        );

        user.reauthenticateWithCredential(credential).then(function () {
            // User re-authenticated.
        }).catch(function (error) {
            // An error happened.
        });
    }

    return (
        <>
            <UserNav />
            <div className="container">
                <p><strong>Name:</strong> </p>
                <p><strong>Email:</strong> {currentUser.email}</p>
                <div className="container column">
                    <button className="button is-warning" onClick={handleResetPassword}>Send Reset Password Link</button>
                </div>
                <div className="container column">
                    <button className="button is-danger" onClick={handleDeleteMyAccount}>Delete My Account</button>
                </div>


            </div>

            {/* <UserFooter /> */}
        </>
    )
}

export default MyAccount;