import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Shuai Ma, MSc
          </Link>
          <div className="menu-icon">
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              onClick={handleClick}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/education"
                onClick={closeMobileMenu}
              >
                education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/experience"
                onClick={closeMobileMenu}
              >
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/contact"
                onClick={closeMobileMenu}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
