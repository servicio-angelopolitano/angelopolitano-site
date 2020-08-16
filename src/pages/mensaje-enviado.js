import React from "react"
import { Link } from "gatsby"
import classes from "stylesheets/sent.module.less"
import plane from "images/mail.svg"

export default () => (
  <div className={classes.container}>
    <div>
      <img src={plane} alt="Icono Avion" />
      <h1>¡Mensaje Enviado!</h1>
      <p>Pronto escucharas de nosotros.</p>
      <Link to="/">
        <button>Regresar</button>
      </Link>
    </div>
  </div>
)
