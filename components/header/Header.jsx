
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si"
import { CgClose, CgMail, CgMenuGridR, CgPhone, CgPin } from "react-icons/cg"
import Link from '../Link'
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitchLink from '../LanguageSwitchLink';
import i18nextConfig from '../../next-i18next.config';
const Header = () => {
    const [openPL, setOpenPL] = useState(false);
    const router = useRouter()
    const { t } = useTranslation('common')
    const currentLanguageCode = router.query.locale || i18nextConfig.i18n.defaultLocale
    const [openMenu, setOpenMenu] = useState(false);
    console.log(currentLanguageCode)
    useEffect(() => {
        document.body.dir = currentLanguageCode === "ar" ? "rtl" : "ltr"
        document.documentElement.lang = currentLanguageCode;
    }, [currentLanguageCode, t])
    return (
        <>
            <div className='header' >
                <div className='logo'><Link href="/">

                    <img src="/logo.png" alt="Tala Turizm Logo" />
                </Link></div>
                <div className='h_r'>
                    <div className="menu mobile-menu">
                        <ul>
                            <li><Link href="/">{t('homepage')}</Link></li>
                            <li><Link href="/">{t('properties')}</Link></li>
                            <li className="asSoonas"><Link href="/projects">{t('projects')}</Link></li>
                            <li className="asSoonas"><Link href="/">{t('blog')}</Link></li>
                            <li><Link href={`/about`}>{t('aboutus')}</Link></li>
                            <li><Link href="/contactus">{t('contactus')}</Link></li>
                        </ul>
                    </div>
                    <div className="language">
                        <button onClick={() => setOpenPL(!openPL)}>
                            <img src={`/flag/${currentLanguageCode}.png`} alt="" />
                            <label className="currLang">{currentLanguageCode}</label>
                        </button>
                        {openPL &&


                            <div className="navPLSelect" onClick={() => setOpenPL(false)}>
                                <ul>
                                    {i18nextConfig.i18n.locales.map((locale) => {
                                        if (locale === currentLanguageCode) return null
                                        return (
                                            <li key={locale}>
                                                <LanguageSwitchLink
                                                    locale={locale}
                                                    
                                                />
                                            </li>

                                        )
                                    })}
                                </ul>

                            </div>


                        }
                    </div>
                    <div className='menuButton' onClick={() => setOpenMenu(true)}>
                        <CgMenuGridR />
                    </div>
                </div>

            </div>
            <div className={`visMenu ${openMenu ? "opened" : ""}`}>
                <div className='closeButton' onClick={() => setOpenMenu(false)}>
                    <CgClose />
                </div>
                <div className='section'>
                    <div className="companyLogo">
                        <img src="/logo.png" alt="Tala Turizm Logo" />
                    </div>
                    <div className='companyText'>
                        {t('page_desc_home')}
                    </div>
                </div>
                <div className='section'>
                    <div className='getInTouchText'>{t('our_contact_info')}</div>
                    <ul className='getInTouch'>
                        <li>
                            <div>
                                <CgMail />
                                <div>
                                    <div className='label'>{t('email')}</div>
                                    <div className='value'>info@investment.com</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <CgPhone />
                                <div>
                                    <div className='label'>{t('phone')}</div>
                                    <div className='value'>(+90) 542 778 71 70</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <CgPin />
                                <div>
                                    <div className='label'>{t('location')}</div>
                                    <div className='value'>Fethiye ,Mugla</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <div className="socialFollow">
                        {t('followUs')}
                    </div>
                    <ul className='socialSec'>
                        <li><a href='https://www.instagram.com/talainvestment/' target="_blank" rel="noreferrer"><SiInstagram /></a></li>
                        <li><a href='https://www.facebook.com/talatourism' target="_blank" rel="noreferrer"><SiFacebook /></a></li>
                        <li><a href='https://twitter.com/tala_tourism' target="_blank" rel="noreferrer"><SiTwitter /></a></li>
                    </ul>
                </div>

            </div>


        </>
    )
}

export default Header