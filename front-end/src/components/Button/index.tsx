import React from "react";

interface ButtonProps {
    color: string,
    text: string
}

export function Button(props: ButtonProps) {
        const styled = {
            backgroundColor: props.color
        }


  return (
    <button style={styled}>{props.text}</button>
  );
}
