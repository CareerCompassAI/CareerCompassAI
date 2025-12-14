export default function Projects() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-pink-500">
        My Projects
      </h1>

      <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">PolarisAI</h2>

        <p className="mb-2">
          An AI-powered website I built to help students find a career path
          they’ll love based on their hobbies and goals.
        </p>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(
              "https://polarisai.vercel.app/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
