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
`;

const Subtitle = styled.p`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
`;

export function Modelo1() {
    return (
        <>
            <NavBar />
            <Container>
                <div className="h-[100vh]">
                    <div className="flex flex-col justify-between h-[100vh] pb-24">
                        <Title_Subtitle
                            title={"Modelo 1"}
                            subtitle={"Uma bicicleta jamais vista antes"}
                        />
                        <div className="flex gap-16 justify-center items-center max500:flex-col">
                            <div
                                className="flex gap-16 justify-center items-center"
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

                            <ModifyButton
                                textColor="#ffff"
                                typeButton="outline"
                            >
                                Bottom
                            </ModifyButton>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
