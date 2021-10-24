import React from "react"
import { Link } from "react-scroll"

import { FaTimes } from "react-icons/fa"
import { motion } from "framer-motion"
// Data
import { MenuData } from "../../data/MenuData"

import * as classes from "./Navbar.module.scss"

const navLinksFadeInDown = {
  // Default state hide it first then reveal it
  hidden: {
    opacity: 0,
    y: -20,
    ease: [0.6, -0.05, 0.01, 0.99],
    duration: 0.6,
  },
  show: {
    opacity: 1,
    y: 0,
    ease: [0.6, -0.05, 0.01, 0.99],
    delay: 0.2,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
}

const NavbarLinks = props => {
  return (
    <>
      <div
        className={`${classes["closeButton"]}`}
        aria-hidden="true"
        role="button"
        tabIndex="0"
        onClick={props.toggleSideNav}
      >
        <FaTimes />
      </div>
      {MenuData.map((link, index) => (
        <motion.li key={index} variants={navLinksFadeInDown}>
          <Link
            to={link.link}
            smooth={true}
            duration={1000}
            activeClass={classes["active"]}
            hashSpy={true}
            spy={true}
            onClick={props.toggleSideNav}
            href={`#${link.link}`}
            role="menuItem"
          >
            {link.title}
          </Link>
        </motion.li>
      ))}
    </>
  )
}

export default NavbarLinks
