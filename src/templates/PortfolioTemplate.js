import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as classes from "./PortfolioTemplate.module.scss"

// Components
import Navbar from "../components/Navbar/Navbar"
import NavbarPortfolio from "../components/Navbar/NavbarTemplates/NavbarPortfolio"
import PortfolioHeader from "./PortolioHeader/PortfolioHeader"
import PortfolioSection from "./PortfolioSection/PortfolioSection"

export const query = graphql`
  query PortfolioTemplateQuery($slug: String!) {
    strapiPortfolios(slug: { eq: $slug }) {
      id
      projectTitle
      slug
      strapiId
      updated_at

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
      sectionField
    }
  }
`

const PortfolioTemplate = data => {
  const portfolio = data.data.strapiPortfolios
  const { SEO, projectDetails, projectTitle, sectionField } = portfolio

  const { projectCategories, projectTools, socialLinks } = projectDetails

  return (
    <Layout>
      <Navbar navigation={data} />

      <div className={classes["portfolioTemplate"]}>
        <PortfolioHeader
          projectTitle={projectTitle}
          projectCategories={projectCategories}
          projectTools={projectTools}
          socialLinks={socialLinks}
        />

        <PortfolioSection sectionField={sectionField} />
      </div>
    </Layout>
  )
}

export default PortfolioTemplate
