import React from "react"
import styles from "../components/blog.module.css"

import Layout from "../components/layout"
const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          voluptatem! Pariatur ipsam eum quas error. Facilis ex in hic
          recusandae eveniet vitae, voluptatum sint laudantium.
        </p>
      </div>
    </Layout>
  )
}

export default blog
