import React, { useEffect, useState } from "react";
import { Container, duration } from "@mui/material";
import { ModifyButton } from "../ModifyButton";
import { Title_Subtitle } from "../Title_Subtitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface DefaultOverlayContentProps {
    title: string;
    subtitle: string;
    textButton: string;
    colorButton: string;
    textColorButton: string;
    textButton2: string;
    colorButton2: string;
    textColorButton2: string;
    bgImg: string;
}

export function DefaultOverlayContent(props: DefaultOverlayContentProps) {
    const styled = {
        backgroundImage: `url(${props.bgImg})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const { ref, inView } = useInView();

    const animation = useAnimation();

    const [inicial, setInicial] = useState(false);

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,

                transition: {
                    type: "spring",
                    duration: 2,
                },
            });
        } else {
            animation.start({
                opacity: 0,
            });
        }
    }, [inView]);

    return (
        <div style={styled}>
            <Container>
                <div className="flex flex-col justify-between h-[100vh] pb-20">
                    <div ref={ref}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={animation}
                        >
                            <Title_Subtitle
                                title={props.title}
                                subtitle={props.subtitle}
                            />
                        </motion.div>
                    </div>

                    <div ref={ref}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{}}
                            animate={animation}
                            className="flex gap-7 justify-center items-center max500:flex-col"
                        >
                            <ModifyButton
                                color={props.colorButton}
                                textColor={props.textColorButton}
                            >
                                {props.textButton}
                            </ModifyButton>
                            <ModifyButton
                                color={props.colorButton2}
                                textColor={props.textColorButton2}
                            >
                                {props.textButton2}
                            </ModifyButton>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
