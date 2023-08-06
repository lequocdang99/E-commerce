import React from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";
import styles from "./Button.module.css";

const NavBarData = require("../../data/navBar.json");

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1>Booking Website</h1>
      <button type="submit" className={styles.button}>
        Login
      </button>
      <button type="submit" className={styles.button}>
        Register
      </button>
      <NavBarItem items={NavBarData} />
    </div>
  );
};

export default NavBar;
