import React from "react";
import items from "../Components/catalog";
import Card from "./ShopComponents/Card";
import "../Styles/Shop.css";
const Cart = ({ setCart, cart }) => {
  const handleIncriment = (index) => {
    let newArr = cart;
    newArr[index] += 1;
    setCart([...newArr]);
  };
  const handleDecriment = (index) => {
    let newArr = cart;
    if (newArr[index] !== 0) {
      newArr[index] -= 1;
      setCart([...newArr]);
    }
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
              handleIncriment={handleIncriment}
              handleDecriment={handleDecriment}
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
