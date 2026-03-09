import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
const testimonials = [
    {
        title: "The Best Birthday Cake Ever",
        text: "The cake looked beautiful and tasted even better. Everyone at the party loved it!",
        name: "Emily R.",
        country: "UK",
        img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_rp_50_assets&w=740&q=80",
        bigImg:
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_rp_50_assets&w=740&q=80",
    },
    {
        title: "Perfect Custom Wedding Cake",
        text: "Our wedding cake was stunning and delicious. The design was exactly what we dreamed of.",
        name: "James K.",
        country: "USA",
        img: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_rp_50_assets&w=740&q=80",
        bigImg:
            "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_rp_50_assets&w=740&q=80",
    },
    {
        title: "Fresh and Delicious Every Time",
        text: "Their cakes and pastries are always fresh. This is our go-to bakery for every celebration.",
        name: "Aron M.",
        country: "Australia",
        img: "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_rp_50_assets&w=740&q=80",
        bigImg:
            "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_rp_50_assets&w=740&q=80",
    },

    // extra data
    {
        title: "Beautiful Cake Designs",
        text: "The custom cake design was amazing and tasted incredible. Highly recommended bakery!",
        name: "Sophia L.",
        country: "Canada",
        img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_rp_50_assets&w=740&q=80",
        bigImg:
            "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_rp_50_assets&w=740&q=80",
    },
];

export default function AboutTestimonial() {
    const [start, setStart] = useState(0);
    const [hovered, setHovered] = useState(null);

    const visible = [
        testimonials[start],
        testimonials[(start + 1) % testimonials.length],
        testimonials[(start + 2) % testimonials.length],
    ];

    const next = () => {
        setStart((prev) => (prev + 1) % testimonials.length);
        setHovered(null);
    };

    const prev = () => {
        setStart((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
        setHovered(null);
    };

    return (
        <div className="bg-[#F9F9F9]">
            <section className="lg:max-w-[90%] mx-auto px-4 py-10 lg:py-20 ">
                <div data-aos="fade-down" className="flex items-center gap-3 mb-4 uppercase tracking-widest text-sm md:text-base font-semibold text-gray-500 border-b w-fit pb-2 border-gray-200">
                    <span className="w-2 h-2 rounded-full bg-[#fdc700]"></span>
                    Testimonials
                </div>
                {/* Header */}
                <div data-aos="fade-down" className="flex justify-between md:mb-12 mb-5">
                    <h2 className="md:text-5xl text-3xl">What Our Guests Say</h2>

                    <div className="hidden lg:flex gap-3">
                        <button onClick={prev} className="bg-[#fdc700] cursor-pointer rounded-full h-9 w-9 flex justify-center items-center">
                            <ChevronLeft className="text-[#280a03]"/>
                        </button>

                        <button onClick={next} className=" bg-[#fdc700] cursor-pointer rounded-full h-9 w-9 flex justify-center items-center">
                            <ChevronRight className="text-[#280a03]"/>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div data-aos="fade-up" className="hidden lg:flex gap-6 h-[60vh]">

                    {visible.map((t, i) => {

                        const active = hovered === i;

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setHovered(i)}
                                className={`flex rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-500
      ${active ? "flex-[6]" : "flex-3"}`}
                            >
                                <div className="p-8 flex flex-col justify-between w-[300px]">

                                    <div>
                                        <h3 className="text-2xl  mb-4">{t.title}</h3>
                                        <p className="text-gray-600 text-sm">"{t.text}"</p>
                                    </div>

                                    <div>
                                        <img src={t.img} className="w-12 h-12 rounded-md mb-3" />
                                        <p className="text-lg">{t.name}</p>
                                        <p className="text-sm text-gray-500">{t.country}</p>
                                    </div>

                                </div>

                                {active && (
                                    <div className="flex-1">
                                        <img
                                            src={t.bigImg}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* MOBILE SLIDER */}
                <div className="lg:hidden">

                    <Swiper
                        modules={[Autoplay]}
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
                        className="h-full"
                    >

                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i} className="!h-auto flex">

                                <div className="bg-white rounded-2xl h-full  overflow-hidden">

                                    <img
                                        src={t.bigImg}
                                        className="w-full h-[30vh] md:h-56 object-cover"
                                    />

                                    <div className="p-6">

                                        <h3 className="text-xl mb-3">
                                            {t.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-6">
                                            "{t.text}"
                                        </p>

                                        <div className="flex items-center gap-3">
                                            <img
                                                src={t.img}
                                                className="w-10 h-10 rounded-md"
                                            />

                                            <div>
                                                <p className="">{t.name}</p>
                                                <p className="text-sm text-gray-500">{t.country}</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </section>
        </div>
    );
}