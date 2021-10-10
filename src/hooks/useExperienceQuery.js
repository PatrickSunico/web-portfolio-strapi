import { useStaticQuery, graphql } from "gatsby"
export const useExperienceQuery = () => {
  const data = useStaticQuery(graphql`
    query ExperienceQuery {
      experiences: allStrapiExperiences {
        edges {
          node {
            id
            description {
              description
              id
            }
            company
            country
            start_date
            end_date
          }
        }
      }
      companies: allStrapiExperiences {
        edges {
          node {
            id
            company
          }
        }
      }
    }
  `)
  return data
}
