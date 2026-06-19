import React from 'react';
import { testimonials } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import { Quote, Star } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function TestimonialSlider() {
  return (
    <section className="py-24 bg-teal-600 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight">
            Loved By Our Patients
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Read what our community has to say about their experience with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 text-teal-100" size={32} />
              
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <div className="mb-4 inline-block bg-teal-50 text-teal-700 text-xs font-bold px-2 py-1 rounded">
                "{testimonial.highlight}"
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <p className="font-heading font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-xs text-gray-500">Verified Patient</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
