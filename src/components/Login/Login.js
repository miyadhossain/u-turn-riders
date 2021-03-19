import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import firebaseConfig from "../../firebase.config";
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [newUser, setNewUser] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signInedUser = { name: displayName, email };
        setLoggedInUser(signInedUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // blur handle
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...loggedInUser };
      newUserInfo[e.target.name] = e.target.value;
      setLoggedInUser(newUserInfo);
    }
  };
  // form submit handle
  const handleSubmit = (e) => {
    // sign up
    if (loggedInUser.email && loggedInUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          loggedInUser.email,
          loggedInUser.password
        )
        .then(() => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setLoggedInUser(newUserInfo);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }
    // sign in
    if (!newUser) {
      firebase
        .auth()
        .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((res) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log("sign in user info", res.user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is Login</h1>
      <button className="btn btn-outline-primary" onClick={handleGoogleSignIn}>
        Google Sign In
      </button>
      <h3>Sign up and sign in with Email</h3>
      <div className="container">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              onBlur={handleBlur}
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              onBlur={handleBlur}
              type="password"
              name="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12 mt-3">
            <input
              className="btn btn-outline-primary"
              type="submit"
              value={newUser ? "Sign up" : "Sign in"}
            />
          </div>
        </form>
        <label htmlFor="newUser">No Account?</label>
        <input
          onChange={() => setNewUser(!newUser)}
          type="checkbox"
          name="newUser"
        />
      </div>
      <p style={{ color: "red" }}>{loggedInUser.error}</p>
      {loggedInUser.success && (
        <p style={{ color: "green" }}>
          User {newUser ? "created" : "Logged In"} successfully.
        </p>
      )}
    </div>
  );
};

export default Login;
