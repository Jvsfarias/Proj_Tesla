import { ArrowBack } from "@mui/icons-material";
import { Container } from "@mui/material";
import React from "react";
import "./style.css";

export function NavBar() {
  return (
    <Container>
      <nav>
        <img src="../Imagens/loguinho.png" className="logo" alt="description" />
        <div>
          <ul>
            <li className="modelos">
              <a>Model 1</a>
              <a>Model 2</a>
              <a>Model 3</a>
            </li>
          </ul>
        </div>
        <a className="botao-menu">Menu</a>
      </nav>
    </Container>
  );
}
