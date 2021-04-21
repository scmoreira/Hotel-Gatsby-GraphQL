import React from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

const FooterText = styled.p`
    color: #FFF;
    font-size: 2rem;
    margin: 0 auto;
`;

const Footer = ({ title }) => {
    return (
        <footer
            css={ css`
                background-color: #222;
                padding: 1rem;
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
                    &copy; { new Date().getFullYear() } { title }. Made by SCM.
                </FooterText>
            </div>
        </footer>
    );
};

export default Footer;