import { Container } from "@mui/system";
import React from "react";
import { ModifyButton } from "../../components/ModifyButton";
import { Title_Subtitle } from "../../components/Title_Subtitle";
import SpeedIcon from "@mui/icons-material/Speed";
import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "../../components/nav-bar";

const Title = styled.h1`
    font-size: 26px;
    font-weight: 600;
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
    @media screen and (max-width: 500px) {
        font-size: 17px;
    }
    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`;

const Subtitle = styled.p`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    @media screen and (max-width: 600px) {
        font-size: 11px;
    }
    @media screen and (max-width: 400px) {
        font-size: 10px;
    }
`;
const containerTitle = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            delay: 0.5,
        },
    },
};

const containerOptions = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.8,
            staggerChildren: 0.2,
        },
    },
};

const divOptions = [
    <div>
        <div className="flex justify-center items-center gap-2">
            <SpeedIcon fontSize="large" />
            <Title>50 km/h</Title>
        </div>
        <Subtitle>Max. Velocidade</Subtitle>
    </div>,
    <div>
        <Title>40 - 80km</Title>
        <Subtitle>Autonomia</Subtitle>
    </div>,

    <div>
        <Title>48v|14ah</Title>
        <Subtitle>Bateria de Lítio</Subtitle>
    </div>,
];

const filho = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

export function ModeloX() {
    return (
        <>
            <NavBar />
            <Container>
                <div className="h-[100vh]">
                    <div className="flex flex-col justify-between h-[100vh] pb-24 max900:pb-10">
                        <motion.div
                            variants={containerTitle}
                            initial="hidden"
                            animate="visible"
                        >
                            <Title_Subtitle
                                title={"Modelo X"}
                                subtitle={"Uma bicicleta jamais vista antes"}
                            />
                        </motion.div>

                        <div className="flex gap-16 justify-center items-center max900:flex-col max900:gap-6">
                            <motion.div
                                className="flex gap-16 justify-center items-center max500:gap-10"
                                id="div-pai"
                                variants={containerOptions}
                                initial="hidden"
                                animate="visible"
                            >
                                {divOptions.map((x) => {
                                    return (
                                        <motion.div variants={filho}>
                                            {x}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                            <motion.div
                                variants={containerOptions}
                                initial="hidden"
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.4 }}
                            >
                                <ModifyButton
                                    textColor="#ffff"
                                    typeButton="outline"
                                    className="w-full"
                                >
                                    Bottom
                                </ModifyButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
