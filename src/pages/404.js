import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as classes from "../components/UI/NotFound.module.scss"
import * as linkStyles from "../components/UI/Button.module.scss"

import Moon404 from "../assets/svg-layers/full404.svg"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    {/* <div className={classes["bgContainer"]}> */}
    <div className={classes["relativeContainer"]}>
      <div className={classes["moonParallax"]}>
        <div className={classes["alignMoonObjects"]}>
          <Moon404 />
        </div>
      </div>
      <div className={classes["columnSideBySide"]}>
        <div className={classes["message"]}>
          <h1 className={classes["heading"]}>You’re Lost in Space</h1>
          <p className={classes["description"]}>
            The page you’re looking for is now beyond our reach
          </p>
          <Link className={linkStyles["button404"]} to="/">
            Go Back
          </Link>
        </div>
      </div>
    </div>
    {/* </div> */}
  </Layout>
)

export default NotFoundPage
