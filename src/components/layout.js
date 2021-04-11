import React, { Fragment } from "react";
import { Global, css } from "@emotion/react";
import Helmet from "react-helmet";
import Header from "./header";

const Layout = ({children}) => {
    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                    }
                    body {
                       font-size: 16px;
                       font-size: 1.6rem;
                       line-height: 1.5;
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
                <title>Gatsby Hotel</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=
                    PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/
                    normalize/8.0.1/normalize.min.css" />
            </Helmet>
            <Header />
            {children}
        </>
    );
}

export default Layout;