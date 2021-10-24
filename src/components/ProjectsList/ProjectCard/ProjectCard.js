import React from "react"
import * as classes from "./ProjectCard.module.scss"
import Fade from "react-reveal/Fade"

import GithubLink from "../../../assets/icons/GithubLink.svg"
import BehanceLink from "../../../assets/icons/BehanceLink.svg"
import WebLink from "../../../assets/icons/WebLink.svg"

const ProjectCard = props => {
  const { ProjectCategory, ProjectTitle, SocialLink, strapiId } = props.content
  const stringifyId = strapiId.toString()
  const padStart = stringifyId.padStart(2, "0")

  return (
    <Fade big>
      <div className={classes["projectCard"]}>
        <div className={classes["projectDetails"]}>
          <div className={classes["projectCategories"]}>
            {ProjectCategory.map(({ projectCategory, id }) => (
              <p key={id}> {projectCategory} </p>
            ))}
          </div>
          <h5> {ProjectTitle} </h5>

          <ul>
            {SocialLink.map(
              ({ availableLinks, socialLink, id }) =>
                (availableLinks === "Behance" && (
                  <li key={id}>
                    <a href={socialLink} target="_blank" rel="noreferrer">
                      <BehanceLink />
                    </a>
                  </li>
                )) ||
                (availableLinks === "Github" && (
                  <li key={id}>
                    <a href={socialLink} target="_blank" rel="noreferrer">
                      <GithubLink />
                    </a>
                  </li>
                )) ||
                (availableLinks === "Web" && (
                  <li key={id}>
                    <a href={socialLink} target="_blank" rel="noreferrer">
                      <WebLink />
                    </a>
                  </li>
                ))
            )}
          </ul>
        </div>

        <div className={classes["projectNumber"]}>{padStart}</div>
      </div>
    </Fade>
  )
}

export default ProjectCard
