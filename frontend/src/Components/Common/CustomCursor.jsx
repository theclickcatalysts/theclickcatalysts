// import React, { useState, useEffect } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseOver = (e) => {
//       if (e.target.closest("button") || e.target.classList.contains("cursor-hover")) {
//         setIsHovering(true);
//       }
//     };

//     const handleMouseOut = () => {
//       setIsHovering(false);
//     };

//     window.addEventListener("mousemove", moveCursor);
//     document.addEventListener("mouseover", handleMouseOver);
//     document.addEventListener("mouseout", handleMouseOut);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       document.removeEventListener("mouseover", handleMouseOver);
//       document.removeEventListener("mouseout", handleMouseOut);
//     };
//   }, []);

//   return (
//     <div
//       className={`custom-cursor ${isHovering ? "cursor-hover-effect" : ""}`}
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//       }}
//     />
//   );
// };

// export default CustomCursor;




import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("#000"); // default black

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }

      const el = document.elementFromPoint(clientX, clientY);

      if (el) {
        const classList = el.classList;

        if (classList.contains("cursor-white")) {
          setCursorColor("#fff");
        } else if (classList.contains("cursor-black")) {
          setCursorColor("#000");
        } else if (classList.contains("cursor-accent")) {
          setCursorColor("#ff00ff"); // your accent color
        } else {
          setCursorColor("#000"); // fallback
        }
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("button") || e.target.classList.contains("cursor-hover")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest("button")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "cursor-hover-effect" : ""}`}
      style={{
        borderColor: cursorColor,
      }}
    />
  );
};

export default CustomCursor;
