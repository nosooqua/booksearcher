import React from "react";
import "../styles/modules/IconButton.sass"

type IconButtonProps = {
    icon?: React.ReactNode
    onClick?: any
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    text?: string
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, text, onClick, disabled, type }) => {
    return (
        <button disabled={disabled}
                onClick={onClick}
                className={`icon-button${disabled ? ' disabled' : ''}`}
                type={type}
        >
            {icon ? icon : <span className="text">{text}</span>}
        </button>
    )
}