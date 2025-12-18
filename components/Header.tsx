
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, GraduationCap, Home, BookOpen, UserCheck, Image as ImageIcon, Phone, ClipboardList } from 'lucide-react';
import { SCHOOL_NAME } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Landmark },
    { name: 'Academics', path: '/academics', icon: GraduationCap },
    { name: 'Administration', path: '/administration', icon: UserCheck },
    { name: 'Library', path: '/library', icon: BookOpen },
    { name: 'Student Life', path: '/student-life', icon: GraduationCap },
    { name: 'Notices', path: '/notices', icon: ClipboardList },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-1.5 px-4 text-xs flex justify-between items-center">
        <span>Government of Telangana | MJPTBCW Residential Educational Institutions Society</span>
        <div className="hidden sm:flex gap-4">
          <span>Adilabad District</span>
          <span>Bela</span>
        </div>
      </div>

      {/* Main Branding */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Landmark size={32} />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-blue-900 leading-tight">
              {SCHOOL_NAME}
            </h1>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">Bela, Adilabad Dist.</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 absolute w-full shadow-xl">
          <div className="flex flex-col gap-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <link.icon size={20} />
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
