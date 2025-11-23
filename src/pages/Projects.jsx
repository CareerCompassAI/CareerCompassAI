import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800 p-8"
    >
      {/* Make THIS heading pink */}
      <h2 className="text-3xl font-bold mb-6 text-pink-500">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition text-gray-800">
          {/* Regular black project title */}
          <h3 className="text-xl font-semibold mb-2">CareerCompassAI</h3>
          <p className="text-sm">
            An AI-powered website I built to help students find a career path
            they’ll love based on their hobbies and goals.
          </p>

          <a
            href=""https://polarisai.vercel.app""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}
