import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../screens/main"
import Services from "../screens/services"
import Progress from "../screens/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="JUSTOIT" />
    <Main />
    <Services />
    <Progress />
  </Layout>
)

export default IndexPage
