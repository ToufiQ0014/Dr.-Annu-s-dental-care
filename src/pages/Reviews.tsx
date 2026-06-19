import React from 'react';
import { testimonials, clinicDetails } from '../data';
import SectionHeading from '../components/ui/SectionHeading';
import { Star, Quote, MessageCircleHeart } from 'lucide-react';

export default function Reviews() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-teal-600 py-20 px-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center text-white mb-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Patient Experiences</h1>
          <p className="text-teal-100 text-lg">
            See why families in Indore trust us with their smiles.
          </p>
        </div>
        
        <div className="bg-white rounded-full px-6 py-3 flex items-center shadow-lg transform translate-y-10">
          <div className="flex text-amber-400 mr-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <span className="font-bold text-gray-900 mr-2">{clinicDetails.rating} out of 5</span>
          <span className="text-gray-500">({clinicDetails.reviewsCount} Google Reviews)</span>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote className="text-teal-200" size={28} />
                </div>
                
                <h4 className="text-lg font-bold text-teal-700 mb-3">{testimonial.highlight}</h4>
                <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-teal-100 text-teal-700 font-bold rounded-full flex items-center justify-center mr-3 uppercase">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 leading-none">{testimonial.author}</p>
                    <p className="text-xs text-gray-500 mt-1">Verified Google Review</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Call out card */}
            <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100 flex flex-col justify-center items-center text-center">
              <MessageCircleHeart className="text-teal-400 mb-4" size={48} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Have you visited us?</h4>
              <p className="text-gray-600 mb-6">
                We'd love to hear about your experience at Dr. Annu's Dental Care.
              </p>
              <a 
                href={clinicDetails.mapUrl} 
                target="_blank"  
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-teal-500 text-teal-600 font-medium rounded-full hover:bg-teal-500 hover:text-white transition-all w-full"
              >
                Leave a Review
              </a>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
