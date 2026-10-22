import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Mir Dental Care"
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-2xl shadow-2xl shadow-[#25D366]/40 transition-colors border border-white/20 animate-float-subtle cursor-pointer"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-current text-white" />
        </div>

        {/* Hover / Desktop Expanded Label */}
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          WhatsApp Inquiry
        </span>

        {/* Active Ping Indicator */}
        <span className="relative flex h-2.5 w-2.5 ml-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </motion.a>
    </aside>
  );
};
