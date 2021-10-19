import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav className="navbar">
        <Link exact="true" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className={clicked ? "showNavlinks" : "removeNavlinks"}>
          <Link exact="true" to="/" className="navlink">
            Home
          </Link>
          <Link to="/about" className="navlink">
            About
          </Link>
          <Link to="/contact" className="navlink">
            Contact
          </Link>
          <Link to="/blog" className="navlink">
            Blog
          </Link>
          <Link to="/careers" className="navlink">
            Careers
          </Link>
        </div>
        <Link to="/request-invite">
          <button className="navButton">Request Invite</button>
        </Link>

        <div className="hamburger" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
