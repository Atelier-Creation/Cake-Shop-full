import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// LEFT SLIDER (Premium Cakes Reviews)
const premiumCakeTestimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    message:
      "The chocolate truffle cake was absolutely divine! Rich, moist, and beautifully decorated. Perfect for my birthday!",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    message:
      "Best red velvet cake I’ve ever had. Super fresh and delivered right on time.",
  },
  {
    id: 3,
    name: "Priya Nair",
    message:
      "Their custom wedding cake design was stunning. Tasted as good as it looked!",
  },
];


// RIGHT TOP SLIDER (Custom Orders Reviews)
const customOrderTestimonials = [
  {
    id: 1,
    name: "Kavya Reddy",
    message:
      "They perfectly recreated the cartoon theme cake for my son’s birthday. Everyone loved it!",
  },
  {
    id: 2,
    name: "Arjun Verma",
    message:
      "Ordered a photo cake and it came out amazing. The detailing was impressive.",
  },
  {
    id: 3,
    name: "Sneha Iyer",
    message:
      "Super creative designs and very cooperative team. Highly recommended for theme cakes!",
  },
];


// RIGHT BOTTOM SLIDER (Customer Experience Reviews)
const experienceTestimonials = [
  {
    id: 1,
    name: "Meera Joshi",
    message:
      "The shop ambience is lovely and the staff are very friendly. A must-visit for dessert lovers!",
  },
  {
    id: 2,
    name: "Vikram Singh",
    message:
      "Quick service and fresh pastries every time. Their cheesecakes are my favorite!",
  },
  {
    id: 3,
    name: "Divya Kapoor",
    message:
      "Affordable pricing with premium taste. Definitely my go-to cake shop.",
  },
];
const Testimonials = () => {
  const StarRating = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-orange-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-10 lg:px-4 bg-white">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#280a03] mb-10 text-center">
          Trusted by 6k+ people to move business forward
        </h2>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="space-y-6">
            {/* David Lee Card */}
            <div className="bg-[#e9dfd6] text-[#2b0d05] p-8 rounded-3xl h-64">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
              >
                {premiumCakeTestimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="h-48 flex flex-col justify-between">
                      <p className="text-lg leading-relaxed">
                        "{item.message}"
                      </p>
                      <div className="flex justify-between items-end mt-4">
                        <span className="font-semibold text-[#2b0d05]">
                          {item.name}
                        </span>
                        <StarRating />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 1200+ Clients Card */}
            <div className="relative lg:h-96 h-[40vh] rounded-3xl overflow-hidden group">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-women-shopping-food_23-2149461758.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
                alt="Happy team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b bg-black/50" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-5xl font-bold">1200+</h3>
                <p className="text-xl opacity-90">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Middle Column (Large) */}
          <div className="relative rounded-3xl overflow-hidden lg:min-h-[600px] flex flex-col justify-between lg:p-10 p-5 text-white shadow-xl">
            <img
              src="https://img.freepik.com/free-photo/confectioner-uniform-decorates-cake_1157-33239.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
              alt="Dedicated service"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b bg-black/50" />

            <div className="relative z-10">
              <h3 className="text-6xl font-bold">24/7</h3>
              <p className="text-xl font-medium mt-2">Freshly Baked Happiness</p>
            </div>

            <div className="relative z-10 max-w-sm">
              <h4 className="text-2xl font-bold mb-4">Leave the sweet moments to us</h4>
              <p className="text-gray-100 leading-relaxed">
                From custom birthday cakes to elegant wedding creations, our expert bakers handle everything with care. Enjoy your celebration while we craft the perfect dessert—fresh, delicious, and delivered on time.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Neil Patrick Card */}
            <div className="bg-[#e9dfd6] text-[#2b0d05] p-8 rounded-3xl h-full">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className='h-full'
              >
                {customOrderTestimonials.map((item) => (
                  <SwiperSlide key={item.id} className='h-full'>
                    <div className="h-full flex flex-col justify-between">
                      <p className="text-lg leading-relaxed">
                        "{item.message}"
                      </p>
                      <div className="flex justify-between items-end mt-4">
                        <span className="font-semibold text-[#2b0d05]">
                          {item.name}
                        </span>
                        <StarRating />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>


            {/* Alicia Fox Card */}
            <div className="bg-[#e9dfd6] text-[#2b0d05] p-8 rounded-3xl h-full">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className='h-full'
              >
                {experienceTestimonials.map((item) => (
                  <SwiperSlide key={item.id} className='h-full'>
                    <div className="h-full flex flex-col justify-between">
                      <p className="text-lg leading-relaxed">
                        "{item.message}"
                      </p>
                      <div className="flex justify-between items-end mt-4">
                        <span className="font-semibold text-[#2b0d05]">
                          {item.name}
                        </span>
                        <StarRating />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;