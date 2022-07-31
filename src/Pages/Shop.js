import React from "react";
import Card from "./ShopComponents/Card.js";
import items from "../Components/catalog";
import "../Styles/Shop.css";
const Shop = ({ setCart, cart }) => {
  //handle click takes the index of the item and increments it in the cart
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
          <Card
            name={items[i].name}
            imgSrc={items[i].src}
            index={items[i].index}
            handleIncriment={handleIncriment}
            handleDecriment={handleDecriment}
            amount={cart[i]}
            key={i}
          />
        );
      })}
    </div>
  );
};
export default Shop;
