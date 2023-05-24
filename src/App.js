import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
