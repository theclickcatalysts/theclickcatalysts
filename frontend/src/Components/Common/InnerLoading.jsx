import React from "react";
import { motion } from "framer-motion";

const InnerLoading = () => {
  const balls = Array.from({ length: 8 });

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      >
        {balls.map((_, i) => {
          const angle = (i / balls.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 40;
          const y = Math.sin(angle) * 40;
          return (
            <div
              key={i}
              className="w-3 h-3 bg-blue-600 rounded-full absolute"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default InnerLoading;
