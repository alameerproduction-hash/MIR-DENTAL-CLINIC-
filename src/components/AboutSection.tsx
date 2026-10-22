import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Phone, ExternalLink, Navigation, Building2, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../constants/clinicData';
import { CardTilt } from './CardTilt';

export const AboutSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [statRating, setStatRating] = useState(0);
  const [statReviews, setStatReviews] = useState(0);
  const [statLocations, setStatLocations] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setStatRating(5.0);
      setStatReviews(200);
      setStatLocations(1);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1350; // ms
          const startTime = performance.now();

          const animateCounters = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setStatRating(parseFloat((easeOut * 5.0).toFixed(1)));
            setStatReviews(Math.floor(easeOut * 200));
            setStatLocations(Math.min(1, Math.ceil(easeOut * 1)));

            if (progress < 1) {
              requestAnimationFrame(animateCounters);
            } else {
              setStatRating(5.0);
              setStatReviews(200);
              setStatLocations(1);
            }
          };

          requestAnimationFrame(animateCounters);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Info with Viewport Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF1FF] text-[#2878F0] text-xs font-bold tracking-wider uppercase mb-4">
              ABOUT MIR DENTAL CARE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081426] tracking-tight leading-tight mb-6">
              Quality Dental Care Starts With Trust.
            </h2>

            <p className="text-[#78869A] text-base sm:text-lg leading-relaxed mb-8">
              Mir Dental Care is located at Model Town Square Parade, Block B, Model Town, Gujranwala. This website helps visitors explore clinic information, review the supplied Google rating, and contact the clinic to inquire about dental care and appointments.
            </p>

            {/* Statistics Row with Animated Counters */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y border-[#DFE7F1] mb-8">
              {/* Stat 1 */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-2 rounded-xl transition-colors hover:bg-[#F0F8FF]"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#2878F0] flex items-baseline gap-1">
                  <span>{statRating.toFixed(1)}</span>
                  <span className="text-sm font-semibold text-[#78869A]">/5.0</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#78869A] mt-1 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#F5B82E] fill-current" />
                  <span>Google Rating</span>
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-2 rounded-xl transition-colors hover:bg-[#F0F8FF]"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#081426]">
                  {statReviews}+
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#78869A] mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B]" />
                  <span>Google Reviews</span>
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-2 rounded-xl transition-colors hover:bg-[#F0F8FF]"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#081426]">
                  {statLocations}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#78869A] mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2878F0]" />
                  <span>Gujranwala Clinic</span>
                </div>
              </motion.div>
            </div>

            {/* Practical Verification Note */}
            <div className="flex items-center gap-2.5 text-xs text-[#78869A] bg-[#F5F7FB] px-4 py-2.5 rounded-xl border border-[#DFE7F1]/60">
              <span className="w-2 h-2 rounded-full bg-[#22A06B] shrink-0" />
              <span>
                Verified Google business listing data. No fabricated patient reviews or doctor profiles.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Modern Clinic Interior with 3D Tilt & Verified Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* 3D Tilt Image Card */}
            <CardTilt maxTilt={6} scaleOnHover={1.02} className="rounded-[28px]">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-[#DFE7F1] aspect-[4/3] bg-[#F5F7FB] group">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                  alt="Mir Dental Care modern clinical interior"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081426]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Floating 3D Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#081426] shadow-lg flex items-center gap-1.5 border border-[#DFE7F1] translate-z-20">
                  <Building2 className="w-3.5 h-3.5 text-[#2878F0]" />
                  <span>Model Town Square</span>
                </div>
              </div>
            </CardTilt>

            {/* Clinic Information Card with subtle spring depth */}
            <CardTilt maxTilt={4} scaleOnHover={1.01} showGlare={false} className="rounded-[26px]">
              <div className="bg-[#F0F8FF] rounded-[26px] p-6 border border-[#2878F0]/25 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#081426]">{CLINIC_INFO.name}</h3>
                    <p className="text-sm font-medium text-[#2878F0]">{CLINIC_INFO.category}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#F5B82E]/15 text-[#b07d10] px-2.5 py-1 rounded-full text-xs font-bold shadow-2xs">
                    <Star className="w-3.5 h-3.5 fill-current text-[#F5B82E]" />
                    <span>5.0 (200)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm text-[#10233D]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#2878F0] mt-0.5 shrink-0" />
                    <span className="leading-snug">{CLINIC_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#2878F0] shrink-0" />
                    <span className="font-semibold">{CLINIC_INFO.phoneDisplay}</span>
                  </div>
                </div>

                {/* Functional Action Buttons with 3D Micro-press */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href={CLINIC_INFO.phoneLink}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 bg-[#2878F0] hover:bg-[#1a66d8] text-white font-semibold text-sm py-2.5 px-4 rounded-full shadow-md shadow-[#2878F0]/25 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </motion.a>

                  <motion.a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#081426] border border-[#DFE7F1] font-semibold text-sm py-2.5 px-4 rounded-full shadow-xs transition-all"
                  >
                    <Navigation className="w-4 h-4 text-[#2878F0]" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 text-[#78869A]" />
                  </motion.a>
                </div>
              </div>
            </CardTilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
