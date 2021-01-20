import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, generateUserDocument, signInWithGoogle } from "../../firebase";

const SignUp = ({ theme, constrat }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div className={`container text-center mt-5 bg-${theme} text-${constrat}`}>
      <h1 className="mb-2 text-center">Sign Up</h1>
      <div className="border mx-auto rounded py-5 px-4">
        {error !== null && (
          <div className="py-4 bg-danger w-100 text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="d-flex flex-column">
          <label htmlFor="displayName"></label>
          <input
            type="text"
            className="my-2 p-1 w-full "
            name="displayName"
            value={displayName}
            placeholder="Your name.."
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userEmail"></label>
          <input
            type="email"
            className="my-2 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="Your Email"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword"></label>
          <input
            type="password"
            className="my-2 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            className="btn btn-success w-100 py-2"
            onClick={(event) => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
          className="btn btn-danger w-100 py-2"
        >
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
