import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products-page/Products";
import Training from "./pages/Training-page/Training";
import Match from "./pages/Match-page/Match";
import Merch from "./pages/Merch-page/Merch";
import Street from "./pages/Street-page/Street";

function App() {
  return (
    <div className="root">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos" element={<Products />} />
        <Route exact path="/productos/entrenamiento" element={<Training />} />
        <Route exact path="/productos/juego" element={<Match />} />
        <Route exact path="/productos/salida" element={<Street />} />
        <Route exact path="/productos/merchandising" element={<Merch />} />
      </Routes>
    </div>
  );
}

export default App;
