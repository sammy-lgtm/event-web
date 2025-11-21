import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  image: string;
  path: string;
}

export interface Package {
  name: string;
  price?: string;
  features: string[];
  recommended?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Birthday' | 'Corporate' | 'Floral' | 'Rentals' | 'Selfie Arena';
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Selfie Arena' | 'Rentals' | 'Payments';
}