import React from "react";
import logo from './Logo.png';
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div className="header">
        <img
          className="headerChild"
          src={logo}
          alt=""
        />
        <NavBar />
    </div>
  );
}
