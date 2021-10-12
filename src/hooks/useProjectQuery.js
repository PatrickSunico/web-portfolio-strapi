import { useStaticQuery, graphql } from "gatsby"
export const useProjectQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      project_cards: allStrapiProjects {
        edges {
          node {
            projectTitle
            slug
            projectType
            projectDetails {
              projectCategories {
                projectCategory
                id
              }
              projectTools {
                id
                tool
              }
              socialLinks {
                availableLinks
                socialLink
                id
              }
            }
            id
            strapiId
          }
        }
      }
    }
  `)
  return data
}
