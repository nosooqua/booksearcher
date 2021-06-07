import React from "react";
import '../styles/modules/Navbar.sass'
import {Container} from "../elements/Container";

export const Navbar: React.FC = ({ children }) => {
    return (
        <nav className="navbar">
            <Container >
                { children }
            </Container>
        </nav>
    )
}

export const Logo: React.FC = ({ children }) => {
    return <div className="logo">{ children }</div>
}

type LinkProps = {
    href: string
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
    return <a className="link" href={ href }>{ children }</a>
}