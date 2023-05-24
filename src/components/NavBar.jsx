import React from "react";
import "./NavBar.css";
import logo from "../image/watermelon.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navLogo">
        <img src={logo} alt="logo" width="50px" />
      </div>
      <div className="nav-item">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Product">Product</Link>
          <Link to="/ProductDetail">Product Detail</Link>
        </ul>
      </div>
    </div>
  );
}
