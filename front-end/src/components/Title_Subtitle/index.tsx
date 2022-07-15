import { Container } from "@mui/system";
import React from "react";

interface title_sub {
    title: string;
    subtitle: string;
}

export function Title_Subtitle(props: title_sub) {
    return (
        <Container>
            <div className="flex flex-col items-center z-10">
                <h1 className="inline-block text-[50px]  tracking-[.01em] mt-[130px]  max350:text-[40px]">
                    {props.title}
                </h1>
                <h4 className="inline-block text-[18px] max500:text-[16px] max350:text-[13px] font-normal text-[#3F3F3F]">
                    {props.subtitle}
                </h4>
            </div>
        </Container>
    );
}
