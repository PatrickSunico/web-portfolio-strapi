import React from "react"
import { Link } from "gatsby"

import * as classes from "./ContactForm.module.scss"
import Button from "../UI/Button"

import LinkedIn from "../../assets/icons/LinkedInLink.svg"
import Behance from "../../assets/icons/BehanceLink.svg"
import Github from "../../assets/icons/GithubLink.svg"

const ContactForm = () => {
  return (
    <div className={classes["contactParent"]}>
      <div className={classes["contactContainer"]}>
        <div className="sectionContainer">
          <div className="container flex-direction-column">
            <div className={classes["contactContainer"]}>
              {/* Grid */}
              <div className={classes["gridFormContainer"]}>
                <div className={classes["gridContent"]}>
                  <h1>Get In Touch</h1>
                  <p>
                    Feel free to send me a message and I’ll get back to you as
                    soon as I can.
                  </p>
                  {/* <div className={classes["gridForm"]}> */}
                  <form className={classes["gridForm"]}>
                    <div className={classes["input"]}>
                      <input
                        id="name"
                        type="text"
                        className={classes["inputField"]}
                        required
                      />
                      <label htmlFor="name" className={classes["inputLabel"]}>
                        Name
                      </label>
                    </div>
                    <div className={classes["input"]}>
                      <input
                        type="email"
                        id="email"
                        className={classes["inputField"]}
                        required
                      />
                      <label
                        htmlFor="email"
                        id="email"
                        className={classes["inputLabel"]}
                      >
                        Email
                      </label>
                    </div>

                    {/* Text Area */}
                    <div className={classes["input"]}>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="6"
                        className={classes["inputField"]}
                        required
                      />
                      <label
                        htmlFor="message"
                        className={classes["inputLabel"]}
                      >
                        Message
                      </label>
                    </div>

                    <Button classNames={`buttonSubmit`} type="submit">
                      Submit
                    </Button>
                  </form>
                  {/* </div> */}
                </div>
                {/* Grid Details */}
                <div className={classes["gridDetails"]}>
                  <div className={classes["details"]}>
                    <span>Email</span>
                    <a href="mailto:apatricksunico@gmail.com">
                      apatricksunico@gmail.com
                    </a>
                  </div>
                  <div className={classes["details"]}>
                    <span>Number</span>
                    <p>(+974) 3375 9809</p>
                  </div>

                  <div className={classes["details"]}>
                    <ul className={classes["contactFormSocialLinks"]}>
                      <li>
                        <Link to="/">
                          <Github />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <LinkedIn />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <Behance />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Form */}
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

export default ContactForm
