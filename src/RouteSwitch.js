import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import "./Styles/MainStyle.css";
const RouteSwitch = () => {
  const [cart, setCart] = useState(new Array(10).fill(0));
  //cart has a parrallel index to the items fromthe catalog, incriments to show the  # in the cart
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/Shop"
            element={<Shop setCart={setCart} cart={cart} />}
          />
          <Route
            path="/Cart"
            element={<Cart setCart={setCart} cart={cart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
