import React, { useContext, useState } from "react";
import { Button, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { ChevronLeft } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../../components/Sidebar";
import CircleIcon from "@mui/icons-material/Circle";
import "./style.css";

export function Conta() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const [sidebar, setSidebar] = useState(false);

    const showSiderbar = () => setSidebar(!sidebar);
    const handleLogout = () => {
        logout();
    };

    return (
        <div className="container-dashboard">
            <nav className="flex items-center bg-gray-800 py-2 shadow-lg">
                <Container>
                    <div className="flex justify-between items-center">
                        <img
                            src="../Imagens/loguinho.png"
                            className="w-[233px] h-[35px] cursor-pointer"
                            alt="description"
                            onClick={() => navigate("/")}
                        />
                        <span
                            onClick={showSiderbar}
                            className="cursor-pointer max500:text-[16px] text-white"
                        >
                            Menu
                        </span>
                        <Sidebar
                            toggleSidebar={sidebar}
                            showSiderbar={showSiderbar}
                            typeSidebar="dashboard"
                        >
                            <span
                                className="cursor-pointer hover:bg-gray-100 p-1 rounded-md transition-colors bg-transparent"
                                onClick={() => navigate("/dashboard/123")}
                            >
                                Conta
                            </span>
                            <span className="cursor-pointer hover:bg-gray-100 p-1 rounded-md transition-colors bg-transparent">
                                Registar Usuário
                            </span>
                            <Button variant="contained" onClick={handleLogout}>
                                Logout
                            </Button>
                        </Sidebar>
                    </div>
                </Container>
            </nav>
            <div className="flex flex-col">
                <Container>
                    <div className="flex justify-start items-center font-bold text-slate-800">
                        <ChevronLeft
                            style={{
                                color: "#1f2937",
                                fontSize: "60px",
                                marginLeft: "-18px",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/dashboard")}
                        />
                        <span className="ml-[-15px]">Voltar</span>
                    </div>
                </Container>
            </div>
        </div>
    );
}
