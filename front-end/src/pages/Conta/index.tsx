import React, { useContext, useState } from "react";
import { Button, Menu, MenuItem, Pagination } from "@mui/material";
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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                            >
                                Menu
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >
                                <MenuItem
                                    onClick={() => navigate("/dashboard/123")}
                                >
                                    My account
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
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
