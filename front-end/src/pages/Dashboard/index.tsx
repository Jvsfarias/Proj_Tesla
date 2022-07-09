import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export function Dashboard() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    };
    return (
        <>
            <nav className="flex justify-between fixed w-[100vw] bg-gray-800 px-[10%] py-2 shadow-lg">
                <img
                    src="../Imagens/loguinho.png"
                    className="logo cursor-pointer"
                    alt="description"
                    onClick={() => navigate("/")}
                />
                <span className="text-white">Menu</span>
            </nav>
            <div className="h-[100vh] w-[100vw] flex justify-center items-center">
                <Button variant="contained" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </>
    );
}
