import React, { useState } from 'react';
import { clinicDetails } from '../data';
import { MapPin, Phone, Clock, Mail, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import * as motion from 'motion/react-client';
import { useAppointments } from '../hooks/useAppointments';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { addAppointment } = useAppointments();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    addAppointment({
      patientName: formData.get('patientName') as string,
      phone: formData.get('phone') as string,
      treatment: formData.get('treatment') as string,
      date: new Date().toISOString().split('T')[0], // Default to today since form has no date picker
      notes: formData.get('notes') as string,
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-teal-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-teal-100 text-lg">
            We're here to help you smile brighter. Reach out to schedule your visit.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have a question or need to book an appointment? We would love to hear from you. Find our details below or use the contact form.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-teal-600 mr-4 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Clinic Center</h4>
                    <p className="text-gray-600">{clinicDetails.address}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone & WhatsApp</h4>
                    <a href={`tel:${clinicDetails.phone}`} className="text-gray-600 hover:text-teal-600 block">{clinicDetails.phone}</a>
                    <a href={clinicDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium text-sm hover:underline mt-1 inline-block">Message on WhatsApp</a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-amber-500 mr-4 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Operating Hours</h4>
                    <p className="text-gray-600">{clinicDetails.hours}</p>
                    <p className="text-teal-600 text-sm font-medium mt-1">Open daily</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-purple-500 mr-4 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email inquiries</h4>
                    <a href="mailto:info@drannudental.com" className="text-gray-600 hover:text-teal-600">info@drannudental.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-50">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send us a message</h3>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Thank you for contacting Dr. Annu's Dental Care. Our team will get back to you responding to your inquiry shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-teal-600 font-medium hover:text-teal-700 underline px-6 py-2 bg-teal-50 rounded-full"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input 
                          type="text" 
                          name="patientName"
                          required
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white"
                          placeholder="Your name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white"
                          placeholder="Your phone number" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Service Interested In</label>
                      <select name="treatment" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white appearance-none">
                        <option value="">Select a service (Optional)</option>
                        <option value="General Checkup">General Checkup</option>
                        <option value="Root Canal">Root Canal</option>
                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                        <option value="Cosmetic">Cosmetic Dentistry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Your Message</label>
                      <textarea 
                        name="notes"
                        rows={5}
                        required
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white resize-none"
                        placeholder="How can we help you?" 
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-md transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full">
        <iframe 
          src={clinicDetails.mapUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. Annu's Dental Care Location"
        ></iframe>
      </section>
    </div>
  );
}
