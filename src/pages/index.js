import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
export default () => (
  <div>
    <Navbar />
    Hello people!
    <div>
      <Link to="/blog/">blog page</Link>
    </div>
    <a href="https://www.gatsbyjs.org">gatsby docs</a>
  </div>
)
