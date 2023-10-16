import { useNavigate } from "react-router-dom";
import "../assets/css/App.css";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "../components/Welcome";

function Base() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Enter/Home");
    }, "4000");
  });
  return (
    <AnimatePresence>
      <motion.div
        className="App h-screen"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ scale: 0.5 }}
      >
        <Welcome />
      </motion.div>
    </AnimatePresence>
  );
}

export default Base;
