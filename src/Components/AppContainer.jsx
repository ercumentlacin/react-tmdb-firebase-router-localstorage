/* eslint-disable no-unused-expressions */

import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Context from "../Context/Context";
import Header from "./Header/Header";

const AppContainer = () => {
  const { theme } = useContext(Context);

  const body = document.body;
  theme === "light"
    ? body.classList.remove("bg-dark") & body.classList.add("bg-light")
    : body.classList.remove("bg-light") & body.classList.add("bg-dark");

  return (
    <main className={`bg-${theme}`}>
      <Router>
        <Header />
        <Switch>
          <Route>
            <h1>baslik deneme</h1>
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default AppContainer;
