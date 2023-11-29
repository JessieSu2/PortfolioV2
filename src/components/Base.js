import "../assets/css/App.css";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "../components/Welcome";

function Base() {
  return (
    <AnimatePresence>
      <motion.div
        className="App h-screen "
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
