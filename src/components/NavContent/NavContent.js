import React, { useState } from "react"
import classes from "./NavContent.module.less"
import logo from "images/logo.png"
import menu from "images/menu.svg"
import phone from "images/phone.svg"
import closeIcon from "images/close.svg"
import { Link } from "gatsby"

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={[classes.container, open ? classes.menuOpen : ""].join(" ")}
    >
      <Link to="/" className={classes.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <ul onClick={() => setOpen(false)}>
        <li>
          <Link to="/linea-blanca/">Lavadoras & Secadoras</Link>
        </li>
        <li>
          <Link to="/refrigeracion/">Refrigeradores</Link>
        </li>
        <li>
          <Link to="/aire-acondicionado/">Aire Acondicionado</Link>
        </li>
        <li>
          <a href="#contacto" className={classes.reverse}>
            <img src={phone} alt="Icono Teléfono" />
            Contacto
          </a>
        </li>
      </ul>
      <img
        onClick={() => setOpen(false)}
        src={closeIcon}
        className={classes.closeButton}
      />
      <img
        onClick={() => setOpen(true)}
        src={menu}
        className={classes.menuButton}
      />
    </div>
  )
}
