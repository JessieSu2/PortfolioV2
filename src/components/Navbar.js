import React from "react";
import "../Navbar.css";
import { Link } from "react-router-dom";

function TopNavbar() {
  return (
    <div className="Navbar py-4 space-x-5 text-white relative">
      <a href="/Home">
        <button className="hover:text-pink-300">Home</button>
      </a>
      <a href="/Recruiters">
        <button className="hover:text-pink-300">Recruiters</button>
      </a>
      <a href="/Contact">
        <button className="hover:text-pink-300">Contact</button>
      </a>
      <a href="/error">
        <button className="hover:text-pink-300">s</button>
      </a>
    </div>
  );
}
export default TopNavbar;
