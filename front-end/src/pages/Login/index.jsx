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

    const handleSubmit = async () => {
        const isLogged = await login(username, password);
        if (!isLogged) {
            setErrorShow(true);
            return false;
        } else {
            return true;
        }
    };

    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            const isLogged = await handleSubmit();
            if (!isLogged) {
                setErrorShow(true);
            }
        }
    };

    return (
        <>
            <nav className="flex justify-between fixed w-[100vw] bg-gray-800 px-[10%] py-2 shadow-lg">
                <Container>
                    <img
                        src="../Imagens/loguinho.png"
                        className="logo cursor-pointer"
                        alt="description"
                        onClick={() => navigate("/")}
                    />
                </Container>
            </nav>
            <Container>
                <div
                    className="flex flex-col justify-center items-center"
                    style={{ height: "95vh" }}
                >
                    <div
                        className="card-login"
                        style={errorShow ? { borderColor: "red" } : {}}
                    >
                        <h1 style={{ fontSize: "20px" }}>Login</h1>
                        <h2
                            style={
                                errorShow
                                    ? {
                                          position: "fixed",
                                          right: "26px",
                                          top: "29px",
                                          fontSize: "10px",
                                          fontWeight: "bold",
                                          color: "red",
                                          display: "unset",
                                      }
                                    : {
                                          display: "none",
                                      }
                            }
                        >
                            {errorShow ? "USUÁRIO / SENHA INVÁLIDO" : ""}
                        </h2>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="on"
                            style={{ gap: "16px" }}
                            className="flex flex-col w-80"
                        >
                            <TextField
                                id="outlined-required"
                                label="Usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Senha"
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
