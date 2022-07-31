import React from "react";
import "../../Styles/Card.css";

const Card = ({
  name,
  imgSrc,
  index,
  amount,
  handleIncriment,
  handleDecriment,
}) => {
  return (
    <div className="card">
      <div className="property-card">
        <img src={imgSrc} alt={Math.random()} />
        <h5> {name}</h5>
        <div># in cart: {amount}</div>
        <div className="button-container">
          <button
            onClick={() => {
              handleDecriment(index);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              handleIncriment(index);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
