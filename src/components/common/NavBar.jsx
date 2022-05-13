import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Logo.png";

export default function NavBar() {
  return (
    <nav>
      <div className="brand">
        <NavLink to="/home">
          <img src={logo} alt="" />
        </NavLink>
        <span>e-Ride</span>
      </div>
      <ul>
        <li>
          <NavLink to="/electric_cars">Electric Cars</NavLink>
        </li>
        <li>
          <NavLink to="/suitability_tool">Suitability Tool</NavLink>
        </li>
        <li>
          <NavLink to="/my_booking">My Booking</NavLink>
        </li>
        <li>
          <NavLink className="signout" to="/logout">
            Sign Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
