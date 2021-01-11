import React, { useState, createContext } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const value = {
    theme,
    toggleTheme,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
