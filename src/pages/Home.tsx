import React from 'react';
import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesOverview from '../components/home/ServicesOverview';
import TestimonialSlider from '../components/home/TestimonialSlider';
import AppointmentForm from '../components/home/AppointmentForm';
import FAQSection from '../components/home/FAQSection';
import LocationSection from '../components/home/LocationSection';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <TestimonialSlider />
      <AppointmentForm />
      <FAQSection />
      <LocationSection />
    </>
  );
}
