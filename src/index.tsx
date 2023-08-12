import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "antd";
import { Router, BrowserRouter } from "./Routes";
import { NavLink } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </App>
  </React.StrictMode>
);
