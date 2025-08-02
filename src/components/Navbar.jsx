import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-70 text-white px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-pink-400 font-medium">Home</Link>
        <Link to="/projects" className="hover:text-pink-400 font-medium">Projects</Link>
        <Link to="/about" className="hover:text-pink-400 font-medium">About</Link>
        <Link to="/contact" className="hover:text-pink-400 font-medium">Contact</Link>
      </div>
    </nav>
  );
}
