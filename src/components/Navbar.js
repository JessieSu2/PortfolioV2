import React from "react";
import "../assets/css/Navbar.css";

function TopNavbar() {
  return (
    <div className="Navbar py-4 space-x-5 text-white relative">
      <a href="/Enter/Home">
        <button className="navbarText">Home</button>
      </a>
      {/* <a href="/Enter/Recruiters">
        <button className="">Recruiters</button>
      </a> */}
      <a href="/Enter/Contact">
        <button className="navbarText ">Contact</button>
      </a>
      {/* <a href="/error">
        <button className="">s</button>
      </a> */}
    </div>
  );
}
export default TopNavbar;
