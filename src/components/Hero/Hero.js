import React from "react"
import * as classes from "./Hero.module.scss"

import { Link, useStaticQuery, graphql } from "gatsby"

import Button from "../UI/Button"
import AnchorButton from "../UI/AnchorButton"
import Layout from "../layout"

const Hero = () => {
  return (
    <div className={classes["hero"]}>
      <div className="heroContainer">
        <div className="container">
          <div className="row">
            <div className="sectionBlock flex-direction-column">
              <h2 className={classes["heroHeading"]}>Patrick Sunico</h2>
              <p className={classes["heroCaption"]}>
                Frontend Developer & UI Designer
              </p>

              <div
                className={`${classes["heroDescription"]} col-md-6 col-xl-8`}
              >
                <p>
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building accessible, human-centered
                  products at
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://catalyst.world/"
                  >
                    Catalyst
                  </a>
                </p>
              </div>

              <AnchorButton classNames={`button`}> My Resume</AnchorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
