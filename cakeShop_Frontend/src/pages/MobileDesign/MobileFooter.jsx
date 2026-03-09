import React, { useEffect, useRef, useState } from "react";
import { Home, Truck, Trees, Building2, ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion"

export default function MobileFooter() {

  const img1Ref = useRef()
  const img2Ref = useRef()
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const calculateDistance = () => {
      if (!img1Ref.current || !img2Ref.current) return

      const rect1 = img1Ref.current.getBoundingClientRect()
      const rect2 = img2Ref.current.getBoundingClientRect()

      setDistance(rect2.left - rect1.right)
    }

    const timer = setTimeout(calculateDistance, 200)
    window.addEventListener("resize", calculateDistance)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", calculateDistance)
    }
  }, [])

  return (
    <div>

      {/* TOP ILLUSTRATION */}
      <div className="overflow-x-hidden hidden md:block">
        <div className="flex items-end justify-between max-w-[95%] mx-auto relative">

          <motion.img
            src="/Footer/p.png"
            className="h-10 sm:h-12 md:h-15 absolute top-0 right-0"
            initial={{ x: "0" }}
            animate={{ x: "-100vw" }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1
            }}
          />

          <div className="flex items-end gap-3 md:gap-5">

            <div className="relative">
              <img src="/Footer/tower.png" className="h-16 sm:h-20 md:h-25" />

              <motion.img
                src="/Footer/w.png"
                className="h-12 sm:h-16 md:h-20 absolute -top-3 md:-top-5 z-10"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(12%) saturate(220%) hue-rotate(340deg) brightness(95%) contrast(92%)",
                }}
              />
            </div>

            <div className="flex items-end">
              <img src="/Footer/f.png" className="h-16 sm:h-20 md:h-25" />

              <motion.img
                ref={img1Ref}
                src="/Footer/v.png"
                className="h-10 sm:h-12 md:h-15"
                animate={{
                  x: [0, distance, distance, 0],
                  rotateY: [0, 0, 180, 180]
                }}
                transition={{
                  duration: 6,
                  times: [0, 0.45, 0.55, 1],
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
            </div>

          </div>

          <div className="hidden sm:block">
            <img src="/Footer/t.png" className="h-14 md:h-20" />
          </div>

          <div className="hidden md:block">
            <img src="/Footer/t.png" className="h-20" />
          </div>

          <div className="hidden md:block">
            <img src="/Footer/t.png" className="h-20" />
          </div>

          <div className="flex items-end gap-6 md:gap-12">
            <img ref={img2Ref} src="/Footer/h.png" className="h-16 sm:h-20 md:h-25" />
            <img src="/Footer/t.png" className="h-14 md:h-20" />
          </div>

        </div>
      </div>


      <footer className="bg-[#e9dfd6] text-[#2b0d05]">

        {/* MAIN FOOTER */}
        <div className="mx-auto px-6 md:px-10 lg:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">

          {/* LOGO AREA */}
          <div className="flex flex-col items-start">

            <div className="p-6 rounded-xl w-fit mb-6">
              <img
                src="https://cdn.prod.website-files.com/645b56c820c38b0d6401681d/646cb8d9d8d24a9447a30f28_Logo-pastry.png"
                className="h-20 md:h-24 lg:h-30 brightness-100"
              />
            </div>

            <div className="flex items-center gap-3 text-[#2a0e05] mb-4 font-medium text-lg">

              <span className="bg-yellow-400 rounded-full p-2"><Facebook /></span>
              <span className="bg-yellow-400 rounded-full p-2"><Instagram /></span>
              <span className="bg-yellow-400 rounded-full p-2"><Youtube /></span>

            </div>
          </div>


          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful link</h3>

            <ul className="space-y-3 font-medium text-base text-[#565656]">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>


          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>

            <ul className="space-y-3 font-medium text-base text-[#565656]">
              <li>cakeshop@gmail.com</li>
              <li>+91 9876543210</li>
              <li>Mechelsesteenweg 715</li>
              <li>3020 Heverlee</li>
            </ul>
          </div>


          {/* Subscribe Section */}
          <div className="w-full">

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Sunshine in your inbox
            </h2>

            <p className="text-base text-[#280a03] mb-6 font-medium">
              Get 25% off your starter kit when you sign up
            </p>

            <div className="flex items-center max-w-md gap-2">

              <input
                type="email"
                placeholder="Enter your mail"
                className="flex-1 px-4 md:px-6 py-2 md:py-3 border rounded-full border-[#d2bcb6] bg-transparent outline-none text-[#2a0e05]"
              />

              <button className="bg-yellow-400 rounded-full w-10 h-10 md:w-13 md:h-13 flex items-center justify-center text-xl">
                <ArrowRight />
              </button>

            </div>

            <p className="font-medium text-sm md:text-base text-[#565656] mt-4 max-w-md">
              You can unsubscribe by using the unsubscribe link. Our Privacy
              Policy applies and sets out your rights.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}