import { useStaticQuery, graphql } from "gatsby"
export const usePortfolioQuery = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      project_cards: allStrapiPortfolios {
        edges {
          node {
            CardCover {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1040
                    placeholder: NONE
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
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
