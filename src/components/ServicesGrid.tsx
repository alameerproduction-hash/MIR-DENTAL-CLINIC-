import React from 'react';
import { motion } from 'motion/react';
import {
  Stethoscope,
  ClipboardCheck,
  Sparkles,
  Smile,
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  Info,
} from 'lucide-react';
import { SERVICES_DATA } from '../constants/clinicData';
import { ServiceItem } from '../types';
import { CardTilt } from './CardTilt';

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-[#2878F0]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-[#2878F0]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#2878F0]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#2878F0]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#2878F0]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2878F0]" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#2878F0]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F0F8FF] relative overflow-hidden">
      {/* Background Soft Lighting Glow */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#2878F0]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 rounded-full bg-[#55A8FF]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF1FF] text-[#2878F0] text-xs font-bold tracking-wider uppercase mb-3">
            DENTAL CARE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081426] tracking-tight mb-4">
            Explore Dental Care Options.
          </h2>
          <p className="text-[#78869A] text-base sm:text-lg leading-relaxed">
            Learn about common dental care categories and contact Mir Dental Care to confirm which treatments are available at the clinic.
          </p>
        </motion.div>

        {/* 6-Card Grid with 3D Tilt & Layered Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <CardTilt
                maxTilt={8}
                scaleOnHover={1.025}
                glareColor="rgba(40, 120, 240, 0.12)"
                className="h-full rounded-[26px]"
              >
                <div className="group bg-white rounded-[26px] overflow-hidden border border-[#DFE7F1] hover:border-[#2878F0]/40 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {/* Image Container with Squircle Corners & 3D Depth */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                      {/* Squircle Icon Badge with 3D pop elevation */}
                      <div className="absolute top-4 left-4 w-11 h-11 rounded-[14px] bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center border border-white/70 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                        {getIcon(service.iconName)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#081426] group-hover:text-[#2878F0] transition-colors mb-2.5">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#78869A] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Action with tactile hover */}
                  <div className="px-6 pb-6 pt-0 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectService(service.title)}
                      className="w-full flex items-center justify-between text-sm font-semibold text-[#2878F0] hover:text-white bg-[#F5F7FB] hover:bg-[#2878F0] py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer group/btn shadow-xs hover:shadow-md hover:shadow-[#2878F0]/25"
                    >
                      <span>Contact to Inquire</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>

        {/* Informational Guidance Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-4 rounded-2xl bg-white border border-[#DFE7F1] flex items-center gap-3 text-xs text-[#78869A] max-w-3xl mx-auto shadow-xs"
        >
          <Info className="w-4 h-4 text-[#2878F0] shrink-0" />
          <p>
            The listed treatments represent general dental care categories. Mir Dental Care will advise on specific clinical availability, diagnostic requirements, and personalized treatment planning upon consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
