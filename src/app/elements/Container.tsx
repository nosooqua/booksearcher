import React from "react";
import '../styles/modules/Container.sass'

type ContainerProps = {
    className?: string
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
    return <div className={className ? `${className} container` : 'container'}>{children}</div>
}