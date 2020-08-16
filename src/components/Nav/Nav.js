import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import classes from "./Nav.module.less"
import NavContent from "../NavContent/NavContent"

const NETLIFY_URL = "https://servicioangelopolitano.netlify.app"
const REAL_URL = "https://www.servicioangelopolitano.com"

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
      <Helmet>
        <html lang="es" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="canonical"
          href={
            (process.env.GATSBY_ACTIVE_ENV === "QA" ? NETLIFY_URL : REAL_URL) +
            canonical
          }
        />
        <meta name="description" content={description} />
      </Helmet>
      <div
        className={[
          classes.container,
          scrolled || white ? classes.blue : "",
        ].join(" ")}
      >
        <div className={classes.content}>
          <NavContent />
        </div>
      </div>
    </>
  )
}
