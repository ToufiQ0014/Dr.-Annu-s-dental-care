import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Clock } from 'lucide-react';
import { clinicDetails } from '../../data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group inline-block">
              <div className="bg-teal-500 text-white p-2 rounded-lg">
                <HeartPulse size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl text-white leading-tight">
                  Dr. Annu's
                </h2>
                <p className="text-teal-400 font-medium text-xs tracking-wide">
                  DENTAL CARE
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              A trusted family dental clinic in Indore providing gentle, affordable, 
              and high-quality dental treatments for your entire family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-teal-400 shrink-0 mt-1 mr-3" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {clinicDetails.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-teal-400 shrink-0 mr-3" size={18} />
                <a href={`tel:${clinicDetails.phone}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {clinicDetails.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Working Hours</h3>
            <div className="flex items-start">
              <Clock className="text-teal-400 shrink-0 mt-1 mr-3" size={18} />
              <div className="text-gray-400 text-sm space-y-1">
                <p>Monday - Sunday</p>
                <p className="font-medium text-white">10:00 AM – 9:00 PM</p>
                <p className="text-xs text-teal-400 mt-2">Open on weekends!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {clinicDetails.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
