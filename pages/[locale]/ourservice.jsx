import React from 'react'
import OurServices from '@/components/ourServices/OurServices'
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

const Ourservice = () => {
  const { t } = useTranslation('common')
  return (
    <div className='ourServicesPage'>
      <OurServices/>
      
    </div>
  )
}

export default Ourservice