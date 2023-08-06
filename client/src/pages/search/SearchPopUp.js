import React from "react";
import styles from "../home/Button.module.css";
import "./SearchPopUp.css";

const SearchPopUp = () => {
  return (
    <div className="searchPopUp">
      <form>
        <div className="search">
          <h1>Search</h1>
          <div>
            <label for="destination">Destination</label>
            <input type="text" id="destination"></input>
          </div>
          <div>
            <label for="date">Check-in Date</label>
            <input
              type="text"
              id="date"
              placeholder="06/24/2022 to 06/24/2022"
            ></input>
          </div>
        </div>
        <div className="options">
          <label>Options</label>
          <div className="options-item">
            <label for="min">Min price per night</label>
            <input type="text" id="min"></input>
          </div>
          <div className="options-item">
            <label for="max">Max price per night</label>
            <input type="text" id="max"></input>
          </div>
          <div className="options-item">
            <label for="adult">Adult</label>
            <input type="text" id="adult" placeholder="1"></input>
          </div>
          <div className="options-item">
            <label for="children">Children</label>
            <input type="text" id="children" placeholder="0"></input>
          </div>
          <div className="options-item">
            <label for="room">Room</label>
            <input type="text" id="night" placeholder="1"></input>
          </div>
        </div>
        <button type="submit" className={styles.buttonBlue}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPopUp;
