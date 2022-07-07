import { Container } from "@mui/system";
import React from "react";

interface title_sub {
  title: string;
  subtitle: string;
}

export function Title_Subtitle(props: title_sub) {
  return (
    <Container>
      <div className="flex flex-col items-center ">
        <h1 className="inline-block text-[64px] font-bold tracking-[.06em] mt-[20px] max500:text-[55px]">
          {props.title}
        </h1>
        <h4 className="inline-block text-[19px] max500:text-[15px] font-normal text-[#3F3F3F]">
          {props.subtitle}
        </h4>
      </div>
    </Container>
  );
}
