import React from "react";
import Card from "./ShopComponents/Card.js";
import items from "../Components/catalog";
import "./ShopComponents/Shop.css";
const Shop = () => {
  return (
    <div className="centered">
      {[...items.keys()].map((index) => {
        return (
          <Card
            name={items[index].name}
            imgSrc={items[index].src}
            key={index}
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
