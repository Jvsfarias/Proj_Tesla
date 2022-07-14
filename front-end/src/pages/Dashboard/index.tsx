import React, { useContext, useState } from "react";
import { Button, Menu, MenuItem, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { ChevronRight } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../../components/Sidebar";
import CircleIcon from "@mui/icons-material/Circle";
import "./style.css";

const data = [
    {
        id: "126.4567",
        name: "João Pedro de Sousa Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "123.4589",
        name: "João Pedro Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "123.0527",
        name: "João Pedro Corrêa",
        statusEnvio: "Cancelado",
        statusPagamento: "Cancelado",
    },
    {
        id: "123.4130",
        name: "João Pedro Corrêa",
        statusEnvio: "Em andamento",
        statusPagamento: "Realizado",
    },
    {
        id: "103.7867",
        name: "João Pedro Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "023.4067",
        name: "João Pedro Corrêa",
        statusEnvio: "Realizado",
        statusPagamento: "Realizado",
    },
    {
        id: "123.3067",
        name: "João Pedro Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "123.4580",
        name: "João Pedro Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "123.4527",
        name: "João Pedro Corrêa",
        statusEnvio: "Cancelado",
        statusPagamento: "Cancelado",
    },
    {
        id: "123.4137",
        name: "João Pedro Corrêa",
        statusEnvio: "Em andamento",
        statusPagamento: "Realizado",
    },
    {
        id: "003.7867",
        name: "João Pedro Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "123.4067",
        name: "João Pedro Corrêa",
        statusEnvio: "Realizado",
        statusPagamento: "Realizado",
    },
    {
        id: "123.4567",
        name: "João Pedro Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "123.4089",
        name: "João Pedro Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "123.4527",
        name: "João Pedro Corrêa",
        statusEnvio: "Cancelado",
        statusPagamento: "Cancelado",
    },
    {
        id: "123.4007",
        name: "João Pedro Corrêa",
        statusEnvio: "Em andamento",
        statusPagamento: "Realizado",
    },
    {
        id: "123.7867",
        name: "João Pedro Corrêa",
        statusEnvio: "Aguardando pagamento",
        statusPagamento: "Em processo",
    },
    {
        id: "133.4067",
        name: "João Pedro Corrêa",
        statusEnvio: "Realizado",
        statusPagamento: "Realizado",
    },
];

function SelectOption() {
    return (
        <>
            <div>
                <select
                    id="statusPagamento"
                    name="pagamentoList"
                    form="pagamentoform"
                    className="bg-transparent outline-0"
                >
                    <option value="" disabled selected hidden>
                        Pagamento
                    </option>
                    <option value="processo">Em processo</option>
                    <option value="realizado">Realizado</option>
                    <option value="cancelado">Cancelado</option>
                </select>
            </div>
            <div>
                <select
                    id="statusEnvio"
                    name="envioList"
                    form="envioform"
                    className="bg-transparent outline-0"
                >
                    <option value="" disabled selected hidden>
                        Envio
                    </option>
                    <option value="aguardando">Aguardando pagamento</option>
                    <option value="andamento">Em andamento</option>
                    <option value="realizado">Realizado</option>
                    <option value="cancelado">Cancelado</option>
                </select>
            </div>
        </>
    );
}

interface TableItemProps {
    id: string;
    name: string;
    statusPagamento: string;
    statusEnvio: string;
    position: number;
}

function TableItem(props: TableItemProps) {
    var statusPagamento = <></>;
    var color = "#3F4D62";
    if (props.position % 2 === 0) {
        color = "#1F2937";
    }

    if (props.statusPagamento === "Em processo") {
        statusPagamento = (
            <>
                <CircleIcon style={{ color: "#F47805", width: 10 }} />
                <span className="ml-2">{props.statusPagamento}</span>
            </>
        );
    } else if (props.statusPagamento === "Realizado") {
        statusPagamento = (
            <>
                <CircleIcon style={{ color: "#05f415", width: 10 }} />
                <span className="ml-2">{props.statusPagamento}</span>
            </>
        );
    } else {
        statusPagamento = (
            <>
                <CircleIcon style={{ color: "red", width: 10 }} />
                <span className="ml-2">{props.statusPagamento}</span>
            </>
        );
    }

    return (
        <div
            className="w-full h-auto grid justify-between items-center rowTable"
            style={{ backgroundColor: color }}
        >
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span className="flex items-center">{statusPagamento}</span>
            <span>{props.statusEnvio}</span>
            <ChevronRight />
        </div>
    );
}

export function Dashboard() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const [sidebar, setSidebar] = useState(false);
    const itensPerPage = 10;
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(data.length / itensPerPage);
    const StartIndex = currentPage * itensPerPage;
    const endIndex = StartIndex + itensPerPage;
    const currentItens = data.slice(StartIndex, endIndex);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const showSiderbar = () => setSidebar(!sidebar);
    const handleLogout = () => {
        logout();
    };
    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value - 1);
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
                    <div className="w-auto max-w-[770px] min-w-[390px]  mx-auto mt-9">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="h-7 w-2/4 min-w-[390px] bg-gray-800 rounded-lg px-2 py-[6px] text-[#CACACA] flex items-center justify-between">
                                <span className="text-[14px] border-r-[1px] border-slate-600 pr-3">
                                    Status
                                </span>
                                <SelectOption />
                            </div>
                            <div className="h-7 w-1/3 bg-gray-800 rounded-lg flex min-w-[250px] max700:min-w-[390px] p-1 items-center">
                                <SearchIcon className="text-[#fff] mr-1 cursor-pointer" />
                                <input
                                    type={"text"}
                                    className="bg-transparent w-full h-full outline-0 text-[#cacaca] text-sm"
                                />
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <div className="w-full bg-slate-800 h-auto grid justify-between items-center headerTable">
                                <span>ID</span>
                                <span>Nome</span>
                                <span>Status do pagamento</span>
                                <span>Status do envio</span>
                            </div>

                            {currentItens.map((item, index) => {
                                return (
                                    <TableItem
                                        id={item.id}
                                        name={item.name}
                                        statusEnvio={item.statusEnvio}
                                        statusPagamento={item.statusPagamento}
                                        position={index + 1}
                                        key={item.id}
                                    />
                                );
                            })}
                            <Pagination
                                count={pages}
                                onChange={handleChangePage}
                                className="mt-4 mb-4"
                                sx={{ ul: { justifyContent: "end" } }}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
