import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-light justify-content-around  " style={{backgroundColor: '#e3f2fd'}}>
    <div className="navbar-brand ">Todo home list</div>
     <ul className="navbar-nav ">
      <li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to="/" exact>
          Main
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          About me
        </NavLink>
      </li>
    </ul> 
  </nav>
);
