import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Product.css";

export default function ProductDetail() {
  const [ProductDetail, setProductDetail] = useState({});
  const result1 = useParams();
  console.log(result1, "result");

  const url = `https://fakestoreapi.com/products/${result1.id}`;

  async function fetchProduct() {
    const response = await fetch(url);
    const result = await response.json();
    setProductDetail(result);
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      ProductDetail
      <div>Title: {ProductDetail.title}</div>
      <div>Price: {ProductDetail.price}</div>
      <div>Description: {ProductDetail.description}</div>
      <div>Category: {ProductDetail.category}</div>
      <div>
        <img src={ProductDetail.image} width={200}></img>
      </div>
    </div>
  );
}
