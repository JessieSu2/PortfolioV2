import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Welcome1 from "./Welcome1/Welcome1.js";
import Recruiters1 from "./Welcome1/Recruiters1";
import Contact1 from "./Welcome1/Contact1";
import App from "./App";
import Home1 from "./Welcome1/Home1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/Home",
        element: <Home1 />,
      },
      {
        path: "/Recruiters",
        element: <Recruiters1 />,
      },
      {
        path: "/Contact",
        element: <Contact1 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
