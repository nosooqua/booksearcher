import React from "react";
import "../styles/modules/IconButton.sass"

type IconButtonProps = {
    icon: React.ReactNode
    onClick?: any
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, disabled, type }) => {
    return (
        <button disabled={disabled}
                onClick={onClick}
                className={`icon-button${disabled ? ' disabled' : ''}`}
                type={type}
        >
            {icon}
        </button>
    )
}