import React from 'react'
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
const Contactus = () => {
    const { t } = useTranslation('common')
    return (
      <div className='aboutUs'>
        <p>
        {t('aboutUS_Text')}
        
        </p>
      </div>
    )
}

export default Contactus