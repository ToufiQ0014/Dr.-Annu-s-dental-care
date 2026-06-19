import React from 'react';
import { clinicDetails } from '../../data';
import { MapPin, Clock, Phone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function LocationSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Visit Our Clinic" 
          subtitle="Conveniently located in the heart of Indore."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-teal-50 p-3 rounded-full text-teal-600 mr-4 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-gray-900 mb-2">Clinic Address</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {clinicDetails.address}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-gray-900 mb-2">Working Hours</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {clinicDetails.hours}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-green-50 p-3 rounded-full text-green-600 mr-4 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-gray-900 mb-2">Contact</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Call for inquiries or emergencies
                </p>
                <a href={`tel:${clinicDetails.phone}`} className="text-teal-600 font-bold hover:text-teal-700">
                  {clinicDetails.phone}
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 h-[450px] bg-gray-200 rounded-3xl overflow-hidden shadow-inner border border-gray-100">
            <iframe 
              src={clinicDetails.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
