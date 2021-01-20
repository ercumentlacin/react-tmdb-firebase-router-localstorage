import React, { useState, createContext, useEffect } from "react";
import { auth } from "../firebase";
import { Link, Route } from "react-router-dom";
import { generateUserDocument } from "../firebase";

const Context = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // for toggle theme
  const constrat = theme === "light" ? "dark" : "light";
  const [query, setQuery] = useState(""); // input value
  const [user, setUser] = useState(null); // user

  useEffect(async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      setUser(user);
    });
  }, []);

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
    user,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
