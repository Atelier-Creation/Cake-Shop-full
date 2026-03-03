import React, { useState } from "react";
import { Menu, ShoppingCart, User, X } from "lucide-react";

const CakeNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-[#fff9ef] py-2.5 relative">
            <div className="mx-auto flex items-center justify-between px-4">

                {/* Left Links (Desktop) */}
                <div className="hidden lg:flex flex-1 justify-center gap-8 lg:gap-12">
                    <a href="/" className="text-[#2b0d05] font-medium hover:opacity-70 transition-opacity">
                        Home
                    </a>
                    <a href="/collections/all" className="text-[#2b0d05] font-medium hover:opacity-70 transition-opacity">
                        Product
                    </a>
                </div>

                {/* Center Logo */}
                <div className="flex-none px-6 lg:px-20">
                    <a href="/" className="flex flex-col items-center">
                        <img
                            src="https://cdn.prod.website-files.com/645b56c820c38b0d6401681d/646cb8d9d8d24a9447a30f28_Logo-pastry.png"
                            alt="Pastry Bakery Shop"
                            className="w-20 h-auto"
                        />
                    </a>
                </div>

                {/* Right Links (Desktop) */}
                <div className="hidden lg:flex flex-1 justify-center items-center gap-8 lg:gap-12 relative">
                    <a href="/#about" className="text-[#2b0d05] font-medium hover:opacity-70 transition-opacity">
                        About us
                    </a>
                    <a href="/#contact" className="text-[#2b0d05] font-medium hover:opacity-70 transition-opacity">
                        Contact us
                    </a>
                    <div className="flex gap-3 absolute right-0">
                        <div className="bg-[#2b0d05] text-white h-8 flex justify-center items-center w-8 rounded-full">
                            <User size={20} />
                        </div>
                        <div className="bg-[#2b0d05] text-white h-8 flex justify-center items-center w-8 rounded-full">
                            <ShoppingCart size={20} />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#2b0d05] p-2"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    <div className="flex gap-3">
                        <div className="bg-[#2b0d05] text-white h-8 flex justify-center items-center w-8 rounded-full">
                            <User size={20} />
                        </div>
                        <div className="bg-[#2b0d05] text-white h-8 flex justify-center items-center w-8 rounded-full">
                            <ShoppingCart size={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#fff9ef] shadow-md z-20">
                    <div className="flex flex-col items-center gap-6 py-6">
                        <a href="/" onClick={() => setIsOpen(false)} className="text-[#2b0d05] font-medium">
                            Home
                        </a>
                        <a href="/collections/all" onClick={() => setIsOpen(false)} className="text-[#2b0d05] font-medium">
                            Product
                        </a>
                        <a href="/#about" onClick={() => setIsOpen(false)} className="text-[#2b0d05] font-medium">
                            About us
                        </a>
                        <a href="/#contact" onClick={() => setIsOpen(false)} className="text-[#2b0d05] font-medium">
                            Contact us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default CakeNavbar;