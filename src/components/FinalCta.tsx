import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Star, CheckCircle2, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../constants/clinicData';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-[#2878F0] via-[#2167d4] to-[#1c5cc2] text-white relative overflow-hidden">
      {/* Subtle Background Geometry & Floating Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#55A8FF]/20 rounded-full blur-2xl pointer-events-none animate-float-reverse" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase mb-6 border border-white/20">
            ARRANGE YOUR CONSULTATION
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Next Step Starts Here.
          </h2>

          {/* Supporting Text */}
          <p className="text-[#DFF1FF] text-base sm:text-lg leading-relaxed mb-8">
            Contact Mir Dental Care to learn more about the clinic and inquire about an appointment.
          </p>

          {/* Action Buttons with 3D Spring Physics */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#081426] font-bold text-base px-8 py-4 rounded-full shadow-2xl transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#2878F0]" />
              <span>Request an Appointment</span>
            </motion.button>

            <motion.a
              href={CLINIC_INFO.phoneLink}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-full border border-white/30 backdrop-blur-sm transition-all shadow-md group"
            >
              <Phone className="w-5 h-5 text-[#DFF1FF] transition-transform group-hover:scale-110" />
              <span>Call the Clinic</span>
            </motion.a>
          </div>

          {/* 3 Trust Indicators with smooth hover elevation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/20 text-xs sm:text-sm">
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center justify-center gap-2 text-white/95 p-2 rounded-xl transition-colors hover:bg-white/10"
            >
              <Star className="w-4 h-4 text-[#F5B82E] fill-current" />
              <span className="font-semibold">5.0 Google Rating</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center justify-center gap-2 text-white/95 p-2 rounded-xl transition-colors hover:bg-white/10"
            >
              <CheckCircle2 className="w-4 h-4 text-[#DFF1FF]" />
              <span className="font-semibold">200 Google Reviews</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center justify-center gap-2 text-white/95 p-2 rounded-xl transition-colors hover:bg-white/10"
            >
              <MapPin className="w-4 h-4 text-[#DFF1FF]" />
              <span className="font-semibold">Model Town, Gujranwala</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
