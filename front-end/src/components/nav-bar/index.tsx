import React, { useState }  from "react";
import { Container } from "@mui/material";
import Sidebar from "../Sidebar";

import "./style.css";

const NavBar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)
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
        <span onClick={showSiderbar} className='cursor-pointer'>menu</span>      
        <Sidebar toggleSidebar={sidebar} showSiderbar={showSiderbar}/>
      </nav>
    </Container>
  );
}

export default NavBar;
