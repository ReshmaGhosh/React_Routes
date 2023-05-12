import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);

  const url = "https://fakestoreapi.com/products";

  async function getData() {
    const response = await axios.get(url);
    const data = await response.data;
    setProducts(data);
  }
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   const getProductData = async () => {
  //     const response = await fetch(url);
  //     const productData = await response.json();
  //     setProducts(productData);
  //   };
  //   getProductData();
  // }, []);

  console.log(products, "products");

  return (
    <div>
      Product
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>
            <button>Go to the detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
