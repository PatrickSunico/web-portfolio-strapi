import { useStaticQuery, graphql } from "gatsby"
export const useProjectQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {

    # make eq dynamic
    web_projects: allStrapiProjects(filter: {ProjectType: {eq: "Web"}}) {
        
    }
        
      experiences: allStrapiExperiences {
        edges {
          node {
            id
            strapiId
            description {
              description
              id
            }
            company
            country
            start_date
            end_date
            position
          }
        }
      }
    }
  `)
  return data
}

//   allStrapiProjects(filter: {ProjectType: {eq: "Web"}}) {
//     nodes {
//       ProjectTitle
//       ProjectType
//       slug
//     }
//   }
