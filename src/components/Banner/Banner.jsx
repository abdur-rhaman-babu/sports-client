import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import slider_1 from "../../assets/image/slider_1.jpg";
import slider_2 from "../../assets/image/slider_2.png";
import slider_3 from "../../assets/image/slider_3.jpg";
import slider_4 from "../../assets/image/slider_4.jpg";

const Banner = () => {
  return (
   <div className="lg:mb-10">
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[300px] md:h-[450px] w-full">
      <SwiperSlide><img className="h-full w-full" src={slider_1} alt="" /></SwiperSlide>
      <SwiperSlide><img className="h-full w-full" src={slider_2} alt="" /></SwiperSlide>
      <SwiperSlide><img className="h-full w-full" src={slider_3} alt="" /></SwiperSlide>
      <SwiperSlide><img className="h-full w-full" src={slider_4} alt="" /></SwiperSlide>
    </Swiper>
   </div>
  );
};

export default Banner;
