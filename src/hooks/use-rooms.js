import { graphql, useStaticQuery } from 'gatsby';

const useRooms = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsRoom {
                nodes {
                    id
                    slug
                    title
                    content
                    image {
                        gatsbyImageData (
                            layout: CONSTRAINED,
                            width: 1200
                        )
                    }
                }
            }
        }
    `);
    return data.allDatoCmsRoom.nodes.map(room => ({
        id: room.id,
        slug: room.slug,
        title: room.title,
        content: room.content,
        image: room.image.gatsbyImageData
    }));
}

export default useRooms;