import React, { useState, createContext } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    console.log(query);
  };
  const handleChange = (e) => {
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
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const value = {
    theme,
    toggleTheme,
    form,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
