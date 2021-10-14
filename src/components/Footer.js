import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Button from "../components/Button";
import logo from "../../src/images/logo-nav.svg";
import facebook from "../../src/images/icon-facebook.svg";
import youtube from "../../src/images/icon-youtube.svg";
import twitter from "../../src/images/icon-twitter.svg";
import pinterest from "../../src/images/icon-pinterest.svg";
import instagram from "../../src/images/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="footer__socials">
          <img src={logo} className="footer__logo" alt="logo-footer" />
          <div className="footer__icons">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img src={facebook} alt="icon" className="footer__icon" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtube} alt="icon" className="footer__icon" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <img src={twitter} alt="icon" className="footer__icon" />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pinterest} alt="icon" className="footer__icon" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="icon" className="footer__icon" />
            </a>
          </div>
        </div>
        {/* footer Navigation */}
        <div className="footer__nav-items">
          <Link to="/about" className="footer__nav-item">
            About
          </Link>
          <Link to="/contact" className="footer__nav-item">
            Contact
          </Link>
          <Link to="/blog" className="footer__nav-item">
            Blog
          </Link>
        </div>
        {/* 3 */}
        <div className="footer__nav-items">
          <Link to="/careers" className="footer__nav-item">
            Careers
          </Link>
          <Link to="/support" className="footer__nav-item">
            Support
          </Link>
          <Link to="/privacy" className="footer__nav-item">
            Privacy Support
          </Link>
        </div>
      </div>
      <div className="footer__request">
        <Button />
        <p className="footer__copyright">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
