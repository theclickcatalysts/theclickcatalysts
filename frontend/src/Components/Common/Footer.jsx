import React from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaSlack,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-secoundary text-white py-10 px-6 cursor-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-white">
        {/* Company Info */}
        <div className="cursor-white">
          <button
            type="button"
            className="text-2xl font-logoFont font-bold text-primary cursor-white"
          >
            <a href="/">Click Catalysts</a>
          </button>
          <p className="mt-4 text-gray-500 cursor-white">
            Welcome to Click Catalysts, your go-to platform for seamless digital
            solutions.
          </p>
          <div className="flex space-x-4 mt-4 cursor-white">
            <a
              href="https://www.facebook.com/profile.php?id=61574873630488"
              target="_blank"
              rel="noopener noreferrer cursor-white"
            >
              <FaFacebook className="text-white text-lg transition-colors duration-300 hover:text-[#1877F2]" />{" "}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer cursor-white">
              <FaXTwitter className="text-white text-lg transition-colors duration-300 hover:text-[#797878]" />{" "}
            </a>
            <a
              href="https://www.instagram.com/theclickcatalysts/?fbclid=IwZXh0bgNhZW0CMTEAAR3EnXFjhEVTGOktWztnejvkpDxpIWM-GpxxCfF0zjIt9AvHUJ9zwZW-p38_aem_Fzu9-xPPTwiCJK0ERRgEPg"
              target="_blank"
              rel="noopener noreferrer cursor-white"
            >
              <FaInstagram className="text-white text-lg transition-colors duration-300 hover:text-[#E4405F]" />{" "}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer cursor-white">
              <FaLinkedinIn className="text-white text-lg transition-colors duration-300 hover:text-[#0077B5]" />{" "}
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="cursor-white">
          <h3 className="text-xl font-semibold cursor-white">Services</h3>
          <ul className="mt-4 space-y-2 text-gray-400 flex flex-col cursor-white">
            <Link to="/services" className="hover:text-[#216478] cursor-white">
              Branding & Design
            </Link>
            <Link to="/services" className="hover:text-[#216478] cursor-white">
              Influencer Marketing
            </Link>
            <Link to="/services" className="hover:text-[#216478] cursor-white">
              Digital Marketing
            </Link>
            <Link to="/services" className="hover:text-[#216478] cursor-white">
              Web Development
            </Link>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="cursor-white">
          <h3 className="text-xl font-semibold cursor-white">Get in Touch</h3>
          <p className="mt-4 text-gray-400 cursor-white">+91 9038372666</p>
          <p className="text-gray-400 cursor-white">
            info@theclickcatalysts.com
          </p>
          <p className="text-gray-400 cursor-white">Unit 641, 6th floor</p>
          <p className="text-gray-400 cursor-white">PS ABACUS, NH12,</p>
          <p className="text-gray-400 cursor-white">
            Action Area IIE, New Town,
          </p>
          <p className="text-gray-400 cursor-white">
            Kolkata, West Bengal 700157
          </p>
        </div>

        {/* Subscribe */}

        <div>
          <h3 className="text-xl font-semibold cursor-white">Send A Query</h3>
          <div className="mt-4 space-y-1 cursor-white">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="cursor-white w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <textarea
              placeholder="Your message..."
              rows="3"
              className="cursor-white w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none resize-none"
            ></textarea>
            <button className="bg-[#216478] cursor-white w-full px-4 py-2 rounded-md text-white hover:bg-[#1b5364] transition">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 cursor-white border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        <p className="cursor-white">
          Copyright &copy; {new Date().getFullYear()} Click Catalysts
        </p>

          <span>|</span>
          <Link to="/privacy-policy">
          <button href="#" className="hover:text-primary cursor-white">
            Privacy Policy
          </button>
          </Link>
          
      </div>
    </footer>
  );
};

export default Footer;
