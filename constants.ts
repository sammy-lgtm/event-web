import { Service, PortfolioItem, Testimonial, FaqItem } from './types';
import { Calendar, Camera, Armchair, Flower2, Building2, PartyPopper } from 'lucide-react';

export const APP_NAME = "KFA Events & The Selfie Arena";

export const SERVICES: Service[] = [
  {
    id: 'planning',
    title: 'Event Planning',
    description: 'Full-service planning for weddings, corporate galas, and social celebrations.',
    icon: Calendar,
    image: 'https://source.unsplash.com/800x600/?event,planner,wedding',
    path: '/services/planning'
  },
  {
    id: 'rentals',
    title: 'Event Rentals',
    description: 'Premium furniture, tableware, and marquee rentals for any capacity.',
    icon: Armchair,
    image: 'https://source.unsplash.com/800x600/?event,rentals,furniture',
    path: '/services/rentals'
  },
  {
    id: 'design',
    title: 'Event Design & Décor',
    description: 'Concept-to-execution styling that transforms spaces into experiences.',
    icon: PartyPopper,
    image: 'https://source.unsplash.com/800x600/?event,design,decor',
    path: '/services/design'
  },
  {
    id: 'floral',
    title: 'Floral Design',
    description: 'Breathtaking floral arrangements using fresh, premium blooms.',
    icon: Flower2,
    image: 'https://source.unsplash.com/800x600/?floral,flowers,arrangement',
    path: '/services/floral'
  },
  {
    id: 'venue',
    title: 'The Venue',
    description: 'A versatile, luxury event space in the heart of Lagos.',
    icon: Building2,
    image: 'https://source.unsplash.com/800x600/?venue,hall,event-space',
    path: '/venue'
  },
  {
    id: 'selfie',
    title: 'The Selfie Arena',
    description: 'Nigeria’s premier interactive photo experience studio.',
    icon: Camera,
    image: 'https://source.unsplash.com/800x600/?photobooth,selfie,photo-booth',
    path: '/selfie-arena'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'Royal Gold Wedding', category: 'Wedding', imageUrl: 'https://source.unsplash.com/600x400/?wedding,gold,ceremony' },
  { id: '2', title: 'Neon 21st Birthday', category: 'Birthday', imageUrl: 'https://source.unsplash.com/600x400/?birthday,party,neon' },
  { id: '3', title: 'Tech Conference 2024', category: 'Corporate', imageUrl: 'https://source.unsplash.com/800x600/?conference,corporate,stage' },
  { id: '4', title: 'Luxury Floral Arch', category: 'Floral', imageUrl: 'https://source.unsplash.com/600x400/?floral,arch,flowers' },
  { id: '5', title: 'Velvet Lounge Setup', category: 'Rentals', imageUrl: 'https://source.unsplash.com/800x600/?lounge,event,furniture' },
  { id: '6', title: 'Pink Room Experience', category: 'Selfie Arena', imageUrl: 'https://source.unsplash.com/600x400/?photobooth,pink,room' },
  { id: '7', title: 'Garden Soiree', category: 'Wedding', imageUrl: 'https://source.unsplash.com/800x600/?garden,wedding,soiree' },
  { id: '8', title: 'Infinity Room', category: 'Selfie Arena', imageUrl: 'https://source.unsplash.com/600x400/?infinity-room,selfie,art' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Amaka O.', role: 'Bride', content: 'KFA transformed my vision into reality. The floral arrangements were out of this world!', rating: 5, image: 'https://source.unsplash.com/200x200/?portrait,woman,smile' },
  { id: '2', name: 'Tunde B.', role: 'Corporate Client', content: 'Professional, timely, and the rental quality is unmatched in Lagos.', rating: 5, image: 'https://source.unsplash.com/200x200/?portrait,man,smile' },
  { id: '3', name: 'Zainab A.', role: 'Birthday Girl', content: 'The Selfie Arena was the highlight of my birthday. My guests couldn\'t stop taking photos!', rating: 5, image: 'https://source.unsplash.com/200x200/?portrait,woman,party' },
];

export const FAQS: FaqItem[] = [
  { question: "How far in advance should I book KFA Events?", answer: "For full event planning, we recommend 6-12 months. For rentals, 2-4 weeks is usually sufficient.", category: 'General' },
  { question: "Can I bring my own photographer to The Selfie Arena?", answer: "Absolutely! Or you can book one of our in-house professionals.", category: 'Selfie Arena' },
  { question: "Do you offer delivery for rentals?", answer: "Yes, we offer delivery and pickup services throughout Lagos and surrounding areas.", category: 'Rentals' },
  { question: "What is the capacity of your venue?", answer: "Our main hall seats up to 500 guests banquet style, while the marquee can accommodate up to 1000.", category: 'General' },
];