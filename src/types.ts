export interface AppointmentInquiry {
  id: string;
  patientName: string;
  phoneNumber: string;
  preferredDate: string;
  preferredTime: string;
  serviceOfInterest: string;
  additionalMessage?: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  imageUrl: string;
}
