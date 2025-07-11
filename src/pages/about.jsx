import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800 p-8"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">
        I'm the creator of CareerCompassAI — a tool to help students find careers they’ll love!
        I enjoy coding, building creative projects, and learning how tech can help people.
      </p>
    </motion.div>
  );
}

