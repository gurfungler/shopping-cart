import React from "react";
import Card from "./ShopComponents/Card.js";
import items from "../Components/catalog";
import "./ShopComponents/Shop.css";
const Shop = ({ setCart, cart }) => {
  const handleClick = (e) => {
    let newArr = cart;
    newArr[e] += 1;
    setCart([...newArr]);
    console.log(cart);
  };
  return (
    <div className="centered">
      {[...items.keys()].map((i) => {
        return (
          <Card
            name={items[i].name}
            imgSrc={items[i].src}
            index={items[i].index}
            handleClick={handleClick}
            amount={cart[i]}
            key={i}
          />
        );
      })}
    </div>
  );
};
/*
        
      <Navbar />
      {[...new Array[catalog.length]()].map((e, index) => {
        return <Card />;
      })}
*/
export default Shop;
