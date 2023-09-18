import { Outlet, useLocation } from "react-router-dom";
import TopNavbar from "./components/Navbar";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App h-screen">
      <TopNavbar />
      <Outlet />
    </div>
  );
}

export default App;
