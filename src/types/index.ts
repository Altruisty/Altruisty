export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
}

export interface CollegeSupportCategory {
  number: string;
  title: string;
  description: string;
}

export interface InternshipDomain {
  id: string;
  title: string;
  category: 'Emerging Tech' | 'Software Engineering' | 'Design & Business' | 'Specialized';
  popular?: boolean;
}

export interface InternshipBenefit {
  title: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  yearOfStudy: string;
  domains: string[];
  mode: string;
  consent: boolean;
}

