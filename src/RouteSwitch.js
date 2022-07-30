import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
const RouteSwitch = () => {
  //const [cart, setCart] = useEffect([]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
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
