import React from "react";
import bannerC from "../assets/Contact/bannerC.png";
import InnerHero from "../Components/Common/InnerHero";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import ContactForm from "../Components/Common/ContactForm";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const phoneNumber = "+919038372666"; // Use international format
  const message = "Hello! I'm interested in your services."; // Default message
  return (
    <>
      <InnerHero
        heading="Contact Us"
        description=" Reach out to us and let's talk about your thoughts.Please use the brief form below to email us with any inquiries, and we will respond as soon as possible."
        image={bannerC}
        reverse={false}
      />
      <section>
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="mt-3 text-xl text-gray-500">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact Information */}
                <div className="relative bg-gradient-to-br from-boxGSt to-boxGEnd p-8 text-secoundary rounded-lg">
                  {/* Black Overlay */}
                  <div className="absolute inset-0 bg-white/10 opacity-50 rounded-lg"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-10">
                      <h2 className="text-4xl font-headingFont font-bold mb-6">
                        Let's talk about your project
                      </h2>
                      <p className="opacity-90 font-secondary text-lg">
                        Fill out the form or contact us directly. Our team will
                        get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaEnvelope className="h-5 w-5 text-secoundary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-secoundary">
                            EMAIL US :
                          </h3>
                          <a
                            href="mailto:info@theclickcatalysts.com"
                            className="text-lg font-medium hover:secoundary transition-colors"
                          >
                            info@theclickcatalysts.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaPhone className="h-5 w-5 text-secoundary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-secoundary">
                            CALL US :
                          </h3>
                          <a
                            href="tel:+919038372666"
                            className="text-lg font-medium hover:text-secoundary transition-colors"
                          >
                            +91 9038372666
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaMapMarkerAlt className="h-5 w-5 text-secoundary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-secoundary">
                            VISIT US :
                          </h3>
                          <address className="text-lg font-medium not-italic">
                            Unit 641, 6th floor
                            <br />
                            PS ABACUS, NH12,
                            <br />
                            Action Area IIE, New Town,
                            <br />
                            Kolkata, West Bengal 700157
                          </address>
                          <a
                            href="https://maps.app.goo.gl/YcWDMjF68KcWbLp8A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-2 text-secoundary hover:text-white transition-colors"
                          >
                            Directions on Google Maps
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-sm font-medium text-secoundary mb-4">
                        FIND US :
                      </h3>
                      <div className="flex space-x-4">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/profile.php?id=61574873630488"
                          className="text-secoundary transition-colors"
                        >
                          <FaFacebook className="h-6 w-6" />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className="text-secoundary transition-colors"
                        >
                          <FaXTwitter className="h-6 w-6" />
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secoundary transition-colors"
                        >
                          <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/theclickcatalysts/?fbclid=IwZXh0bgNhZW0CMTEAAR3EnXFjhEVTGOktWztnejvkpDxpIWM-GpxxCfF0zjIt9AvHUJ9zwZW-p38_aem_Fzu9-xPPTwiCJK0ERRgEPg"
                          className="text-secoundary transition-colors"
                        >
                          <FaInstagram className="h-6 w-6" />
                        </a>

                        <a
                          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                            message
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secoundary transition-colors"
                        >
                          <FaWhatsapp className="h-6 w-6"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
