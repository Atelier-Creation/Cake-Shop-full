import React, { useEffect, useState, useCallback } from "react";
import { MapPin, Menu, Search, User, X } from "lucide-react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/CartDrawer/CartContext";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import { getCartByUserId } from "../../api/cartApi";
import LocationDropdown from "../../components/LocationDropdown";

const CakeNavbar = () => {
    const navigate = useNavigate();
    const { toggleDrawer } = useCart();

    const [isOpen, setIsOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [userInitial, setUserInitial] = useState(null);
    const [topNav, setTopNav] = useState(true)
    // ---------- Guest Cart ----------
    const getGuestCartCount = useCallback(() => {
        try {
            const raw = localStorage.getItem("guest_cart");
            const cart = raw ? JSON.parse(raw) : [];
            return Array.isArray(cart) ? cart.length : 0;
        } catch {
            return 0;
        }
    }, []);

    // ---------- User Initial ----------
    const updateUserInitial = useCallback(() => {
        const userStr = localStorage.getItem("user");
        if (!userStr) {
            setUserInitial(null);
            return;
        }

        try {
            const user = JSON.parse(userStr);
            const name = user?.name || user?.fullName;
            if (name) {
                setUserInitial(name.charAt(0).toUpperCase());
            }
        } catch {
            setUserInitial(null);
        }
    }, []);

    // ---------- Fetch Cart ----------
    const fetchCart = useCallback(async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setCartCount(getGuestCartCount());
                return;
            }

            const res = await getCartByUserId();
            setCartCount(res?.data?.items?.length || 0);
        } catch {
            setCartCount(getGuestCartCount());
        }
    }, [getGuestCartCount]);

    // ---------- Init ----------
    useEffect(() => {
        updateUserInitial();
        fetchCart();

        const handleStorage = () => {
            updateUserInitial();
            fetchCart();
        };

        window.addEventListener("storage", handleStorage);
        window.addEventListener("authChanged", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
            window.removeEventListener("authChanged", handleStorage);
        };
    }, [updateUserInitial, fetchCart]);

    // ---------- Account Click ----------
    const handleAccountClick = () => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/profile");
        } else {
            localStorage.setItem(
                "postLoginRedirect",
                JSON.stringify({ path: window.location.pathname })
            );
            navigate("/login");
        }
    };

    return (
        <div>
            {topNav && (
                <div className="relative flex flex-col md:flex-row justify-center items-center py-2 bg-[#2b0d05] text-white text-sm overflow-hidden">

                    {/* Location - Desktop Only */}
                    <div className="absolute left-10 hidden lg:flex items-center gap-2">
                        <LocationDropdown />
                    </div>

                    {/* Desktop Static Offer */}
                    <div className="hidden lg:flex items-center gap-2 text-[#fdc700] font-medium">
                        Use Code <span className="text-white">SWEET10</span> & Get 10% OFF on Orders Above <span className="text-white">₹499!</span>
                    </div>

                    {/* Mobile / Tablet Running Flash News */}
                    <div className="lg:hidden w-full overflow-hidden">
                        <div className="whitespace-nowrap animate-marquee text-[#fdc700] font-medium">
                            Use Code SWEET10 & Get 10% OFF on Orders Above ₹499! &nbsp;&nbsp;&nbsp;
                            Free Delivery on Orders Above ₹699 &nbsp;&nbsp;&nbsp;
                            Flat ₹100 OFF on First Order – Code FIRST100 &nbsp;&nbsp;&nbsp;
                        </div>
                    </div>

                    {/* Close Button */}
                    <div
                        onClick={() => setTopNav(false)}
                        className="absolute right-2 md:right-10 cursor-pointer"
                    >
                        <X size={20} color="#fdc700" />
                    </div>

                </div>
            )}
            <nav className="w-full bg-[#fff9ef] py-2.5 relative">
                <div className="mx-auto flex items-center justify-between px-4">

                    {/* Left Links (Desktop) */}
                    <div className="hidden lg:flex flex-1 justify-center gap-12">
                        <a href="/" className="text-[#2b0d05] font-medium">
                            Home
                        </a>
                        <a href="/collections/all" className="text-[#2b0d05] font-medium">
                            Product
                        </a>
                    </div>

                    {/* Center Logo */}
                    <div className="flex-none px-6 lg:px-20 cursor-pointer" onClick={() => navigate("/")}>
                        <img
                            src="https://cdn.prod.website-files.com/645b56c820c38b0d6401681d/646cb8d9d8d24a9447a30f28_Logo-pastry.png"
                            alt="Pastry Bakery Shop"
                            className="w-20 h-auto"
                        />
                    </div>

                    {/* Right Side (Desktop) */}
                    <div className="hidden lg:flex flex-1 justify-center items-center gap-12 relative">
                        <a href="/#about" className="text-[#2b0d05] font-medium">
                            About us
                        </a>
                        <a href="/contact" className="text-[#2b0d05] font-medium">
                            Contact us
                        </a>

                        <div className="flex gap-3 absolute right-0">

                            {/* Search */}
                            <div
                                onClick={handleAccountClick}
                                className="bg-[#2b0d05] text-white h-8 w-8 flex justify-center items-center rounded-full cursor-pointer"
                            >
                                <Search size={18} />
                            </div>
                            {/* Account */}
                            <div
                                onClick={handleAccountClick}
                                className="bg-[#2b0d05] text-white h-8 w-8 flex justify-center items-center rounded-full cursor-pointer"
                            >
                                {userInitial ? (
                                    <span className="font-bold">{userInitial}</span>
                                ) : (
                                    <User size={18} />
                                )}
                            </div>

                            {/* Cart */}
                            <div
                                onClick={() => toggleDrawer(true)}
                                className="relative bg-[#2b0d05] text-white h-8 w-8 flex justify-center items-center rounded-full cursor-pointer"
                            >
                                <MdOutlineShoppingBag size={18} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-800 text-xs font-bold px-1.5 py-0.5 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="lg:hidden flex items-center gap-3">


                        {/* Account */}
                        <div
                            onClick={handleAccountClick}
                            className="relative bg-[#2b0d05] text-white h-8 w-8 flex justify-center items-center rounded-full cursor-pointer"
                        >
                            {userInitial ? (
                                <span className="font-bold">{userInitial}</span>
                            ) : (
                                <User size={18} />
                            )}
                        </div>

                        {/* Cart */}
                        <div
                            onClick={() => toggleDrawer(true)}
                            className="relative bg-[#2b0d05] text-white h-8 w-8 flex justify-center items-center rounded-full cursor-pointer"
                        >
                            <MdOutlineShoppingBag size={18} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-800 text-xs font-bold px-1.5 py-0.5 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-[#fff9ef] shadow-md z-20">
                        <div className="flex flex-col items-center gap-6 py-6">
                            <a href="/" onClick={() => setIsOpen(false)}>Home</a>
                            <a href="/collections/all" onClick={() => setIsOpen(false)}>Product</a>
                            <a href="/#about" onClick={() => setIsOpen(false)}>About us</a>
                            <a href="/#contact" onClick={() => setIsOpen(false)}>Contact us</a>
                        </div>
                    </div>
                )}

                {/* Cart Drawer */}
                <CartDrawer onCartChange={fetchCart} />
            </nav>
        </div>
    );
};

export default CakeNavbar;