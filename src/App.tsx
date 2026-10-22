import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgressBar } from './components/ProgressBar';
import { AboutSection } from './components/AboutSection';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { GoogleReviews } from './components/GoogleReviews';
import { PhotoCta } from './components/PhotoCta';
import { FaqSection } from './components/FaqSection';
import { AppointmentBooking } from './components/AppointmentBooking';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('General Dental Care');

  const handleOpenBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-white text-[#10233D] flex flex-col font-sans selection:bg-[#2878F0] selection:text-white">
      {/* 01: Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 02: Premium Hero Section (Dark navy) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 03: Four-Step Progress Bar (White) */}
        <ProgressBar />

        {/* 04: About Mir Dental Care & Statistics (White) */}
        <AboutSection />

        {/* 05: Dental Services Grid (Soft ice blue) */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* 06: Why Choose Mir Dental Care (White) */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* 07: Clinic Experience & Process: How It Works (Dark navy) */}
        <HowItWorks />

        {/* 08: Google Reviews (White) */}
        <GoogleReviews />

        {/* 09: Full-Width Photo CTA (Photography with dark overlay) */}
        <PhotoCta onOpenBooking={handleOpenBooking} />

        {/* 10: Frequently Asked Questions (Soft ice blue) */}
        <FaqSection />

        {/* 20: Appointment Booking Inquiry System (Direct WhatsApp) */}
        <AppointmentBooking initialService={selectedService} />

        {/* 11: Final Call to Action (Premium dental blue gradient) */}
        <FinalCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* 12: Footer (Deep navy) */}
      <Footer />

      {/* 21: Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
