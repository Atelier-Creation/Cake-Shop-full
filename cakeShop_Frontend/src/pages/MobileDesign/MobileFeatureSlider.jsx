import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const cakeFeatures = [
    {
      title: "FSSAI Certified",
      desc: "Our bakery follows strict food safety standards and is officially certified for quality and hygiene compliance.",
      img: "https://cdn-icons-png.freepik.com/256/16351/16351039.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
    },
    {
      title: "Freshly Baked Daily",
      desc: "Every cake is baked fresh each day using carefully selected ingredients to ensure softness and rich flavor.",
      img: "https://cdn-icons-png.freepik.com/256/8282/8282191.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
    },
    {
      title: "Premium Ingredients",
      desc: "We use high-quality butter, real cocoa, fresh cream, and natural flavors for an authentic taste experience.",
      img: "https://cdn-icons-png.freepik.com/256/2728/2728491.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
    },
    {
      title: "No Artificial Preservatives",
      desc: "Our cakes are free from harmful preservatives, ensuring natural freshness and safe consumption.",
      img: "https://cdn-icons-png.freepik.com/256/12792/12792071.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
    },
    {
      title: "100% Hygienic Preparation",
      desc: "Prepared in a sanitized kitchen environment with trained staff maintaining strict cleanliness standards.",
      img: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
    },
    {
      title: "Customized With Love",
      desc: "Each cake is handcrafted with care and can be personalized for birthdays, weddings, and special occasions.",
      img: "https://cdn-icons-png.freepik.com/256/17964/17964435.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
    },
  ];

  return (
    <div className="w-full px-4 lg:py-12 bg-white">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cakeFeatures.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="flex flex-col items-center text-center lg:p-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Icon - Styled to look like the gold thin-line art */}
              <div className="mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-contain 
               invert-[71%] 
               sepia-[88%] 
               saturate-[192%] 
               hue-rotate-[358deg] 
               brightness-[80%] 
               contrast-[89%]"
                />
              </div>

              {/* Title - All Caps, Spaced */}
              <h3 className="text-sm md:text-base font-bold  text-gray-900 uppercase mb-3">
                {item.title}
              </h3>

              {/* Description - Italicized, Serif-style font */}
              <p className="text-sm md:text-base text-gray-600 ">
                {item.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;