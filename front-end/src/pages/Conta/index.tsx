import React, { useContext, useEffect, useState } from "react";
import {
    Button,
    FormControlLabel,
    Input,
    Menu,
    MenuItem,
    Switch,
} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { ChevronLeft } from "@mui/icons-material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import "./style.css";

function ContaBar(props: {
    showContaBar: boolean;
    handleSetFormPassword: (value: Object) => void;
    username: string;
}) {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [form, setForm] = useState({});

    function handleForm() {
        if (password === password2 && password !== "") {
            setShowErrorPassword(false);

            setForm({
                password: password,
            });
            props.handleSetFormPassword(form);
        } else {
            setShowErrorPassword(true);
        }
    }

    return (
        <div
            className="bg-slate-800 w-[83.6%] h-full text-white p-4 max800:w-full relative"
            style={
                props.showContaBar ? { display: "block" } : { display: "none" }
            }
        >
            <div className="flex gap-3 border-b-[1px] border-slate-500 mb-3">
                <span className="text-sm">Usuário:</span>
                <span className="text-3xl">{props.username.toUpperCase()}</span>
            </div>
            <div>
                <span className="text-sm">Alterar Senha:</span>
                <div className="flex flex-col m-auto w-[30%] max500:w-[100%] ">
                    <label
                        className="text-base"
                        style={showErrorPassword ? { color: "red" } : {}}
                    >
                        Senha nova:
                    </label>
                    <Input
                        sx={{
                            "::after": { borderBottom: "2px solid #fff" },
                            "::before": { borderBottom: "1px solid #64748b" },
                            color: "#fff",
                        }}
                        type={"password"}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    ></Input>
                    <label
                        className="text-base mt-3"
                        style={showErrorPassword ? { color: "red" } : {}}
                    >
                        Repetir senha nova:
                    </label>
                    <Input
                        sx={{
                            "::after": { borderBottom: "2px solid #fff" },
                            "::before": { borderBottom: "1px solid #64748b" },
                            color: "#fff",
                        }}
                        type={"password"}
                        className="mb-4"
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                    ></Input>
                    <Button
                        variant="contained"
                        className="w-20"
                        onClick={handleForm}
                    >
                        Alterar
                    </Button>
                </div>
            </div>
            <div
                style={
                    showErrorPassword
                        ? { display: "block" }
                        : { display: "none" }
                }
                className="absolute top-[88px] right-[16%] max800:right-0 text-red-600 text-base"
            >
                Senhas não conferem!
            </div>
        </div>
    );
}
function RegisterBar(props: {
    showContaBar: boolean;
    handleSetFormRegister: (value: Object) => void;
    setCadastrar: (value: boolean) => void;
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [showErrorUsername, setShowErrorUsername] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [adm, setAdm] = useState(false);

    const [form, setForm] = useState({
        username: "",
        password: "",
        adm: false,
    });

    const handleChangeAdm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdm(event.target.checked);
        setForm({
            ...form,
            ...{ adm: event.target.checked },
        });
    };
    const handleChangeUsername = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
        setForm({
            ...form,
            ...{ username: event.target.value },
        });
    };

    const handleChangePassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
        setForm({
            ...form,
            ...{ password: event.target.value },
        });
    };

    function handleForm() {
        if (username !== "") {
            setShowErrorUsername(false);
            if (password === password2 && password !== "" && password2 !== "") {
                setShowErrorPassword(false);
                props.handleSetFormRegister(form);
                props.setCadastrar(true);
            } else {
                setShowErrorPassword(true);
            }
        } else {
            setShowErrorUsername(true);
        }
    }

    return (
        <div
            className="bg-slate-800 w-[83.6%] h-full text-white p-4 max800:w-full"
            style={
                props.showContaBar ? { display: "none" } : { display: "block" }
            }
        >
            <div className="relative">
                <span className="text-sm">Criar usuário:</span>
                <div className="flex flex-col m-auto w-[30%] max500:w-[100%] ">
                    <label
                        style={showErrorUsername ? { color: "red" } : {}}
                        className="text-base"
                    >
                        Usuário:
                    </label>
                    <Input
                        sx={{
                            "::after": { borderBottom: "2px solid #fff" },
                            "::before": { borderBottom: "1px solid #64748b" },
                            color: "#fff",
                        }}
                        type={"text"}
                        onChange={handleChangeUsername}
                    ></Input>
                    <label
                        style={showErrorPassword ? { color: "red" } : {}}
                        className="text-base mt-3"
                    >
                        Senha:
                    </label>
                    <Input
                        sx={{
                            "::after": { borderBottom: "2px solid #fff" },
                            "::before": { borderBottom: "1px solid #64748b" },
                            color: "#fff",
                        }}
                        type={"password"}
                        onChange={handleChangePassword}
                    ></Input>
                    <label
                        style={showErrorPassword ? { color: "red" } : {}}
                        className="text-base mt-3"
                    >
                        Repetir senha:
                    </label>
                    <Input
                        sx={{
                            "::after": { borderBottom: "2px solid #fff" },
                            "::before": { borderBottom: "1px solid #64748b" },
                            color: "#fff",
                        }}
                        type={"password"}
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                    ></Input>
                    <FormControlLabel
                        value={true}
                        control={
                            <Switch
                                color="primary"
                                onChange={handleChangeAdm}
                            />
                        }
                        label="Administrador"
                        labelPlacement="end"
                        className="my-4"
                    />
                    <Button
                        variant="contained"
                        className="w-20"
                        onClick={handleForm}
                    >
                        Criar
                    </Button>
                </div>
                <div
                    style={
                        showErrorUsername
                            ? { display: "block" }
                            : { display: "none" }
                    }
                    className="absolute top-[22px] right-[18%] max800:right-0 text-red-600 text-base"
                >
                    Usuário obrigatório!
                </div>
                <div
                    style={
                        showErrorPassword
                            ? { display: "block" }
                            : { display: "none" }
                    }
                    className="absolute top-[88px] right-[16%] max800:right-0 text-red-600 text-base"
                >
                    Senhas não conferem!
                </div>
            </div>
        </div>
    );
}

