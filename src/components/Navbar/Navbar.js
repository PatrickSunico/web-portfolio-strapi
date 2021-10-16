import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "../../assets/icons/Logo.svg"

// Styles
import * as classes from "./Navbar.module.scss"

// Components
import NavbarIndex from "./NavbarTemplates/NavbarIndex"
import NavbarPortfolio from "./NavbarTemplates/NavbarPortfolio"

const Navbar = data => {
  const currentLocation = data.navigation.path
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [navbarActive, setNavbarActive] = useState(false)
  const changeNavbarBackground = () => {
    scrollTop >= 80 ? setNavbarActive(true) : setNavbarActive(false)
  }
  useEffect(() => {
    const onScroll = e => {
      // scrollTop - element's measurement of distance to it's topmost visible content, Root element is <html> will show scrollY
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > scrollTop)
      changeNavbarBackground()
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop, changeNavbarBackground])

  return (
    <>
      {currentLocation !== "/" ? (
        <NavbarPortfolio navbarActive={navbarActive} />
      ) : (
        <NavbarIndex navbarActive={navbarActive} />
      )}
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
