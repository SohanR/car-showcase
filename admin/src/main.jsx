import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {

  BrowserRouter,

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Router } from "./Pages/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
      <Router/>
    </BrowserRouter>
   
  </React.StrictMode>
);
