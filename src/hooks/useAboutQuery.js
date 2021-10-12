import { useStaticQuery, graphql } from "gatsby"
export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      about: allStrapiAbout {
        nodes {
          AboutSection {
            AboutDescription
            DesignSkills {
              id
              skill
            }
            DevelopmentSkills {
              id
              skill
            }
          }
        }
      }
      portrait: file(relativePath: { eq: "Portrait.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, AVIF, WEBP]
          )
        }
      }
    }
  `)
  return data
}
