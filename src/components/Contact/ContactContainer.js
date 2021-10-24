import React from "react"
import { Link } from "react-scroll"

import * as classes from "./ContactContainer.module.scss"
import ContactForm from "./ContactForm/ContactForm"
import ContactDetails from "./ContactDetails/ContactDetails"

const ContactContainer = () => {
  return (
    <div id="contact" className={classes["contactParent"]}>
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
    </div>
  )
}

export default ContactContainer
