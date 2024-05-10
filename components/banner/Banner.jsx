import React from 'react'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazy-load'

const Banner = () => {
    const { t } = useTranslation('common')
  return (
    <div className='banner'>

        <div className='bannerText'>
          <h1><span>{t('page_banner_title')}</span></h1>
          <p><span>{t('page_banner_subtitle1')} </span></p>
          <p><span>{t('page_banner_subtitle2')} </span></p>
          <p><span>{t('page_banner_subtitle3')} </span></p>
          
          {/* <div>
            <button className='ourProjects'>{t('banner_btn1')}</button>
            <button className='demoEnquiry'>{t('banner_btn2')}</button>
          </div> */}
        </div>
        <LazyLoad>
          <div className="overlay"></div>
        </LazyLoad>
      </div>
  )
}

export default Banner