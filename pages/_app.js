import Layout from '../components/Layout'
import "../styles/globals.css"
import "../components/layout.scss"
import "../styles/home.scss"
import "../styles/property.scss"
import {appWithTranslation} from "next-i18next";
function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default appWithTranslation(App)
