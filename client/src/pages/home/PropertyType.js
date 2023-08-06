import React from "react";
import "./PropertyType.css";

const PropertyType = () => {
  const type = require("../../data/type.json");
  return (
    <div className="type">
      <h1>Browse by property type</h1>
      {type.map((type, index) => {
        return (
          <div className="type-items" key={index}>
            <img src={type.image} alt={type.name} key={type.src}></img>
            <h1>{type.name}</h1>
            <h2>{type.count} hotels</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyType;
