import React from "react"
import * as classes from "./ProjectCard.module.scss"

// import LinkedIn from "../../assets/i\cons/LinkedInFooter.svg"
import GithubLink from "../../../assets/icons/GithubLink.svg"
import BehanceLink from "../../../assets/icons/BehanceLink.svg"
import WebLink from "../../../assets/icons/WebLink.svg"

const ProjectCard = props => {
  return (
    <div className={classes["projectCard"]}>
      <div className={classes["projectDetails"]}>
        {/* <h5>{props.children}</h5> */}
        <p> Website, Illustration </p>
        <h5> Bridgestone </h5>

        <ul className={classes["projectLinks"]}>
          <li>
            <a>
              <GithubLink />
            </a>
          </li>
          <li>
            <a>
              <BehanceLink />
            </a>
          </li>
          <li>
            <a>
              <WebLink />
            </a>
          </li>
        </ul>
      </div>

      <div className={classes["projectNumber"]}>01</div>
    </div>
  )
}

export default ProjectCard
