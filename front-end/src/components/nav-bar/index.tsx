import { Container } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

import "./style.css";

const NavBar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  const navigate = useNavigate()


  return (
    <Container className="container-navbar">
      <nav className="navegation">
        <img src="../Imagens/loguinho.png" className="logo cursor-pointer" alt="description" onClick={() => navigate("/")} />
        <div>
          <ul>
            <li className="modelos">
              <a onClick={() => navigate("/modelo1")}>Model 1</a>
              <a>Model 2</a>
              <a>Model 3</a>
            </li>
          </ul>
        </div>
        <span
          onClick={showSiderbar}
          className="cursor-pointer max500:text-[16px]"
        >
          Menu
        </span>
        <Sidebar toggleSidebar={sidebar} showSiderbar={showSiderbar} />
      </nav>
    </Container>
  );
};

export default NavBar;
