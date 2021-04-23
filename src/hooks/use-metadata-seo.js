import { graphql, useStaticQuery } from "gatsby";

const useMetadataSeo = () => {
    const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author,
            lang
          }
        }
      }
    `);
    return site.siteMetadata;
};

export default useMetadataSeo;