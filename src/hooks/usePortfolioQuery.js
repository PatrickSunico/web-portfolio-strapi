import { useStaticQuery, graphql } from "gatsby"
export const useProjectQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      project_cards: allStrapiPortfolios {
        edges {
          node {
            CardCover {
              id
              url
              provider
              name
              localFile {
                url
              }
            }
            projectDetails {
              id
              projectCategories {
                id
                projectCategory
              }
              projectTools {
                id
                tool
              }
              socialLinks {
                availableLinks
                id
                socialLink
              }
            }
            projectTitle
            projectType
            slug
            id
            strapiId
          }
        }
      }
    }
  `)
  return data
}
