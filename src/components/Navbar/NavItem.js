import React from "react";
import "./Navbar.css";

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href="#">
        {props.icon}
        {props.title}
      </a>
    </li>
  );
}

export default NavItem;
