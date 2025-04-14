import React from "react";
import servicesImage from "../assets/Services/serviceBB.png";
import BrandingImage from "../assets/Services/branding.png";
import WebsiteSolutionImg from "../assets/Services/websiteSolution.png";
import DigitalMarketingImg from "../assets/Services/Digital-marketing.png";
import InnerHero from "../Components/Common/InnerHero";
import { CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    "Logo Design",
    "Business Cards & Stationery",
    "Business Cards",
    "Flyer & Brochure Design",
    "Packaging & Label Design",
    "Signage Design",
  ];
  const webServices = [
    "Website Development",
    "E-commerce Solutions",
    "Domain & Hosting",
    "Design & User Experience",
    "Security & Maintenance",
  ];

  const DigitalMarketingSer = [
    "Search Engine Optimization (SEO)",
    "Content Marketing",
    "Social Media Marketing",
    "Email Marketing",
    "Pay-Per-Click Advertising",
    "Influencer Collaborations",
  ];

  return (
    <>
      {/* <section className="w-full bg-gradient-to-r from-[#0f1e47] to-[#2f7aa9] text-white py-20 px-4 md:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              SERVICES
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              At <span className="font-semibold">Click Catalyst</span>, we offer
              a full range of digital marketing services designed to enhance
              your online presence, drive traffic, and increase conversions.
            </p>
          </div>

          
          <div className="flex-1">
            <img
              src={servicesImage}
              alt="Digital Marketing Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section> */}

      <InnerHero
        heading="SERVICES"
        highlight="At Click Catalyst"
        description=" we offer
              a full range of digital marketing services designed to enhance
              your online presence, drive traffic, and increase conversions."
        image={servicesImage}
        reverse={false} // true to flip image and text position
      />

      {/* Marketting */}

      <section className="bg-gradient-to-br from-[#f9fafb] to-[#edf1f6] py-5 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="lg:bg-transparent bg-white rounded-2xl p-4 sm:p-6">
              <img
                src={BrandingImage}
                alt="Branding Illustration"
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2">
            <div className="lg:bg-transparent bg-white  shadow-md lg:shadow-none rounded-2xl p-6 sm:p-8 space-y-6 text-center lg:text-left">
              <h2 className="text-4xl xl:text-5xl font-headingFont font-bold text-primary">
                BRANDING
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Branding is the process of creating a distinct identity for a
                business, product, or service.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                It includes elements like a logo, colors, typography, messaging,
                and overall customer experience. A strong brand builds trust,
                recognition, and emotional connections with customers — setting
                your business apart.
              </p>

              {/* Services */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-secoundary mb-3">
                  Our Branding Services:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-3 text-gray-800 text-sm sm:text-base">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 hover:text-[#1f2b6c] transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-[#1f2b6c] mt-0.5 shrink-0" />
                      <p className="leading-snug">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-[#1f2b6c] hover:bg-[#16225a] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* web services */}

      <section className="bg-[#f5f7fa] py-5 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left - Content */}
          <div className="w-full lg:w-1/2">
            <div className="lg:bg-transparent bg-white shadow-md lg:shadow-none rounded-2xl p-6 sm:p-8 space-y-6 text-center lg:text-left">
              <h2 className="text-4xl xl:text-5xl font-headingFont font-bold text-primary">
                WEBSITE SOLUTION
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                At Click Catalyst, we specialize in creating visually appealing,
                user-friendly websites tailored to your business needs — focused
                on increasing your online presence and driving sales.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                A Website Solution includes the complete set of tools, services,
                and technologies needed to build, manage, and maintain a
                website:
              </p>

              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-800 text-sm sm:text-base">
                {webServices.map((webServices, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 hover:text-[#1f2b6c] transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#1f2b6c] mt-0.5 shrink-0" />
                    <p className="leading-snug">{webServices}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="bg-[#1f2b6c] hover:bg-[#16225a] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="lg:bg-transparent bg-white shadow-md lg:shadow-none rounded-2xl p-4 sm:p-6">
              <img
                src={WebsiteSolutionImg}
                alt="Website Solution Illustration"
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}

      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#eaf0f7] py-12 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="lg:bg-transparent bg-white rounded-2xl p-4 sm:p-6">
              <img
                src={DigitalMarketingImg}
                alt="Digital Marketing"
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2">
            <div className="lg:bg-transparent bg-white shadow-md lg:shadow-none rounded-2xl p-6 sm:p-8 space-y-6 text-center lg:text-left">
              <h2 className="text-4xl xl:text-5xl font-headingFont font-bold text-primary">
                DIGITAL MARKETING
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Digital marketing encompasses all marketing efforts that utilize
                electronic devices and the internet to connect with current and
                prospective customers. It includes using platforms like search
                engines, websites, social media, and email to drive engagement
                and conversions.
              </p>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#1f2b6c] mb-3">
                  Our Digital Marketing Services:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-3 text-gray-800 text-sm sm:text-base">
                  {DigitalMarketingSer.map((DigitalMarketingSer, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 hover:text-[#1f2b6c] transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-[#1f2b6c] mt-0.5 shrink-0" />
                      <p className="leading-snug">{DigitalMarketingSer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-[#1f2b6c] hover:bg-[#16225a] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
