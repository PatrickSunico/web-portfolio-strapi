import React from "react"
import Logo from "../../../assets/icons/Logo.svg"
import { Link } from "gatsby"
import * as classes from "../Navbar.module.scss"

function NavbarPortfolio({ navbarActive }) {
  return (
    <nav
      className={
        navbarActive
          ? `${classes["portfolio"]} ${classes["active"]}`
          : `${classes["portfolio"]}`
      }
    >
      <div className={`container ${classes["alignment"]}`}>
        <div className="row">
          {/* Logo */}
          <div className={`${classes["logo"]}`}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarPortfolio
