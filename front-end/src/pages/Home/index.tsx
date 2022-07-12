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
                        title="Modelo 1"
                        subtitle="Ta esperando o que, para comprar o seu?!"
                        textButton="Comprar"
                        colorButton="#595959"
                        textColorButton="white"
                        textButton2="Saiba Mais"
                        colorButton2="#FFF"
                        textColorButton2="#595959"
                        bgImg="../Imagens/te.jpg"
                    />
                </div>
                <div className="scrollerFilho">
                    <DefaultOverlayContent
                        title="Modelo 2"
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
                        title="Modelo 3"
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
