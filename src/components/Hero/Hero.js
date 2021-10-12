import React from "react"
import * as classes from "./Hero.module.scss"

import AnchorButton from "../UI/AnchorButton"

import { useHeroDataQuery } from "../../hooks/useHeroDataQuery"

const Hero = () => {
  const heroQuery = useHeroDataQuery()
  const heroData = heroQuery.heroDetails.nodes[0].HeroSection
  const { headline, secondary_headline, caption } = heroData

  return (
    <div className={classes["hero"]}>
      <div className="heroContainer">
        <div className="container">
          <div className="row">
            <div className="sectionBlock flex-direction-column">
              <h2 className={classes["heroHeading"]}>{headline}</h2>
              <p className={classes["heroCaption"]}>{secondary_headline}</p>
              <div
                className={`${classes["heroDescription"]} col-md-6 col-xl-8`}
                dangerouslySetInnerHTML={{ __html: caption }}
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
