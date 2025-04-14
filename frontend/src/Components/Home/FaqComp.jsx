// Import React
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy FAQ Data (Software Company)
const uniqueFeatures = [
  {
    id: 1,
    title: "What services does your software company offer?",
    desc: "We specialize in custom software development, mobile app development, SaaS solutions, cloud integration, and maintenance & support for enterprise systems.",
    url: "https://cdni.iconscout.com/illustration/premium/thumb/software-development-5381991-4499487.png",
  },
  {
    id: 2,
    title: "How experienced is your development team?",
    desc: "Our team consists of certified developers and engineers with 5+ years of experience across various tech stacks like React, Node.js, Python, Java, and cloud platforms like AWS & Azure.",
    url: "https://cdni.iconscout.com/illustration/premium/thumb/team-discussion-5580813-4655657.png",
  },
  {
    id: 3,
    title: "Do you offer post-launch support?",
    desc: "Yes, we provide full post-launch maintenance, performance optimization, feature updates, and 24/7 technical support packages tailored to your needs.",
    url: "https://cdni.iconscout.com/illustration/premium/thumb/customer-support-4383952-3643272.png",
  },
  {
    id: 4,
    title: "Can you work with our in-house team?",
    desc: "Absolutely. We often collaborate with in-house teams as tech partners, ensuring seamless communication and workflow integration throughout the project.",
    url: "https://cdni.iconscout.com/illustration/premium/thumb/partnership-6070970-4993616.png",
  },
  {
    id: 5,
    title: "What technologies do you use?",
    desc: "We use modern frameworks and tools like React, Angular, Vue, Node.js, .NET, Python/Django, MongoDB, MySQL, Docker, Kubernetes, and CI/CD pipelines.",
    url: "https://cdni.iconscout.com/illustration/premium/thumb/coding-4143656-3448684.png",
  }
];

// FAQ Component
const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the active index
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white text-black p-8 mb-20 lg:mb-0">

      {/* FAQ Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
        <div className="space-y-4">
          {uniqueFeatures.map((faq, index) => (
            <div key={faq.id}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-medium text-xl flex justify-between items-center py-4 border-b border-gray-300"
              >
                {faq.title}
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeIndex === index ? '-' : '+'}
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-700 text-lg mt-2 pr-4"
                  >
                    {faq.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
