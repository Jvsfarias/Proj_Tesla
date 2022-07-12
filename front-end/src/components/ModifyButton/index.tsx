import React from "react";

type ButtonProps = {
    color?: string;
    textColor: string;
    typeButton?: string;
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
};

export function ModifyButton({
    children,
    color,
    textColor,
    typeButton,
    className,
    type,
}: ButtonProps) {
    var styled = {};

    if (typeButton === "outline") {
        styled = {
            backgroundColor: color,
            color: textColor,
            width: "250px",
            height: "35px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "20px",
            letterSpacing: "0.02em",
            borderRadius: "15px",
            border: "2px solid",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            textTransform: "uppercase",
        };
    } else {
        styled = {
            backgroundColor: color,
            color: textColor,
            width: "250px",
            height: "35px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "20px",
            letterSpacing: "0.02em",
            borderRadius: "15px",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            textTransform: "uppercase",
        };
    }

    return (
        <button type={type} className={className} style={styled}>
            {children}
        </button>
    );
}
