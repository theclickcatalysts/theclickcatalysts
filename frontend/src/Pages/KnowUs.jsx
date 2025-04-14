import React from "react";
import Footer from "../Components/Common/Footer";
import banner from "../assets/about/banner.png";
import conv from "../assets/about/conversion.png";
import LaunchImage from "../assets/about/Partners.png";
import TeamChartImage from "../assets/about/roadmap.png";
import { Rocket, Eye, Target } from "lucide-react";
import InnerHero from "../Components/Common/InnerHero";
import CountupComp from "../Components/Common/CountupComp";

const AboutPage = () => {
  return (
    <>
      <main className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <InnerHero
          heading="Fueling Growth in the Digital Age"
          description="We’re a passionate team of digital marketers, strategists, and creatives dedicated to helping businesses thrive online. We turn your vision into real-world results through strategy, creativity, and data-driven decisions."
          image={banner}
          reverse={false} // true to flip image and text position
        />
        {/* Hi there Section */}
        <section className="bg-white py-14 px-4 md:px-8 lg:px-24 w-full text-center">
          <div className="mb-12">
            <h2 className="text-4xl xl:text-5xl font-headingFont font-bold mb-2 text-primary">
              Hi there! We are the Click Catalyst
            </h2>
            <p className="text-gray-600 text-base">
              Let us take you to your goal! Let’s soar high, mate!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <Rocket className="w-10 h-10 text-[#1f2b6c]" />,
                title: "Brand belief",
                desc: "Transforming digital marketing with creativity and strategy, so brands connect with their audience in meaningful ways.",
              },
              {
                icon: <Eye className="w-10 h-10 text-[#1f2b6c]" />,
                title: "Inspired ideas",
                desc: "Create content designed to be highly shareable, often by tapping into current trends, humor, or emotional appeal.",
              },
              {
                icon: <Target className="w-10 h-10 text-[#1f2b6c]" />,
                title: "Future aspirations",
                desc: "With optimism at our core, we provide top-tier services, always aiming for excellence in the long run.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Roadmap Section */}
        <section className="bg-[#e9efff] py-10 px-4 md:px-8 lg:px-24 w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src={TeamChartImage}
                alt="Roadmap Illustration"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
              />
            </div>
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h2 className="text-4xl xl:text-5xl font-headingFont font-bold text-primary">
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
        {/* From Click to Conversion */}
        <section className="bg-white py-14 px-4 md:px-8 lg:px-24 w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src={conv}
                alt="Click to Conversion"
                className="w-full max-w-xs lg:max-w-sm mx-auto"
              />
            </div>
            <div className="flex-1 text-center lg:text-left space-y-6">
              <p className="text-4xl xl:text-5xl font-headingFont font-bold text-primary">
                Optimizing Every Step
              </p>
              <h2 className="text-4xl xl:text-5xl font-headingFont font-bold text-primary">
                From Click to Conversion
              </h2>
              <p className="text-gray-600 text-lg lg:text-[20px] xl:text-xl leading-relaxed">
                Discover how we turn traffic into tangible results. From the
                moment a visitor lands on your site to the final action, our
                strategies are tailored to boost engagement and drive
                conversions.
              </p>
              <p className="text-gray-600 text-lg lg:text-[20px] xl:text-xl leading-relaxed">
                With data-driven insights and seamless user experiences, we
                ensure every step of the customer journey is optimized for
                success — delivering real value at every click.
              </p>
            </div>
          </div>
        </section>

        {/* Our Experience */}
        <section className="bg-[#e9efff] py-12 px-4 md:px-8 lg:px-24 w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <p className="text-md md:text-lg lg:text-xl font-bold text-gray-700">
                Our Experience
              </p>
              <h2 className="text-4xl xl:text-5xl font-headingFont font-bold text-primary">
                Your Success Partners in this Digital World
              </h2>
              <p className="text-gray-700 text-base xl:text-lg leading-relaxed">
                In the digital world, Success Partners refer to individuals,
                companies, or tools that help businesses achieve their goals
                online. These partners provide expertise, support, and solutions
                to drive growth, improve efficiency, and maximize success.
              </p>
              <div className="text-left lg:text-base xl:text-lg">
                <p className="font-semibold text-gray-800 mb-2">
                  Digital Marketing Agencies
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>SEO (Search Engine Optimization)</li>
                  <li>PPC (Pay-Per-Click Advertising)</li>
                  <li>Social Media Marketing</li>
                  <li>Content Marketing</li>
                  <li>Branding</li>
                </ul>
              </div>
            </div>
            <div className="lg:flex-1 hidden lg:block">
              <img
                src={LaunchImage}
                alt="Rocket Launch"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>
              <CountupComp/>
        {/* Stats Section */}
        
      </main>
    </>
  );
};

export default AboutPage;
