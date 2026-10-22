import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarCheck, Stethoscope, FileText, HeartPulse } from 'lucide-react';

export const ProgressBar: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      label: 'Appointment Inquiry',
      detail: 'Share your preferred visit time and contact details',
      icon: CalendarCheck,
    },
    {
      num: '02',
      label: 'Clinic Consultation',
      detail: 'In-person evaluation at our Model Town location',
      icon: Stethoscope,
    },
    {
      num: '03',
      label: 'Care Planning',
      detail: 'Personalized dental care recommendations',
      icon: FileText,
    },
    {
      num: '04',
      label: 'Follow-Up Care',
      detail: 'Guidance and continued oral wellness',
      icon: HeartPulse,
    },
  ];

  return (
    <section className="bg-white border-b border-[#DFE7F1] py-4 relative z-20 shadow-xs">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between overflow-x-auto pb-2 pt-1 no-scrollbar gap-4 md:gap-6">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const Icon = step.icon;

            return (
              <motion.button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center gap-3.5 px-4 py-2.5 rounded-2xl cursor-pointer whitespace-nowrap text-left border border-transparent transition-colors"
                aria-label={`Step ${step.num}: ${step.label}`}
              >
                {/* Fluid Spring Active Indicator Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeStepGlow"
                    className="absolute inset-0 rounded-2xl bg-[#F0F8FF] border border-[#2878F0]/30 shadow-sm ring-1 ring-[#2878F0]/20 -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}

                {/* Step Icon / Number squircle with 3D feel */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#2878F0] text-white shadow-md shadow-[#2878F0]/30 scale-105'
                      : 'bg-[#F5F7FB] text-[#78869A] border border-[#DFE7F1]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Step Text Info */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${
                        isActive ? 'text-[#2878F0]' : 'text-[#78869A]'
                      }`}
                    >
                      Step {step.num}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-bold transition-colors ${
                      isActive ? 'text-[#081426]' : 'text-[#78869A]'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Step Explanatory Note with smooth fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-center text-xs text-[#78869A] hidden md:block"
          >
            <span className="font-semibold text-[#10233D]">Patient Journey Stage:</span>{' '}
            {steps[activeStep].detail}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
