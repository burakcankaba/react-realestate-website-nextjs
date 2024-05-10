import Layout from '../components/Layout'
import "../styles/globals.css"
import "../components/layout.scss"
import "../styles/home.scss"
import "../styles/property.scss"
import { appWithTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import Image from 'next/image'
function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return loading && (<div className='spinner-wrapper'>
    <Image src="/loader.webp"
      alt="loader"
      width={80}
      height={80}
      priority

    />
  </div>)
}

function App({ Component, pageProps }) {
  return <>
    <Loading />
    <Layout>

      <Component {...pageProps} />

    </Layout></>
}

export default appWithTranslation(App)
