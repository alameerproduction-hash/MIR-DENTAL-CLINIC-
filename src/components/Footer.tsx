import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Navigation, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../constants/clinicData';
import { ToothLogo } from './ToothLogo';

export const Footer: React.FC = () => {
  const handleNavScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#081426] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ToothLogo variant="light" iconSize={20} className="transition-transform hover:scale-105" />
              <div>
                <span className="font-extrabold text-lg tracking-wider block">
                  MIR DENTAL CARE
                </span>
                <span className="text-xs text-[#55A8FF] font-medium tracking-wide">
                  Model Town · Gujranwala
                </span>
              </div>
            </div>

            <p className="text-sm text-[#78869A] font-medium italic">
              "Your Smile Matters."
            </p>

            <motion.a
              href={CLINIC_INFO.phoneLink}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 p-3 rounded-2xl bg-[#10233D] border border-white/10 hover:border-[#2878F0]/40 transition-colors group shadow-md"
            >
              <div className="w-9 h-9 rounded-xl bg-[#2878F0] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <div className="text-[11px] text-[#78869A] uppercase tracking-wider font-semibold">
                  Direct Line
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#55A8FF] transition-colors">
                  {CLINIC_INFO.phoneDisplay}
                </div>
              </div>
            </motion.a>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#55A8FF] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavScroll(e, item.href)}
                    className="text-[#DFE7F1] hover:text-[#55A8FF] hover:translate-x-1 transition-all py-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#55A8FF] mb-4">
              Clinic Location
            </h4>
            <div className="space-y-3 text-sm text-[#DFE7F1]">
              <p className="font-semibold text-white">Mir Dental Care</p>
              <div className="flex items-start gap-2.5 text-[#DFE7F1]/80">
                <MapPin className="w-4 h-4 text-[#2878F0] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Model Town Square Parade, Block B, Model Town, Gujranwala, Pakistan.
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-[#DFE7F1]/80">
                <Phone className="w-4 h-4 text-[#2878F0] shrink-0" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </div>

              <div className="pt-2">
                <motion.a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#55A8FF] hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Column 4 — Opening Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#55A8FF] mb-4">
              Clinic Information
            </h4>
            <div className="bg-[#10233D] rounded-2xl p-4 border border-white/10 space-y-3 text-sm shadow-md">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Clock className="w-4 h-4 text-[#55A8FF]" />
                <span>Listed opening time: 1:00 PM</span>
              </div>
              <p className="text-xs text-[#78869A] leading-relaxed">
                Please contact the clinic to confirm current opening hours and schedule for your intended visit date.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-xs text-[#22A06B] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Business Listing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78869A]">
          <div>© 2026 Mir Dental Care. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <span>Model Town, Gujranwala</span>
            <span className="text-[#55A8FF]">Direct WhatsApp: 0339 3250240</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
