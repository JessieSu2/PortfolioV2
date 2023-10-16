import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import Error from "./components/Error";
import Home from "./components/Home";
import Recruiters from "./components/Recruiters";
import Contact from "./components/Contact";
import Base from "./components/Base";
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
        element: <Home />,
      },
      {
        path: "/Enter/Recruiters",
        element: <Recruiters />,
      },
      {
        path: "/Enter/Contact",
        element: <Contact />,
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
