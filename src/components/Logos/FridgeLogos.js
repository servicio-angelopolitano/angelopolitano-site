import React from "react"
import { StaticQuery, graphql } from "gatsby"
import classes from "./Logos.module.less"
import Img from "gatsby-image"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          logo1: file(relativePath: { eq: "other_logos/samsung.png" }) {
            ...CompanyLogo
          }
          logo2: file(relativePath: { eq: "other_logos/sub-zero.png" }) {
            ...CompanyLogo
          }
          logo3: file(relativePath: { eq: "other_logos/torrey.png" }) {
            ...CompanyLogo
          }
          logo4: file(relativePath: { eq: "other_logos/whirlpool.jpg" }) {
            ...CompanyLogo
          }
          logo5: file(relativePath: { eq: "other_logos/daewoo.png" }) {
            ...CompanyLogo
          }
          logo6: file(
            relativePath: { eq: "other_logos/whitewestinghouse.png" }
          ) {
            ...CompanyLogo
          }
          logo7: file(relativePath: { eq: "other_logos/electrolux.png" }) {
            ...CompanyLogo
          }
          logo8: file(relativePath: { eq: "other_logos/ge.png" }) {
            ...CompanyLogo
          }
          logo9: file(relativePath: { eq: "other_logos/hoover.png" }) {
            ...CompanyLogo
          }
          logo10: file(relativePath: { eq: "other_logos/kenmore.png" }) {
            ...CompanyLogo
          }
          logo11: file(relativePath: { eq: "other_logos/lg.png" }) {
            ...CompanyLogo
          }
          logo12: file(relativePath: { eq: "other_logos/mabe.jpg" }) {
            ...CompanyLogo
          }
          logo13: file(relativePath: { eq: "other_logos/maytag.jpg" }) {
            ...CompanyLogo
          }
          logo14: file(relativePath: { eq: "other_logos/ojeda.png" }) {
            ...CompanyLogo
          }
        }
      `}
      render={data => (
        <div className={classes.logos}>
          <p>Trabajamos con las marcas principales del mercado.</p>
          <div>
            {Array(14)
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
