import React from "react";
import {
  ChartBar,
  ChartNoAxesCombined,
  SearchCheck,
  ShieldCheck,
  SquareChartGantt,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import Typewriters from "../Common/Typewriter";

const DetSection = () => {
  const features = [
    {
      title: "Lasting Results",
      description:
        "Achieve sustainable growth with strategies that deliver long-term impact.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Powerful Tools",
      description:
        "Leverage cutting-edge tools to maximize your digital marketing performance.",
      icon: Wrench,
    },
    {
      title: "Bespoke SEO Service",
      description:
        "Customized SEO solutions tailored precisely to your business goals.",
      icon: SearchCheck,
    },
    {
      title: "Confidentiality",
      description:
        "Your data is secure — privacy and trust are our priorities.",
      icon: ShieldCheck,
    },
    {
      title: "Ahead Of The Curve",
      description:
        "Stay competitive with innovative strategies that lead the industry forward.",
      icon: SquareChartGantt,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Make smarter decisions with analytics that reveal real-time performance trends.",
      icon: ChartBar,
    },
  ];

  return (
    <section className="w-full overflow-hidden  py-10 md:py-14">
      <div className="w-[95%] md:w-[85%] lg:w-[75%] xl:w-[70%] mx-auto px-4 z-10 flex flex-col justify-center items-center">
        <div className="max-w-3xl flex flex-col justify-center items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl flex flex-col sm:flex sm:flex-row gap-1 font-headingFont font-bold text-textColor">
            We specialize in :{" "}
            <Typewriters
              texts={[
                "Digital Marketing",
                "Web Development",
                "SEO Optimization",
                "Branding & Design",
              ]}
              speed={80}
              loop={true}
            />
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-xl mx-auto font-primary">
            We offer innovative and results-driven solutions to take your
            business to the next level. Let us help you grow with
            custom-tailored strategies for success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-secondary">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl shadow-xl border-t-4 border-primary p-6 flex flex-col items-center text-center"
              whileHover={{
                scale: 1.07,
                y: -8,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.div
                whileHover={{ rotateY: 180 }} // Flip horizontally on hover
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-blue-50 border border-primary text-secondary rounded-full p-4 shadow-md -mt-12 mb-4 relative w-16 h-16 flex justify-center items-center"
                style={{ transformStyle: "preserve-3d" }} // Ensure 3D effect
              >
                {/* Front Icon */}
                <motion.div
                  className="absolute inset-0 flex justify-center items-center"
                  style={{ backfaceVisibility: "hidden" }} // Hide on back
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Back Icon (Flipped to show properly) */}
                <motion.div
                  className="absolute inset-0 flex justify-center items-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 font-secondary">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 font-primary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetSection;
