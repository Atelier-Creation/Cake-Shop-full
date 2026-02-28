import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const MobileCategorySlider = () => {
  const navigate = useNavigate();

  const collections = [
    {
      id: "1",
      title: { en: "Barons Cartoon Birthday Cake Topper", ta: "Rs. 4,700.00" },
      img: "https://dt-bakehouse.myshopify.com/cdn/shop/products/bakes17.jpg",
      soldOut: false,
    },
    {
      id: "2",
      title: { en: "Elixir Yellow Butter Cake", ta: "Rs. 4,500.00" },
      img: "https://dt-bakehouse.myshopify.com/cdn/shop/products/bakes10_10bb25ec-cb4d-4c15-b336-65058c7e5b61.jpg",
      soldOut: true,
    },
    {
      id: "3",
      title: { en: "Flaky Butterscotch Ice Cream Cake", ta: "Rs. 4,700.00" },
      img: "https://dt-bakehouse.myshopify.com/cdn/shop/products/bakes18.1_14e973dc-3224-4862-9c3f-cbbcb7f19cb5.jpg",
      soldOut: false,
    },
    {
      id: "4",
      title: { en: "Crest Layered Pound Cake", ta: "Rs. 2,600.00" },
      img: "https://dt-bakehouse.myshopify.com/cdn/shop/products/bakes26.1.jpg",
      soldOut: false,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="w-full px-5 lg:px-12 mb-10 mt-6 lg:mt-12 overflow-hidden">
      <div className="flex justify-between items-end mb-8" data-aos="fade-up">
        <div>
          <p className="text-[#EF4B5F] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2 drop-shadow-sm">
            Cakes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a0e05]" style={{ fontFamily: "'Dancing Script', cursive, serif" }}>
            Our Favourites
          </h2>
        </div>
        <button
          onClick={() => navigate("/collections/all")}
          className="text-sm md:text-base font-semibold text-[#5a5a5a] hover:text-black mb-1 md:mb-2 transition-colors cursor-pointer"
        >
          Explore More
        </button>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          480: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="py-6"
      >
        {collections.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => navigate(`/collections/${item.id}`)}
              className="flex flex-col items-center justify-center cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative mb-5 w-44 h-44 md:w-56 md:h-56 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                {item.soldOut && (
                  <div className="absolute top-2 md:top-4 right-0 md:right-4 z-10 bg-[#EF4B5F] text-white text-[10px] md:text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    Sold Out
                  </div>
                )}
                <img
                  src={item.img}
                  alt={item.title.en}
                  className="w-full h-full object-cover rounded-full  group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-center text-[#2a0e05] text-lg md:text-xl font-medium px-2 italic font-serif group-hover:text-[#2a0e05] transition-colors leading-tight">
                {item.title.en}
              </h3>
              <p className="text-[#5a5a5a] text-xs md:text-sm mt-2 font-medium">{item.title.ta}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileCategorySlider;
