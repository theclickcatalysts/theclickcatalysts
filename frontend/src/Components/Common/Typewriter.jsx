import React, { useState, useEffect } from "react";

const Typewriters = ({ texts, speed = 50, loop = false }) => {
  const [Typewriter, setTypewriter] = useState(null);

  useEffect(() => {
    import("typewriter-effect").then((mod) => {
      setTypewriter(() => mod.default);
    });
  }, []);

  if (!Typewriter) return <span className="text-primary">Loading...</span>;

  return (
    <span className="text-primary">
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: loop,
          delay: speed,
          deleteSpeed: speed / 2,
        }}
      />
    </span>
  );
};

export default Typewriters;
