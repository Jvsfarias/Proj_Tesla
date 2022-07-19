import React from "react";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import "./style.css";

interface SidebarProps {
    toggleSidebar: boolean;
    typeSidebar?: string;
    showSiderbar: () => void;
    children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    if (props.typeSidebar === "dashboard") {
        return (
            <Drawer open={props.toggleSidebar} anchor={"right"}>
                <div className="p-7 px-[32px]">
                    <div className="flex justify-end w-full mb-5">
                        <CloseIcon
                            fontSize="medium"
                            onClick={props.showSiderbar}
                            className="cursor-pointer right-2"
                        />
                    </div>
                    <div className="flex flex-col w-60 gap-3">
                        {props.children}
                    </div>
                </div>
            </Drawer>
        );
    } else {
        return (
            <Drawer open={props.toggleSidebar} anchor={"right"}>
                <div className="p-7 px-[32px]">
                    <div className="flex justify-end w-full mb-5">
                        <CloseIcon
                            fontSize="medium"
                            onClick={props.showSiderbar}
                            className="cursor-pointer right-2"
                        />
                    </div>
                    <div className="flex flex-col w-60 gap-5">
                        <a className="model-sidebar">Modelo X</a>
                        <a className="model-sidebar">Modelo Y</a>
                        <a className="model-sidebar">Modelo Z</a>
                        <a className="model-sidebar">Sobre Nós</a>
                    </div>
                </div>
            </Drawer>
        );
    }
};

export default Sidebar;
