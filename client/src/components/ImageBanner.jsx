import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getBanner } from "../actions/banner";

const ImageBanner = () => {
  const [images, setImageBanner] = useState([]);

  useEffect(() => {
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    try {
      const response = await getBanner();
      setImageBanner(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pb-10 mt-[70px]"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.image}
              alt={`banner-${index}`}
              className="w-full h-[100px] lg:h-[400px] rounded-md shadow-md"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageBanner;
