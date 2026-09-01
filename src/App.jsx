import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReelsSection from './components/ReelsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-pink-500 selection:text-white flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ReelsSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
