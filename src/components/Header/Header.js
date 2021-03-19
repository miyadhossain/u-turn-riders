import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { rideType } = useParams();
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            Mega Riders
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav px-5">
              <li className="nav-item riders-hover">
                <Link
                  to="/home"
                  className="nav-link riders-nav-link"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item riders-hover">
                <Link to="/destination" className="nav-link riders-nav-link">
                  Destination
                </Link>
              </li>
              <li className="nav-item riders-hover">
                <Link to="/blog" className="nav-link riders-nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item riders-hover">
                <Link to="/contact" className="nav-link riders-nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item riders-hover">
                <Link to="/login" className="nav-link riders-nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
