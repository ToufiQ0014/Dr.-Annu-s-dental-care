import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertCircle, Menu, X, HeartPulse } from 'lucide-react';
import { clinicDetails } from '../../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-stretch h-16">
        
        {/* Logo Area */}
        <div className="flex-grow flex items-center px-4 md:flex-grow-0 md:mr-8">
          <Link to="/" className="flex items-center space-x-2">
            <HeartPulse size={28} className="text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-[#004b79] text-xl leading-none">Dr. Annu's</span>
              <span className="text-primary text-[10px] tracking-wider font-semibold">DENTAL CARE</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center flex-grow space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors ${
                location.pathname === link.path
                  ? 'text-primary bg-primary/5'
                  : 'text-[#004b79] hover:text-primary hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-stretch divide-x divide-gray-200 border-l border-gray-200">
          
          <a href={`tel:${clinicDetails.phone}`} className="flex flex-col items-center justify-center px-4 md:px-6 hover:bg-red-50 text-accent transition-colors">
            <AlertCircle size={22} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-medium">Emergency</span>
          </a>

          {/* Mobile Nav Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col items-center justify-center px-4 hover:bg-gray-50 text-[#004b79] transition-colors"
          >
            {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            <span className="text-[10px] font-medium hidden sm:block">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Expanded Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 z-40">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
             {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block p-4 rounded-lg text-lg font-medium border border-gray-100 ${
                    location.pathname === link.path 
                      ? 'bg-primary/10 text-primary border-primary/20' 
                      : 'text-[#004b79] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
             ))}
           </div>
        </div>
      )}
    </header>
  );
}
