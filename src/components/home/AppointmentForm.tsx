import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Calendar, User, Phone, Clipboard, CheckCircle2 } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useAppointments } from '../../hooks/useAppointments';
import { useToast } from '../../contexts/ToastContext';

export default function AppointmentForm() {
  const { addAppointment } = useAppointments();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    addAppointment({
      patientName: formData.get('patientName') as string,
      phone: formData.get('phone') as string,
      treatment: formData.get('treatment') as string,
      date: formData.get('date') as string,
      notes: formData.get('notes') as string,
    });

    toast('Appointment requested successfully!');
    e.currentTarget.reset();
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-50 rounded-3xl overflow-hidden shadow-sm border border-teal-100 flex flex-col lg:flex-row">
          
          <div className="lg:w-5/12 p-10 md:p-16 bg-teal-600 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] mix-blend-overlay opacity-20 object-cover"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">Book Your Dental Consultation Today</h3>
              <p className="text-teal-100 mb-8 max-w-sm">
                Take the first step towards a healthier, brighter smile. Fill out the form and our team will get back to you to confirm your appointment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mr-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Fast Response</h4>
                    <p className="text-teal-100 text-sm">We reply within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mr-4">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Flexible Timings</h4>
                    <p className="text-teal-100 text-sm">Appointments that fit your schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 p-10 md:p-16 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input 
                        type="text" 
                        name="patientName"
                        required
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                        placeholder="John Doe" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">Treatment Needed</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clipboard size={18} className="text-gray-400" />
                      </div>
                      <select name="treatment" className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all appearance-none bg-white">
                        <option value="">Select Treatment</option>
                        <option value="General Checkup">General Checkup</option>
                        <option value="Root Canal">Root Canal</option>
                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                        <option value="Tooth Ache">Tooth Ache / Pain</option>
                        <option value="Cosmetic">Cosmetic Dentistry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">Preferred Date *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                      <input 
                        type="date"
                        name="date"
                        required 
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">Message / Notes (Optional)</label>
                  <textarea 
                    name="notes"
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="Tell us about your dental issue..." 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-colors flex justify-center items-center"
                >
                  Request Appointment
                </button>
              </form>
          </div>

        </div>
      </div>
    </section>
  );
}
