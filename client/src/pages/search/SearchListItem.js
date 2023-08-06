import React from "react";
import "./SearchListItem.css";
import styles from "../home/Button.module.css";

const SearchListItem = ({ list }) => {
  const moveToDetail = () => {
    window.location.replace("./detail");
  };
  return list.map((items) => {
    return (
      <div className="searchListItem" key={items.name}>
        <img src={items.image_url} alt={items.tag}></img>
        <div className="searchListItem-description">
          <h1 className="name">{items.name}</h1>
          <p className="distance">{items.distance} from airport</p>
          <h3 className="tag">{items.tag}</h3>
          <h2 className="description">{items.description}</h2>
          <p className="types">{items.type}</p>
          {items.free_cancel && (
            <div className="freeCancel">
              <h3>Free cancellation</h3>
              <p>You can cancel later, so lock in this great price today!</p>
            </div>
          )}
        </div>
        <div className="searchListItem-price">
          <h2 className="rateText">{items.rate_text}</h2>
          <h2 className="rate">{items.rate}</h2>
          <h3 className="price">${items.price}</h3>
          <p>Includes taxes and fee.</p>
          <button className={styles.buttonBlue} onClick={moveToDetail}>
            See availability
          </button>
        </div>
      </div>
    );
  });
};

export default SearchListItem;
