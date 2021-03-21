import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Header.css";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [logout, setLogout] = useContext(userContext);
  const { success, name, email } = loggedInUser;

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand text-light">
            u-Turn Riders
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
                  className="nav-link riders-nav-link text-light"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item riders-hover">
                <Link
                  to="/destination/Bike"
                  className="nav-link riders-nav-link text-light"
                >
                  Destination
                </Link>
              </li>
              <li className="nav-item riders-hover">
                <Link
                  to="/blog"
                  className="nav-link riders-nav-link text-light"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item riders-hover">
                <Link
                  to="/contact"
                  className="nav-link riders-nav-link text-light"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item riders-hover nav-link riders-nav-link text-light">
                {success && <>{name}</>}
              </li>
              <li
                onClick={() => setLogout({})}
                className="nav-item riders-hover"
              >
                <Link
                  to="/login"
                  className="nav-link riders-nav-link text-light"
                >
                  {success ? <>Sign out</> : <>Sign in</>}
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
