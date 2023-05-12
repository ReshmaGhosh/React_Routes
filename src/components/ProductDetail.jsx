import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div>{ProductDetail.title}</div>
      <div>{ProductDetail.price}</div>
      <div>{ProductDetail.description}</div>
      <div>{ProductDetail.category}</div>
      <div>
        <img src={ProductDetail.image}></img>
      </div>
      {/* <div>Rate :{ProductDetail.rating}</div> */}
    </div>
  );
}
