
import { SiFacebook, SiInstagram } from "react-icons/si"
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
                    <img src="/kabasoft.png" alt="Kabasoft Akademi" />
                </Link></div>
                <div className='h_r'>
                    <div className="menu mobile-menu">
                        <ul>
                            <li><Link href="/">{t('homepage')}</Link></li>
                            <li><Link href={`/about`}>{t('aboutus')}</Link></li>
                            <li><Link href="/ourservice">{t('ourservice')}</Link></li>
                            <li><Link href="/reference">{t('reference')}</Link></li>
                            <li className="academy"><Link href={`/academy`}>{t('academy')}</Link></li>
                            <li><Link href={`/blog`}>{t('blog')}</Link></li>
                            <li><Link href="/contactus">{t('contactus')}</Link></li>
                        </ul>
                    </div>
                    <div className="language">
                        <button onClick={() => setOpenPL(!openPL)}>
                            <img src={`/flag/${currentLanguageCode}.png`} alt={currentLanguageCode} />
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
                        <img src="/kabasoft.png" alt="kabasoft" />
                    </div>
                    {/* <div className='companyText'>
                        Kabasoft olarak; ihtiyaç duyduğunuz yazılım projelerine tecrübemiz ve geniş bakış açımızla çözümler üretiriz.
                    </div> */}
                </div>
                <div className="mobilev1" onClick={()=>setOpenMenu(false)}>
                    <ul>
                        <li><Link href={`/about`}>{t('aboutus')}</Link></li>
                        <li><Link href="/ourservice">{t('ourservice')}</Link></li>
                        <li><Link href="/reference">{t('reference')}</Link></li>
                        <li className="academy"><Link href={`/academy`}>{t('academy')}</Link></li>
                        <li><Link href={`/blog`}>{t('blog')}</Link></li>
                    </ul>
                </div>
                <div className='section'>
                    <div className='getInTouchText'>{t('our_contact_info')}</div>
                    <ul className='getInTouch'>
                        <li>
                            <div>
                                <CgMail />
                                <div>
                                    <div className='label'>{t('email')}</div>
                                    <div className='value'>info@kabasoft.com.tr</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <CgPhone />
                                <div>
                                    <div className='label'>{t('phone')}</div>
                                    <div className='value'>(+90) 539 544 85 87</div>
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
                        <li><a href='https://www.instagram.com/kabasoftcomtr/' target="_blank" rel="noreferrer"><SiInstagram /></a></li>
                        <li><a href='https://www.facebook.com/kabasoftcomtr' target="_blank" rel="noreferrer"><SiFacebook /></a></li>
                    </ul>
                </div>

            </div>


        </>
    )
}

export default Header