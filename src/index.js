import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Recruiters1 from "./Welcome1/Recruiters1";
import Contact1 from "./Welcome1/Contact1";
import Home1 from "./Welcome1/Home1";
import Base from "./Welcome1/Base";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
  },
  {
    path: "/Enter",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/Enter/Home",
        element: <Home1 />,
      },
      {
        path: "/Enter/Recruiters",
        element: <Recruiters1 />,
      },
      {
        path: "/Enter/Contact",
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
