import React from "react"

import { Link } from "gatsby"
import * as classes from "./PortfolioCard.module.scss"
import { graphql } from "gatsby"

import { GatsbyImage, getImage, StaticImage, Img } from "gatsby-plugin-image"
import Behance from "../../../assets/icons/BehanceLink.svg"
import WebLink from "../../../assets/icons/WebLink.svg"
import Github from "../../../assets/icons/GithubLink.svg"
import AndroidLink from "../../../assets/icons/AndroidLink.svg"
import AppleLink from "../../../assets/icons/AppleLink.svg"

const PortfolioCard = props => {
  const {
    id,
    projectDetails,
    projectTitle,
    projectType,
    slug,
    strapiId,
    CardCover,
  } = props.content

  const image = CardCover.url

  const { projectCategories, socialLinks } = projectDetails

  return (
    <>
      {/* Portfolio Cards */}
      <div className={classes["portfolioCard"]}>
        <div className={classes["content"]}>
          <div className={`${classes["details"]}`}>
            <div className={classes["detailsSpacing"]}>
              <div className={classes["categories"]}>
                {projectCategories.map(({ projectCategory, id }) => (
                  <p key={id}>{projectCategory}</p>
                ))}
              </div>

              <h4>{projectTitle}</h4>

              <Link className={classes["projectLink"]} to="/">
                View Project
              </Link>
            </div>

            <ul className={classes["socialLinks"]}>
              {socialLinks.map(
                ({ availableLinks, socialLinks, id }) =>
                  (availableLinks === "Behance" && (
                    <li key={id} className={classes["link"]}>
                      <Link to="/">
                        <Behance />
                      </Link>
                    </li>
                  )) ||
                  (availableLinks === "Github" && (
                    <li key={id} className={classes["link"]}>
                      <Link to="/">
                        <Github />
                      </Link>
                    </li>
                  )) ||
                  (availableLinks === "WebLink" && (
                    <li key={id} className={classes["link"]}>
                      <Link to="/">
                        <WebLink />
                      </Link>
                    </li>
                  ))
              )}
            </ul>
          </div>
        </div>

        <div className={classes["imageWrapper"]}>
          <img src={image} alt="design-cover" className={classes["image"]} />
        </div>
      </div>
    </>
  )
}

export default PortfolioCard

// export const imageQuery = graphql`
//   {
//     test {
//       localImage {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `

// console.log(imageQuery)
