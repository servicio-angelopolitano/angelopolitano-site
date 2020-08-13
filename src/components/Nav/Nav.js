import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import classes from "./Nav.module.less"
import NavContent from "../NavContent/NavContent"

export default ({ title, canonical, description }) => (
  <Fragment>
    {canonical ? (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
        <html lang="es" />
        <meta name="description" content={description} />
      </Helmet>
    ) : null}
    <div className={classes.container}>
      <div className={classes.content}>
        <NavContent />
      </div>
    </div>
  </Fragment>
)
