import React from "react";
import "./Card.css";

const Card = ({ name, imgSrc, index, amount, handleClick }) => {
  return (
    <div className="card">
      <div className="property-card">
        <img src={imgSrc} alt={Math.random()} />
        <h5> {name}</h5>
        <div># in cart: {amount}</div>
        <button
          onClick={() => {
            handleClick(index);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
