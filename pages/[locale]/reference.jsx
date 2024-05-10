import React from 'react'
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
const Reference = () => {
    const { t } = useTranslation('common')
  return (
    <div className='referencePage'>
      {t('updating')}
    </div>
  )
}

export default Reference