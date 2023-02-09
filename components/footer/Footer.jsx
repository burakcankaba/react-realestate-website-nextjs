
import React from 'react'
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <footer>
        <div className='logoFooter'>
          <img src='/logo.png' />
        </div>
        <div className="menuFooter">
          <ul>
            <li><Link href={"/"}>{t('homepage')}</Link></li>
            <li><Link href={"/"}>{t('properties')}</Link></li>
            <li className='asSoonas'><Link href={"/"}>{t('projects')}</Link></li>
            <li className='asSoonas'><Link href={"/"}>{t('blog')}</Link></li>
            <li><Link href={"/aboutus"}>{t('aboutus')}</Link></li>
            <li><Link href={"/contactus"}>{t('contactus')}</Link></li>
          </ul>
        </div>
        <div className="socialFooter">
          <ul>
            <li><SiInstagram /></li>
            <li><SiFacebook /></li>
            <li><SiTwitter /></li>
          </ul>

        </div>
      </footer>
      <div className='copyRights'>{t('page_copyright_home')}</div>
    </>
  )
}

export default Footer