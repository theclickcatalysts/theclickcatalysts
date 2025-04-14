// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const LoadingScreen = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [text, setText] = useState("");
//   const loadingText = "Loading...";

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     let i = 0;
//     const typeInterval = setInterval(() => {
//       setText(loadingText.slice(0, i));
//       i++;
//       if (i > loadingText.length) clearInterval(typeInterval);
//     }, 100); // Increased typing speed
//     return () => clearInterval(typeInterval);
//   }, []);

//   return (
//     isLoading && (
//       <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
//         <motion.div
//           className="text-black text-4xl font-mainHeading"
//           initial={{ y: 10 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {text}
//         </motion.div>
//       </div>
//     )
//   );
// };

// export default LoadingScreen;




// import React from 'react';
// import { motion } from 'framer-motion';

// const text = "CLICK CATALYSTS";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.05,
//     },
//   },
// };

// const letterAnimation = {
//   hidden: { y: 50, opacity: 0 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 10,
//     },
//   },
// };

// const ClickCatalystesHero = () => {
//   return (
//     <div className="relative w-full h-screen flex items-center justify-center bg-[#1f1f1f] overflow-hidden">
//       {/* Background Outline Text */}
//       <h1 className="absolute text-[15vw] font-extrabold text-white/5 uppercase select-none tracking-tight">
//         {text}
//       </h1>

//       {/* Foreground Animated Text */}
//       <motion.div
//         className="relative z-10 text-white text-5xl md:text-6xl font-extrabold uppercase tracking-wide"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         {text.split("").map((char, i) => (
//           <motion.span key={i} variants={letterAnimation}>
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default ClickCatalystesHero;




import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ClickCatalystesHero = () => {
  const fullText = "CLICK CATALYSTS";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 50;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);
        if (index + 1 === fullText.length) {
          setTimeout(() => setDeleting(true),100);
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);
        if (index - 1 === 0) {
          setDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#1f1f1f] overflow-hidden px-4">
      {/* Background Outline Text */}
      <h1 className="absolute text-[14vw] font-extrabold text-white/5 uppercase select-none tracking-tight">
        CLICK CATALYSTS
      </h1>

      {/* Foreground Typing Text */}
      <motion.h2
        className="relative z-10 text-white text-4xl md:text-6xl font-extrabold uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {displayedText}
      </motion.h2>
    </div>
  );
};

export default ClickCatalystesHero;
