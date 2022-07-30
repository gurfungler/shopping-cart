import React from "react";
import "./Card.css";

const Card = ({ name, imgSrc }) => {
  return (
    <div className="card">
      <div className="property-card">
        <img src={imgSrc} alt={Math.random()} />
        <h5> {name}</h5>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
