import React from 'react'
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

const About = () => {
  const { t } = useTranslation('common')
  return (
    <div className='aboutUs'>
      <h1>{t('whous')}</h1>
      <p>{t('whous_desc1')}
        <br></br><br></br>
        {t('whous_desc2')}
        <br></br><br></br>
        {t('whous_desc3')}
        <br></br><br></br>
        {t('whous_desc4')}
        <br></br><br></br>
        {t('whous_desc5')}
        
      </p>
    </div>
  )
}

export default About