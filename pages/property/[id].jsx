import home from "../../villaProps";
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import { CgPin } from 'react-icons/cg';
import { HiShieldCheck } from "react-icons/hi"
import "swiper/css";
import "swiper/css/navigation";
import Head from "next/head"
import LazyLoad from 'react-lazy-load';
import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { useState } from 'react';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ModalMedia from "@/components/modalmedia/ModalMedia";

export async function getStaticProps({ locale }) {

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
        ])),
        // Will be passed to the page component as props
      },
    }
  }
  export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
  }

const Property = () => {
    const router = useRouter()
    const id = router.query.id;
    const {i18n } = useTranslation();
    const [openModal, setOpenModal] = useState(false);
    const data = home.find(x => x.id == id);
    const { t } = useTranslation('common')
    const currentLanguageCode = i18n.language ? i18n.language:"tr";
    return (
        <>
            {data && <Head>
                <title>{data.propName} -{data.propLocation} </title>
                <meta name="description" content={data.propShortDesc[0][currentLanguageCode]} />
                <meta name="keywords" content="Keywords" />

                <meta name="author" content="talaSoft" />
                <meta name="copyright" content="©2023 Copyrights by TalaSoft. All Rights Reserved." />
                <meta name="application-name" content="talaInvestment" />
                <link rel="image_src" href={`http://talainvestment.com/villas/${data.id}/${data.photos[0]}`} />
                <meta property="og:title" content={`${data.propName} - ${data.propLocation}`} />
                <meta property="og:type" content="article" />


                <meta property="og:image" content={`http://talainvestment.com/villas/${data.id}/${data.photos[0]}`} />
                <meta property="og:image:secure_url" content={`https://talainvestment.com/villas/${data.id}/${data.photos[0]}`} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="900" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content={data.propShortDesc[0][currentLanguageCode]} />
                <meta name="og:url" content={`https://talainvestment.com/${currentLanguageCode}/property/${data.id}`} />

                <meta property="og:url" content={`https://talainvestment.com/${currentLanguageCode}/property/${data.id}`} />
                <meta property="og:description" content={data.propShortDesc[0][currentLanguageCode]} />

                <meta name="twitter:card" content={data.propShortDesc[0][currentLanguageCode]} />
                <meta name="twitter:title" content={`${data.propName} - ${data.propLocation}`} />
                <meta name="twitter:description" content={data.propShortDesc[0][currentLanguageCode]} />
                <meta name="twitter:image" content={`https://talainvestment.com/villas/${data.id}/${data.photos[0]}`} />
                <meta name="twitter:url" content={`https://talainvestment.com/${currentLanguageCode}/property/${data.id}`} />
            </Head>}
            {data && <div className='detailPage'>
                <div className="mediaContent">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#626262",
                            "--swiper-navigation-size": "15px"
                        }}
                        slidesPerView={3}

                        keyboard={{
                            enabled: true,
                        }}
                        navigation={true}
                        modules={[Keyboard, Navigation]}
                        className="mySwiper"
                    >
                        {
                            data.photos.map((imgUrl, i) => (
                                <SwiperSlide key={i}>
                                    <LazyLoad threshold={0.95}>
                                        <img key={i} src={`/villas/${data.id}/${imgUrl}`} alt={`${data.id}_${i}`} />
                                    </LazyLoad>
                                </SwiperSlide>
                            ))
                        }
                        <div className='showAllPhotos'><button onClick={() => setOpenModal(true)}>{t('showAllPhotos')}</button></div>
                    </Swiper>

                    <div className="propDetail">
                        <div className='propTitle'>
                            <div>
                                <h1>{data.propName}<span>{data.isMonthly ? `${t('monthly')}` : ""}</span></h1>
                                <span><CgPin />{data.propLocation}</span>
                            </div>
                            <label>{data.isMonthly ? data.montlyPrice + "TL" : data.salePrice}
                                <span>{data.isMonthly ? ` /${t('monthly')}` : ""}</span>
                            </label>

                        </div>

                        <div className='propDesc'>
                            <h2>{t('prop_infos')}</h2>
                            {
                                data.propDesc.map((item, i) => (
                                    <div key={i}>
                                        <h3><HiShieldCheck />{item.label[0][currentLanguageCode]}</h3>
                                        <p>{item.value[0][currentLanguageCode]}</p>
                                    </div>
                                ))
                            }
                            {data.deposit &&
                                <div>
                                    <h3><HiShieldCheck />{t('deposit')}</h3>
                                    <p>{data.deposit}TL</p>
                                </div>}
                        </div>


                        {
                            openModal &&
                            <div className='modalMedia'>
                                <div className="villaPModal">
                                    <ModalMedia dataID={data.id} photos={data.photos} setOpenPhotosModal={setOpenModal} ></ModalMedia>
                                </div>
                            </div>

                        }

                    </div>
                </div>
                {/* <div className='shareButtonOnDetail'>
                    <ul >
                        <li>
                            <FacebookShareButton url={`https://talainvestment.com/${location.pathname}`}>
                                <FacebookIcon round />
                            </FacebookShareButton>
                        </li>
                        <li>
                            <FacebookMessengerShareButton url={`https://talainvestment.com/${location.pathname}`}>
                                <FacebookMessengerIcon round />
                            </FacebookMessengerShareButton>
                        </li>
                        <li>
                            <WhatsappShareButton url={`https://talainvestment.com/${location.pathname}`}>
                                <WhatsappIcon round />
                            </WhatsappShareButton>
                        </li>
                        <li>
                            <TwitterShareButton url={`https://talainvestment.com${location.pathname}`}>
                                <TwitterIcon round />
                            </TwitterShareButton>
                        </li>
                        <li>
                            <TelegramShareButton url={`https://talainvestment.com/${location.pathname}`}>
                                <TelegramIcon round />
                            </TelegramShareButton>
                        </li>


                    </ul>
                </div> */}

            </div>}
        </>
    )
}


export default Property