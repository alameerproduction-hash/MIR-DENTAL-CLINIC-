import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, CalendarClock, MessageSquareText, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../constants/clinicData';
import { CardTilt } from './CardTilt';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <PhoneCall className="w-5 h-5 text-white" />;
      case '02':
        return <CalendarClock className="w-5 h-5 text-white" />;
      case '03':
        return <MessageSquareText className="w-5 h-5 text-white" />;
      case '04':
        return <CheckCircle className="w-5 h-5 text-white" />;
      default:
        return <CheckCircle className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#081426] text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#2878F0]/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-[#55A8FF]/10 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#55A8FF] text-xs font-bold tracking-wider uppercase mb-3 border border-white/10">
            YOUR VISIT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            A Simple Way to Get Started.
          </h2>
          <p className="text-[#DFE7F1] text-base sm:text-lg leading-relaxed">
            Four clear steps to connect with Mir Dental Care and arrange your consultation in Model Town, Gujranwala.
          </p>
        </motion.div>

        {/* 4 Process Cards with 3D Tilt & Viewport Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <CardTilt
                maxTilt={8}
                scaleOnHover={1.03}
                glareColor="rgba(85, 168, 255, 0.15)"
                className="h-full rounded-[24px]"
              >
                <div className="group relative bg-[#10233D] rounded-[24px] overflow-hidden border border-white/10 hover:border-[#2878F0]/60 transition-all duration-300 h-full flex flex-col justify-between shadow-3d-dark hover:shadow-2xl hover:shadow-[#2878F0]/25">
                  {/* Image with subtle overlay */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={step.imageUrl}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10233D] via-[#10233D]/50 to-transparent" />

                    {/* Large Subtle Step Number in Top Right with 3D Pop */}
                    <div className="absolute top-3 right-4 font-extrabold text-3xl text-white/25 group-hover:text-white/40 tracking-tighter select-none font-mono transition-colors translate-z-20">
                      {step.step}
                    </div>

                    {/* Blue Squircle Icon with 3D pop */}
                    <div className="absolute bottom-3 left-4 w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#2878F0] to-[#1a66d8] shadow-md shadow-[#2878F0]/40 flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                      {getStepIcon(step.step)}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#55A8FF] uppercase tracking-wider mb-1">
                        Step {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#55A8FF] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#DFE7F1]/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>

        {/* Note on Booking Policy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-xs text-[#78869A] max-w-xl mx-auto"
        >
          Notice: Submission of an inquiry initiates a request. Clinic visits must be confirmed directly by Mir Dental Care staff.
        </motion.div>
      </div>
    </section>
  );
};
