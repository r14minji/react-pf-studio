import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const path = process.env.PUBLIC_URL;

function Partners(){
  return(
    <section className="content partnersM">
      <div className="inner"> 
        <h1>GLOBAL PARTNERS</h1>

        <div className="wrap">
        <Swiper 
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}       
            loop ={true}
            autoplay={{
              "delay": 3500,
              "disableOnInteraction": false
            }} 
            pagination={{clickable: true}}
          >
            <SwiperSlide>
              <div className="logo">
              <img src={path + "/img/partner1.png"} alt="pixar 로고" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo">
                <img src={path + "/img/partner2.png"} alt="netflx 로고" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo">
                <img src={path + "/img/partner3.png"} alt="channel 로고" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo">
                <img src={path + "/img/partner4.png"} alt="apple tv 로고" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo">
                <img src={path + "/img/partner5.png"} alt="universal 로고" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Partners;