import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center min-h-screen px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl font-extrabold text-pink-500 mb-6">
        Welcome to My Portfolio
      </h1>
      <p className="text-2xl text-gray-200 mb-8">
        Explore my projects and get in touch!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 w-full max-w-md">
        <Link
          to="/projects"
          className="flex-1 text-center bg-white text-black font-medium px-6 py-3 rounded hover:bg-gray-300 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="flex-1 text-center bg-pink-500 text-white font-medium px-6 py-3 rounded hover:bg-pink-600 transition"
        >
          Contact Me
        </Link>
      </div>
    </motion.div>
  );
}
