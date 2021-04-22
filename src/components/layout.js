import React, { Fragment } from "react";
import Helmet from "react-helmet";

import useSeo from "../hooks/use-seo";
import Header from "./header";
import Footer from "./footer";

import { Global, css } from "@emotion/react";

const Layout = ({ children }) => {
    
    const seo = useSeo();
    const { fallbackSeo: { description, title } } = seo;

    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                       font-size: 18px;
                       font-size: 1.8rem;
                       line-height: 1.5;
                       font-family: "PT Sans", sans-serif;
                       margin: 0;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: "Roboto", sans-serif;
                    }
                    h3 {
                       font-family: "PT Sans", sans-serif; 
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>{ title }</title>
                <meta name="description" content={description} />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=
                    PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/
                    normalize/8.0.1/normalize.min.css" />
            </Helmet>
            <Header />
                {children }
            <Footer title={title} />
        </>
    );
}

export default Layout;