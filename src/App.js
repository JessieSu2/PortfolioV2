import { Outlet } from "react-router-dom";
import TopNavbar from "./components/Navbar";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App h-screen">
      <TopNavbar />
      <Outlet />
    </div>
  );
}

export default App;
