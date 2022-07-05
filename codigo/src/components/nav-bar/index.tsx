import React from "react";
import "./style.css";
export function NavBar() {
  return (
    <nav>
      <img src="../Imagens/loguinho.png" className="logo" />
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
  );
}
