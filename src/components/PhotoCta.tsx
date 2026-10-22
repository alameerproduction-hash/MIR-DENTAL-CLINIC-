import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../constants/clinicData';

interface PhotoCtaProps {
  onOpenBooking: () => void;
}

export const PhotoCta: React.FC<PhotoCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[320px] lg:h-[360px] flex items-center overflow-hidden bg-[#081426]">
      {/* Background Photography with Dark Navy Gradient Overlay and Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=80"
          alt="Dental consultation room background"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081426]/95 via-[#081426]/85 to-[#081426]/70" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2878F0]/15 rounded-full blur-3xl pointer-events-none animate-float-subtle" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          {/* Text Content with smooth entrance */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Ready to Take the Next Step?
            </h2>
            <p className="text-base sm:text-lg text-[#DFE7F1] leading-relaxed">
              Contact Mir Dental Care to ask about appointments and available dental care options.
            </p>
          </motion.div>

          {/* Action Buttons with 3D Spring Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2878F0] to-[#1a66d8] hover:from-[#3585fb] hover:to-[#2878F0] text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-xl shadow-[#2878F0]/35 transition-all cursor-pointer border border-white/20"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </motion.button>

            <motion.a
              href={CLINIC_INFO.phoneLink}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-3.5 rounded-full backdrop-blur-sm border border-white/25 transition-all shadow-md group"
            >
              <Phone className="w-5 h-5 text-[#55A8FF] transition-transform group-hover:scale-110" />
              <span>Call {CLINIC_INFO.phoneDisplay}</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
