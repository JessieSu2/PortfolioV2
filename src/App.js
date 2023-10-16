import { Outlet } from "react-router-dom";
import TopNavbar from "./components/Navbar";
import "./assets/css/App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App h-screen">
      {/* <TopNavbar /> */}
      {/* <Outlet /> */}
      <Home />
    </div>
  );
}

export default App;
