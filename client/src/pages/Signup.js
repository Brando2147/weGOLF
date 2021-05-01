import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import NonUserNav from "../components/NonUserNav/index.js";
import axios from "axios";

function Signup() {

  const [inputs, setInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState("")


  const handleInputs = (e) => {
    var clone = inputs;
    clone[e.target.name] = e.target.value;
    setInputs({ ...clone });
    console.log(inputs)
  };

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();


    // Creating the user /authentication with firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        inputs.createUserEmail,
        inputs.createUserPassword
      )
      .then((userCredential) => {
        // Signing in and redirecting to home page
        window.location.href = "/home";
        var user = userCredential.user;
        // Sending user data email/uid to database to be store
        axios({
          method: "post",
          data: {
            firstName: inputs.createUserFirstName,
            email: user.email,
            firebaseId: user.uid,
          },
          url: "/api/signup",
        }).then((res) => console.log(res));
      })


      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErrorMessage(errorMessage)
      });
  };

  return (
    <>
      <NonUserNav />
      <main className="container">
        <form
          className="box column is-4-fullhd is-offset-4-fullhd is-4-widescreen is-offset-4-widescreen 
          is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile"
          onSubmit={handleSignUpFormSubmit}
        >
          <h1>Sign Up</h1>

          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="name"
                placeholder="First name"
                id="firstName-input"
                name="createUserFirstName"
                onChange={handleInputs}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="email"
                placeholder="Email"
                id="email-input"
                name="createUserEmail"
                onChange={handleInputs}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                id="password-input"
                name="createUserPassword"
                onChange={handleInputs}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="errorMessage message is-danger">
            {errorMessage}
          </div>
          <button className="signupButton button is-success" type="submit" name="action">
            Sign Up
          </button>
          <p>
            Or log in <Link to="/">here</Link>
          </p>
        </form>
      </main>

    </>
  );
}

export default Signup;
