import { useNavigate } from "react-router-dom";
import "../App.css";
import Welcome1 from "../Welcome1/Welcome1";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Base() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Enter/Home", { replace: true });
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
        <Welcome1 />
      </motion.div>
    </AnimatePresence>
  );
}

export default Base;
