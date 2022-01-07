import React from "react";
import "./Navbar.css";
import NavItem from "./NavItem";

import logo from "../../img/demon-slayer.png";

import { GiMetalHand } from "react-icons/gi";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="nav-title">
        <img src={logo} />
        <NavItem title="Hashira" />
      </div>
      <ul className="navbar-nav">
        <NavItem title="Giyu" />
        <NavItem title="Rengoku" />
        <NavItem title="Shinobu" />
      </ul>
    </nav>
  );
}

export default Navbar;
