import React from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { BsChatSquareDots, BsCodeSquare } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
const OurServices = () => {
    const { t } = useTranslation('common')
    return (
        <div className='ourServices'>
            <div className='indexTitle'>
                <h1>{t('ourservicess')}</h1>
                <p>{t('ourservicess_desc')}</p>
            </div>
            <div className="itemList">
                <div className="item">
                    <BsCodeSquare/>
                    <h2>{t('ourservicess_t1')}</h2>
                    <p>{t('ourservicess_d1')}</p>
                </div>
                <div className="item">
                    <BsChatSquareDots/>
                    <h2>{t('ourservicess_t2')}</h2>
                    <p>{t('ourservicess_d2')}</p>
                </div>
                <div className="item">
                    <AiOutlineUserSwitch/>
                    <h2>{t('ourservicess_t3')}</h2>
                    <p>{t('ourservicess_d3')}</p>
                </div>
                <div className="item">
                    <FaReact/>
                    <h2>{t('ourservicess_t4')}</h2>
                    <p>{t('ourservicess_d4')}</p>
                </div>
            </div>
        </div>
    )
}

export default OurServices