import React, { useEffect } from 'react';
import CakeNavbar from '../MobileDesign/CakeNavbar';
import MobileFooter from '../MobileDesign/MobileFooter';
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';
import InstaFeed from './InstaFeed';
import FaqSection from '../../components/FaqSection/FaqSection';
import ContactFAQSection from './ContactFAQSection';
import ContactMapSection from './ContactMapSection';
import AOS from "aos";
import "aos/dist/aos.css";
const ContactHero = () => {
          useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          easing: "ease-in-out", // animation easing
          once: true, // whether animation should happen only once
        });
      }, []);
    return (
        <div>
            <CakeNavbar />
            <section className="lg:py-12 py-5 px-4 lg:px-8 bg-white overflow-hidden">
                <div className="lg:max-w-[90%] mx-auto">
                    {/* Header Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-3 items-center mb-5">
                        <div data-aos="fade-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-[#2d1606] tracking-tight">
                                Contact us
                            </h1>
                        </div>
                        <div data-aos="fade-right" className="flex items-center h-full">
                            <p className="text-[#565656] text-sm md:text-base">
                                We provide clear contact information, including address, phone number,
                                email, website, and social media links. Include details like opening
                                hours, payment methods.
                            </p>
                        </div>
                    </div>

                    {/* Hero Image Section */}
                    <div data-aos="fade-up" className="relative w-full overflow-hidden rounded-lg md:rounded-[60px]">
                        <img
                            src="https://cdn.prod.website-files.com/68c2913cdc349585e89642ac/68d523d62ce6986723c4a52f_contact-pagetitle.avif"
                            alt="Assorted artisanal breads"
                            className="w-full h-[30vh] object-cover md:min-h-[40vh]"
                        />
                    </div>
                </div>
            </section>
            <ContactSection />
            <ContactForm />
            <InstaFeed />
            <ContactFAQSection/>
            <ContactMapSection/>
            <MobileFooter />

        </div>
    );
};

export default ContactHero;