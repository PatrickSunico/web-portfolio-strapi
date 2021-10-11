import { useStaticQuery, graphql } from "gatsby"
export const useHeroDataQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      heroDetails: allStrapiHeroDetails {
        edges {
          node {
            headline_title
            headline_description
            headline_caption
            id
            strapiId
          }
        }
      }
    }
  `)
  return data
}
