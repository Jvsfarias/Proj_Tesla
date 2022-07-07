import React from "react";
import { Container } from "@mui/material";
import { ModifyButton } from "../Button";
import { Title_Subtitle } from "../Title_Subtitle";

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

    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  console.log(props.bgImg);
  return (
    <div style={styled}>
      <Container>
        <Title_Subtitle title={props.title} subtitle={props.subtitle} />
        <div className="flex gap-7 justify-center items-center max500:flex-col mt-[60vh] max500:mt-[45vh]">
          <ModifyButton
            color={props.colorButton}
            text={props.textButton}
            textColor={props.textColorButton}
          />
          <ModifyButton
            color={props.colorButton2}
            text={props.textButton2}
            textColor={props.textColorButton2}
          />
        </div>
      </Container>
    </div>
  );
}
