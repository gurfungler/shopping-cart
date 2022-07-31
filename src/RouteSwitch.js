import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
const RouteSwitch = () => {
  const [cart, setCart] = useState(new Array(10).fill(0));
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
/*
shop
              cart={cart}
              setCart={setCart}
              catalog={catalog}
              handleDecrement={handleDecrement}
              handeIncrement={handeIncrement}

cart
              cart={cart}
              catalog={catalog}
              handleDecrement={handleDecrement}
              handeIncrement={handeIncrement}
*/
export default RouteSwitch;
