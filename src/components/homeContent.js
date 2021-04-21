import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const HomeText = styled.div`
    padding: 5rem 0;
    margin: 0 auto;
    width: 95%;
    max-width: 1200px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;

const HomeContent = () => {

    const info = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slug: { eq: "home"}}) {
                nodes {
                    title
                    content
                    image {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const { title, image, content } = info.allDatoCmsPage.nodes[0];

    return (
        <>
            <h2 css={ css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 6rem;
                `}
            >
                { title }
            </h2>
            <HomeText>
                <p>{ content }</p>
                <GatsbyImage image={ image.gatsbyImageData } alt="home" />
            </HomeText>
        </>
    );
};

export default HomeContent;