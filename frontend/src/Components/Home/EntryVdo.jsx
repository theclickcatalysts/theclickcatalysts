import React, { useEffect, useState } from "react";
import LoadingScreen from "../Common/Loading";

const EntryVdo = ({ onVideoEnd }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Force video to retry loading if there's an issue
    const timer = setTimeout(() => setVideoLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      {!videoLoaded && <LoadingScreen/>}
      <video
        src="/intro.mp4" // Make sure this path is correct
        autoPlay
        muted // Required for autoplay in most browsers
        playsInline
        className="w-full h-full object-cover"
        onEnded={onVideoEnd}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => console.error("Video failed to load! Check the path.")}
      />
    </div>
  );
};

export default EntryVdo;
