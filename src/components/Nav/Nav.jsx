import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import * as Icon from "react-feather";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="left">
        <NavLink className="nav" to="/">
          <img
            className="logo"
            alt="logo"
            src="https://www.nba.com/nets/sites/nets/files/brooklyn-nets-secondary-logo-200x200.png?w=180&h=105"
          />
        </NavLink>
        <NavLink className="nav" to="/home">
          <span>Home</span>
        </NavLink>
        <NavLink className="nav" to="/roster">
          <span>Roster</span>
        </NavLink>
      </div>
      <div className="right">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/BrooklynNets"
        >
          <span className="icons">
            <Icon.Facebook />
          </span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/brooklynnets"
        >
          <span className="icons">
            <Icon.Twitter />
          </span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/brooklynnets/"
        >
          <span className="icons">
            <Icon.Instagram />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
