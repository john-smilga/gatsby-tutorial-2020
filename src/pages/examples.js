import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
const examples = () => {
  return (
    <Layout>
      <h1>hello from examples page</h1>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

export default examples
