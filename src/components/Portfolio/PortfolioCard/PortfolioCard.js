import React from "react"
import Fade from "react-reveal/Fade"

import * as classes from "./PortfolioCard.module.scss"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Behance from "../../../assets/icons/BehanceLink.svg"
import WebLink from "../../../assets/icons/WebLink.svg"
import Github from "../../../assets/icons/GithubLink.svg"

const PortfolioCard = props => {
  const { projectDetails, projectTitle, CardCover } = props.content

  const image = getImage(CardCover.localFile)
  const { projectCategories, socialLinks } = projectDetails

  return (
    <>
      {/* Portfolio Cards */}
      <Fade big>
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
              </div>

              <ul className={classes["socialLinks"]}>
                {socialLinks.map(
                  ({ availableLinks, socialLink, id }) =>
                    (availableLinks === "Behance" && (
                      <li key={id} className={classes["link"]}>
                        <a href={socialLink}>
                          <Behance />
                        </a>
                      </li>
                    )) ||
                    (availableLinks === "Github" && (
                      <li key={id} className={classes["link"]}>
                        <a href={socialLink}>
                          <Github />
                        </a>
                      </li>
                    )) ||
                    (availableLinks === "Web" && (
                      <li key={id} className={classes["link"]}>
                        <a href={socialLink}>
                          <WebLink />
                        </a>
                      </li>
                    ))
                )}
              </ul>
            </div>
          </div>

          <div className={classes["imageWrapper"]}>
            <GatsbyImage image={image} alt="design-cover" />
          </div>
        </div>
      </Fade>
    </>
  )
}

export default PortfolioCard
