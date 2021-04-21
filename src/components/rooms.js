import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

import { css } from "@emotion/react";

export const query = graphql`
    query ($slug: String!) {
        allDatoCmsRoom(filter: {slug: {eq: $slug}}) {
            nodes {
                title
                content
                image {
                    gatsbyImageData (layout: CONSTRAINED, width: 1200)
                }
            }
        }
    }
`

const RoomTemplate = ({data: {allDatoCmsRoom: {nodes}} }) => {
    
    const { title, content, image } = nodes[0];

    return (
        <Layout>
            <main css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <h1 css={css`
                        text-align: center;
                        margin: 4rem;
                    `}
                >
                    {title}
                </h1>
                <p>{content}</p>
                <GatsbyImage image={image.gatsbyImageData} alt={title} />
            </main>
        </Layout>
    );
};

export default RoomTemplate;