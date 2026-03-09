import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { getProducts } from '../api/productApi';
import { useNavigate } from 'react-router-dom';

const BakerySlider = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await getProducts();
            const data = res.data
            console.log(data)
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };
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
                    autoplay={{ delay: 400000, disableOnInteraction: false }}
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
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="rounded-2xl p-2.5 flex flex-col h-full 
  bg-gradient-to-b from-white to-[#f4ebe2] 
  hover:from-[#fff7ee] hover:to-[#f0e2d3] 
  transition-all duration-500">
                                <div onClick={()=>navigate(`/products/${item._id}`)} className="overflow-hidden rounded-[1.5rem] mb-6 cursor-pointer">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-full lg:h-[45vh] h-[30vh] md:h-[40vh] object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="px-2 flex flex-col gap-4 flex-grow">
                                    <h3 className="text-lg font-medium text-[#280a03]">
                                        {item.name}
                                    </h3>
                                    <p className='text-gray-700 text-base font-medium'>
                                        category : {item.category.name}
                                    </p>
                                    <p className='text-gray-700 text-base font-medium '>
                                        Type : {item.cutType.join(" / ")}
                                    </p>

                                    <div className="mt-auto">
                                        <button onClick={()=>navigate(`/products/${item._id}`)} className="bg-white relative overflow-hidden group w-full rounded-full py-3 px-6 flex justify-between items-center">
                                            <span className="absolute inset-0 bg-[#280a03] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                                            <div className="relative z-10 flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 bg-[#280a03] rounded-full group-hover:bg-yellow-400 transition-colors duration-300"></span>

                                                <span className="font-medium text-[#280a03] text-base group-hover:text-yellow-400 transition-colors duration-300">
                                                    View
                                                </span>
                                            </div>

                                            <span className="relative z-10 text-gray-700 text-sm font-medium group-hover:text-white transition-colors duration-300">
                                                ₹ {item.weightOptions?.[0]?.discountPrice || item.weightOptions?.[0]?.price}
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