import React from "react";
import banner from "../assets/about/banner.png";
import InnerHero from "../Components/Common/InnerHero";
import TeaImage from "../assets/carrer/01.png";
import {
  Megaphone,
  FileText,
  TrendingUp,
  PenLine,
  Search,
  Gem,
  Monitor,
  Brush,
  Code,
} from "lucide-react";
import { Cpu, Zap } from "lucide-react";

const talents = [
  { title: "Sales and Marketing", icon: <Megaphone size={28} /> },
  { title: "Content Writer", icon: <FileText size={28} /> },
  { title: "Digital Marketing", icon: <TrendingUp size={28} /> },
  { title: "Graphics Design", icon: <PenLine size={28} /> },
  { title: "SEO", icon: <Search size={28} /> },
  { title: "Branding", icon: <Gem size={28} /> },
  { title: "Website Design", icon: <Monitor size={28} /> },
  { title: "Development", icon: <Code size={28} /> },
];
const Carrer = () => {
  return (
    <>
      
        <InnerHero
          heading="Fueling Growth in the Digital Age"
          highlight="Click Catalyst"
          description="we’re a passionate team of digital marketers, strategists, and creatives dedicated to helping businesses thrive online. We turn your vision into real-world results through strategy, creativity, and data-driven decisions."
          image={banner}
          reverse={false} // true to flip image and text position
        />
        <section className="bg-white py-10 px-4 md:px-8 lg:px-24 w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src={TeaImage}
                alt="Roadmap Illustration"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
              />
            </div>
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h2 className="text-4xl xl:text-5xl font-headingFont font-bold mb-2 text-primary">
                Creating the future roadmap of sheer glory…
              </h2>
              <p className="text-gray-700 text-base xl:text-lg leading-relaxed">
                At ClickCatalyst, we empower businesses to reach their full
                potential. Our experienced and dynamic team is dedicated to
                overcoming challenges and driving sustainable growth. With us by
                your side, your brand will not only lead from the front but
                continue to move forward with confidence and success.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 md:px-10 font-primary bg-white text-center">
      <h2 className="text-4xl xl:text-5xl font-headingFont font-bold mb-2 text-primary">
        PUT YOUR TALENT TO WORK
      </h2>

      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {talents.map((talent, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-blue-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          >
            {/* Icon with circle */}
            <div className="absolute -top-6 bg-white border border-blue-100 rounded-full p-3 shadow-md">
              <div className="text-[#184472]">{talent.icon}</div>
            </div>

            <div className="pt-10">
              <h3 className="text-lg font-bold text-[#184472] mb-2">{talent.title}</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet cons ectetur.</p>
            </div>

            {/* Bottom wave accent */}
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#3FC1F3] rounded-b-xl"></div>
          </div>
        ))}
      </div>
    </section>
    <section className="bg-[#EAF0FF] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Text Block */}
        <div>
          <h2 className="text-4xl xl:text-5xl font-headingFont font-bold mb-2 text-primary">
            Why Choose a Digital Future at Click Catalyst?
          </h2>
          <p className="text-[#0D1A49] text-base leading-relaxed mb-4">
            Click Catalyst is a place where you’re proud to say you work. Together, we determine how digital can power
            the creation and growth of purposeful brands that are working to solve some of the world’s biggest problems.
          </p>
          <p className="text-[#0D1A49] text-base leading-relaxed">
            Experience your ideas coming to life and making a real difference.
          </p>
        </div>

        {/* Right Cards */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-[#3FC1F3] p-3 rounded-full">
              <Cpu className="text-[#0D1A49]" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0D1A49] mb-1">
                Brilliantly different, together
              </h3>
              <p className="text-gray-700 text-sm">
                Join digital masters collaborating on the big, bold digital ambitions of many of the world’s leading brands.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-[#3FC1F3] p-3 rounded-full">
              <Zap className="text-[#0D1A49]" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0D1A49] mb-1">
                Purpose Power
              </h3>
              <p className="text-gray-700 text-sm">
                Experiment with cutting-edge technology to solve the world’s biggest problems and help make sustainable
                living commonplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Carrer;
