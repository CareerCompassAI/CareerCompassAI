export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-custom-gray text-center p-8">
      <h1 className="text-5xl font-bold text-pink-500 mb-4">404</h1>
      <p className="text-xl text-gray-800 mb-6">
        Oops! The page you're looking for doesn't exist. Make sure to check out CareerCompassAI!
      </p>
      <a
        href="/"
        className="text-white bg-navy-blue px-4 py-2 rounded hover:bg-blue-dark transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
