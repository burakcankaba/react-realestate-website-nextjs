
import React from 'react'
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si'
import Link from '../Link'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <footer>
        <div className='logoFooter'>
          <img src='/kabasoft.png' />
        </div>
        <div className="menuFooter">
          <ul>
            <li><Link href="/">{t('homepage')}</Link></li>
            <li><Link href="/about">{t('aboutus')}</Link></li>
            <li><Link href="/ourservice">{t('ourservice')}</Link></li>
            <li><Link href="/reference">{t('reference')}</Link></li>
            <li><Link href={`/academy`}>{t('academy')}</Link></li>
            <li><Link href="/contactus">{t('contactus')}</Link></li>
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