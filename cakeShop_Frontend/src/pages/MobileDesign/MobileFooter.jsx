import { ArrowRight, ChevronLeft } from "lucide-react";
import React from "react";

const MobileFooter = () => {
  return (
    <footer className="bg-[#f4ebe2] text-[#2a0e05] md:pt-16 pt-6 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-7">

          {/* Subscribe Section */}
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-2">
              Sunshine in your inbox
            </h2>

            <p className="text-base text-[#280a03] mb-6 font-medium">
              Get 25% off your starter kit when you sign up
            </p>

            <div className="flex items-center max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your mail"
                className="flex-1 px-6 md:py-3 py-2 border rounded-full border-[#d2bcb6] bg-transparent outline-none text-[#2a0e05]"
              />
              <button className="bg-yellow-400 rounded-full md:w-13 md:h-13 w-10 h-10 flex items-center justify-center text-xl">
                <ArrowRight/>
              </button>
            </div>

            <p className="font-medium text-base  text-[#565656] mt-4 max-w-md">
              You can unsubscribe by using the unsubscribe link. Our Privacy
              Policy applies and sets out your rights.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col md:flex-row justify-between w-full">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact us</h3>

            <p className="text-[#6b6b6b] mb-3 font-medium text-lg">info@example.com</p>

            <p className="text-3xl font-bold mb-3">+0123-456-9870</p>

            <p className="text-[#6b6b6b] mb-4 font-medium text-base">
              27th Street, 15th Floor, New York, NY 1010
            </p>

            <a
              href="#"
              className="font-semibold text-lg underline underline-offset-4"
            >
              Get directions
            </a>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Useful link</h3>
              <ul className="space-y-3 text-[#5a5a5a] font-medium text-base">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Search results</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Our utilities</h3>
              <ul className="space-y-3 text-[#5a5a5a] font-medium text-base">
                <li>Style guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>Protected page</li>
                <li>404</li>
              </ul>
            </div>
          </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pb-5 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">

          {/* Social + Copyright */}
          <div>
            <div className="md:flex grid grid-cols-2 items-center lg:gap-4 gap-2 text-[#2a0e05] mb-4 font-medium text-lg">
              <span>Facebook - </span>
              <span>Twitter - </span>
              <span>Instagram - </span>
              <span>Youtube </span>
            </div>

            <p className="text-[#5a5a5a] text-base">
              © 2025 Bisqueria made by Themetechmount powered by Webflow
            </p>
          </div>

          {/* Big Right Text */}
          <div className="md:text-[130px] text-5xl mx-auto lg:mx-0 font-extrabold leading-none">
            Bisqueria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;