import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import * as PhosphorIcons from 'lucide-react';
import * as motion from 'motion/react-client';

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading 
            title="Our Dental Treatments" 
            subtitle="Comprehensive dental care for you and your family under one roof."
            centered={false}
          />
          <Link 
            to="/services" 
            className="hidden md:inline-flex text-teal-600 font-medium hover:text-teal-700 items-center mb-6"
          >
            View All Services <PhosphorIcons.ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, index) => {
            const IconComponent = PhosphorIcons[service.icon as keyof typeof PhosphorIcons] as React.ElementType;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link to="/services" className="text-teal-500 text-sm font-medium flex items-center group-hover:text-teal-600">
                  Read more <PhosphorIcons.ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link 
            to="/services" 
            className="inline-flex text-teal-600 font-medium hover:text-teal-700 items-center px-6 py-3 border border-teal-200 rounded-full bg-white"
          >
            View All Services <PhosphorIcons.ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
