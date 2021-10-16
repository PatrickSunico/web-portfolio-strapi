import React from "react"
import Logo from "../../../assets/icons/Logo.svg"
import { Link } from "gatsby"
import * as classes from "../Navbar.module.scss"
import NavbarLinks from "../NavbarLinks"

function NavbarIndex({ navbarActive }) {
  console.log(navbarActive)
  return (
    <nav
      className={
        navbarActive
          ? `${classes["navbar"]} ${classes["active"]}`
          : `${classes["navbar"]}`
      }
    >
      <div className={`container ${classes["alignment"]}`}>
        <div className="row">
          {/* Logo */}
          <div className={`${classes["logo"]}`}>
            <Link className={classes["logoLink"]} to="/">
              <Logo />
            </Link>
          </div>

          {/* Menu */}
          <div className={`${classes["menu"]}`}>
            <NavbarLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarIndex
