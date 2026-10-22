import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Send,
  ExternalLink,
  Info,
  MessageCircle,
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../constants/clinicData';

interface AppointmentBookingProps {
  initialService?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialService,
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: '',
    serviceOfInterest: initialService || 'General Dental Care',
    additionalMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [whatsappSentData, setWhatsappSentData] = useState<{
    patientName: string;
    phoneNumber: string;
    preferredDate: string;
    preferredTime: string;
    serviceOfInterest: string;
    additionalMessage: string;
    whatsappUrl: string;
  } | null>(null);

  // Time slot options reflecting listing information that the clinic opens from 1:00 PM onwards
  const timeOptions = [
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM',
  ];

  // Prevent past dates
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Form Validations
    if (!formData.patientName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.replace(/\D/g, '').length < 8) {
      setErrorMessage('Please enter a valid telephone contact number (e.g. 0339 3250240).');
      return;
    }
    if (!formData.preferredDate) {
      setErrorMessage('Please select your preferred consultation date.');
      return;
    }
    if (!formData.preferredTime) {
      setErrorMessage('Please select a preferred consultation time window.');
      return;
    }

    setIsSubmitting(true);

    // Build the formatted WhatsApp message
    const formattedMessage = [
      `🦷 *Appointment Inquiry — Mir Dental Care*`,
      ``,
      `👤 *Patient Name:* ${formData.patientName.trim()}`,
      `📞 *Phone Number:* ${formData.phoneNumber.trim()}`,
      `📅 *Preferred Date:* ${formData.preferredDate}`,
      `⏰ *Time Window:* ${formData.preferredTime}`,
      `🩺 *Service:* ${formData.serviceOfInterest}`,
      formData.additionalMessage.trim() ? `📝 *Notes:* ${formData.additionalMessage.trim()}` : null,
      ``,
      `📍 *Location:* Model Town Square Parade, Block B, Model Town, Gujranwala`,
      `_Please confirm availability for this visit._`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/923393250240?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp directly in new window/app
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Direct popup prevented, link provided in UI', err);
    }

    // Set submitted state for persistent confirmation and fallback button
    setWhatsappSentData({
      patientName: formData.patientName.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      serviceOfInterest: formData.serviceOfInterest,
      additionalMessage: formData.additionalMessage.trim(),
      whatsappUrl,
    });

