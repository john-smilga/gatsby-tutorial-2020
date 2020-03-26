import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          person {
            age
            name
          }
          author
          data
          description
          title
        }
      }
    }
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <h2>{data.site.siteMetadata.person.age}</h2>
    </div>
  )
}

export default ComponentName
