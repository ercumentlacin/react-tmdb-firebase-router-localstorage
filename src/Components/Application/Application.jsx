import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Context from "../../Context/Context";
import SignIn from "../Application/SignIn ";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

const Application = () => {
  const { theme, toggleTheme, constrat } = useContext(Context);
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <>
      <Route theme={theme} constrat={constrat} path="/signup">
        <SignUp theme={theme} constrat={constrat} />
      </Route>
      <Route path="/signin">
        <SignIn theme={theme} constrat={constrat} />
      </Route>

      <Route path="/passwordreset">
        <PasswordReset theme={theme} constrat={constrat} />
      </Route>
    </>
  );
};

export default Application;
