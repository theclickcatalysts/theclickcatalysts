// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import automon from "../../assets/Home/Indastry/automob.webp";
// import rtealE from "../../assets/Home/Indastry/realE.webp";
// import health from "../../assets/Home/Indastry/healthS.webp";
// import travel from "../../assets/Home/Indastry/travel.webp";
// import media from "../../assets/Home/Indastry/mediaEn.webp";
// import restaurant from "../../assets/Home/Indastry/restau.webp";
// import event from "../../assets/Home/Indastry/event.webp";
// import startup from "../../assets/Home/Indastry/startup.webp";
// import retail from "../../assets/Home/Indastry/retailB.webp";
// import education from "../../assets/Home/Indastry/educa.webp";
// import Typewriter from "../Common/Typewriter";

// const industries = [
//   { name: "Real Estate", image: rtealE, description: "Innovative digital solutions for real estate marketing and lead generation." },
//   { name: "Retail Business", image: retail, description: "Boosting sales and visibility through tailored e-commerce strategies." },
//   { name: "Health Sector", image: health, description: "Empowering healthcare providers with modern web and mobile solutions." },
//   { name: "Automobile", image: automon, description: "Driving digital transformation for the automotive industry." },
//   { name: "Education", image: education, description: "Interactive platforms for e-learning, schools, and training programs." },
//   { name: "Travel & Tourism", image: travel, description: "Attract travelers with dynamic websites and booking experiences." },
//   { name: "Media & Entertainment", image: media, description: "Showcasing talent with immersive digital experiences and content delivery." },
//   { name: "Restaurants", image: restaurant, description: "Custom digital menus, online ordering, and branding for food businesses." },
//   { name: "Events", image: event, description: "Promoting events with powerful landing pages and ticketing systems." },
//   { name: "Startups", image: startup, description: "Helping startups launch strong with tech-forward branding and development." },
// ];

// export default function IndustriesSlider() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section className="w-full py-14 bg-gray-100 text-center font-primary">
//       <h4 className="text-base tracking-widest text-gray-500 uppercase">Industries We Serve</h4>
//       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headingFont font-semibold mt-2 text-textColor">
//         Empowering <span className="text-primary">Every Sector</span>
//         {/* <Typewriter text="Empowering Every Sector" /> */}
//       </h2>
//       <p className="text-base md:text-lg text-gray-600 mt-4 max-w-xl mx-auto font-primary">
//         We cater to a wide range of industries with tailored digital solutions designed to make an impact.
//       </p>

//       <div className="mt-12 px-4 w-[95%] md:w-[85%] lg:w-[75%] xl:w-[70%] mx-auto relative">
//         {/* Swiper Component */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={30}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//         >
//           {industries.map((industry, index) => (
//             <SwiperSlide key={index}>
//               <div className="h-[350px] bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 p-4 flex flex-col items-center">
//                 {/* Image at the Top */}
//                 <img src={industry.image} alt={industry.name} className="w-full h-40 object-cover rounded-lg" />

//                 {/* Title & Description */}
//                 <div className="mt-4 text-center">
//                   <h3 className="text-xl font-semibold text-gray-800 font-secondary">{industry.name}</h3>
//                   <p className="text-sm text-gray-600 mt-2">{industry.description}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Custom Navigation Arrows */}
//       <div className="hidden md:flex justify-center gap-6 mt-6">
//         <button ref={prevRef} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
//           <ChevronLeft className="w-6 h-6 text-gray-700" />
//         </button>
//         <button ref={nextRef} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
//           <ChevronRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>
//     </section>
//   );
// }




import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import automon from "../../assets/Home/Indastry/automob.webp";
import rtealE from "../../assets/Home/Indastry/realE.webp";
import health from "../../assets/Home/Indastry/healthS.webp";
import travel from "../../assets/Home/Indastry/travel.webp";
import media from "../../assets/Home/Indastry/mediaEn.webp";
import restaurant from "../../assets/Home/Indastry/restau.webp";
import event from "../../assets/Home/Indastry/event.webp";
import startup from "../../assets/Home/Indastry/startup.webp";
import retail from "../../assets/Home/Indastry/retailB.webp";
import education from "../../assets/Home/Indastry/educa.webp";
import Typewriter from "../Common/Typewriter";

const industries = [
  { name: "Real Estate", image: rtealE, description: "Innovative digital solutions for real estate marketing and lead generation." },
  { name: "Retail Business", image: retail, description: "Boosting sales and visibility through tailored e-commerce strategies." },
  { name: "Health Sector", image: health, description: "Empowering healthcare providers with modern web and mobile solutions." },
  { name: "Automobile", image: automon, description: "Driving digital transformation for the automotive industry." },
  { name: "Education", image: education, description: "Interactive platforms for e-learning, schools, and training programs." },
  { name: "Travel & Tourism", image: travel, description: "Attract travelers with dynamic websites and booking experiences." },
  { name: "Media & Entertainment", image: media, description: "Showcasing talent with immersive digital experiences and content delivery." },
  { name: "Restaurants", image: restaurant, description: "Custom digital menus, online ordering, and branding for food businesses." },
  { name: "Events", image: event, description: "Promoting events with powerful landing pages and ticketing systems." },
  { name: "Startups", image: startup, description: "Helping startups launch strong with tech-forward branding and development." },
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
    <section className="w-full py-14 bg-gray-100 text-center font-primary">
      <h4 className="text-base tracking-widest text-gray-500 uppercase">Industries We Serve</h4>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headingFont font-semibold mt-2 text-textColor">
        Empowering <span className="text-primary">Every Sector</span>
      </h2>
      <p className="text-base md:text-lg text-gray-600 mt-4 max-w-xl mx-auto font-primary">
        We cater to a wide range of industries with tailored digital solutions designed to make an impact.
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
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="h-[350px] bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 p-4 flex flex-col items-center">
                <img src={industry.image} alt={industry.name} className="w-full h-40 object-cover rounded-lg" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 font-secondary">{industry.name}</h3>
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
    </section>
  );
}