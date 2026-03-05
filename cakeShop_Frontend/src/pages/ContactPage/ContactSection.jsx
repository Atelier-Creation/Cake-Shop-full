import React from 'react';

const ContactSection = () => {
    const contactMethods = [
        {
            icon: "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68ca4762e86df8637070b06e_phone.svg",
            label: "Contact us at",
            value: "+0123-456-9870",
            href: "tel:+01234569870",
        },
        {
            icon: "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68ca47626bf91c58761ece3d_handshake.svg",
            label: "Retail partnerships?",
            value: "info@example.com",
            href: "mailto:info@example.com",
        },
        {
            icon: "https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68ca4762322d7d886c667ff3_chat.svg",
            label: "Have questions?",
            value: "info@example.com",
            href: "mailto:info@example.com",
        },
    ];

    return (
        <div className="w-full p-4 md:p-8">
            {/* Main Container */}
            <div className="lg:max-w-[90%] mx-auto bg-[#f4ebe2] rounded-[40px] p-5 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Side: Text Content */}
                <div className="lg:max-w-md">
                    <h2 className="text-[#331b14] text-3xl md:text-3xl font-bold leading-tight mb-6">
                        We will take care of any problem and help you.
                    </h2>
                    <p className="text-[#6b5d56] text-lg  lg:w-3/4">
                        Contact information, including address, phone number, email, website, and social media links
                    </p>
                </div>

                {/* Right Side: Contact Items */}
                <div className="flex flex-col sm:flex-row w-full justify-between gap-5">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            {/* Icon Box */}
                            <div className="bg-[#fffbf6] rounded-2xl w-20 h-20 flex items-center justify-center mb-5 shadow-sm">
                                <img
                                    src={method.icon}
                                    alt="icon"
                                    className="w-10 h-10"
                                />
                            </div>

                            {/* Labels & Links */}
                            <div className="space-y-1">
                                <p className="text-[#6b5d56] text-sm md:text-base font-medium">
                                    {method.label}
                                </p>
                                <a
                                    href={method.href}
                                    className="text-[#331b14] text-base md:text-lg font-bold border-b-2 border-[#331b14] hover:opacity-70 transition-opacity"
                                >
                                    {method.value}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ContactSection;