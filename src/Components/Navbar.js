/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const HandleCart = useSelector((state) => state.HandleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ">
        <div className="container ">
          <NavLink className="navbar-brand fw-bold fs-4 " to="/">
            AS_Collection
          </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons">
              {isAuthenticated ? (
                <NavLink
                  to=""
                  className="btn btn-outline-dark ms-2"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <i className="fa fa-sign-out me-2"></i>
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to=""
                  className="btn btn-outline-dark ms-2"
                  onClick={() => loginWithRedirect()}
                >
                  <i className="fa fa-sign-in me-2"></i>
                  Login
                </NavLink>
              )}

              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-cart-plus me-2"></i>
                Cart ({HandleCart.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
