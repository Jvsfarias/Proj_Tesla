import React, { useState } from "react";

type NotificationProps = {
    color: string;
    textColor: string;
    children: React.ReactNode;
    className?: string;
};

function transitionNotification() {}

export function Notification({
    children,
    color,
    textColor,
    className,
}: NotificationProps) {
    return (
        <div
            className={`w-48 flex justify-center items-center text-center rounded-md ${className} absolute transition-opacity`}
            style={{ color: textColor, backgroundColor: color }}
        >
            <h1 className="text-sm font-bold">{children}</h1>
        </div>
    );
}
