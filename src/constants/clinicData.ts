import { ServiceItem, FaqItem, ProcessStep } from '../types';

export const CLINIC_INFO = {
  name: 'Mir Dental Care',
  category: 'Dental Clinic',
  phoneDisplay: '0339 3250240',
  phoneLink: 'tel:03393250240',
  whatsappNumber: '923393250240',
  whatsappUrl: 'https://wa.me/923393250240?text=Hello%20Mir%20Dental%20Care%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment.',
  address: 'Model Town Square Parade, Block B, Model Town, Gujranwala, Pakistan.',
  city: 'Gujranwala',
  country: 'Pakistan',
  googleRating: 5.0,
  googleReviewsCount: 200,
  openingInfo: 'The supplied business listing indicates that the clinic opens at 1:00 PM. Please contact the clinic to confirm current opening hours and schedule.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mir+Dental+Care+Model+Town+Square+Parade+Block+B+Model+Town+Gujranwala',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'general-dental-care',
    title: 'General Dental Care',
    description: 'General dental care focuses on maintaining oral health and addressing common dental concerns.',
    iconName: 'Stethoscope',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dental-checkups',
    title: 'Dental Checkups',
    description: 'Routine dental examinations can help identify oral health concerns and determine appropriate next steps.',
    iconName: 'ClipboardCheck',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional dental cleaning may help remove plaque and tartar that regular brushing cannot fully address.',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Cosmetic dental procedures focus on the appearance of teeth and smiles. Ask the clinic about available options.',
    iconName: 'Smile',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tooth-restoration',
    title: 'Tooth Restoration',
    description: 'Restorative dentistry addresses damaged or missing tooth structure. Contact the clinic to discuss appropriate care.',
    iconName: 'ShieldAlert',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'preventive-dental-care',
    title: 'Preventive Dental Care',
    description: 'Preventive dental care supports oral hygiene and helps reduce the risk of common dental problems.',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Get in Touch',
    description: 'Contact Mir Dental Care by telephone or use the appointment inquiry form to ask about a visit.',
    imageUrl: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '02',
    title: 'Confirm Availability',
    description: 'Contact the clinic to confirm its current opening hours, available appointment times, and any necessary arrangements.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '03',
    title: 'Discuss Your Needs',
    description: 'Ask the clinic about the dental care you are interested in and the next steps for arranging a visit.',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '04',
    title: 'Follow the Clinic’s Guidance',
    description: 'Follow the instructions provided by the clinic regarding your appointment and any recommended care.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where Is Mir Dental Care Located?',
    answer: 'Mir Dental Care is listed at Model Town Square Parade, Block B, Model Town, Gujranwala, Pakistan.',
  },
  {
    id: 'faq-2',
    question: 'How Can I Contact the Clinic?',
    answer: 'You can call Mir Dental Care at 0339 3250240. The website also provides a WhatsApp inquiry option.',
  },
  {
    id: 'faq-3',
    question: "What Is the Clinic's Google Rating?",
    answer: 'The supplied Google listing shows a rating of 5.0 out of 5, based on 200 reviews.',
  },
  {
    id: 'faq-4',
    question: 'What Time Does the Clinic Open?',
    answer: 'The supplied listing indicates that the clinic opens at 1:00 PM. Please contact the clinic to confirm the current opening hours and availability for your intended visit.',
  },
  {
    id: 'faq-5',
    question: 'How Can I Request an Appointment?',
    answer: 'Use the appointment inquiry form on this website or call the clinic directly. Your requested appointment must be confirmed by the clinic.',
  },
  {
    id: 'faq-6',
    question: 'Which Dental Treatments Are Available?',
    answer: 'Contact Mir Dental Care directly to confirm which dental treatments are currently available and whether they are appropriate for your needs.',
  },
  {
    id: 'faq-7',
    question: 'How Can I Find Directions to the Clinic?',
    answer: 'Use the Get Directions button to open Google Maps and search for Mir Dental Care at its listed Model Town address.',
  },
];
