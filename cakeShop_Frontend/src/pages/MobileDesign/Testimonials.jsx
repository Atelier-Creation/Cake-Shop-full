"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    quote:
      "Whether it’s the warm bread, or just the cozy aroma that fills the air, this bakery always brighter",
    image:
      "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68cbcbffbe9b0a3cd99a7a8e_testimonial-1.avif",
    name: "Daniel Armstrong",
    role: "Physician & athlet",
  },
  {
    id: 2,
    quote:
      "The aroma hits you the moment you walk in. Every bite tastes like it was made just for me",
    image:
      "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68cbcbff23a598f4014ed4fc_testimonial-2.avif",
    name: "Evelyn Hall",
    role: "Diet instructor",
  },
  {
    id: 3,
    quote:
      "They’re open whenever my cravings hit, and the quality of food is always top notch",
    image:
      "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68cbcbfff6f10040b5838a58_testimonial-3.avif",
    name: "James Robinson",
    role: "NYT bestselling author",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10">
      <div className="mx-auto lg:px-6 px-3">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#2b0d05] mb-6 md:mb-10">
          What our fans say
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!items-stretch"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto flex">
              <div className="bg-[#e9dfd6] rounded-[40px] lg:p-8 p-4 h-full flex flex-col justify-between w-full h-full">
                
                {/* Quote */}
                <p className="text-[#2b0d05] text-lg leading-relaxed lg:mb-8 md:mb-4 mb-2">
                  “ {item.quote} ”
                </p>

                {/* Image */}
                <div className="overflow-hidden rounded-2xl lg:mb-6 md:mb-3 mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full lg:h-[300px] h-[30vh] object-cover"
                  />
                </div>

                {/* Author */}
                <div className="flex lg:flex-row flex-col items-center lg:ms-auto lg:gap-3 text-center">
                  <h4 className="text-lg font-semibold text-[#2b0d05]">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-base font-medium">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}