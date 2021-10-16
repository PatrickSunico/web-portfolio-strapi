import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as classes from "./PortfolioTemplate.module.scss"

export const query = graphql`
  query PortfolioTemplateQuery($slug: String!) {
    strapiPortfolios(slug: { eq: $slug }) {
      id
      projectTitle
      slug
      strapiId
      updated_at
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
      projectType
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
      SEO {
        id
        metaContentType
        metaDescription
        metaTitle
        viewPort
      }
    }
  }
`

const PortfolioTemplate = data => {
  const portfolio = data.data.strapiPortfolios
  const { CardCover, SEO, id, projectDetails, projectTitle, projectType } =
    portfolio

  const { projectCategories, projectTools, socialLinks } = projectDetails

  // console.log(portfolio)
  return (
    <Layout>
      <div className="sectionContainer">
        <div className="container flex-direction-column">
          <div className={classes["portfolioTemplate"]}>
            <div className={classes["detailsContainer"]}>
              <div className={classes["categoriesContainer"]}>
                {projectCategories.map(({ projectCategory, id }) => (
                  <p className={classes["paragraphTags"]} key={id}>
                    {projectCategory}
                  </p>
                ))}
              </div>
              <h3 className={classes["mainHeading"]}>{projectTitle}</h3>
              <div className={classes["toolsContainer"]}>
                <span>Tools:</span>

                {projectTools.map(({ tool, id }) => (
                  <p key={id}>{tool}</p>
                ))}
              </div>
            </div>

            <div className={classes["splitSection"]}>
              <div className={classes["description"]}>
                <h3 className={classes["mainHeading"]}>About</h3>
                <p>Lorem</p>
              </div>

              <div className={classes["sideImage"]}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioTemplate
