import React from "react";
import { Link } from "gatsby";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Nav from "./nav";

const HomeLink = styled(Link)`
    color: #FFF;
    font-size: 4rem;
    text-decoration: none;
`;

const Header = () => {
    return (
        <header
            css={css`
                background-color: #222;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    @media (min-width: 768px) {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                `}
            >
                <HomeLink to="/" >
                    Gatsby Hotel
                </HomeLink>
                <Nav />
            </div>
        </header>
    );
}

export default Header;