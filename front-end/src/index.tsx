import { Container } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import NavBar from "./components/Nav-bar";

import "./styles/Global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>
);
