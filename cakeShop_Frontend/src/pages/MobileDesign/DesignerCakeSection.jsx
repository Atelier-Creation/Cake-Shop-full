import React from 'react';
import { useNavigate } from 'react-router-dom';
import "aos/dist/aos.css";

const DesignerCakeSection = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full px-5 lg:px-16 py-12 lg:py-24 flex flex-col md:flex-row items-center justify-between gap-10 bg-white overflow-hidden">
            {/* Left side Image */}
            <div className="w-full md:w-1/2 flex justify-center relative" data-aos="fade-right">
                {/* Placeholder image of a cake. Since a specific image wasn't provided for this section, I am using a placeholder that looks good, transparent */}
                <img
                    src="https://dt-cakey.myshopify.com/cdn/shop/files/Component_139_1.jpg"
                    alt="Creamy Nuts Vanilla Cake"
                    className="w-full max-w-full object-contain"
                    onError={(e) => {
                        e.target.src = "https://dt-bakehouse.myshopify.com/cdn/shop/products/bakes18.1_14e973dc-3224-4862-9c3f-cbbcb7f19cb5.jpg";
                        e.target.className = "w-full max-w-full object-contain";
                    }}
                />
            </div>

            {/* Right side content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left" data-aos="fade-left">
                <p className="text-[#EF4B5F] text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mb-3">
                    Designer Cake
                </p>
                <h2 className="text-4xl lg:text-6xl font-black italic text-black mb-6" style={{ fontFamily: "'Dancing Script', cursive, serif" }}>
                    Creamy Nuts Vanilla Cake
                </h2>

                <p className="text-gray-500 text-sm md:text-base leading-loose mb-10 max-w-xl">
                    Bibendum enim facilisis gravida neque convallis a cras semper.
                    Pretium fusce id velit ut tortor pretium viverra suspendisse. Ut
                    diam quam nulla porttitor. Viverra ipsum nunc aliquet bibendum
                    enim facilisis gravida neque convallis.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                    <div className="flex items-center gap-3 border-[1.5px] border-[#EF4B5F] text-[#EF4B5F] px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-[#EF4B5F] hover:text-white cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>
                        Soft Baked Product
                    </div>
                    <div className="flex items-center gap-3 border-[1.5px] border-[#EF4B5F] text-[#EF4B5F] px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-[#EF4B5F] hover:text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
                        Fully Weat Product
                    </div>
                    <div className="flex items-center gap-3 border-[1.5px] border-[#EF4B5F] text-[#EF4B5F] px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-[#EF4B5F] hover:text-white cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>
                        </svg>
                        Soft Baked Product
                    </div>
                </div>

                <button
                    onClick={() => navigate('/collections/all')}
                    className="bg-[#EF4B5F] text-white px-8 py-3.5 rounded-full font-bold transition-transform hover:scale-105 w-max flex items-center justify-center gap-2 shadow-lg"
                >
                    Shop Now
                    {/* Using simple SVG for play / arrow icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default DesignerCakeSection;
