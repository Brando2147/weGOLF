import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserNav from "../components/UserNav/index.js"
import firebase from "../firebase";
import axios from "axios";

function MyAccount() {
    const [currentUser, setCurrentUser] = useState(false)

    const [userDemographics, setUserDemographics] = useState({
        userEmail: "",
        userFirstName: "",
        userLastName: "",
    })

    const [showNameModal, setShowNameModal] = useState(false)

    const [showEmailModal, setShowEmailModal] = useState(false)

    const [newUserInfo, setNewUserInfo] = useState({
        firstName: "",
        email: ""
    })

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
            axios({
                method: "GET",
                url: `/api/userInfo/${user.uid}`
            }).then((results) => {
                setUserDemographics(
                    {
                        ...userDemographics,
                        userEmail: results.data[0].email,
                        userFirstName: results.data[0].firstName,
                        userLastName: results.data[0].lastName
                    })
            })
        })
    }, [])

    const handleDisplayNameModal = () => {
        setShowNameModal("is-active")
    }

    const handleDisplayEmailModal = () => {
        setShowEmailModal("is-active")
    }

    const handleCloseModal = () => {
        setShowNameModal(false)
        setShowEmailModal(false)
    }

    const handleNameUpdate = (event) => {
        event.preventDefault();
        var newName = newUserInfo.firstName
        axios({
            method: "PUT",
            data: { firstName: newName },
            url: `/api/nameupdate/${user.uid}`,
        });
        setShowNameModal(false)
        setUserDemographics({
            ...userDemographics,
            userFirstName: newName
        })
    }

    const handleChange = (event) => {
        event.preventDefault();
        var clone = newUserInfo;
        clone[event.target.name] = event.target.value;
        setNewUserInfo({ ...clone });
    };

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
            <div className="column has-text-centered">
                <h1 className="title is-1">{userDemographics.userFirstName}'s Account</h1>
            </div>
            <div className="box has-background-success column is-6 is-offset-3 is-center">
                <div className="column">
                    <div className="column">
                        <p><strong>Name:</strong> {userDemographics.userFirstName}</p>
                        <p><strong>Email:</strong> {userDemographics.userEmail}</p>
                    </div>

                    <hr></hr>
                    <div className="container column">
                        <div className="container column">
                            <button className="button is-link" onClick={handleDisplayNameModal}>Update Name</button>
                        </div>
                        {/* <div className="container column">
                            <button className="button is-link" onClick={handleDisplayEmailModal}>Update Email</button>
                        </div> */}

                        <div className="container column">
                            <button className="button is-warning" onClick={handleResetPassword}>Send Password Reset Link</button>
                        </div>
                        <div className="container column">
                            <button className="button is-danger" onClick={handleDeleteMyAccount}>Delete My Account</button>
                        </div>
                    </div>
                </div>
                <div className={"modal " + showNameModal}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Update Name</p>
                            <button className="delete" aria-label="close" onClick={handleCloseModal}></button>
                        </header>
                        <section className="modal-card-body">
                            <p>New Name:</p>
                            <input name="firstName" input="text"
                                onChange={handleChange}></input>
                        </section>

                        <footer className="modal-card-foot">
                            <button className="button is-success" onClick={handleNameUpdate}>Save changes</button>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MyAccount;