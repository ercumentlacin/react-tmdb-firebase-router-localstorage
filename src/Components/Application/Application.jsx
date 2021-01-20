import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Context from "../../Context/Context";
import SignIn from "../Application/SignIn ";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

const Application = () => {
  const { theme, toggleTheme, constrat, user } = useContext(Context);
  return user ? (
    <ProfilePage />
  ) : (
    <>
      <SignUp theme={theme} constrat={constrat} />
    </>
  );
};

export default Application;
