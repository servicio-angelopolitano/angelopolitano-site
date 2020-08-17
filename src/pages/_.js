import React from "react"
import { Link } from "gatsby"
import classes from "stylesheets/sent.module.less"
import plane from "images/lost.svg"

export default () => (
  <div className={classes.container}>
    <div>
      <img src={plane} alt="" className={classes.notFound} />
      <h1>Página no encontrada</h1>
      <Link to="/">
        <button>Regresar</button>
      </Link>
    </div>
  </div>
)
