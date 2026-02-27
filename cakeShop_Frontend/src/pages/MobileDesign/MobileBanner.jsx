import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiPause, FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { H2, P, Button } from "../../components/TextComponents";

const MobileBanner = () => {
  const images = [
    {
      image: "https://dt-bakehouse.myshopify.com/cdn/shop/files/Slider-3.jpg",
      subhead: "PERFECT CAKE",
      head: "Every Bite is a Delight",
      para: "Sed quis nis eleentum rhncus sit amet in nisi. Phasellus tmpor sit aet ex finibus. Morbi eget odales justo. Nulla ornar dolor mi, in lacinia ex blandit a. Donec sed consequat",
      url: "/collections/all",
    },
    {
      image: "https://dt-bakehouse.myshopify.com/cdn/shop/files/slider_img.jpg",
      subhead: "SWEET TREATS",
      head: "Taste the Happiness",
      para: "Experience the ultimate joy with every slice of our freshly baked cakes. Made with love and the finest ingredients.",
      url: "/collections/all",
    },
    {
      image: "https://dt-bakehouse.myshopify.com/cdn/shop/files/Slider-2.jpg",
      subhead: "Crazy Feel",
      head: "Thanksgiving Pies & Desserts",
      para: "Experience the ultimate joy with every slice of our freshly baked cakes. Made with love and the finest ingredients.",
      url: "/collections/all",
    },
  ];

  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-[60vh] max-w-md mx-auto overflow-hidden lg:w-full lg:h-[80vh] lg:max-w-none">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000 }}
        navigation={false}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[60vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat sm:h-90 md:h-96"
              style={{ backgroundImage: `url(${src.image})` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-20 z-20">
                <span className="text-[#EF4B5F] font-semibold tracking-[0.2em] text-sm lg:text-base mb-2 lg:mb-4 uppercase drop-shadow-sm">
                  {src.subhead}
                </span>

                <h2 className="text-white text-4xl lg:text-6xl font-bold mb-4 drop-shadow-md" style={{ fontFamily: "'Dancing Script', cursive, serif" }}>
                  {src.head}
                </h2>

                <p className="text-white text-sm lg:text-lg mb-6 lg:mb-8 max-w-2xl drop-shadow-md leading-relaxed">
                  {src.para}
                </p>

                <button
                  onClick={() => navigate(src.url)}
                  className="bg-[#EF4B5F] text-white py-3 px-8 rounded-full font-medium transition duration-300 hover:bg-white hover:text-[#EF4B5F] shadow-lg"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileBanner;
