import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Hello Summer !!!</h1>

      <Link to="/Product">
        <button>Check out the products here</button>
      </Link>
    </div>
  );
}
