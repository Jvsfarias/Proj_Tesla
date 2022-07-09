import React from "react";
import { Container } from "@mui/material";
import { ModifyButton } from "../ModifyButton";
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
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={styled}>
      <Container>
        <div className="flex flex-col justify-between h-[100vh] pb-20">
          <Title_Subtitle title={props.title} subtitle={props.subtitle} />
          <div className="flex gap-7 justify-center items-center max500:flex-col">
            <ModifyButton
              color={props.colorButton}
              textColor={props.textColorButton}
            >{props.textButton}</ModifyButton>
            <ModifyButton
              color={props.colorButton2}
              textColor={props.textColorButton2}
            >{props.textButton2}</ModifyButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
