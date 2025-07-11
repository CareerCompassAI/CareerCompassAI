import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800 p-8"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to CareerCompassAI</h1>
      <p className="text-lg">
        Hi! I'm a student passionate about tech, design, and helping others.
        This site shows off my projects, what I care about, and how I use AI in creative ways.
      </p>
    </motion.div>
  );
}
