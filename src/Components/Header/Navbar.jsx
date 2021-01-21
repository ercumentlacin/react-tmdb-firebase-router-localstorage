/* eslint-disable */
import React, { useContext } from "react";
import "./navbar.css";

import Context from "../../Context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme, user } = useContext(Context);
  const { form } = useContext(Context);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} py-4`}
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100 flex-wrap align-items-center align-content-center">
            {/* brand */}
            <div className="container-brandt">
              <Link className="navbar-brand" to="/">
                <span className="text-warning">SPEEDYTV</span>.COM
              </Link>
            </div>
            {/* search and button */}
            {form}

            {/* login & register or Profile */}
            {!user ? (
              <div className="d-flex">
                <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row">
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item ms-2">
                    <Link className="nav-link" to="/signup">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            )}

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
