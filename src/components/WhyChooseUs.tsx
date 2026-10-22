import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, HeartHandshake } from 'lucide-react';
import { CardTilt } from './CardTilt';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const practicalBenefits = [
    'Convenient clinic contact information.',
    'Direct telephone calling.',
    'Google Maps directions.',
    'Appointment inquiry options.',
    'Accessible clinic information.',
    'Mobile-friendly browsing.',
  ];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Comfort & Practical Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF1FF] text-[#2878F0] text-xs font-bold tracking-wider uppercase mb-3">
              PATIENT CONVENIENCE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081426] tracking-tight leading-tight mb-6">
              Your Comfort Matters.
            </h2>

            <p className="text-[#78869A] text-base sm:text-lg leading-relaxed mb-8">
              Finding a dental clinic should feel straightforward. Mir Dental Care's website provides essential clinic information, clear contact options, and an easy way to inquire about appointments.
            </p>

            {/* Checklist of Practical Website Benefits with fluid spring hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {practicalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 3 }}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-[#F5F7FB] border border-[#DFE7F1]/80 hover:bg-[#F0F8FF] hover:border-[#2878F0]/30 transition-all cursor-default shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#2878F0]/10 flex items-center justify-center text-[#2878F0] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2878F0]" />
                  </div>
                  <span className="text-sm font-semibold text-[#10233D] leading-snug">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Premium CTA Buttons with 3D tactile feel */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 bg-[#2878F0] hover:bg-[#1a66d8] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-[#2878F0]/30 transition-all cursor-pointer group"
              >
                <span>Contact the Clinic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.a>

              <motion.button
                onClick={onOpenBooking}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#F0F8FF] hover:bg-[#DFF1FF] text-[#2878F0] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-[#2878F0]/25 transition-all cursor-pointer shadow-xs"
              >
                <span>Inquire Appointment</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Clean Clinic Photography with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <CardTilt maxTilt={7} scaleOnHover={1.02} className="rounded-[28px]">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-[#DFE7F1] bg-[#F5F7FB] aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern, sanitized clinical treatment environment at Mir Dental Care"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081426]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Floating 3D Accent Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center gap-3.5 translate-z-20">
                  <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#2878F0] to-[#1a66d8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <HeartHandshake className="w-6 h-6 animate-float-subtle" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#081426]">A Welcoming Experience</h4>
                    <p className="text-xs text-[#78869A]">
                      Model Town Square Parade, Block B, Model Town, Gujranwala
                    </p>
                  </div>
                </div>
              </div>
            </CardTilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
