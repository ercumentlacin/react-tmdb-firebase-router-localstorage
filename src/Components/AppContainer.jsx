/* eslint-disable no-unused-expressions */

import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Context from "../Context/Context";
import Card from "./Card/Card";
import PopularMovies from "./PopularMovies/PopularMovies";
import Header from "./Header/Header";
import SectionHero from "./SectionHero/SectionHero";
import SearchMovie from "./SearchMovie/SearchMovie";
import Application from "./Application/Application";

const AppContainer = () => {
  const { theme, query } = useContext(Context);

  const body = document.body;
  theme === "light"
    ? body.classList.remove("bg-dark") & body.classList.add("bg-light")
    : body.classList.remove("bg-light") & body.classList.add("bg-dark");

  return (
    <main className={`bg-${theme}`}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <SectionHero />
            <PopularMovies />
            <Card />
          </Route>
          <Application />

          {console.log(query, "query var mı")}
          <Route path={`/search/:searchedMovie`}>
            <SearchMovie query={query} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default AppContainer;
