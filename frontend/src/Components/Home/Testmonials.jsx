// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// import bgImage from '../../assets/Home/testimonials.jpg';

// const testimonials = [
//   {
//     name: 'Ashna Chhaochharia',
//     position: 'Founder, Pure Haus',
//     image: 'https://via.placeholder.com/120x120.png?text=Ashna',
//     quote:
//       'Meraqi is the one stop solution for all things creative or digital and have a unique approach to the most mundane things. Ankit is an explosion box of ideas and has strong international work culture, which is quite extraordinary. All in all, we have loved working with Meraqi!',
//   },
//   {
//     name: 'Zohre Burnett',
//     position: 'CTO, Apple',
//     image: 'https://via.placeholder.com/120x120.png?text=Zohre',
//     quote:
//       'The level of dedication and innovation Meraqi brings is unmatched. Their creative approach and consistent communication made our collaboration seamless.',
//   },
//   {
//     name: 'Stevie Wills',
//     position: 'CAG, Microsoft',
//     image: 'https://via.placeholder.com/120x120.png?text=Stevie',
//     quote:
//       'We’ve worked with many agencies, but Meraqi’s ability to make the mundane magical sets them apart. Highly recommended!',
//   },
// ];

// const TestimonialsCarousel = () => {
//   return (
//     <section
//       className="bg-cover bg-center bg-no-repeat py-20 px-4 lg:px-12 relative font-primary"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         opacity: 0.9,
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

//       <div className="relative max-w-7xl mx-auto z-10">
//         <h2 className="text-4xl xl:text-5xl font-headingFont font-bold text-center mb-12 text-white">
//           Testimonials
//         </h2>

//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           className="testimonial-swiper"
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//                 {/* Profile Image */}
//                 <div className="flex justify-center md:justify-end">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md"
//                   />
//                 </div>

//                 {/* Testimonial Content */}
//                 <div className="md:col-span-2 text-left px-4 text-white">
//                   <p className="text-lg italic leading-relaxed mb-4">
//                     “{item.quote}”
//                   </p>
//                   <h4 className="text-xl font-semibold">{item.name}</h4>
//                   <p className="text-sm uppercase tracking-wide">
//                     {item.position}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsCarousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CircleUserRoundIcon } from "lucide-react";

import iconImg from "../../assets/Home/users.png"

const testimonials = [
  {
    name: "Sampurna",
    position: "Creative Digital Strategists",
    quote:
      "Click Catalysts is the one-stop solution for all things creative or digital. Their unique approach and strong international work culture set them apart. We've loved working with Click Catalysts!",
  },
  {
    name: "Uday",
    position: "Technology & Innovation",
    quote:
      "We’ve worked with many agencies, but Click Catalysts’s ability to make the mundane magical sets them apart. Highly recommended!",
  },
  {
    name: "Jhon",
    position: "Digital Marketing Experts",
    quote:
      "The level of dedication and innovation Click Catalysts brings is unmatched. Their creative approach and consistent communication made our collaboration seamless.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-5 lg:py-10 px-2 lg:px-12 font-primary bg-gray-100 ">
      <div className="w-[95%] md:w-[85%] lg:w-[75%] xl:w-[70%] mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-headingFont font-semibold px-4 text-textColor mb-6">
        Our <span className="text-primary">Testimonials</span> 
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Profile Icon */}
                <div className="flex justify-center md:justify-end ">
                  <img src={iconImg} alt="kjgv" className="w-32 h-32 md:w-40 md:h-40 opacity-80"/>
                </div>

                {/* Testimonial Content */}
                <div className="md:col-span-2 text-left px-4 text-black">
                  <p className="text-lg italic leading-relaxed mb-4">
                    “{item.quote}”
                  </p>
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-xs md:text-lg text-gray-600 mt-4 max-w-xl mx-auto font-primary">
                    {item.position}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
