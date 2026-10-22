import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Phone, Menu, X, Calendar, Shield } from 'lucide-react';
import { CLINIC_INFO } from '../constants/clinicData';
import { ToothLogo } from './ToothLogo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Scroll progress for top indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2878F0] via-[#55A8FF] to-[#DFF1FF] z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#081426]/90 backdrop-blur-xl border-b border-white/10 shadow-lg py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo & Name with subtle 3D hover */}
          <motion.a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#55A8FF] rounded-lg"
            aria-label="Mir Dental Care Home"
          >
            <ToothLogo variant="light" iconSize={20} className="transition-transform group-hover:rotate-3" />
            <div className="flex flex-col">
              <span className="text-white font-extrabold tracking-wider text-lg sm:text-xl leading-none">
                MIR DENTAL CARE
              </span>
              <span className="text-[#55A8FF] text-[10px] tracking-widest uppercase font-semibold mt-0.5">
                Model Town · Gujranwala
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links with fluid hover indicators */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isHovered = hoveredNav === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none text-[#DFE7F1] hover:text-white"
                >
                  {isHovered && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-[#2878F0]/30 border border-[#55A8FF]/40 -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Side: Phone & Book CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href={CLINIC_INFO.phoneLink}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 text-white/90 hover:text-white group px-3.5 py-2 rounded-xl hover:bg-white/5 transition-all text-sm font-semibold border border-transparent hover:border-white/10"
              title="Call Mir Dental Care"
            >
              <div className="w-8 h-8 rounded-[10px] bg-[#10233D] border border-white/15 flex items-center justify-center text-[#55A8FF] group-hover:bg-[#2878F0] group-hover:text-white transition-all shadow-sm">
                <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
              </div>
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </motion.a>

            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2878F0] to-[#1d64cf] hover:from-[#3585fb] hover:to-[#2878F0] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-[#2878F0]/35 border border-white/20 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2.5 md:hidden">
            <a
              href={CLINIC_INFO.phoneLink}
              className="p-2.5 rounded-xl bg-[#10233D] text-[#55A8FF] border border-white/15 flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Call clinic directly"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#55A8FF] active:scale-95"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 top-[65px] bg-[#081426]/98 backdrop-blur-xl z-40 md:hidden flex flex-col px-6 py-8 border-t border-white/10 overflow-y-auto"
            >
              <nav className="flex flex-col gap-4 text-center" aria-label="Mobile Navigation">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/90 hover:text-[#55A8FF] text-lg font-semibold py-3 border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={CLINIC_INFO.phoneLink}
                  className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#10233D] hover:bg-[#152e50] text-white rounded-2xl border border-white/10 font-semibold text-base transition-all active:scale-98"
                >
                  <Phone className="w-5 h-5 text-[#55A8FF]" />
                  <span>Call: {CLINIC_INFO.phoneDisplay}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 bg-[#2878F0] hover:bg-[#1c62ce] active:scale-98 text-white rounded-full font-semibold text-base shadow-lg shadow-[#2878F0]/30 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
