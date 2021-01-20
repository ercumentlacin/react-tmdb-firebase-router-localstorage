import React, { useState, createContext } from "react";
import { Link, Route } from "react-router-dom";
import SearchMovie from "../Components/SearchMovie/SearchMovie";

const Context = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // for toggle theme
  const constrat = theme === "light" ? "dark" : "light";
  const [query, setQuery] = useState(""); // input value

  const handleForm = (e) => {
    // form submit
    e.preventDefault();
  };
  const handleChange = (e) => {
    // input change
    setQuery(e.target.value);
  };
  const form = (
    <form onSubmit={handleForm} className="d-flex login-register">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
        value={query}
        onSubmit={handleForm}
      />
      <Link
        to={
          query
            ? `/search/${query}`
            : `/search/${window.location.pathname.substring(
                8,
                window.location.pathname.length
              )}`
        }
        className="btn btn-outline-success"
        type="submit"
      >
        Search
      </Link>
    </form>
  );

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const value = {
    theme,
    constrat,
    toggleTheme,
    form,
    query,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
