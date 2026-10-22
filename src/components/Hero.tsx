import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Phone, Calendar, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../constants/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const serviceTags = [
    'General Dental Care',
    'Dental Checkups',
    'Teeth Cleaning',
    'Preventive Dental Care',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center bg-[#081426] pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background Photography with Navy Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85"
          alt="Modern dental clinic consultation room"
          className="w-full h-full object-cover object-center lg:object-right filter brightness-[0.7] contrast-[1.05]"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Layered Gradient Overlays for High Contrast & Visual Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081426] via-[#081426]/90 to-[#081426]/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-transparent to-[#081426]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none" />

        {/* Ambient Subtle 3D Floating Orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#2878F0]/15 blur-3xl pointer-events-none animate-float-subtle" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-[#55A8FF]/10 blur-2xl pointer-events-none animate-float-reverse" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Hero Badge with smooth entrance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-[#55A8FF] mb-6 shadow-sm cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-[#2878F0] animate-pulse" />
            <span>TRUSTED DENTAL CARE · GUJRANWALA</span>
          </motion.div>

          {/* Main Heading with dynamic gradient highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
          >
            Your Smile Deserves{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A8FF] via-[#8ec3ff] to-[#DFF1FF] drop-shadow-sm">
              Exceptional Care.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#DFE7F1] leading-relaxed mb-8 max-w-xl font-normal"
          >
            Welcome to Mir Dental Care in Model Town, Gujranwala. Explore our clinic information, discover dental care options, and contact us to arrange your visit.
          </motion.p>

          {/* Primary & Secondary CTAs with Tactile 3D Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
          >
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2878F0] to-[#1c62ce] hover:from-[#3585fb] hover:to-[#2878F0] text-white font-semibold text-base px-7 py-4 rounded-full shadow-xl shadow-[#2878F0]/35 transition-all cursor-pointer group border border-white/20"
            >
              <Calendar className="w-5 h-5 transition-transform group-hover:rotate-6" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            <motion.a
              href={CLINIC_INFO.phoneLink}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-full backdrop-blur-sm border border-white/20 transition-all shadow-md group"
            >
              <Phone className="w-5 h-5 text-[#55A8FF] transition-transform group-hover:scale-110" />
              <span>Call Mir Dental Care</span>
            </motion.a>
          </motion.div>

          {/* 3 Compact Trust Indicators with 3D spring hover depth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/15 max-w-2xl"
          >
            {/* Trust Indicator 1 */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F5B82E]/40 hover:bg-white/10 transition-colors shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5B82E]/20 flex items-center justify-center text-[#F5B82E] shrink-0">
                <Star className="w-5 h-5 fill-current animate-float-subtle" />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">5.0 / 5.0</div>
                <div className="text-xs text-[#DFE7F1]/80">Google Rating</div>
              </div>
            </motion.div>

            {/* Trust Indicator 2 */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#55A8FF]/40 hover:bg-white/10 transition-colors shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2878F0]/20 flex items-center justify-center text-[#55A8FF] shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">200 Reviews</div>
                <div className="text-xs text-[#DFE7F1]/80">Verified on Google</div>
              </div>
            </motion.div>

            {/* Trust Indicator 3 */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#55A8FF] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Model Town</div>
                <div className="text-xs text-[#DFE7F1]/80">Gujranwala, PK</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Service Category Tags with fluid hover scale */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-2 mt-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78869A] mr-1">
              Care Categories:
            </span>
            {serviceTags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, y: -1 }}
                className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10 backdrop-blur-xs cursor-default transition-colors hover:bg-white/15"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
