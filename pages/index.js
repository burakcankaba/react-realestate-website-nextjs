import Head from 'next/head'
import Banner from '@/components/banner/Banner';
import Properties from '@/components/properties/Properties';
import SeoNote from '@/components/seoNote/SeoNote';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
      <title>{t('page_title_home')}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Tala investment villa kiralama ve satış ofisi" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
      <Properties/>
      <SeoNote/>
    </>
  )
}

export async function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}