import Head from 'next/head'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'next-i18next';
import Banner from '@/components/banner/Banner';
import Solve from '@/components/solve/Solve';
import OurServices from '@/components/ourServices/OurServices';
import HomeBanner from '@/components/banner/HomeBanner';
import Blog from '@/components/blogs/Blog';

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
      {/* <title>{t('page_title_home')}</title> */}
      <title>{t('page_title_home')}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={t('page_desc_home')} />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
      <OurServices/>
      <HomeBanner/>
      <Solve/>
      <Blog/>
      
    </>
  )
}