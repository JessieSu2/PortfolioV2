import React from "react";
import "./Welcome1.css";

function Welcome1() {
  return (
    <div className="Welcome1Container justify-center flex text-white">
      <div className="top-0 absolute py-5 appear">Welcome to</div>
      <div className="items-center flex text-4xl font updown">
        Jessie's District
      </div>
      <div className="bottom-0 absolute py-5 appear2">Personal Website</div>
    </div>
  );
}

export default Welcome1;
