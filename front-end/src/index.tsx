import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/Global.css";
import { NavBar } from "./components/nav-bar/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);
