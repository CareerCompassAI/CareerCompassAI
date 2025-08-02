export default function Projects() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-pink-500">My Projects</h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">CareerCompassAI</h2>
        <p className="mb-2">
          An AI-powered website I built to help students find a career path they’ll love
          based on their hobbies and goals.
        </p>
        <a href="/careercompassai" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
}
