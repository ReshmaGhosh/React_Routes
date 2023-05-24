import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <h1>Hello Summer !!!</h1>

        <Link to="/Product">
          <button className="btn">
            <span>Check out the products here</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
