import React from "react";

type ButtonProps = {
  color?: string;
  textColor: string;
  typeButton?: string;
  children: React.ReactNode;
}

export function ModifyButton({children, color, textColor, typeButton}: ButtonProps) {
  var styled = {}

  if (typeButton === 'outline') {
    styled = {
      backgroundColor: color,
      color: textColor,
      width: "200px",
      height: "30px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "17.4px",
      lineHeight: "20px",
      letterSpacing: "0.15em",
      borderRadius: "15px",
      border: '2px solid'
    }
  } else {
    styled = {
      backgroundColor: color,
      color: textColor,
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
  }
 
 

  return <button style={styled}>{children}</button>;
}
