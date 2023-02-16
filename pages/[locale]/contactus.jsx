import React from 'react'
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
const Contactus = () => {
  const { t } = useTranslation('common')
  return (
    <div className='contactPage'>

      <div className='blocks'>
        <div className="left_block">
          <div>
            <div className="label">{t('address')}:</div>
            <div className="value">BabataşıMah. CahitGündüz Cad. No:62/A FethiyeMuğla</div>
          </div>
          <div>
            <div className="label">{t('phone')}:</div>
            <div className="value">+90 252 612 31 32</div>
          </div>
          <div>
            <div className="label">{t('email')}:</div>
            <div className="value">info@talainvestment.com</div>
          </div>
          <div>
            <div className="label">{t('work_hours')}:</div>
            <div className="value">09:00-18:00 </div>
          </div>
        </div>
        <div className="right_block">
          {t('aboutUS_Text')}
        </div>
      </div>
    </div>
  )
}

export default Contactus