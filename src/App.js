import { Outlet } from "react-router-dom";
import "./App.css";
import TopNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App h-screen">
      <TopNavbar />
      <Outlet />
    </div>
  );
}

export default App;
