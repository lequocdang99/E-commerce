import React from "react";
import "./Header.css";
import styles from "./Button.module.css";

const Header = () => {
  const moveToSearch = () => {
    window.location.replace("http://localhost:3000/search");
  };
  return (
    <div className="header">
      <h1>A lifetime of discounts? It's Genius.</h1>
      <p>
        Get reward for your travel - unlock instant savings of 10% or more with
        a free discount
      </p>
      <button className={styles.buttonBlue}>Sign in / Register</button>
      <div>
        <form>
          <input
            type="text"
            placeholder="&#xF236; Where are you going?"
          ></input>
          <input
            type="text"
            placeholder="&#xF073; 06/24/2022 to 06/24/2022"
          ></input>
          <input
            type="text"
            placeholder="&#xF182; 1 adult • 0 children • 1 room"
          ></input>
          <button
            type="button"
            onClick={moveToSearch}
            className={styles.buttonBlue}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
