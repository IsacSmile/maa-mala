import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import CampExperiences from './components/CampExperiences';
import VisualStory from './components/VisualStory';
import ReelsSection from './components/ReelsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-nature-950 text-ivory-100 selection:bg-forest selection:text-ivory-100 flex flex-col justify-between font-sans">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <EditorialIntro />
        <CampExperiences />
        <VisualStory />
        <ReelsSection />
        <TestimonialsSection />
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
