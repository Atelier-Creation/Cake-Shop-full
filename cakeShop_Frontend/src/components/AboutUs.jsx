import React from "react";

export default function AboutUs() {
  const videoId = "HTXB6flODww";

  return (
    <section className="w-full bg-[#5b2c26] py-10 md:py-6 my-10">
      <div className="mx-auto px-4">

        {/* Cream Main Container */}
        <div className=" rounded-2xl p-0 md:p-5 ">
          <div className="flex lg:flex-row flex-col justify-between gap-8 ">

            {/* LEFT SIDE – VIDEO (Same Video) */}

              <div className="w-full lg:w-full h-[40vh] md:h-[60vh] lg:h-[70vh] relative shadow-xl aspect-square overflow-hidden rounded-lg pointer-events-none">
                <iframe
                  className="w-[300%] h-[100%] -ml-[100%] object-cover"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0`}
                  title="About Cake Studio Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>


            {/* RIGHT SIDE – YOUR ORIGINAL CONTENT */}
            <div className="bg-[#efe6d8] rounded-2xl h-full lg:h-[70vh] shadow-lg overflow-hidden lg:w-[75%]">

              <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                <div>
                  {/* Small Heading */}
                  <p className="text-lg text-[#EF4B5F] font-semibold mb-2">
                    Our Cake Studio
                  </p>

                  {/* Main Heading */}
                  <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4 text-[#2a0e05]">
                    WE BAKE WITH LOVE, CREATIVITY & THE FINEST INGREDIENTS
                  </h2>

                  {/* Description */}
                  <p className="text-[#5a5a5a] mb-6">
                    Every cake we create is handcrafted with premium ingredients
                    and a passion for perfection. From classic flavors to custom
                    designer cakes, we make every celebration sweeter and more memorable.
                  </p>
                </div>
                {/* Stats Box – Redesigned Layout */}
                <div className="bg-[#8a4d26] text-white rounded-xl shadow-md">
                  <div className="grid grid-cols-2 md:grid-cols-4 text-center">

                    <div className="py-6">
                      <div className="text-2xl font-bold mb-1">1,280+</div>
                      <div className="text-sm">Happy Customers</div>
                    </div>

                    <div className="py-6">
                      <div className="text-2xl font-bold mb-1">100%</div>
                      <div className="text-sm">Freshly Baked</div>
                    </div>

                    <div className="py-6">
                      <div className="text-2xl font-bold mb-1">4+</div>
                      <div className="text-sm">Cake Flavours</div>
                    </div>

                    <div className="py-6">
                      <div className="text-2xl font-bold mb-1">5+</div>
                      <div className="text-sm">Custom Designs</div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}