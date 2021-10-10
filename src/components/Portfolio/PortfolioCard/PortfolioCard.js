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
  const { id, title, type, category, links } = props.content
  return (
    <>
      {/* Portfolio Cards */}

      <a className={classes["portfolioCard"]}>
        <div className={classes["content"]}>
          <div className={`${classes["details"]}`}>
            <p>UI, UX, Mobile App</p>
            <h4>Nedina</h4>

            <Link className={classes["projectLink"]} to="/">
              View Project
            </Link>

            <ul className={classes["socialLinks"]}>
              <li className={classes["link"]}>
                <Link to="/">
                  <Behance />
                </Link>
              </li>
              <li className={classes["link"]}>
                <Link to="/">
                  <WebLink />
                </Link>
              </li>
              <li className={classes["link"]}>
                <Link to="/">
                  <Github className={classes["githubIcon"]} />
                </Link>
              </li>
              <li className={classes["link"]}>
                <Link to="/">
                  <AndroidLink />
                </Link>
              </li>
              <li className={classes["link"]}>
                <Link to="/">
                  <AppleLink />
                </Link>
              </li>
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
      </a>
    </>
  )
}

export default PortfolioCard
