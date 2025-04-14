import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/Home/aboutImgg.png";
import Typewriter from "../Common/Typewriter";
import { Link } from "react-router-dom";
const AboutUsSection = () => {
  return (
    <section className="px-4 py-10 font-primary overflow-hidden">
      <div className="w-[95%] md:w-[85%] lg:w-[75%] xl:w-[70%] mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12 md:gap-20">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }} // Triggers every time it enters 30% of the viewport
        >
          <h4 className="uppercase text-gray-600 tracking-widest">
            About Us
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headingFont font-bold text-textColor">
            From <span className="text-primary">Click</span> to Conversion
            {/* <Typewriter text="From Click to Conversion"/> */}
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-xl mx-auto font-primary">
            We’re not just marketers — we’re your partners in digital growth.
            With a perfect blend of strategy, creativity, and data, we turn
            every click into measurable results.
            <br className="hidden sm:block" />
            Our team is passionate about helping brands grow, engage, and succeed in a digital-first world.
          </p>

          <Link to="/know-us">
            <button className="mt-4 px-6 py-3 bg-btnColor text-white rounded-lg hover:bg-btnHover transition-all duration-300 shadow-md hover:shadow-lg cursor-white">
              Read More
            </button>
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }} // Ensures it animates every time it's in view
        >
          <img
            src={aboutImg}
            alt="Rocket Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;

