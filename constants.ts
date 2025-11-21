import { Service, PortfolioItem, Testimonial, FaqItem } from './types';
import { Calendar, Camera, Armchair, Flower2, Building2, PartyPopper } from 'lucide-react';

export const APP_NAME = "KFA Events & The Selfie Arena";

export const SERVICES: Service[] = [
  {
    id: 'planning',
    title: 'Event Planning',
    description: 'Full-service planning for weddings, corporate galas, and social celebrations.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    path: '/services/planning'
  },
  {
    id: 'rentals',
    title: 'Event Rentals',
    description: 'Premium furniture, tableware, and marquee rentals for any capacity.',
    icon: Armchair,
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=800&q=80',
    path: '/services/rentals'
  },
  {
    id: 'design',
    title: 'Event Design & Décor',
    description: 'Concept-to-execution styling that transforms spaces into experiences.',
    icon: PartyPopper,
    image: 'https://images.unsplash.com/photo-1519225448512-556add052d65?auto=format&fit=crop&w=800&q=80',
    path: '/services/design'
  },
  {
    id: 'floral',
    title: 'Floral Design',
    description: 'Breathtaking floral arrangements using fresh, premium blooms.',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=800&q=80',
    path: '/services/floral'
  },
  {
    id: 'venue',
    title: 'The Venue',
    description: 'A versatile, luxury event space in the heart of Lagos.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    path: '/venue'
  },
  {
    id: 'selfie',
    title: 'The Selfie Arena',
    description: 'Nigeria’s premier interactive photo experience studio.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80',
    path: '/selfie-arena'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'Royal Gold Wedding', category: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80' },
  { id: '2', title: 'Neon 21st Birthday', category: 'Birthday', imageUrl: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af57?auto=format&fit=crop&w=600&q=80' },
  { id: '3', title: 'Tech Conference 2024', category: 'Corporate', imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80' },
  { id: '4', title: 'Luxury Floral Arch', category: 'Floral', imageUrl: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80' },
  { id: '5', title: 'Velvet Lounge Setup', category: 'Rentals', imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80' },
  { id: '6', title: 'Pink Room Experience', category: 'Selfie Arena', imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80' },
  { id: '7', title: 'Garden Soiree', category: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&w=800&q=80' },
  { id: '8', title: 'Infinity Room', category: 'Selfie Arena', imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Amaka O.', role: 'Bride', content: 'KFA transformed my vision into reality. The floral arrangements were out of this world!', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { id: '2', name: 'Tunde B.', role: 'Corporate Client', content: 'Professional, timely, and the rental quality is unmatched in Lagos.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
  { id: '3', name: 'Zainab A.', role: 'Birthday Girl', content: 'The Selfie Arena was the highlight of my birthday. My guests couldn\'t stop taking photos!', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }
];

export const FAQS: FaqItem[] = [
  { question: "How far in advance should I book KFA Events?", answer: "For full event planning, we recommend 6-12 months. For rentals, 2-4 weeks is usually sufficient.", category: 'General' },
  { question: "Can I bring my own photographer to The Selfie Arena?", answer: "Absolutely! Or you can book one of our in-house professionals.", category: 'Selfie Arena' },
  { question: "Do you offer delivery for rentals?", answer: "Yes, we offer delivery and pickup services throughout Lagos and surrounding areas.", category: 'Rentals' },
  { question: "What is the capacity of your venue?", answer: "Our main hall seats up to 500 guests banquet style, while the marquee can accommodate up to 1000.", category: 'General' },
];