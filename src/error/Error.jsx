import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      
      <div className="text-center text-white">
        
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-7xl md:text-9xl font-extrabold"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl"
        >
          Oops! Page not found
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-sm md:text-base text-gray-200"
        >
          The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Go Home
          </Link>
        </motion.div>

      </div>
    </div>
  );
}