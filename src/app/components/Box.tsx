import React from "react";
import '../styles/modules/Box.sass'

type BoxProps = {
    className?: string,
    onClick?: any;
}

export const Box: React.FC<BoxProps> = ({ className, onClick, children }) => {
    return (
        <div onClick={onClick} className={className ? `${className} box` : 'box'}>{ children }</div>
    )
}