import React, { useEffect } from 'react';
import CakeNavbar from '../MobileDesign/CakeNavbar';
import MobileFooter from '../MobileDesign/MobileFooter';
import Achievements from './Achievements';
import HistorySection from './HistorySection';
import AboutVideoSection from './AboutVideoSection';
import AboutTestimonial from './AboutTestimonial';
import AboutFaq from './AboutFaq';
import AOS from "aos";
import "aos/dist/aos.css";
const AboutHero = () => {
      useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          easing: "ease-in-out", // animation easing
          once: true, // whether animation should happen only once
        });
      }, []);
    return (
        <div className=''>
            <CakeNavbar />
            <section className="flex flex-col lg:flex-row lg:h-[85vh] overflow-hidden">

                {/* Left Content Side */}
                <div data-aos="fade-down" className="w-full px-4 py-5 lg:ps-20 flex flex-col lg:gap-10 gap-5 justify-center">
                    <div className="flex flex-col gap-5 lg:max-w-xl">
                        {/* Header Title */}
                        <h1 data-aos="fade-down" className="text-4xl lg:text-7xl text-[#2b0d05]">
                            About
                        </h1>

                        {/* Description */}
                        <p data-aos="fade-down" className="text-base lg:text-lg leading-relaxed text-gray-600">
                                At Sweet Crumbs Bakery, we believe every celebration deserves a perfect cake. 
    Our journey started with a passion for baking and a dream of creating desserts 
    that bring people together. From freshly baked cakes and pastries to custom 
    celebration cakes, we combine premium ingredients, creative designs, and 
    traditional baking techniques to craft unforgettable sweet moments.
                        </p>

                        {/* Buttons / CTAs */}
                        <div  className="flex flex-wrap items-center gap-4">
                            <button data-aos="fade-down" className="bg-[#2b0d05] text-[#fdc700] px-5 py-3 rounded-full font-medium hover:bg-[#fdc700] hover:text-[#2b0d05] transition-colors">
                                Explore Our Cakes
                            </button>

                            <button data-aos="fade-down" className="flex items-center gap-2 bg-[#F4F4F4] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                                <img
                                    src="https://cdn.prod.website-files.com/68c01514c2d93b3e1b8a60f4/68f0cdca996827e49184d4b9_frame2147225623.webp"
                                    alt="Avatar"
                                    className=" w-6 h-6 rounded-full object-cover"
                                />
                                <span>Order Custom Cake</span>
                            </button>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <div className='flex flex-col gap-3 lg:max-w-xl'>
                        <h2 data-aos="fade-down" className="text-4xl text-[#2b0d05]">Our values</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Value Item 1 */}
                            <div className='flex flex-col gap-3'>
                                <h3 data-aos="fade-down" className="text-xl font-semibold  text-gray-800">Innovation</h3>
                                <p data-aos="fade-down" className="text-gray-500 leading-relaxed">
                                    We constantly experiment with flavors, textures, and designs to create 
    unique cakes that surprise and delight our customers.
                                </p>
                            </div>

                            {/* Value Item 2 */}
                            <div className='flex flex-col gap-3'>
                                <h3 data-aos="fade-down" className="text-xl font-semibold text-gray-800">Integrity</h3>
                                <p data-aos="fade-down" className="text-gray-500 leading-relaxed">
                                    We use only high-quality ingredients and bake everything fresh daily, 
    ensuring every cake meets the highest standards of taste and quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Side */}
                <div data-aos="fade-up" className="w-full ">
                    <img
                        src="https://cdn.prod.website-files.com/68c01514c2d93b3e1b8a60f4/68f9cf998258ac1db362eca0_4fe869d5533b073ec385aeaefb323faa_placeholderimage.webp"
                        alt="Dining atmosphere"
                        className="w-full lg:h-full h-[40vh] md:h-[50vh] object-cover"
                    />
                </div>

            </section>
            <Achievements/>
            <HistorySection/>
            <div className='overflow-hidden'>
            <AboutVideoSection/>
            </div>
            <AboutTestimonial/>
            <AboutFaq/>
            <MobileFooter />
        </div>
    );
};

export default AboutHero;