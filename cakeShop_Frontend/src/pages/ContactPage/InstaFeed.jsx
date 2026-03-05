import React from 'react';
import { Instagram } from 'lucide-react'; // Using lucide-react for the icon

const InstaFeed = () => {
    const images = [
        "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68d51c60e940f3ff64e0808c_instagram-1.avif",
        "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68d51c5f7cb52edd61f3ad5f_instagram-2.avif",
        "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68d51c5ff25a8769cb090e6e_instagram-3.avif",
        "center-card", // Placeholder for the dark CTA card
        "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68d51c5f58db4a526ef96a69_instagram-4.avif",
        "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68d51c5fa2dde26b3dad27a3_instagram-5.avif",
        "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68d51c5f3a9cd1643e8bcb43_instagram-6.avif",
        "mobile-end-card",
    ];

    return (
        <section className="py-12 px-4 bg-white">
            <div className="mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {images.map((item, index) => {
                        if (item === "center-card") {
                            return (
                                <div
                                    key="cta"
                                    className="hidden lg:flex flex-col items-center justify-center bg-[#2A1208] text-white rounded-2xl aspect-square p-4 text-center"
                                >
                                    <Instagram className="w-8 h-8 mb-3" />
                                    <p className="text-sm font-medium mb-1">Freshly baked daily</p>
                                    <a
                                        href="https://instagram.com"
                                        className="text-yellow-500 font-bold border-b border-[#D4A373] hover:text-white transition-colors"
                                    >
                                        @CakeShop
                                    </a>
                                </div>
                            );
                        }
                        /* Mobile last card */
                        if (item === "mobile-end-card") {
                            return (
                                <div
                                    key="mobile-cta"
                                    className="lg:hidden col-span-2 flex flex-col items-center justify-center bg-[#2A1208] text-white rounded-2xl p-4 text-center"
                                >
                                    <Instagram className="w-8 h-8 mb-3" />

                                    <p className="text-sm font-medium mb-1">
                                        Freshly baked daily
                                    </p>

                                    <a
                                        href="https://instagram.com"
                                        className="text-yellow-500 font-bold border-b border-[#D4A373]"
                                    >
                                        @CakeShop
                                    </a>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
                            >
                                {/* Image */}
                                <img
                                    src={item}
                                    alt={`Bakery feed ${index}`}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute p-2 inset-2.5 rounded-2xl bg-[#521f12e6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                    <div className="rounded-full mb-2">
                                        <Instagram className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-yellow-500 border-b-2 border-yellow-500 text-lg font-semibold">@CakeShop</span>
                                </div>
                            </div>
                        );


                    })}
                </div>
            </div>
        </section>
    );
};

export default InstaFeed;