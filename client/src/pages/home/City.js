import React from "react";
import "./City.css";

const City = () => {
  const cityData = require("../../data/city.json");

  return (
    <div className="city">
      {cityData.map((city, index) => {
        return (
          <div className="city-items" key={index}>
            <img src={city.image} alt={city.name} key={city.image}></img>
            <h1 key={city.name}>{city.name}</h1>
            <h2 key={city.subText}>{city.subText}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default City;
