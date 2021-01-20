import React, { useState } from "react";
import { Link } from "react-router-dom";

const PasswordReset = ({ theme, constrat }) => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
  };
  return (
    <div className={`container text-center mt-5 bg-${theme} text-${constrat}`}>
      <h1 className="mb-2 text-center">Reset your Password</h1>
      <div className="border mx-auto rounded py-5 px-4">
        <form className="d-flex flex-column mb-3" action="">
          {emailHasBeenSent && (
            <div className="py-3 bg-succes w-100 text-white text-center mb-3">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className="py-3 bg-danger  w-100 text-white text-center mb-3">
              {error}
            </div>
          )}
          <label htmlFor="userEmail"></label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
            className="mb-3 w-full px-1 py-2"
          />
          <button className="w-100 btn btn-primary text-white py-3">
            Send me a reset link
          </button>
        </form>
        <Link to="/signin" className="my-2 text-primary text-center ">
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;
