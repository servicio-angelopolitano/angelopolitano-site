import React from "react"
import { StaticQuery, graphql } from "gatsby"
import classes from "./Logos.module.less"
import Img from "gatsby-image"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          logo1: file(relativePath: { eq: "ac_logos/carrier.png" }) {
            ...CompanyLogo
          }
          logo2: file(relativePath: { eq: "ac_logos/daikin.png" }) {
            ...CompanyLogo
          }
          logo3: file(relativePath: { eq: "ac_logos/lennox.png" }) {
            ...CompanyLogo
          }
          logo4: file(relativePath: { eq: "ac_logos/mcquay.png" }) {
            ...CompanyLogo
          }
          logo5: file(relativePath: { eq: "ac_logos/midea.png" }) {
            ...CompanyLogo
          }
          logo6: file(relativePath: { eq: "ac_logos/toshiba.png" }) {
            ...CompanyLogo
          }
          logo7: file(relativePath: { eq: "ac_logos/york.png" }) {
            ...CompanyLogo
          }
        }
      `}
      render={data => (
        <div className={classes.logos}>
          <p>Trabajamos con las marcas principales del mercado.</p>
          <div>
            {Array(7)
              .fill()
              .map((_, index) => (
                <Img
                  key={index}
                  fluid={data[`logo${index + 1}`].childImageSharp.fluid}
                  
                  alt={console.log("index", `logo${index + 1}`)}
                />
              ))}
          </div>
        </div>
      )}
    />
  )
}
