import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white text-center p-4">
      <motion.h1
        className="text-8xl font-bold text-red-500"
        initial={{ y: -10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        404
      </motion.h1>
      <p className="text-lg mt-4 mb-10">
        Oops! The page you are looking for does not exist.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 px-6 py-2 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          <button>Go Back Home</button>
        </Link>
      </motion.div>
    </div>
  );
}
