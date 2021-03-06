import React from "react";
import "../styles/modules/IconButton.sass"

type IconButtonProps = {
    icon?: React.ReactNode
    onClick?: any
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    color?: "default-color" | "main-color"
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, color = "default-color", onClick, disabled, type }) => {
    return (
        <button disabled={disabled}
                onClick={onClick}
                className={`icon-button${disabled ? ' disabled' : ''} ${color}`}
                type={type}
        >
            {icon}
        </button>
    )
}