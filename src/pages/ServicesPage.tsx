import React from 'react';
import { services } from '../data';
import SectionHeading from '../components/ui/SectionHeading';
import * as PhosphorIcons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-teal-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Dental Treatments</h1>
          <p className="text-teal-100 text-lg">
            Comprehensive care tailored to your unique smile.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = PhosphorIcons[service.icon as keyof typeof PhosphorIcons] as React.ElementType;
              return (
                <div 
                  key={service.id} 
                  className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8 h-20">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center w-full py-3 bg-teal-50 text-teal-600 font-medium rounded-xl hover:bg-teal-500 hover:text-white transition-all duration-300"
                  >
                    Book Consultation <PhosphorIcons.ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Not sure what treatment you need?</h2>
          <p className="text-gray-600 mb-8">
            Schedule a comprehensive dental check-up. Our experts will evaluate your oral health and recommend the best course of action.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 shadow-md transition-all text-lg"
          >
            Schedule a Check-up
          </Link>
        </div>
      </section>
    </div>
  );
}
