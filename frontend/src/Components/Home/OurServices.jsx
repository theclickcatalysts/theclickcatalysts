import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import brandD from "../../assets/Home/Services/brandD.webp";
import contM from "../../assets/Home/Services/contM.webp";
import infMer from "../../assets/Home/Services/inMar.webp";
import phoVdo from "../../assets/Home/Services/phVdo.webp";
import sem from "../../assets/Home/Services/SEM.webp";
import socialM from "../../assets/Home/Services/socialM.webp";
import strCont from "../../assets/Home/Services/strC.webp";
import webD from "../../assets/Home/Services/webD.webp";

const services = [
  { title: "Branding & Design", image: brandD, description: "Crafting unique brand identities and design strategies." },
  { title: "Social Media", image: socialM, description: "Driving engagement and growth through strategic social media campaigns." },
  { title: "Strategic Consulting", image: strCont, description: "Helping businesses achieve their goals with insightful strategies." },
  { title: "Content Marketing", image: contM, description: "Creating valuable content to attract and retain customers." },
  { title: "Influencer Marketing", image: infMer, description: "Leveraging influencers to build trust and boost your brand." },
  { title: "SEO + SEM", image: sem, description: "Optimizing your website for search engines to increase visibility." },
  { title: "Web Development", image: webD, description: "Building responsive and scalable websites with modern technologies." },
  { title: "Photo & Video", image: phoVdo, description: "Creating visually appealing photos and videos to tell your brand's story." },
];

export default function IndustriesSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className="w-full py-14 text-center font-primary bg-gradient-to-br from-boxGSt to-boxGEnd">
      <h4 className="text-base tracking-widest text-gray-700 uppercase">Our Expert Services</h4>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headingFont font-semibold mt-2 px-4 text-textColor">
        Transforming <span className="text-primary">Business Potential</span> Across Industries
      </h2>
      <p className="text-base md:text-lg text-gray-600 mt-4 max-w-xl mx-auto font-primary">
        At Click Catalysts, we provide tailored digital solutions to elevate brands.
      </p>

      <div className="mt-12 px-4 w-[95%] md:w-[85%] lg:w-[75%] 2xl:w-[70%] mx-auto relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
        >
          {services.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="h-[350px] bg-white rounded-2xl transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 p-4 flex flex-col items-center">
                <img src={industry.image} alt={industry.title} className="w-full h-40 object-cover rounded-lg" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 font-secondary">{industry.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{industry.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:flex justify-center gap-6 mt-6">
        <button ref={prevRef} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button ref={nextRef} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <Link to="/know-us" className="group relative inline-block">
        <button className="mt-4 text-white transition-all duration-300 ease-in-out">View All Services</button>
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </Link>
    </section>
  );
}
