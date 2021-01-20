import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, generateUserDocument, signInWithGoogle } from "../../firebase";

const SignIn = ({ theme, constrat }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        window.location.href = "localhost:3000/deneme";
      })
      .catch((error) => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div className={`container text-center mt-5 bg-${theme} text-${constrat}`}>
      <h1 className="mb-2 text-center">Sign In</h1>
      <div className="border mx-auto rounded py-5 px-4">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="">
          <div>
            <label htmlFor="userEmail"></label>
            <input
              type="email"
              className="my-1 p-1 w-100"
              name="userEmail"
              value={email}
              placeholder="Your Email adress.."
              id="userEmail"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div>
            <label htmlFor="userPassword"></label>
            <input
              type="password"
              className="mt-1 mb-3 p-1 w-100"
              name="userPassword"
              value={password}
              placeholder="Your Password"
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
            />
            <button
              className="btn btn-success w-100 py-2"
              onClick={(event) => {
                signInWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="text-center my-3">or</p>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
          className="btn btn-danger w-100 py-2"
        >
          Sign in with Google
        </button>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="/signUp" className="text-primary">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="/passwordReset" className="text-primary">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
