import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../constants/clinicData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F0F8FF] overflow-hidden">
      <div className="max-w-[760px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF1FF] text-[#2878F0] text-xs font-bold tracking-wider uppercase mb-3">
            QUESTIONS & INFORMATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081426] tracking-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-[#78869A] text-base leading-relaxed">
            Essential information regarding Mir Dental Care, appointments, and visiting our clinic in Gujranwala.
          </p>
        </motion.div>

        {/* Accordion Container with Smooth Spring Expansion */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`rounded-[20px] bg-white border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#2878F0]/40 shadow-md ring-1 ring-[#2878F0]/20'
                    : 'border-[#DFE7F1] hover:border-[#2878F0]/30 shadow-xs hover:shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2878F0]"
                >
                  <span className="font-bold text-base sm:text-lg text-[#081426] leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#2878F0] text-white shadow-sm'
                        : 'bg-[#F5F7FB] text-[#78869A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#78869A] leading-relaxed border-t border-[#F5F7FB]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
