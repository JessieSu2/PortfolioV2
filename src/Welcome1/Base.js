import { useNavigate } from "react-router-dom";
import "../App.css";
import Welcome1 from "../Welcome1/Welcome1";
import { useEffect } from "react";

function Base() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Enter/Home");
    }, "3000");
  });
  return (
    <div className="App h-screen">
      <Welcome1 />
    </div>
  );
}

export default Base;
