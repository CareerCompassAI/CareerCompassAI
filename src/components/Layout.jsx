import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Optional darker overlay for readability */}
      <div className="bg-black/20 min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
