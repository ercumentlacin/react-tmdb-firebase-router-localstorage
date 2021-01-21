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
import SignUp from "./Application/SignUp";
import SignIn from "./Application/SignIn ";
import PasswordReset from "./Application/PasswordReset";
import MovieDetail from "./MovieDetail/MovieDetail";

const AppContainer = () => {
  const { theme, query, constrat, user } = useContext(Context);

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

          <Route path="/profile" component={Application} />

          {console.log(query, "query var mı")}
          <Route path={`/search/:searchedMovie`}>
            <SearchMovie query={query} />
          </Route>

          <Route path="/signup">
            <SignUp theme={theme} constrat={constrat} />
          </Route>
          <Route path="/signin">
            <SignIn theme={theme} constrat={constrat} />
          </Route>

          <Route path="/passwordreset">
            <PasswordReset theme={theme} constrat={constrat} />
          </Route>

          <Route path="/movie/:movie_detail">
            <MovieDetail theme={theme} constrat={constrat} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default AppContainer;
