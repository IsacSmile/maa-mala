import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import CampExperiences from './components/CampExperiences';
import VisualStory from './components/VisualStory';
import ReelsSection from './components/ReelsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-nature-950 text-ivory-100 selection:bg-forest selection:text-ivory-100 flex flex-col justify-between font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <EditorialIntro />
        <CampExperiences />
        <VisualStory />
        <ReelsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
