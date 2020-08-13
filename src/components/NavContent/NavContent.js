import React, { Fragment } from "react"
import classes from "./NavContent.module.less"
import logo from "images/logo.png"
import { Link } from "gatsby"

export default () => (
  <div className={classes.container}>
    <Link to="/" className={classes.logo}>
      <img src={logo} alt="logo" />
    </Link>
    <ul>
      <li>
        <Link to="/lavado-secado">Lavadoras & Secadoras</Link>
        <Link to="/refrigeracion">Refrigeradores</Link>
        <Link to="/aire-acondicionado">Aire Acondicionado</Link>
      </li>
    </ul>
  </div>
)
