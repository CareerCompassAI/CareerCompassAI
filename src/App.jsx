import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="p-4 bg-custom-gray flex gap-6">
        <Link to="/" className="text-navy-blue hover:underline">Home</Link>
        <Link to="/about" className="text-navy-blue hover:underline">About</Link>
        <Link to="/projects" className="text-navy-blue hover:underline">Projects</Link>
        <Link to="/contact" className="text-navy-blue hover:underline">Contact</Link>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
