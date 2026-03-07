import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What are your bakery opening hours?",
    answer: "Our bakery is open Monday to Sunday from 9:00 AM to 9:00 PM. During festivals and special occasions, hours may be extended."
  },
  {
    question: "Do you make custom cakes for birthdays and weddings?",
    answer: "Yes! We specialize in custom cakes for birthdays, weddings, anniversaries, and other celebrations. You can choose the flavor, design, and size."
  },
  {
    question: "How early should I order a custom cake?",
    answer: "We recommend placing custom cake orders at least 24–48 hours in advance to ensure we can create the perfect design for your event."
  },
  {
    question: "Do you offer home delivery for cakes?",
    answer: "Yes, we provide home delivery for cakes and desserts within selected areas. You can place your order online or contact our bakery directly."
  },
  {
    question: "What cake flavors do you offer?",
    answer: "We offer a wide range of flavors including Chocolate, Vanilla, Red Velvet, Butterscotch, Black Forest, Fruit Cake, and many more seasonal specials."
  },
  {
    question: "Do you make eggless cakes?",
    answer: "Yes! We offer a variety of eggless cakes that taste just as delicious as our regular cakes."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-50">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-3 md:p-6 text-left transition-colors hover:bg-gray-50/50"
      >
        <span className="text-lg text-gray-800 md:text-xl font-medium w-3/4">
          {question}
        </span>
        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#fdc700] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} className="text-[#280a03] " />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-gray-500 leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F9F9F9] lg:py-10 px-4 md:px-6 mb-10">
      <div className="mx-auto lg:max-w-[90%]">
        <div className="grid md:gap-12 gap-7 lg:grid-cols-[1fr_1.5fr]">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4 uppercase tracking-widest text-sm md:text-base font-semibold text-gray-500 border-b w-fit pb-2 border-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#fdc700]"></span>
                Faq
            </div>
            
            <div className="relative h-20 w-32">
              {/* Mockup of the overlapping avatars in the image */}
              <div className="absolute left-0 top-0 h-16 w-16 overflow-hidden rounded-2xl rotate-[-10deg] shadow-lg">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=200" alt="Food" className="h-full w-full object-cover" />
              </div>
              <div className="absolute left-10 top-2 h-16 w-16 overflow-hidden rounded-2xl rotate-[5deg] shadow-lg border-2 border-white">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=200" alt="Restaurant" className="h-full w-full object-cover" />
              </div>
            </div>

            <h2 className="text-3xl md:text-6xl text-gray-900 leading-tight">
              Have Questions
            </h2>
            
            <p className="max-w-xs text-base md:text-lg text-gray-500 leading-snug">
              Got answers to the common questions and a spot for you to ask your own.
            </p>
          </div>

          {/* Right Content - Accordion */}
          <div className="flex flex-col">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFaq;