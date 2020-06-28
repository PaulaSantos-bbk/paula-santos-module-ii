import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/starter">Starter</NavLink>
      </li>
      <li>
        <NavLink to="/main">Main course</NavLink>
      </li>
      <li>
        <NavLink to="/dessert">Dessert</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
