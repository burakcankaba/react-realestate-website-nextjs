import { useRouter } from 'next/router';
import React from 'react'
import { useTranslation } from 'react-i18next';
import blog from "../../blogs"
import Link from '../Link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
const Blog = () => {
    const router = useRouter()
    const { t } = useTranslation('common')
    const currentLanguageCode = router.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
        <div className="blogs">
            <div className="indexTitle">
                <h1>{t('blog')}</h1>
                <p>{t('blog_desc')}</p>
            </div>
            <div className='blogList'>
                <Swiper
                    dir={`${currentLanguageCode === "ar" ? "rtl" : "ltr"}`}
                    style={{
                        "--swiper-navigation-color": "#626262",
                        "--swiper-navigation-size": "15px"
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Navigation]}
                >
                    {
                        blog?.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="blog">
                                    <Link href={`/blog/${item.id}`}>
                                        <div className="iteminfo">
                                            <Image src={`/blog/${item.photo}`}
                                                alt={item.title[0][currentLanguageCode]}
                                                width={300}
                                                height={300}
                                                style={{
                                                    objectFit: 'cover'
                                                }}
                                                priority

                                            />

                                            <span>{item.publishedDate}</span>
                                            <label>{item.readTime[0][currentLanguageCode]}</label>
                                        </div>
                                    </Link>
                                    <h3>{item.title[0][currentLanguageCode]}</h3>
                                    <p className="itemDesc">
                                        {item.desc[0][currentLanguageCode]}
                                    </p>

                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>


            </div>
        </div>
    )
}

export default Blog