import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { clinicDetails } from '../data';
import { Award, HeartPulse, Stethoscope, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-teal-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Our Clinic</h1>
          <p className="text-teal-100 text-lg">
            Delivering trusted, family-friendly, and gentle dental care in Indore.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply opacity-50 translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply opacity-50 -translate-x-8 translate-y-8"></div>
                <img 
                  src="https://images.unsplash.com/photo-1590680426514-c1888e2858b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Annu's Dental Care team" 
                  className="rounded-3xl shadow-xl relative z-10 w-full object-cover h-[500px]"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Meet {clinicDetails.lead}</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Welcome to <strong>{clinicDetails.name}</strong>, a state-of-the-art dental practice committed to providing personalized, pain-free, and affordable care to families across Indore. 
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Led by {clinicDetails.lead}, our clinic is designed around a patient-first approach. We believe that a trip to the dentist shouldn't be intimidating. That is why we provide a warm, comfortable, and hygienic environment where your smile is carefully nurtured.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-teal-50 p-2 rounded-lg text-teal-600 mr-3">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Patient-First</h4>
                    <p className="text-sm text-gray-500">Your comfort is our priority</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-50 p-2 rounded-lg text-teal-600 mr-3">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Modern Tech</h4>
                    <p className="text-sm text-gray-500">Equipped with latest tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-50 p-2 rounded-lg text-teal-600 mr-3">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Family Care</h4>
                    <p className="text-sm text-gray-500">For kids, adults & seniors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-50 p-2 rounded-lg text-teal-600 mr-3">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Experienced</h4>
                    <p className="text-sm text-gray-500">Thousands of happy smiles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            title="Our Philosophy" 
            subtitle="We don't just treat teeth; we treat people."
          />
          <p className="text-xl text-gray-600 italic leading-relaxed">
            "Our goal is to shift the narrative around dental visits from anxiety to relief. We take the time to explain every procedure, ensuring you feel completely informed and at ease. It's not just about clinical excellence—it's about building lifelong trust with our patients."
          </p>
        </div>
      </section>
    </div>
  );
}
