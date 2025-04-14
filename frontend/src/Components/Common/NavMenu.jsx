// components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/Common/logo22.png";
import { FaXTwitter } from "react-icons/fa6";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    if (location.pathname === "/") {
      // If already on home page, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on a different page, navigate to home and scroll to top
      navigate("/");
    }
  };

  return (
    <>
      {/* Top Info Bar - Only for Large Screens */}
      <div className="flex justify-end items-center bg-gray-100 text-sm px-2 py-2">
        <div className="flex items-center gap-3 text-gray-600">
          <span className="hidden md:block md:text-sm xl:text-base">
            Follow us on:
          </span>
          <a
            href="https://www.facebook.com/profile.php?id=61574873630488"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-blue-600" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-[#797878]" />
          </a>
          <a
            href="https://www.instagram.com/theclickcatalysts/?fbclid=IwZXh0bgNhZW0CMTEAAR3EnXFjhEVTGOktWztnejvkpDxpIWM-GpxxCfF0zjIt9AvHUJ9zwZW-p38_aem_Fzu9-xPPTwiCJK0ERRgEPg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-blue-700" />
          </a>
        </div>
      </div>

      {/* Placeholder to avoid layout shift when sticky */}
      {isSticky && <div className="h-[70px]" />}

      {/* Main Navbar */}
      <div
        ref={navbarRef}
        className={`w-full z-[998] bg-white transition-all duration-300 ${
          isSticky ? "fixed top-0 shadow-md" : "relative"
        }`}
      >
        <div className="flex justify-center items-center">
          <nav className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] flex items-center justify-between p-4">
            {/* Logo */}
            <button onClick={handleClick} className="flex items-center gap-1">
              <div className="lg:w-[200px] lg:h-[70px] md:w-[150px] md:h-[60px] sm:w-[120px] sm:h-[50px] w-[100px] h-[45px]">
                <img
                  src={logo}
                  alt="logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </button>

            {/* Desktop Links */}
            <ul className="hidden lg:flex space-x-6 items-center text-base xl:text-lg font-medium font-primary">
              {[
                { label: "Home", to: "/" },
                { label: "Know Us", to: "/know-us" },
                { label: "Services", to: "/services" },
                { label: "Career", to: "/Career" },
                { label: "Blog", to: "/blog" },
                { label: "Contact Us", to: "/contact" },
              ].map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={item.to} className="relative group perspective-500">
                    <Link
                      to={item.to}
                      className="relative group perspective-[600px]"
                    >
                      <span className="relative block h-6 overflow-hidden">
                        <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                          <button>{item.label}</button>
                        </span>
                        <span className="absolute left-0 top-full block transition-all duration-300 group-hover:top-0 group-hover:opacity-100 opacity-0 text-secoundary">
                          <button>{item.label}</button>
                        </span>
                      </span>
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-secoundary transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to="/contact">
              <button className="hidden lg:block bg-btnColor text-white px-4 py-2 rounded-lg hover:bg-btnHover transition duration-300">
                Request a Quote
              </button>
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-grSt px-4 py-2 rounded-full transition"
            >
              <FaBars size={24} />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[90%] sm:w-[400px] z-[999] bg-white text-black shadow-lg p-8 overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-btnColor text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-2">Menu</p>
              <ul className="text-secoundary space-y-4 text-2xl font-light mb-10">
                {[
                  { label: "Home", to: "/" },
                  { label: "Know Us", to: "/know-us" },
                  { label: "Services", to: "/services" },
                  { label: "Career", to: "/Career" },
                  { label: "Blog", to: "/blog" },
                  { label: "Contact", to: "/contact" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="bg-btnColor hover:bg-btnHover text-white px-4 py-3 rounded-lg mb-10">
                  Request a Quote
                </button>
              </Link>

              <div className="mb-8">
                <p className="text-sm text-gray-400 mb-2">Find Us Here</p>
                <div className="flex flex-col gap-3 text-sm">
                  <p className="mt-4 text-secoundary">+91 9038372666</p>
                  <p className="text-secoundary">info@theclickcatalysts.com</p>
                  <p className="text-secoundary">Unit 641, 6th floor</p>
                  <p className="text-secoundary">PS ABACUS, NH12,</p>
                  <p className="text-secoundary">Action Area IIE, New Town,</p>
                  <p className="text-secoundary">Kolkata, West Bengal 700157</p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMenu;