import React from "react";
import items from "../Components/catalog";
import Card from "./ShopComponents/Card.js";
import { useEffect } from "react";
const Cart = ({ setCart, cart }) => {
  const handleClick = (index) => {
    let newArr = cart;
    newArr[index] -= 1;
    setCart([...newArr]);
  };

  return (
    <div className="centered">
      {[...items.keys()].map((i) => {
        return (
          cart[i] !== 0 && (
            <Card
              name={items[i].name}
              imgSrc={items[i].src}
              index={items[i].index}
              handleClick={handleClick}
              amount={cart[i]}
              key={i}
            />
          )
        );
      })}
    </div>
  );
};

export default Cart;
