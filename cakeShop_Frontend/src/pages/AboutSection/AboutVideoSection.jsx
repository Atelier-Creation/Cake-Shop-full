import React, { useState } from "react";

const AboutVideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const videoUrl = "https://www.youtube.com/embed/pLgPFfFdpDs?autoplay=1";

    return (
        <section className="relative w-full h-[30vh] md:h-screen overflow-hidden bg-black flex flex-col justify-center items-center">

            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://cdn.prod.website-files.com/68c01514c2d93b3e1b8a60f4/68f9f34b063df0cd2cfb98ab_frame2085668228.webp"
                    alt="AirDish Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Play Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="relative z-10 group transition-transform hover:scale-110 duration-300"
            >
                <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="40" fill="white" />
                    <path
                        d="M49.6275 37.2775L36.75 29.8375C36.3819 29.6197 35.9627 29.5033 35.535 29.5C34.8627 29.5 34.2179 29.7671 33.7425 30.2425C33.2671 30.7179 33 31.3627 33 32.035V48.0025C33.0001 48.4487 33.1197 48.8866 33.3464 49.2709C33.573 49.6552 33.8985 49.9718 34.289 50.1876C34.6794 50.4035 35.1206 50.5109 35.5666 50.4986C36.0125 50.4862 36.4471 50.3546 36.825 50.1175L49.7175 41.9725C50.1184 41.7216 50.4474 41.3712 50.6726 40.9553C50.8977 40.5394 51.0113 40.0723 51.0022 39.5995C50.9932 39.1267 50.8618 38.6643 50.6208 38.2573C50.3799 37.8504 50.0377 37.5128 49.6275 37.2775Z"
                        fill="#D94F30"
                    />
                </svg>
            </button>

            {/* Marquee */}
            <div className="absolute bottom-4 w-full overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee">
                    <span className="text-[12vw] font-bold text-white uppercase px-4">
                        Taste the Magic Tradition foods
                    </span>
                    <span className="text-[12vw] font-bold text-white uppercase px-4">
                        Taste the Magic Tradition foods
                    </span>
                </div>
            </div>

            {/* VIDEO MODAL */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

                    <div className="relative w-[90%] md:w-[800px]">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-10 right-0 text-white text-3xl"
                        >
                            ✕
                        </button>

                        {/* Video */}
                        <div className="aspect-video">
                            <iframe
                                src={videoUrl}
                                title="YouTube video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                            ></iframe>
                        </div>

                    </div>
                </div>
            )}

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: 200%;
                    animation: marquee 20s linear infinite;
                }
            `}</style>

        </section>
    );
};

export default AboutVideoSection;