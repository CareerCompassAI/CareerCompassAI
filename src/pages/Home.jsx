import { motion } from "framer-motion";

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
      <p className="text-2xl text-gray-700">
        Explore my projects and get in touch!
      </p>
    </motion.div>
  );
}
