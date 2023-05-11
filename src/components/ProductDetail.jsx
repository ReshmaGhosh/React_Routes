import React, { useEffect, useState } from "react";
const url = "https://fakestoreapi.com/products/1";

export default function ProductDetail() {
  const [ProductDetail, setProductDetail] = useState({});

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
    </div>
  );
}
