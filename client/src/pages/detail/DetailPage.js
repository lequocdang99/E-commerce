import React from "react";
import "./DetailPage.css";
import styles from "../home/Button.module.css";

const DetailPage = () => {
  const detailList = require("../../data/detail.json");
  return (
    <div className="detail">
      <div className="detailInfo">
        <button className={styles.buttonBlue}>Reserve or Book Now!</button>
        <h1 id="name">{detailList.name}</h1>
        <p id="address">
          <i className="fa fa-map-marker"></i>
          {detailList.address}
        </p>
        <h2 id="distance">{detailList.distance}</h2>
        <h2 id="price">{detailList.price}</h2>
      </div>
      <div className="detailImg">
        {detailList.photos.map((img, index) => {
          return <img src={img} alt={""} key={index}></img>;
        })}
      </div>
      <div className="detailDescription">
        <h1 id="title">{detailList.title}</h1>
        <p id="text">{detailList.description}</p>
      </div>
      <div className="detailBook">
        <h1>Perfect for a 9-night stay!</h1>
        <p>
          Located in the heart of Krakow, this property has an excellent
          location score of 9.8
        </p>
        <p id="price9Night">
          <b>${detailList.nine_night_price}</b> (9 nights)
        </p>
        <button className={styles.buttonBlue}>Reserve or Book Now!</button>
      </div>
    </div>
  );
};

export default DetailPage;
