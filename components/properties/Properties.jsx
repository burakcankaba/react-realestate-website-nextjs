import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import home from "../../villaProps";
import  Link  from 'next/link';
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'next-i18next';
const Properties = () => {
  const { t,i18n } = useTranslation('common')
  const currentLanguageCode = i18n.language;
  
  return (
    <div className='properties'>
         <h1>{t('banner_btn2')}</h1>
        <div className="propertyList">
          {
            home.map((item, i) => (
              <div className="item" key={i}>
                <Link href={`/${currentLanguageCode}/property/${item.id}`}>

                  <div className='imgContainer'>
                    <Swiper
                      dir= {`${currentLanguageCode === "ar" ? "rtl":"ltr"}`}
                      style={{
                        "--swiper-navigation-color": "#626262",
                        "--swiper-navigation-size": "15px"
                      }}
                      slidesPerView={1}
                      keyboard={{
                        enabled: true,
                      }}
                      navigation={true}
                      modules={[Keyboard, Navigation]}
                      className="mySwiper"
                    >
                      {
                        item.photos.slice(0, 4).map((imgUrl, i) => (
                          <SwiperSlide key={i}>
                            <LazyLoad threshold={0.95}>
                              <img key={i} src={`/villas/${item.id}/${imgUrl}`} alt={`${item.id}_${i}`} />
                            </LazyLoad>
                          </SwiperSlide>
                        ))
                      }

                    </Swiper>

                    <div className='itemLocation'>{item.propLocation}</div>
                    <div className='itemType'>{item.isSale ? `${t('sale')}` : `${t('monthly')}`}</div>
                  </div>
                </Link>
                <div className="itemInfo">
                  <div className="itemTitle">
                    <h2>{item.propName}</h2>
                    <div className='prices'>
                      <span className='value'>{item.isMonthly ? item.montlyPrice : item.yearlyPrice}TL </span><span className='label'>/{t('month')}</span>
                    </div>
                  </div>

                  <p>{item.propShortDesc[0][currentLanguageCode]}</p>

                </div>
              </div>
            ))
          }

        </div>
      </div>
  )
}

export default Properties