import { Container } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import NavBar from "./components/nav-bar";

import "./styles/Global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar/>
    <App />
  </React.StrictMode>
);
