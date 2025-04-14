import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../Components/Home/Hero";
import DetSection from "../Components/Home/DetSection";
import AboutUsSection from "../Components/Home/AboutUsSection";
import IndustriesWeServe from "../Components/Home/IndustriesWeServe";
import Footer from "../Components/Common/Footer";
import Testimonials from "../Components/Home/Testmonials";
import ClientsCarousel from "../Components/Home/OurClient";
import BlogSection from "../Components/Home/OurBlog";
import OurServices from "../Components/Home/OurServices";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <DetSection />
      </section>
      <section>
        <OurServices />
      </section>
      <AboutUsSection />
      {/* <FAQComponent/> */}
      <IndustriesWeServe />

      <ClientsCarousel />
      <Testimonials />
      <BlogSection />
      <section className="bg-gradient-to-br from-boxGSt to-boxGEnd w-full py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secoundary font-headingFont text-center md:text-left">
            Got questions? Let’s connect.
          </h2>

          <Link to="/contact">
            <button className="cursor-white group inline-flex items-center gap-2 px-6 py-3 bg-btnColor text-white text-sm font-semibold uppercase tracking-widest rounded-lg transition duration-300 hover:bg-btnHover">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
