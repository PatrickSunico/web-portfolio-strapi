import React from "react"
import { Link } from "gatsby"

import * as classes from "./ContactContainer.module.scss"
import ContactForm from "./ContactForm/ContactForm"
import ContactDetails from "./ContactDetails/ContactDetails"

const ContactContainer = () => {
  return (
    <div className={classes["contactParent"]}>
      <div className={classes["contactContainer"]}>
        <div className="sectionContainer">
          <div className="container flex-direction-column">
            <div className={classes["contactContainer"]}>
              {/* Grid */}
              <div className={classes["gridFormContainer"]}>
                {/* Contact Form */}
                <ContactForm />
                {/* Grid Details */}
                <ContactDetails />
              </div>
            </div>

            <div className={classes["copyright"]}>
              Designed and Built by <a>Patrick Sunico</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactContainer
