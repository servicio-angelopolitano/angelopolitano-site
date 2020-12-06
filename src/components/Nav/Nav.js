import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import classes from "./Nav.module.less"
import NavContent from "../NavContent/NavContent"

const NETLIFY_URL = "https://servicioangelopolitano.netlify.app"
const REAL_URL = "https://www.servicioangelopolitano.com"

export default ({ title, canonical, description, white }) => {
  let [scrolled, setScrolled] = useState(false)

  /*useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", e => {
        if (window.scrollY > 150) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      })
    }
  }, [])*/

  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="canonical"
          href={"https://www.servicioangelopolitano.com" + canonical}
        />
        <meta name="description" content={description} />
        <script></script>
      </Helmet>
      <Helmet
        script={[
          {
            innerHTML: `(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2139855,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          },
        ]}
      />
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
