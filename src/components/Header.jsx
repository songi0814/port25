import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <header id="header">
      <span className="title">
        <Link to="/">PORTFOLIO</Link>
      </span>

      <ul className="dep1">
        <li><Link to="/resume">RESUME</Link></li>
        <li><Link to="/work">WORK</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </header>
  );
};

export default Header;
