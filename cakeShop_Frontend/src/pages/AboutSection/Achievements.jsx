import React from 'react';

const Achievements = () => {
const stats = [
    {
        value: "50K+",
        description: "Cakes baked and delivered for birthdays, weddings, and special celebrations.",
    },
    {
        value: "98%",
        description: "Happy customers who return for our fresh cakes and desserts.",
    },
    {
        value: "10+",
        description: "Years of baking delicious cakes with love and premium ingredients.",
    },
    {
        value: "120+",
        description: "Unique cake flavors and custom designs crafted by our expert bakers.",
    },
];

    return (
        <section className="bg-[#fff9ef] py-20">
            <div className="max-w-[90%] mx-auto">
                {/* Grid layout: 1 col on mobile, 2 on tablet, 4 on desktop */}
                <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col space-y-4 items-center justify-center text-center"
                        >
                            {/* Stat Number */}
                            <h2 className="text-[#2b0d05] text-2xl md:text-5xl">
                                {stat.value}
                            </h2>

                            {/* Stat Description */}
                            <p className="text-[#4a4238] text-base leading-relaxed max-w-[280px]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;