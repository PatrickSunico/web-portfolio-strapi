import React from "react"
import AboutDescription from "./AboutDescription/AboutDescription"
import Fade from "react-reveal/Fade"
// About Section
const About = () => {
  return (
    <section id="about">
      <div className="marginTop">
        <div className="sectionContainer">
          <div className="container flex-direction-column">
            <div className="marginTop">
              <Fade big>
                <AboutDescription />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
