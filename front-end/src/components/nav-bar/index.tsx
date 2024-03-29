import { Container } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

import "./style.css";

const NavBar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSiderbar = () => setSidebar(!sidebar);
    const navigate = useNavigate();

    return (
        <Container className="container-navbar z-50">
            <nav className="navegation justify-between ">
                <a>
                    <img
                        src="../Imagens/loguinho.png"
                        className="logo cursor-pointer"
                        alt="description"
                        onClick={() => navigate("/")}
                    />
                </a>

                <div>
                    <ul>
                        <li className="modelos">
                            <a onClick={() => navigate("/modeloX")}>Model X</a>
                            <a>Model Y</a>
                            <a>Model Z</a>
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
