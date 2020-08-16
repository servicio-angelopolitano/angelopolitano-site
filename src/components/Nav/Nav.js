import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import classes from "./Nav.module.less"
import NavContent from "../NavContent/NavContent"

export default ({ title, canonical, description, white }) => {
  let [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", e => {
        if (window.scrollY > 150) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      })
    }
  }, [])

  return (
    <>
      {canonical ? (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={canonical} />
          <html lang="es" />
          <meta name="description" content={description} />
        </Helmet>
      ) : null}
      <div
        className={[classes.container, scrolled || white ? classes.blue : ""].join(" ")}
      >
        <div className={classes.content}>
          <NavContent />
        </div>
      </div>
    </>
  )
}
