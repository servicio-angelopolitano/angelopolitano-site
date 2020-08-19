import React, { useEffect } from "react"
import classes from "./MovingText.module.less"

let getTriggerPoint = (id, offset) => {
  return document.getElementById(id).offsetTop - window.innerHeight + offset
}

export default () => {
  useEffect(() => {
    let triggerPoint = getTriggerPoint("movingText", 0)

    let setStyle = (property, offset, it) => {
      if (
        offset > -100 &&
        offset < 200 &&
        it.style[property] !== `${offset.toFixed(0)}px`
      ) {
        it.style[property] = `${offset.toFixed(0)}px`
      } else if (offset <= -100) {
        it.style[property] = `-100px`
      } else if (offset >= 200) {
        it.style[property] = `200px`
      }
    }

    if (typeof window !== undefined) {
      window.addEventListener("scroll", e => {
        let scroll = window.scrollY
        if (scroll > triggerPoint) {
          let offset = (scroll - triggerPoint) / 15 - 30
          document
            .querySelectorAll("#movingText h3:nth-child(odd)")
            .forEach(it => {
              setStyle("left", offset, it)
            })
          document
            .querySelectorAll("#movingText h3:nth-child(even)")
            .forEach(it => {
              setStyle("right", offset, it)
            })
        }
      })
    }
  }, [])

  return (
    <div className={classes.black} id="movingText">
      <h3>
        GARANTÍA <b>POR ESCRITO</b>
      </h3>
      <h3>
        SERVICIO <b>EL MISMO DÍA</b>
      </h3>
      <h3>
        REFACCIONES <b>ORIGINALES</b>
      </h3>
    </div>
  )
}