export function Conta() {
    const navigate = useNavigate();
    const { logout, createAccount } = useContext(AuthContext);
    const [showContaBar, setShowContaBar] = useState(true);
    const [cadastrar, setCadastrar] = useState(false);
    const [formRegister, setFormRegister] = useState({
        username: "",
        password: "",
        adm: false,
    });
    const [formPassword, setFormPassword] = useState({});
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [username, setUsername] = useState("");
    const [isAdm, setIsAdm] = useState(false);
    const { id } = useParams();
    var user = localStorage.getItem("userResp");
    console.log("aqq", id);
    useEffect(() => {
        if (user !== null) {
            user = JSON.parse(user);
            if (user !== null) {
                //@ts-ignore
                if (user.adm !== undefined) {
                    //@ts-ignore
                    setIsAdm(user.adm);
                }
                //@ts-ignore
                if (user.username !== undefined) {
                    //@ts-ignore
                    setUsername(user.username);
                }
            }
        }
    }, []);
    const open = Boolean(anchorEl);

    useEffect(() => {
        handleSubmitRegister();
    }, [cadastrar]);

    const handleSubmitRegister = async () => {
        if (cadastrar) {
            //@ts-ignore
            const isCreate = await createAccount(
                formRegister.username,
                formRegister.password,
                formRegister.adm,
                id
            );
            setCadastrar(false);
            if (!isCreate) {
                return false;
            } else {
                return true;
            }
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
    };

    function handleSetFormRegister(value: Object) {
        //@ts-ignore
        setFormRegister(value);
    }
    function handleSetFormPassword(value: Object) {
        setFormPassword(value);
    }

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
                    <div className="flex gap-4 mt-7 max800:flex-col">
                        <div className="flex flex-col bg-slate-800 h-full w-[15%] container-conta gap-2 p-2 max800:w-full max800:flex-row max800:justify-around">
                            <div
                                className="flex items-center gap-2 hover:bg-slate-700 cursor-pointer p-1"
                                onClick={() => setShowContaBar(true)}
                            >
                                <PersonIcon />
                                <span>Minha conta</span>
                            </div>
                            <div
                                className="flex items-center gap-2 hover:bg-slate-700 cursor-pointer p-1"
                                onClick={() => setShowContaBar(false)}
                                style={
                                    isAdm
                                        ? { display: "flex" }
                                        : { display: "none" }
                                }
                            >
                                <PersonAddIcon />
                                <span>Registrar usuário</span>
                            </div>
                        </div>

                        <ContaBar
                            showContaBar={showContaBar}
                            handleSetFormPassword={handleSetFormPassword}
                            username={username}
                        />
                        <RegisterBar
                            handleSetFormRegister={handleSetFormRegister}
                            showContaBar={showContaBar}
                            setCadastrar={setCadastrar}
                        />
                    </div>
                </Container>
            </div>
        </div>
    );
}
