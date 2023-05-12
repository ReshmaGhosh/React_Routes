import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

// needs to defined how many pages I need.thats why written 2times <Route/> under <Routes/>. Because I have 2pages Home and Product
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
