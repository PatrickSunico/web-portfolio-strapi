import { useStaticQuery, graphql } from "gatsby"
export const useOtherProjectQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      other_projects: allStrapiOtherProjects(sort: { fields: id }) {
        nodes {
          strapiId
          ProjectCategory {
            projectCategory
            id
          }
          ProjectTitle
          ProjectTools {
            id
            tool
          }
          SocialLink {
            availableLinks
            socialLink
            id
          }
        }
      }
    }
  `)
  return data
}
