import { useState, useEffect } from "react";
import { X } from "lucide-react"; // Close icon

export default function MessageBox() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShownMessage = sessionStorage.getItem("hasShownMessage");

    if (!hasShownMessage) {
      // Show the message after a delay (e.g., 3 seconds)
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("hasShownMessage", "true");
      }, 1000); // 3000ms = 3 seconds

      // Cleanup the timeout if component unmounts early
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-5 right-5 bg-[#bff5fc] text-black p-6 rounded-3xl shadow-xl max-w-sm border border-gray-300 z-50">
        <button
          className="absolute top-3 right-3 text-gray-700 hover:text-black"
          onClick={() => setIsVisible(false)}
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl font-bold font-headingFont">Let’s grow your brand</h2>
        <p className="text-sm text-gray-700 mt-2">
          Looking to boost your online presence, drive leads, or scale your digital strategy? 
          We’re here to help businesses like yours reach the right audience with the right message. 
          Whether you're starting out or scaling up, we’ve got your back.
        </p>

        <div className="mt-4">
          <p className="text-sm font-medium text-gray-600">Have a project in mind?</p>
          <a
            href="mailto:info@theclickcatalysts.com"
            className="text-secoundary font-bold text-lg"
          >
            info@theclickcatalysts.com
          </a>
        </div>

        <div className="mt-2">
          <p className="text-sm font-medium text-gray-600">Talk to our team</p>
          <a href="tel:+919038372666" className="text-secoundary font-bold text-lg">
            +91 9038372666
          </a>
        </div>
      </div>
    )
  );
}
