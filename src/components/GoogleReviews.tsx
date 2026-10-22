import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../constants/clinicData';
import { CardTilt } from './CardTilt';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF1FF] text-[#2878F0] text-xs font-bold tracking-wider uppercase mb-3">
            PATIENT FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081426] tracking-tight mb-4">
            Trusted by Google Reviewers.
          </h2>
          <p className="text-[#78869A] text-base sm:text-lg leading-relaxed">
            Explore the clinic's Google listing and review information.
          </p>
        </motion.div>

        {/* Main Prominent Rating Card with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <CardTilt maxTilt={5} scaleOnHover={1.015} className="rounded-[32px]">
            <div className="bg-gradient-to-br from-[#F0F8FF] via-white to-[#F5F7FB] rounded-[32px] p-8 sm:p-12 border border-[#DFE7F1] shadow-3d-card hover:shadow-3d-hover transition-all duration-300 relative overflow-hidden">
              {/* Subtle Corner Badge */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#2878F0]/5 rounded-bl-[120px] pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-center md:text-left">
                {/* Rating Highlight with 3D Pop */}
                <div className="flex flex-col items-center md:items-start shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-5xl sm:text-6xl font-extrabold text-[#081426] tracking-tight">
                      5.0
                    </span>
                    <span className="text-2xl font-semibold text-[#78869A]">/ 5.0</span>
                  </div>

                  {/* 5 Gold Stars with staggered spring entrance */}
                  <div className="flex items-center gap-1.5 mb-3" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.08, type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <Star className="w-6 h-6 text-[#F5B82E] fill-[#F5B82E] drop-shadow-xs" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-sm font-bold text-[#2878F0] tracking-wide flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22A06B]" />
                    <span>200 Google Reviews</span>
                  </div>
                </div>

                {/* Verification Detail & Google Maps Button */}
                <div className="flex-1 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#DFE7F1] pt-6 md:pt-0 md:pl-10">
                  <div className="space-y-3 mb-8">
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2878F0] bg-white px-3 py-1 rounded-full border border-[#DFE7F1] shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#22A06B]" />
                      <span>Google Business Verified Listing</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#081426]">
                      Mir Dental Care · Model Town, Gujranwala
                    </h3>
                    <p className="text-sm text-[#78869A] leading-relaxed">
                      Based on the verified public business profile for Mir Dental Care in Gujranwala. In accordance with patient privacy and review integrity, reviews are hosted on Google.
                    </p>
                  </div>

                  {/* Review Button with 3D spring lift */}
                  <div>
                    <motion.a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center justify-center gap-2.5 bg-[#2878F0] hover:bg-[#1a66d8] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-[#2878F0]/30 transition-all cursor-pointer group"
                    >
                      <span>View Google Reviews</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </CardTilt>
        </motion.div>

        {/* Review Integrity Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-xs text-[#78869A] max-w-xl mx-auto"
        >
          Review Integrity Policy: Mir Dental Care values honest feedback. To protect authenticity, we feature the verified Google rating rather than fabricated patient testimonials or stock quotes.
        </motion.div>
      </div>
    </section>
  );
};
