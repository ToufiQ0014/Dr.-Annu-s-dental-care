import React, { useState } from 'react';
import { User, CalendarCheck, MessageCircle, Phone, Menu, X } from 'lucide-react';
import { clinicDetails } from '../../data';
import { Link, useLocation } from 'react-router-dom';

export default function MobileBottomNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Doctors', icon: User, path: '/about' },
    { name: 'Book Appt', icon: CalendarCheck, path: '/contact' },
    { name: 'Chat', icon: MessageCircle, href: clinicDetails.whatsappLink, color: 'text-green-500' },
    { name: 'Call Us', icon: Phone, href: `tel:${clinicDetails.phone}` },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation Menu (Fixed Bottom) */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50 md:hidden pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.href ? (
                <a 
                  href={item.href}
                  className="flex flex-col items-center justify-center w-full h-full text-[#004b79]"
                >
                  <item.icon size={22} className={`mb-1 ${item.color || ''}`} strokeWidth={2} />
                  <span className="text-[10px] font-semibold">{item.name}</span>
                </a>
              ) : (
                <Link 
                  to={item.path}
                  className={`flex flex-col items-center justify-center w-full h-full ${
                    location.pathname === item.path ? 'text-primary' : 'text-[#004b79]'
                  }`}
                >
                  <item.icon size={22} className="mb-1" strokeWidth={2} />
                  <span className="text-[10px] font-semibold">{item.name}</span>
                </Link>
              )}
            </React.Fragment>
          ))}
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex flex-col items-center justify-center w-full h-full ${
              menuOpen ? 'text-primary' : 'text-[#004b79]'
            }`}
          >
            {menuOpen ? <X size={22} className="mb-1" strokeWidth={2} /> : <Menu size={22} className="mb-1" strokeWidth={2} />}
            <span className="text-[10px] font-semibold">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu Triggered by Bottom Nav Menu Button */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-20 pb-20 overflow-y-auto">
          <div className="p-4 flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-[#004b79] mb-4 border-b pb-2">Menu</h3>
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 py-2">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 py-2">About Us</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 py-2">Our Treatments</Link>
            <Link to="/reviews" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 py-2">Patient Reviews</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 py-2">Contact & Location</Link>
          </div>
        </div>
      )}
    </>
  );
}
