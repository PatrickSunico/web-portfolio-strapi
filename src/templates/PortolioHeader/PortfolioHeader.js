import React from "react"
import * as classes from "./PortfolioHeader.module.scss"
import * as fontStyle from "../PortfolioTemplate.module.scss"

import GithubLink from "../../assets/icons/GithubLink.svg"
import BehanceLink from "../../assets/icons/BehanceLink.svg"
import WebLink from "../../assets/icons/WebLink.svg"

const PortfolioHeader = ({
  projectTitle,
  projectCategories,
  projectTools,
  socialLinks,
}) => {
  return (
    <div className="sectionContainer">
      <div className="container flex-direction-column">
        <div className={classes["portfolioHero"]}>
          <div className={classes["categoriesContainer"]}>
            {projectCategories.map(({ projectCategory, id }) => (
              <p className={fontStyle["paragraphTags"]} key={id}>
                {projectCategory}
              </p>
            ))}
          </div>
          <h3 className={fontStyle["mainHeading"]}>{projectTitle}</h3>
          <div className={classes["toolsContainer"]}>
            <span>Tools:</span>

            {projectTools.map(({ tool, id }) => (
              <p className={fontStyle["paragraphTags"]} key={id}>
                {tool}
              </p>
            ))}
          </div>

          <ul className={classes["projectLinks"]}>
            {socialLinks.map(
              ({ availableLinks, socialLink, id }) =>
                (availableLinks === "Behance" && (
                  <li key={id}>
                    <a
                      className={fontStyle["paragraphTags"]}
                      href={socialLink}
                      target="_blank"
                    >
                      Behance
                    </a>
                  </li>
                )) ||
                (availableLinks === "Github" && (
                  <li key={id}>
                    <a
                      className={fontStyle["paragraphTags"]}
                      href={socialLink}
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                )) ||
                (availableLinks === "Web" && (
                  <li key={id}>
                    <a
                      className={fontStyle["paragraphTags"]}
                      href={socialLink}
                      target="_blank"
                    >
                      Website
                    </a>
                  </li>
                ))
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PortfolioHeader
