import React from 'react'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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

const About = () => {
  const { t } = useTranslation()
  return (
    <div className='aboutUs'>
      <p>
      {t('aboutUS_Text')}
      
      </p>
    </div>
  )
}

export default About