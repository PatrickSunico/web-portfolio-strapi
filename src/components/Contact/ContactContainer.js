import React from "react"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"

import * as classes from "./ContactContainer.module.scss"
import ContactForm from "./ContactForm/ContactForm"
import ContactDetails from "./ContactDetails/ContactDetails"

const ContactContainer = () => {
  return (
    <section id="contact" className={classes["contactParent"]}>
      <Fade big>
        <div className="sectionContainer">
          <div className="container flex-direction-column">
            {/* Grid */}
            <div className={classes["gridFormContainer"]}>
              {/* Contact Form */}
              <ContactForm />
              {/* Grid Details */}
              <ContactDetails />
            </div>

            <div className={classes["copyright"]}>
              Designed and Built by
              <Link to="hero" smooth={true} duration={1000} spy={true}>
                Patrick Sunico
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default ContactContainer
