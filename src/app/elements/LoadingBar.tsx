import React from "react";
import "../styles/modules/LoadingBar.sass"

type LoadingBarProps = {
    visible: boolean
}

export const LoadingBar: React.FC<LoadingBarProps> = ({ visible }) => {
    return (
        <div className={`slider${!visible ? " hide" : ""}`}>
            <div className="line" />
            <div className="subline inc" />
            <div className="subline dec" />
        </div>
    )
}