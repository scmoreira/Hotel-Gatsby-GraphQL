import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import styled from "@emotion/styled";

const TextImg = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100%;
    background-image: linear-gradient( to top, rgba(34,49,63,.5), rgba(34,49,63,.5));

    h1 {
       font-size: 4rem;
       margin: 0;
       @media (min-width: 992px) {
        font-size: 5rem;
       }
    }

    p {
       font-size: 2rem;
       @media (min-width: 992px) {
        font-size: 2.6rem;
       }
    }
`;

const ImageHotel = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        width:1920
                        formats: [WEBP]
                        placeholder: BLURRED
                    )
                }
            }

        }
    `);

        return (
        <BgImage
            tag="section"
            image={ getImage(image) }
            style={ { height: 650 } }
            alt="hotel views"
        >
            <TextImg>
                <h1>Welcome to Gatsby Hotel</h1>
                <p>Your best choice to relax</p>
            </TextImg>
        </BgImage>
    );
}

export default ImageHotel;