import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const bakeryItems = [
    {
        id: 1,
        title: "Oatmeal raisin cookies",
        reviews: 146,
        price: "3.84",
        image: "https://cdn.prod.website-files.com/68c2b2281c379c252b014434/68d67ed24708b3054414f063_products-1.avif"
    },
    {
        id: 2,
        title: "Soft pretzels",
        reviews: 235,
        price: "4.92",
        image: "https://cdn.prod.website-files.com/68c2b2281c379c252b014434/68d67f5c6342b6c7ed37d668_products-14.avif"
    },
    {
        id: 3,
        title: "Baguette soft breads",
        reviews: 380,
        price: "14.96",
        image: "https://cdn.prod.website-files.com/68c2b2281c379c252b014434/68d67fe4ab262b4e4de1a29e_products-18.avif"
    },
    {
        id: 4,
        title: "Chocolate hazelnut cannoli",
        reviews: 120,
        price: "6.78",
        image: "https://cdn.prod.website-files.com/68c2b2281c379c252b014434/68d680689c9187b6a5e053c9_products-10.avif"
    },
    {
        id: 5,
        title: "Almond croissant",
        reviews: 436,
        price: "7.54",
        image: "https://cdn.prod.website-files.com/68c2b2281c379c252b014434/68d680bf793abc58efc73b0b_products-9.avif"
    }
];

const BakerySlider = () => {
    return (
        <section className="px-4">
            <div className="mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#280a03]">
                        Daily boost bakery items
                    </h2>
                    <div className="flex gap-3">
                        <button className="swiper-prev-btn w-10 h-10 rounded-full bg-[#f4ebe2] flex items-center justify-center hover:bg-[#e8ddd0] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#280a03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </button>
                        <button className="swiper-next-btn w-10 h-10 rounded-full bg-[#f4ebe2] flex items-center justify-center hover:bg-[#e8ddd0] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#280a03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={{
                        prevEl: '.swiper-prev-btn',
                        nextEl: '.swiper-next-btn',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-8"
                >
                    {bakeryItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="rounded-2xl p-2.5 flex flex-col h-full 
  bg-gradient-to-b from-white to-[#f4ebe2] 
  hover:from-[#fff7ee] hover:to-[#f0e2d3] 
  transition-all duration-500">
                                <div className="overflow-hidden rounded-[1.5rem] mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="px-2 flex flex-col flex-grow">
                                    <h3 className="text-lg font-medium text-[#280a03] mb-2">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-1 mb-6">
                                        <div className="flex text-orange-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-base text-gray-500">{item.reviews} reviews</span>
                                    </div>
                                    <div className="mt-auto">
                                        <button className="bg-white relative overflow-hidden group w-full rounded-full py-3 px-6 flex justify-between items-center">
                                            <span className="absolute inset-0 bg-[#280a03] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                                            <div className="relative z-10 flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 bg-[#280a03] rounded-full group-hover:bg-yellow-400 transition-colors duration-300"></span>

                                                <span className="font-medium text-[#280a03] text-base group-hover:text-yellow-400 transition-colors duration-300">
                                                    Order now
                                                </span>
                                            </div>

                                            <span className="relative z-10 text-gray-700 text-sm font-medium group-hover:text-white transition-colors duration-300">
                                                ₹ {item.price} USD
                                            </span>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BakerySlider;