import { Button, Container, dividerClasses, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import "./style.css";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorShow, setErrorShow] = useState(false);
    const { authenticated } = useContext(AuthContext);

    const handleSubmit = () => {
        login(username, password);
        if (!authenticated) {
            setErrorShow(true);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
            if (!authenticated) {
                setErrorShow(true);
            }
        }
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
            </nav>
            <Container>
                <div className="flex flex-col h-[100vh] justify-center items-center">
                    <div
                        className="card-login"
                        style={errorShow ? { borderColor: "red" } : {}}
                    >
                        <h1 className="text-lg">Login</h1>
                        <h2
                            style={
                                errorShow
                                    ? {
                                          position: "fixed",
                                          right: "26px",
                                          top: "18px",
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                          color: "red",
                                          display: "unset",
                                      }
                                    : {
                                          display: "none",
                                      }
                            }
                        >
                            {errorShow ? "inválido" : ""}
                        </h2>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="on"
                            className="flex flex-col gap-4 w-80"
                        >
                            <TextField
                                id="outlined-required"
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </Box>
                        <Button
                            variant="outlined"
                            className="btn-login"
                            onClick={handleSubmit}
                        >
                            Entrar
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default Login;
