import React from "react";
import "./Hotel.css";

const Hotel = () => {
  const hotelList = require("../../data/hotel_list.json");

  const moveToDetail = () => {
    window.location.replace("./detail");
  };

  return (
    <div className="hotel">
      <h1>Homes guests love</h1>
      {hotelList.map((hotel, index) => {
        return (
          <div className="hotel-items" key={index}>
            <img
              src={hotel.image_url}
              alt={hotel.name}
              key={hotel.image_url}
            ></img>
            <h1 key={hotel.name} onClick={moveToDetail} id="name">
              {hotel.name}
            </h1>
            <h2 key={hotel.city} id="city">
              {hotel.city}
            </h2>
            <h3 key={hotel.price} id="price">
              Starting from ${hotel.price}
            </h3>
            <p key={hotel.rate} id="rate">
              {hotel.rate}
            </p>
            <p key={hotel.type} id="type">
              {hotel.type}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Hotel;
