import React from "react";
import { DefaultOverlayContent } from "../components/DefaultOverlayContent";

export function Home() {
  return (
    <>
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
      <DefaultOverlayContent
        title="Modelo 1"
        subtitle="Ta esperando o que, para comprar o seu?!"
        textButton="Comprar"
        colorButton="#595959"
        textColorButton="white"
        textButton2="Saiba Mais"
        colorButton2="#FFF"
        textColorButton2="#595959"
        bgImg="./CópiaDeBike3.jpg"
      />
    </>
  );
}
