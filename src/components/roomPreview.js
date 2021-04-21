import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled(Link)`
    display: block;
    margin-top: 2rem;
    padding: 1rem;
    width: 100%;
    color: #ffffff;
    background-color: #222;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
`;

const RoomPreview = ({ room }) => {

    const { slug, title, content, image } = room;

    return (
        <div css={css`
               border: 1px solid #e1e1e1;
               margin-bottom: 2rem;
            `}
        >
            <GatsbyImage image={ image } alt={ title } />
            <div css={css`
                   padding: 3rem; 
                `}
            >
                <h3 css={css`
                        font-size: 3rem;
                    `}
                >
                    { title }
                </h3>
                <p>{ content }</p>
                <Button to={slug}>More info</Button>
            </div>
        </div>
    );
};

export default RoomPreview;