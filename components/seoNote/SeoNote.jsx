import React from 'react'
import { useTranslation } from 'next-i18next';

const SeoNote = () => {
    const { t } = useTranslation()
    return (
        <>


            <div className='home_warning'>
                <span>{t('not')}</span>
                <p>{t('rentalRules')}</p>
            </div>
            <div className='home_seo'>
                <span>{t('dailyrentalvillas')}</span>
                <p>{t('dailyrentalvillas_text')}</p>
            </div>
        </>
    )
}

export default SeoNote