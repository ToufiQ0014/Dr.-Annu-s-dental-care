import React from 'react';
import { features } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import * as PhosphorIcons from 'lucide-react';
import * as motion from 'motion/react-client';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Patients Trust Us" 
          subtitle="We combine expertise with a warm, caring approach to make your dental visits comfortable and anxiety-free."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = PhosphorIcons[feature.icon as keyof typeof PhosphorIcons] as React.ElementType;
            return (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-teal-100 hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={28} strokeWidth={2} />}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
