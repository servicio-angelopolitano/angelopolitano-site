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
        <Link to="/lavado-secado">Lavado/Secado</Link>
        <Link to="/refrigeracion">Refrigeracion</Link>
        <Link to="/aire-acondicionado">Aire Acondicionado</Link>
      </li>
    </ul>
  </div>
)
