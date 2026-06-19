import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from '../ui/FloatingContact';
import MobileBottomNav from './MobileBottomNav';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 pb-16 md:pb-0"> {/* padding adjusted for fixed top and bottom navs */}
        <Outlet />
      </main>
      <Footer />
      <div className="hidden md:block">
        <FloatingContact />
      </div>
      <MobileBottomNav />
    </div>
  );
}
