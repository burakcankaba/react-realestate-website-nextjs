import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillCloseSquare } from "react-icons/ai";

const ModalMedia = ({ photos, setOpenPhotosModal,dataID }) => {
    return (
        <div className="villaMedias">

            <div className="closePhotosModal" onClick={() => setOpenPhotosModal(false)}>
                <AiFillCloseSquare></AiFillCloseSquare>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                keyboard={{
                    enabled: true,
                }}

                navigation={true}
                modules={[Pagination, Navigation]}
                className="villaMedias"
                style={{
                    "--swiper-navigation-color": "#626262",
                    "--swiper-navigation-size": "15px",
                    "--swiper-pagination-color": "white",
                    "--swiper-pagination-bullet-width": "5px",
                    "--swiper-pagination-bullet-height": "5px"
                }}
            >
                {
                    photos && photos.map((imgUrl, i) => (
                        <SwiperSlide key={i}><img key={i} src={`/villas/${dataID}/${imgUrl}`} alt={`${dataID}_${i}`} /></SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    )
}

export default ModalMedia