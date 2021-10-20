import React from "react"
import { Link } from "gatsby"

import { motion } from "framer-motion"
// Data
import { MenuData } from "../../data/MenuData"

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

const NavbarLinks = () => {
  const renderLinks = MenuData.map((link, index) => (
    <motion.li key={index} variants={navLinksFadeInDown}>
      <Link to="/">{link.title}</Link>
    </motion.li>
  ))

  return <>{renderLinks}</>
}

export default NavbarLinks
