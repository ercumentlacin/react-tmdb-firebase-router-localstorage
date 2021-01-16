/* eslint-disable */
import React, { useContext } from "react";
import "./navbar.css";

import Context from "../../Context/Context";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(Context);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100 flex-wrap align-items-center align-content-center">
            {/* brand */}
            <div className="container-brandt">
              <a className="navbar-brand" href="#">
                <span className="text-warning">SPEEDYTV</span>.COM
              </a>
            </div>
            {/* search and button */}
            <form className="d-flex login-register">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* login & register */}
            <div className="d-flex">
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item ms-2">
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            {/* toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* toggle menu ıtems */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contack Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
