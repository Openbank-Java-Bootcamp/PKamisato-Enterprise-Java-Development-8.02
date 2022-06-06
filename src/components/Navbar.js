import React from "react";
import home from "../assets/home.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="active">
        <img className="home-img" src={home} alt="house-logo" />
      </a>
    </div>
  );
}
