import React from 'react';
import CakeNavbar from '../MobileDesign/CakeNavbar';
import MobileFooter from '../MobileDesign/MobileFooter';
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';
import InstaFeed from './InstaFeed';
import FaqSection from '../../components/FaqSection/FaqSection';
import ContactFAQSection from './ContactFAQSection';
import ContactMapSection from './ContactMapSection';

const ContactHero = () => {
    return (
        <div>
            <CakeNavbar />
            <section className="py-12 px-5 md:px-5 bg-white">
                <div className="mx-auto">
                    {/* Header Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-5">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-[#2d1606] tracking-tight">
                                Contact us
                            </h1>
                        </div>
                        <div className="flex items-center h-full">
                            <p className="text-[#565656] text-sm md:text-base">
                                We provide clear contact information, including address, phone number,
                                email, website, and social media links. Include details like opening
                                hours, payment methods.
                            </p>
                        </div>
                    </div>

                    {/* Hero Image Section */}
                    <div className="relative w-full overflow-hidden rounded-[40px] md:rounded-[60px]">
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