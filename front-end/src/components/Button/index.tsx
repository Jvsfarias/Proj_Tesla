import React from "react";

interface ButtonProps {
  color: string;
  text: string;
  textColor: string;
}

export function ModifyButton(props: ButtonProps) {
  const styled = {
    backgroundColor: props.color,
    color: props.textColor,
    width: "200px",
    height: "30px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "17.4px",
    lineHeight: "20px",
    letterSpacing: "0.15em",
    borderRadius: "15px",
  };

  return <button style={styled}>{props.text}</button>;
}
