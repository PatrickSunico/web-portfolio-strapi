import { useStaticQuery, graphql } from "gatsby"
export const useHeroDataQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      socialLinks: allStrapiHero {
        nodes {
          HeroSection {
            github_link
            behance_link
            linkedin_link
          }
        }
      }
      heroDetails: allStrapiHero {
        nodes {
          HeroSection {
            caption
            headline
            id
            secondary_headline
          }
        }
      }
    }
  `)
  return data
}
