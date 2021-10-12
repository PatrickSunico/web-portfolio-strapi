import React from "react"

import { Link } from "gatsby"
import * as classes from "./PortfolioCard.module.scss"

import { StaticImage } from "gatsby-plugin-image"
import Behance from "../../../assets/icons/BehanceLink.svg"
import WebLink from "../../../assets/icons/WebLink.svg"
import Github from "../../../assets/icons/GithubLink.svg"
import AndroidLink from "../../../assets/icons/AndroidLink.svg"
import AppleLink from "../../../assets/icons/AppleLink.svg"

const PortfolioCard = props => {
  console.log(props)
  const { id, projectDetails, projectTitle, projectType, slug, strapiId } =
    props.content

  const { projectCategories, socialLinks } = projectDetails
  const renderSocial = links => {
    return links.map(({ availableLinks, socialLinks }) => (
      <>
        {availableLinks === "Behance" && (
          <li className={classes["link"]}>
            <Link to={socialLinks}>
              <Behance />
            </Link>
          </li>
        )}
        {availableLinks === "Github" && (
          <li className={classes["link"]}>
            <Link to={socialLinks}>
              <Github />
            </Link>
          </li>
        )}
        {availableLinks === "WebLink" && (
          <li className={classes["link"]}>
            <Link to={socialLinks}>
              <WebLink />
            </Link>
          </li>
        )}
        {availableLinks === "AndroidLink" && (
          <li className={classes["link"]}>
            <Link to={socialLinks}>
              <AndroidLink />
            </Link>
          </li>
        )}
      </>
    ))
  }
  return (
    <>
      {/* Portfolio Cards */}
      <div className={classes["portfolioCard"]}>
        <div className={classes["content"]}>
          <div className={`${classes["details"]}`}>
            <div className={classes["categories"]}>
              {projectCategories.map(({ projectCategory, id }) => (
                <p key={id}>{projectCategory}</p>
              ))}
            </div>

            <h4>{projectTitle}</h4>

            <Link className={classes["projectLink"]} to="/">
              View Project
            </Link>

            <ul className={classes["socialLinks"]}>
              {renderSocial(socialLinks)}
            </ul>
          </div>
        </div>

        <div className={classes["imageWrapper"]}>
          <StaticImage
            src="../../../images/nedina-mobile.jpg"
            alt="nedina-design"
            width={1000}
            className={classes["image"]}
          />
        </div>
      </div>
    </>
  )
}

export default PortfolioCard
