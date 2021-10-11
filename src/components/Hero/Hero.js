import React from "react"
import * as classes from "./Hero.module.scss"

import AnchorButton from "../UI/AnchorButton"

// import { useAboutQuery } from "../../../hooks/useAboutQuery"
import { useHeroDataQuery } from "../../hooks/useHeroDataQuery"

const Hero = () => {
  const heroQuery = useHeroDataQuery()
  const heroData = heroQuery.heroDetails.edges[0].node

  const {
    headline_title,
    headline_description,
    headline_caption,
    id,
    strapiId,
  } = heroData

  return (
    <div className={classes["hero"]}>
      <div className="heroContainer">
        <div className="container">
          <div className="row">
            <div className="sectionBlock flex-direction-column">
              <h2 className={classes["heroHeading"]}>{headline_title}</h2>
              <p className={classes["heroCaption"]}>
                {headline_caption}
                {/* Frontend Developer & UI Designer */}
              </p>

              <div
                className={`${classes["heroDescription"]} col-md-6 col-xl-8`}
                dangerouslySetInnerHTML={{ __html: headline_description }}
              ></div>

              <AnchorButton classNames={`button`}> My Resume</AnchorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
