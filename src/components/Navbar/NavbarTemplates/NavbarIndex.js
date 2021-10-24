// React
import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"

import { motion } from "framer-motion"

// Assets
import Logo from "../../../assets/icons/Logo.svg"
import { FaBars } from "react-icons/fa"

// Components
import NavbarLinks from "../NavbarLinks"

// Styles
import * as classes from "../Navbar.module.scss"

// Animation
const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const logoFadeInDown = {
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

const NavbarIndex = ({ navbarActive }) => {
  const [sidebar, setSideBar] = useState(true)

  const toggleHandler = () => {
    setSideBar(!sidebar)
    document.body.classList.toggle("blur")
  }

  const [width, setWidth] = useState("")

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight)

    if (width > 320 && sidebar) {
      setSideBar(sidebar)
      document.body.classList.remove("blur")
    }
    // Cleanup
    return () => {
      window.removeEventListener("resize", updateWidthAndHeight)
      setSideBar(!sidebar)
    }
  }, [width, sidebar])

  return (
    <nav
      className={
        navbarActive
          ? `${classes["navbar"]} ${classes["active"]}`
          : `${classes["navbar"]}`
      }
    >
      <div className={`container ${classes["alignment"]}`}>
        <motion.div
          className={classes["navbarPosition"]}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {/* Logo */}
          <motion.div
            className={`${classes["logo"]}`}
            variants={logoFadeInDown}
          >
            <Link to="hero" smooth={true} duration={1000} spy={true}>
              <Logo />
            </Link>
          </motion.div>

          <motion.div variants={logoFadeInDown}>
            <FaBars className={`${classes["bar"]}`} onClick={toggleHandler} />
          </motion.div>

          {/* DesktopMenu */}
          <div className={`${classes["desktopMenu"]}`}>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <NavbarLinks />
            </motion.ul>
          </div>

          {/* Mobile Menu */}
          <div className={`${classes["mobileMenu"]}`}>
            {!sidebar && (
              <div
                className={classes["blur"]}
                onClick={toggleHandler}
                aria-hidden="true"
              />
            )}
            <ul
              className={`${
                sidebar ? `${classes["slideIn"]}` : `${classes["slideOut"]}`
              }`}
            >
              <NavbarLinks toggleSideNav={toggleHandler} />
            </ul>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default NavbarIndex
