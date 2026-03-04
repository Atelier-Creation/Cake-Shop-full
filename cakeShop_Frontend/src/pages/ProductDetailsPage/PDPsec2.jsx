import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    head: "What makes our cakes soft, moist, and delicious?",
    para: `Our cakes are baked fresh daily using premium ingredients, ensuring a rich flavor, soft texture, and perfect sweetness in every bite.`,
  },
  {
    head: "Do you use fresh and high-quality ingredients in your cakes?",
    para: `Yes, we use farm-fresh eggs, pure dairy cream, high-quality cocoa, and natural flavors to maintain exceptional taste and quality.`,
  },
  {
    head: "What nutritional value do your cakes offer?",
    para: `Our cakes provide energy through balanced ingredients, and we also offer eggless and reduced-sugar options for mindful indulgence.`,
  },
  {
    head: "What types of cakes can I order from your shop?",
    para: `We offer birthday cakes, wedding cakes, custom theme cakes, chocolate cakes, fruit cakes, cupcakes, and festive special desserts.`,
  },
  {
    head: "Are your cakes suitable for special occasions?",
    para: `Absolutely! From birthdays and anniversaries to weddings and corporate events, our cakes add sweetness to every celebration.`,
  },
  {
    head: "How do you ensure hygiene and freshness in your bakery?",
    para: `We follow strict hygiene standards in our kitchen, bake in small batches, and ensure every cake is freshly prepared before delivery.`,
  },
  {
  head: "Do you offer custom-designed cakes for special themes?",
  para: `Yes, we create fully customized cakes based on your theme, favorite flavors, colors, and design preferences to make your celebration unique and memorable.`,
},
{
  head: "Can I choose different flavors and fillings for my cake?",
  para: `Absolutely! From classic chocolate and vanilla to red velvet, butterscotch, and exotic fruit fillings, you can mix and match flavors to suit your taste.`,
},
{
  head: "Do you provide home delivery and same-day cake orders?",
  para: `We offer convenient home delivery services and same-day cake orders for selected designs, ensuring your celebrations are never delayed.`,
},
];

function PDPsec2({ images = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between items-start lg:px-20 lg:py-5 md:px-10 py-5 px-3 lg:gap-10 gap-5">
      {/* Left Q&A Section */}
      <div className="w-full space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">{item.head}</h4>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-base">{item.para}</p>
            )}
          </div>
        ))}
      </div>

      {/* Right Image Slider Section */}
      <div className="w-full lg:h-[80vh] h-[50vh] rounded-xl overflow-hidden">
        {images.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="h-full w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Product slide ${index + 1}`}
                  className="h-full w-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src="https://lenaturelmeat.com/cdn/shop/files/Lalipop1.webp?v=1756895386&width=360"
            alt="Placeholder"
            className="h-full w-full object-cover rounded-xl"
          />
        )}
      </div>
    </div>
  );
}

export default PDPsec2;
