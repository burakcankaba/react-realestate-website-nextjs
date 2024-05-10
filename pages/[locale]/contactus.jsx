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
            <div className="value">Fethiye / Muğla</div>
          </div>
          <div>
            <div className="label">{t('phone')}:</div>
            <div className="value">+90 539 544 85 87</div>
          </div>
          <div>
            <div className="label">{t('email')}:</div>
            <div className="value">info@kabasoft.com.tr</div>
          </div>
          <div>
            <div className="label">{t('work_hours')}:</div>
            <div className="value">09:00-18:00 </div>
          </div>
        </div>
        <div className="right_block">
          Şirketimiz, kurulduğu günden bu yana yenilikçi ve müşteri odaklı bir yaklaşımla hizmet veren bir firma olarak faaliyetlerini sürdürmektedir. Müşteri memnuniyetini en ön planda tutarak, kaliteli ürün ve hizmetler sunmayı hedefleyen şirketimiz, yazılım sektöründe üst sıralara tırmanmak için çalışmaktadır.
        </div>
      </div>
    </div>
  )
}

export default Contactus