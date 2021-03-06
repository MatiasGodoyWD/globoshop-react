import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Products from "./pages/Products-page/Products";
import Training from "./pages/Training-page/Training";
import Match from "./pages/Match-page/Match";
import Merch from "./pages/Merch-page/Merch";
import Street from "./pages/Street-page/Street";
import CartPage from "./pages/Cart/CartPage";
import { useLayoutEffect, useEffect } from "react";
import Shipping from "./pages/Shipping/Shipping";
import AOS from "aos";
import "aos/dist/aos.css";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<Products />} />
          <Route exact path="/productos/entrenamiento" element={<Training />} />
          <Route exact path="/productos/juego" element={<Match />} />
          <Route exact path="/productos/salida" element={<Street />} />
          <Route exact path="/productos/merchandising" element={<Merch />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/shipping" element={<Shipping />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