    setIsSubmitting(false);
  };

  const handleReset = () => {
    setWhatsappSentData(null);
    setFormData({
      patientName: '',
      phoneNumber: '',
      preferredDate: '',
      preferredTime: '',
      serviceOfInterest: 'General Dental Care',
      additionalMessage: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/15 text-[#1b8055] text-xs font-bold tracking-wider uppercase mb-3 border border-[#25D366]/30">
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              <span>DIRECT WHATSAPP INQUIRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081426] tracking-tight mb-4">
              Request an Appointment
            </h2>
            <p className="text-[#78869A] text-base sm:text-lg leading-relaxed">
              Share your preferred appointment details. Your request will open directly in WhatsApp to chat with Mir Dental Care staff immediately.
            </p>
          </motion.div>

          {/* Form Container with 3D Depth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#F0F8FF] rounded-[28px] p-6 sm:p-10 border border-[#2878F0]/25 shadow-3d-card hover:shadow-3d-hover transition-all duration-300 relative"
          >
            <AnimatePresence mode="wait">
              {whatsappSentData ? (
                /* WhatsApp Direct Confirmation View */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-5 shadow-sm"
                  >
                    <MessageCircle className="w-9 h-9 fill-current" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#081426] mb-2">
                    Inquiry Generated for WhatsApp
                  </h3>

                  <p className="text-[#78869A] text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
                    Your appointment details for <span className="font-semibold text-[#081426]">{whatsappSentData.patientName}</span> ({whatsappSentData.serviceOfInterest} on {whatsappSentData.preferredDate} at {whatsappSentData.preferredTime}) are ready to send directly to Mir Dental Care on WhatsApp.
                  </p>

                  {/* Immediate Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
                    <motion.a
                      href={whatsappSentData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base py-4 px-8 rounded-full shadow-lg shadow-[#25D366]/35 transition-all"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Open in WhatsApp Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>

                    <motion.a
                      href={CLINIC_INFO.phoneLink}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#081426] bg-white hover:bg-slate-50 border border-[#DFE7F1] py-4 px-6 rounded-full transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#2878F0]" />
                      <span>Call {CLINIC_INFO.phoneDisplay}</span>
                    </motion.a>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-[#DFE7F1] text-xs text-[#78869A] mb-6 max-w-md mx-auto text-left flex items-start gap-3 shadow-2xs">
                    <Info className="w-4 h-4 text-[#2878F0] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-[#081426]">Clinic Confirmation:</strong> The clinic opens at 1:00 PM. Our staff will respond directly via WhatsApp or phone to confirm your slot.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-[#78869A] hover:text-[#2878F0] hover:underline cursor-pointer"
                  >
                    Start a New Inquiry
                  </button>
                </motion.div>
              ) : (
                /* Inquiry Form sending directly to WhatsApp */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Field 1: Patient Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10233D] mb-2">
                        Patient Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#78869A]">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.patientName}
                          onChange={(e) =>
                            setFormData({ ...formData, patientName: e.target.value })
                          }
                          placeholder="e.g. Tariq Mehmood"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DFE7F1] focus:border-[#2878F0] focus:ring-4 focus:ring-[#2878F0]/15 text-sm text-[#081426] placeholder-[#78869A] transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Field 2: Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10233D] mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#78869A]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, phoneNumber: e.target.value })
                          }
                          placeholder="e.g. 0339 3250240"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DFE7F1] focus:border-[#2878F0] focus:ring-4 focus:ring-[#2878F0]/15 text-sm text-[#081426] placeholder-[#78869A] transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Field 3: Preferred Date */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10233D] mb-2">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#78869A]">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          required
                          min={todayStr}
                          value={formData.preferredDate}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDate: e.target.value })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DFE7F1] focus:border-[#2878F0] focus:ring-4 focus:ring-[#2878F0]/15 text-sm text-[#081426] transition-all outline-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Field 4: Preferred Time Window */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10233D] mb-2">
                        Preferred Time Window <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#78869A]">
                          <Clock className="w-4 h-4" />
                        </div>
                        <select
                          required
                          value={formData.preferredTime}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredTime: e.target.value })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DFE7F1] focus:border-[#2878F0] focus:ring-4 focus:ring-[#2878F0]/15 text-sm text-[#081426] transition-all outline-none cursor-pointer"
                        >
                          <option value="">Select preferred time window</option>
                          {timeOptions.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Field 5: Service of Interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10233D] mb-2">
                      Service of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.serviceOfInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceOfInterest: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFE7F1] focus:border-[#2878F0] focus:ring-4 focus:ring-[#2878F0]/15 text-sm text-[#081426] transition-all outline-none cursor-pointer"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field 6: Additional Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10233D] mb-2">
                      Additional Notes or Inquiries (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-[#78869A]">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={3}
                        value={formData.additionalMessage}
                        onChange={(e) =>
                          setFormData({ ...formData, additionalMessage: e.target.value })
                        }
                        placeholder="Share any specific dental concerns or questions..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DFE7F1] focus:border-[#2878F0] focus:ring-4 focus:ring-[#2878F0]/15 text-sm text-[#081426] placeholder-[#78869A] transition-all outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Policy Notice */}
                  <div className="text-xs text-[#78869A] leading-relaxed flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#DFE7F1]">
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5 fill-[#25D366]" />
                    <span>
                      Clicking below will format your inquiry and open WhatsApp (0339 3250240) to message Mir Dental Care directly.
                    </span>
                  </div>

                  {/* Direct WhatsApp Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    className="w-full py-4 bg-gradient-to-r from-[#25D366] to-[#1da851] hover:from-[#29e06d] hover:to-[#22A06B] text-white font-bold text-base rounded-full shadow-xl shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 border border-white/20"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Send Appointment Inquiry via WhatsApp</span>
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
