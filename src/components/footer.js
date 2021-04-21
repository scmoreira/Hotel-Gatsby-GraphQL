import React from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Nav from "./nav";

const FooterText = styled.p`
    color: #FFF;
    font-size: 2rem;
`;

const Footer = () => {
    return (
        <footer
            css={ css`
                background-color: #222;
                padding: .1rem;
            `}
        >
            <div
                css={ css`
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                `}
            >
                <FooterText>
                    &copy; { new Date().getFullYear() } Gatsby Hotel. Made by SCM.
                </FooterText>
            </div>
        </footer>
    );
};

export default Footer;