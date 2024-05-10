import blog from "../../../blogs";
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
import Image from "next/image";

export async function getStaticProps({ params }) {
    const data = blog.find(x => x.id == params.id);
    return {
        props: {
            property: data ?? null,
            ...(await serverSideTranslations(params.locale, [
                'common',
            ])),
        },
    }
}

export async function getStaticPaths() {
    const locales = ["tr", "en", "ar", "ru"]

    const paths = []
    blog?.map(({ id }) => {
        return locales.map((locale) => {
            return paths.push({
                params: { id: `${id}`, locale },
            })
        })
    })
    console.log(paths)
    return {
        paths,
        fallback: 'blocking',
    }
}
const Blog = () => {
    const router = useRouter()
    const id = router.query.id;
    const currentLanguageCode = router.query.locale || i18nextConfig.i18n.defaultLocale;
    const data = blog.find(x => x.id == id);
    console.log(data)
    const { t } = useTranslation('common')

    return (
        <>
            {data && <Head>
                <title>{data.title[0][currentLanguageCode]} </title>
                <meta name="description" content={data.desc[0][currentLanguageCode]} />
                <meta name="keywords" content="Keywords" />

                <meta name="author" content="kabaSoft" />
                <meta name="copyright" content="©2023 Copyrights by kabaSoft. All Rights Reserved." />
                <meta name="application-name" content="kabasoft" />
                <link rel="image_src" href={`https://kabasoft.com.tr/blog/yazilim.jpg`} />
                <meta property="og:title" content={data.title[0][currentLanguageCode]} />
                <meta property="og:type" content="article" />


                <meta property="og:image" content={`https://kabasoft.com.tr/blog/yazilim.jpg`} />
                <meta property="og:image:secure_url" content={`https://kabasoft.com.tr/blog/yazilim.jpg`} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="900" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content={data.title[0][currentLanguageCode]} />
                <meta name="og:url" content={`https://kabasoft.com.tr/${currentLanguageCode}/blog/${data.id}`} />
                <meta property="og:description" content={data.desc[0][currentLanguageCode]} />

                <meta name="twitter:card" content={data.title[0][currentLanguageCode]} />
                <meta name="twitter:title" content={data.title[0][currentLanguageCode]} />
                <meta name="twitter:description" content={data.desc[0][currentLanguageCode]} />
                <meta name="twitter:image" content={`https://kabasoft.com.tr/blog/yazilim.jpg`} />
                <meta name="twitter:url" content={`https://kabasoft.com.tr/${currentLanguageCode}/blog/${data.id}`} />
            </Head>}
            {data && <div className='detailPage'>
                <div className="blogDetail">
                    <div className="img">
                        <Image
                            src={`/blog/${data.photo}`}
                            alt={data.title[0][currentLanguageCode]}
                            width={1920}
                            height={200}
                            style={{
                                objectFit: 'cover'
                            }}
                            priority
                        />

                        <h1>{data.title[0][currentLanguageCode]}</h1>
                    </div>
                    <div className="desc">
                        <h1>{data.title[0][currentLanguageCode]}</h1>
                        <p>{data.desc[0][currentLanguageCode]}</p>
                        <div className="publisedDate">
                            {data.publishedDate}
                        </div>
                    </div>

                </div>
                <div className='shareButtonOnDetail'>
                    <ul >
                        <li>
                            <FacebookShareButton url={`https://kabasoft.com/${currentLanguageCode}/blog/${data.id}`}>
                                <FacebookIcon round />
                            </FacebookShareButton>
                        </li>
                        <li>
                            <FacebookMessengerShareButton url={`https://kabasoft.com/${currentLanguageCode}/blog/${data.id}`}>
                                <FacebookMessengerIcon round />
                            </FacebookMessengerShareButton>
                        </li>
                        <li>
                            <WhatsappShareButton url={`https://kabasoft.com/${currentLanguageCode}/blog/${data.id}`}>
                                <WhatsappIcon round />
                            </WhatsappShareButton>
                        </li>
                        <li>
                            <TwitterShareButton url={`https://kabasoft.com/${currentLanguageCode}/blog/${data.id}`}>
                                <TwitterIcon round />
                            </TwitterShareButton>
                        </li>
                        <li>
                            <TelegramShareButton url={`https://kabasoft.com/${currentLanguageCode}/blog/${data.id}`}>
                                <TelegramIcon round />
                            </TelegramShareButton>
                        </li>


                    </ul>
                </div>

            </div>}
        </>
    )
}


export default Blog