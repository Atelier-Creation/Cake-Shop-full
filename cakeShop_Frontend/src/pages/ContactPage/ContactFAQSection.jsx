import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-[#F5EDE4] rounded-2xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-[#F5EDE4] rounded-2xl transition-colors duration-300 group"
      >
        <span className="text-xl md:text-2xl  text-[#280A03] text-left">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
          <div className="bg-[#280A03] p-1 rounded-md text-yellow-400">
            {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
          </div>
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-6 text-gray-600 leading-relaxed">
          {answer || "This is a placeholder answer for the frequently asked question. You can provide detailed information here about your services, hours, or policies."}
        </div>
      </div>
    </div>
  );
};

const ContactFAQSection = () => {
const faqs = [
  {
    question: "Do you offer custom cake designs?",
    answer:
      "Yes! We specialize in custom cake designs for birthdays, weddings, anniversaries, and special events. You can share your theme, flavor preference, and design ideas while placing the order."
  },
  {
    question: "How far in advance should I order a cake?",
    answer:
      "We recommend placing your order at least 24–48 hours in advance for regular cakes and 3–5 days in advance for customized or themed cakes."
  },
  {
    question: "What cake flavors do you offer?",
    answer:
      "We offer a wide range of flavors including Chocolate, Vanilla, Red Velvet, Black Forest, Butterscotch, Strawberry, Pineapple, and many seasonal specials."
  },
  {
    question: "Do you provide same-day cake delivery?",
    answer:
      "Yes, we offer same-day delivery for selected cakes if the order is placed before the cutoff time. Delivery availability may vary depending on location."
  },
  {
    question: "Do you make eggless cakes?",
    answer:
      "Absolutely! We provide both egg and eggless cake options, and all eggless cakes are prepared separately to maintain quality and taste."
  },
  {
    question: "Can I order cakes online?",
    answer:
      "Yes, you can easily browse our cakes, customize your order, and place it online through our website. We also provide secure online payment options."
  },
  {
    question: "Do you make cakes for special occasions like weddings?",
    answer:
      "Yes, we create premium multi-tier wedding cakes and large celebration cakes. Our team can design cakes based on your theme, color palette, and event style."
  },
  {
    question: "How should I store my cake after delivery?",
    answer:
      "Most cakes should be refrigerated and taken out 20–30 minutes before serving to enjoy the best taste and texture."
  }
];

  return (
    <section className="lg:py-20 pb-10 pt-0 lg:px-20 px-5 mx-auto">
      <div className="flex items-center gap-2 mb-4 border-b w-full border-gray-200 pb-3">
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        <span className="text-sm font-medium uppercase tracking-wider">Questions</span>
      </div>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl text-[#333] leading-tight">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        <div className="lg:max-w-xs lg:max-w-sm">
          <p className="text-gray-500 text-lg leading-snug">
            Stay in comfort anywhere in the world. From luxury resorts to cozy homestays,
            we offer accommodations to suit every style and budget.
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default ContactFAQSection;