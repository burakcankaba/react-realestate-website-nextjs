import React from 'react'
import LazyLoad from 'react-lazy-load'
import { useTranslation } from 'next-i18next';

const Banner = () => {
  const { t } = useTranslation('common')

  return (
    <div className='banner'>

<div className='bannerText'>
          <h1><span>{t('banner_h1')}</span></h1>
          <p><span>{t('banner_p')}</span></p>
          <div>
            <button className='ourProjects asSoonas'>{t('banner_btn1')}</button>
            <button className='demoEnquiry'>{t('banner_btn2')}</button>
          </div>
        </div>
      <LazyLoad>
        <div className="overlay"></div>
      </LazyLoad>
    </div>
  )
}

export default Banner