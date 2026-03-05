import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full max-w-[90%] mx-auto gap-6 pb-10 lg:px-8 font-sans">

            {/* Left Section: Image Banner */}
            <div className="relative lg:w-1/2 rounded-[40px] overflow-hidden lg:min-h-[500px] flex items-end p-8 lg:p-12">
                {/* Background Image & Overlays */}
                <div className="absolute inset-0">
                    <img
                        src="https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68d51a609b6199689115071d_products-menu.avif"
                        alt="Chef in bakery"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-[linear-gradient(#521f1200,#521f12e6)]"></div>
                </div>

                {/* Banner Content */}
                <div className="relative z-10 text-white max-w-sm">
                    <h2 className="text-4xl font-bold leading-tight mb-4">
                        Do you have more questions, let’s Talk?
                    </h2>
                    <p className="text-lg opacity-90 mb-8">
                        Don’t worry! send your questions to us.
                    </p>

                    {/* Phone Link Button */}
                    <a
                        href="tel:+01234569870"
                        className="inline-flex items-center gap-3 px-6 py-3 border border-yellow-500 rounded-full text-yellow-500 font-medium transition-all hover:bg-yellow-500 hover:text-black group"
                    >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full group-hover:bg-black"></span>
                        +0123-456-9870
                    </a>
                </div>
            </div>

            {/* Right Section: Form */}
            <div className="lg:w-3/4 bg-[#F5EDE4] rounded-[40px] p-5 lg:p-8">
                <h3 className="text-3xl font-bold text-[#280A03] mb-8">How we can help you?</h3>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your first name?"
                            className="w-full px-6 h-12 rounded-full border border-[#d2bcb6] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#280a03] placeholder-[#280a03]"
                        />
                        <input
                            type="text"
                            placeholder="Your last name?"
                            className="w-full px-6 h-12 rounded-full border border-[#d2bcb6] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#280a03] placeholder-[#280a03]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-6 h-12 rounded-full border border-[#d2bcb6] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#280a03] placeholder-[#280a03]"
                        />
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full px-6 h-12 rounded-full border border-[#d2bcb6] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#280a03] placeholder-[#280a03]"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Enter your subject"
                        className="w-full px-6 h-12 rounded-full border border-[#d2bcb6] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#280a03] placeholder-[#280a03]"
                    />

                    <textarea
                        placeholder="Enter your message"
                        rows="5"
                        className="w-full px-6 py-4 rounded-[30px] border border-[#d2bcb6] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#280a03] placeholder-[#280a03] resize-none"
                    ></textarea>

                    <div className="flex items-center gap-3 py-2">
                        <input
                            type="radio"
                            id="terms"
                            className="w-5 h-5 accent-yellow-500 border-gray-300 rounded cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-base text-gray-700 cursor-pointer font-semibold">
                            I agree with the terms & conditions
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="flex items-center gap-3 px-5 py-4 bg-[#FFCC0F] hover:bg-[#e6b80d] text-[#280A03] font-bold rounded-full transition-colors"
                    >
                        <span className="w-2 h-2 bg-[#280A03] rounded-full"></span>
                        Send a Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;