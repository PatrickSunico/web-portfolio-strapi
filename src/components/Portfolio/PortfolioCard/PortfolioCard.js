import React from "react"

import { Link } from "gatsby"
import * as classes from "./PortfolioCard.module.scss"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Behance from "../../../assets/icons/BehanceLink.svg"
import WebLink from "../../../assets/icons/WebLink.svg"
import Github from "../../../assets/icons/GithubLink.svg"

const PortfolioCard = props => {
  const { projectDetails, projectTitle, CardCover, slug } = props.content

  console.log(CardCover)
  const image = getImage(CardCover.localFile)
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
              <Link className={classes["projectLink"]} to={`/${slug}`}>
                View Project
              </Link>
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
                  (availableLinks === "WebLink" && (
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
          <Link to={`/${slug}`}>
            <GatsbyImage
              image={image}
              alt="design-cover"
              className={classes["image"]}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default PortfolioCard
