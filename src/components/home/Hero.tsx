import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Stethoscope } from 'lucide-react';
import { clinicDetails } from '../../data';
import * as motion from 'motion/react-client';

export default function Hero() {
  return (
    <>
      <section className="bg-primary pt-24 pb-12 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        >
          {/* Breadcrumbs */}
          <div className="text-white/90 text-sm font-medium mb-8">
            Home — Our Treatments — Dental Care
          </div>
          
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dental Care
            </h1>
            
            {/* Circular Icon with Drop Shadow Effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-24 h-24 md:w-32 md:h-32 bg-[#00a8c6] rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0 shadow-lg"
            >
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-black/10 origin-top-left rotate-45 transform"></div>
              <Stethoscope size={48} className="text-white relative z-10 md:w-16 md:h-16" strokeWidth={1.5} />
            </motion.div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-4 max-w-2xl">
            <Link 
              to="/contact" 
              className="bg-secondary rounded-md hover:bg-[#003c61] transition-colors flex items-stretch overflow-hidden group shadow-md"
            >
              <div className="p-4 md:p-5 font-semibold text-white text-lg flex-grow flex items-center">
                Book an Appointment
              </div>
              <div className="bg-[#00bcd4] w-14 md:w-16 flex items-center justify-center group-hover:bg-[#00a8c6] transition-colors">
                <ChevronRight className="text-white" size={24} />
              </div>
            </Link>
            
            <Link 
              to="/services" 
              className="bg-secondary rounded-md hover:bg-[#003c61] transition-colors flex items-stretch overflow-hidden group shadow-md"
            >
              <div className="p-4 md:p-5 font-semibold text-white text-lg flex-grow flex items-center">
                View Our Treatments
              </div>
              <div className="bg-[#00bcd4] w-14 md:w-16 flex items-center justify-center group-hover:bg-[#00a8c6] transition-colors">
                <ChevronRight className="text-white" size={24} />
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Booking Banner & Overview */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-[#004b79] rounded-md p-4 md:p-6 mb-10 flex flex-col sm:flex-row items-center justify-between shadow-md"
          >
            <span className="text-white font-semibold text-lg md:text-xl mb-4 sm:mb-0">
              To Book an Appointment
            </span>
            <a 
              href={`tel:${clinicDetails.phone}`} 
              className="bg-[#0babbc] hover:bg-[#0999a8] transition-colors rounded pl-2 md:pl-3 pr-6 md:pr-8 py-2 md:py-3 flex items-center shadow-sm w-full sm:w-auto justify-center"
            >
              <div className="bg-white text-[#004b79] rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mr-3 font-bold text-xs md:text-sm">
                24/7
              </div>
              <span className="text-white font-bold text-lg">Call Us</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-gray-600 mb-6 font-sans">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              A good dental care means regularly brushing and flossing your teeth, going for frequent dental check-ups, and consuming a healthy diet. Practicing these habits prevents your mouth from getting gum disease, cavities, and bad breath.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At <strong>{clinicDetails.name}</strong>, {clinicDetails.lead} and our dedicated team offer comprehensive family dentistry, root canal treatments, teeth cleaning, and more to help you maintain a bright, healthy smile right here in Indore.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
