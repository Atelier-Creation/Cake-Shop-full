import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const HISTORY_DATA = [
    {
        id: "2005",
        year: "2005",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        text: "Our bakery began as a small family kitchen in 2005, baking fresh cakes and pastries with traditional recipes and a passion for sweetness."
    },
    {
        id: "2008",
        year: "2008",
        image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
        text: "Due to growing customer love, we opened our first official cake shop and introduced custom birthday and celebration cakes."
    },
    {
        id: "2012",
        year: "2012",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
        text: "We expanded our menu with premium desserts, cupcakes, and wedding cakes, becoming a favorite bakery for celebrations."
    },
    {
        id: "2020",
        year: "2020",
        image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e",
        text: "During challenging times, we launched online cake ordering and home delivery to keep celebrations alive for our customers."
    },
    {
        id: "2025",
        year: "2025",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
        text: "Celebrating 20 years of baking happiness, creating thousands of cakes, and being part of countless special moments."
    }
];

const HistorySection = () => {

    const [activeYear, setActiveYear] = useState("2005");
    const sectionsRef = useRef({});

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveYear(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        Object.values(sectionsRef.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();

    }, []);

    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <section className="lg:py-20 md:px-12 bg-white">

            <div data-aos="fade-down" className="mx-auto">

                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* LEFT SIDE */}
                    <div className="lg:sticky relative lg:top-24 self-start flex flex-col gap-5 lg:flex-row items-start justify-around">

                        <div  className="flex items-center gap-3 mt-10 uppercase tracking-widest text-base font-semibold text-gray-500 border-b lg:w-1/2 pb-2 border-gray-200">
                            <span className="w-2 h-2 rounded-full bg-[#fdc700]"></span>
                            Our History
                        </div>

                        <nav className="flex lg:flex-col gap-6 overflow-x-auto lg:overflow-visible
      w-full lg:w-auto
      whitespace-nowrap
      pb-4 lg:pb-0
      scrollbar-hide">

                            {HISTORY_DATA.map((item) => (

                                <button
                                    key={item.id}
                                    onClick={() => handleClick(item.id)}
                                    className="text-left group"
                                >

                                    <h2
                                        className={`md:text-5xl text-2xl lg:text-8xl transition-colors duration-300
                                        ${activeYear === item.id
                                                ? "text-[#fdc700]"
                                                : "text-gray-600 group-hover:text-[#fdc700]"
                                            }`}
                                    >
                                        {item.year}
                                    </h2>

                                </button>

                            ))}

                        </nav>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:space-y-12 space-y-5">

                        {HISTORY_DATA.map((item) => (

                            <div
                                key={item.id}
                                id={item.id}
                                ref={(el) => (sectionsRef.current[item.id] = el)}
                                className="scroll-mt-24"
                            >

                                <div className="overflow-hidden h-[30vh] md:h-[50vh] lg:h-[70vh] mb-3 lg:mb-8">
                                    <img
                                        src={item.image}
                                        alt={`History ${item.year}`}
                                        className="w-full h-full rounded-2xl object-cover  transition-transform duration-700"
                                    />
                                </div>

                                <h3 className="text-lg md:text-3xl font-light leading-relaxed text-gray-800">
                                    {item.text}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

                {/* MOBILE SLIDER */}
                <div data-aos="fade-down" className='px-4 lg:hidden'>
                    <div className="flex items-center gap-3 mt-10 uppercase tracking-widest text-base font-semibold text-gray-500 border-b w-fit pb-2 border-gray-200">
                        <span className="w-2 h-2 rounded-full bg-[#fdc700]"></span>
                        Our History
                    </div>
                </div>
                <div data-aos="fade-down">


                    <div className="lg:hidden">
                        <Swiper modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={20}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1, // mobile
                                },
                                768: {
                                    slidesPerView: 2, // tablet
                                },
                                1024: {
                                    slidesPerView: 3, // desktop
                                },
                            }}
                            className="h-full w-full" >
                            {HISTORY_DATA.map((item) => (
                                <SwiperSlide key={item.id} className='px-4 py-10'>
                                    <div className='bg-white rounded-lg h-full shadow-md  overflow-hidden'>

                                        <div className="overflow-hidden h-[30vh]">
                                            <img
                                                src={item.image}
                                                alt={`History ${item.year}`}
                                                className="w-full h-full rounded-lg object-cover"
                                            />
                                        </div>
                                        <div className='p-4'>
                                            {/* YEAR INSIDE CARD */}
                                            <h2 className="text-4xl font-bold text-[#fdc700] mb-2">
                                                {item.year}
                                            </h2>

                                            <p className="text-base text-gray-700 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HistorySection;