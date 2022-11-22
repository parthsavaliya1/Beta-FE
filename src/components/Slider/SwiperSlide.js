import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";

const SwiperSlider = ({ sliderObj }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1.1}
      centeredSlides={true}
      initialSlide={1}
      roundLengths={true}
      loopAdditionalSlides={30}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sliderObj?.map((item, index) => (
        <SwiperSlide>
          <div>
            <div className="text-white">{item.date}</div>
            <div>
              <img src={item.img} />
            </div>
            <div className="text-white">{item.desc}</div>
            <div className="text-white">{item.name}</div>
            <div className="text-white">{item.shortDesc}</div>
            <button>More Info</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
