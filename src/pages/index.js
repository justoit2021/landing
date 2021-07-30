import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../screens/main"
import Services from "../screens/services"
import Progress from "../screens/seo"

const IndexPage = (props) => {
  const [language, setLang] = React.useState('es')

  return (
    <Layout setLanguage={(e) => setLang(e)}>
      <Seo title="JUSTOIT"/>
      <Main langs={language} />
      <Services />
      <Progress />
    </Layout>
  )
}

export default IndexPage
