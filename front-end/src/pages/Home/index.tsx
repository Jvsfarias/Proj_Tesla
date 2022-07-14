import React from "react";
import { DefaultOverlayContent } from "../../components/DefaultOverlayContent";
import NavBar from "../../components/Nav-bar";
import "./style.css";

export function Home() {
    return (
        <>
            <NavBar />
            <div className="scroller">
                <div className="scrollerFilho">
                    <DefaultOverlayContent
                        title="Modelo X"
                        subtitle="Ta esperando o que, para comprar o seu?!"
                        textButton="Comprar"
                        colorButton="#595959"
                        textColorButton="white"
                        textButton2="Saiba Mais"
                        colorButton2="#FFF"
                        textColorButton2="#595959"
                        bgImg=""
                    />
                </div>
                <div className="scrollerFilho">
                    <DefaultOverlayContent
                        title="Modelo Y"
                        subtitle="Ta esperando o que, para comprar o seu?!"
                        textButton="Comprar"
                        colorButton="#595959"
                        textColorButton="white"
                        textButton2="Saiba Mais"
                        colorButton2="#FFF"
                        textColorButton2="#595959"
                        bgImg=""
                    />
                </div>
                <div className="scrollerFilho">
                    <DefaultOverlayContent
                        title="Modelo Z"
                        subtitle="Ta esperando o que, para comprar o seu?!"
                        textButton="Comprar"
                        colorButton="#595959"
                        textColorButton="white"
                        textButton2="Saiba Mais"
                        colorButton2="#FFF"
                        textColorButton2="#595959"
                        bgImg=""
                    />
                </div>
            </div>
        </>
    );
}
