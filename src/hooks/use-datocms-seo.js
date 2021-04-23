import { graphql, useStaticQuery } from "gatsby";

const useDatoCmsSeo = () => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsSite {
                globalSeo {
                    siteName
                    fallbackSeo {
                        title
                        description
                    }
                }
            }
        }
    `);
    return data.datoCmsSite.globalSeo;
};

export default useDatoCmsSeo;