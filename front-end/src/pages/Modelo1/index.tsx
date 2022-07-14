import { Container } from "@mui/system";
import React from "react";
import { ModifyButton } from "../../components/ModifyButton";
import NavBar from "../../components/Nav-bar";
import { Title_Subtitle } from "../../components/Title_Subtitle";
import SpeedIcon from "@mui/icons-material/Speed";
import styled from "styled-components";
import { motion } from "framer-motion";

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

export function Modelo1() {
    return (
        <>
            <NavBar />
            <Container>
                <div className="h-[100vh]">
                    <div className="flex flex-col justify-between h-[100vh] pb-24 max900:pb-10">
                        <Title_Subtitle
                            title={"Modelo 1"}
                            subtitle={"Uma bicicleta jamais vista antes"}
                        />
                        <div className="flex gap-16 justify-center items-center max900:flex-col max900:gap-6">
                            <div
                                className="flex gap-16 justify-center items-center max500:gap-10"
                                id="div-pai"
                            >
                                <div>
                                    <div className="flex justify-center items-center gap-2">
                                        <SpeedIcon fontSize="large" />
                                        <Title>50 km/h</Title>
                                    </div>
                                    <Subtitle>Max. Velocidade</Subtitle>
                                </div>

                                <div>
                                    <Title>40 - 80km</Title>
                                    <Subtitle>Autonomia</Subtitle>
                                </div>

                                <div>
                                    <Title>48v|14ah</Title>
                                    <Subtitle>Bateria de Lítio</Subtitle>
                                </div>
                            </div>

                            <div className="bottom">
                                <ModifyButton
                                    textColor="#ffff"
                                    typeButton="outline"
                                >
                                    Bottom
                                </ModifyButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
