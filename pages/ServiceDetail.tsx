import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service && id !== 'venue' && id !== 'selfie') {
    // If not found in standard array and not a special route
    return <Navigate to="/services" />;
  }
  
  // Mock content based on ID with specific Unsplash images
  const content = {
    planning: {
        title: "Event Planning",
        hero: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1920&q=80",
        details: "From intimate gatherings to grand galas, our planning team handles every detail.",
        features: ["Vendor Management", "Timeline Creation", "Budget Management", "On-site Coordination"]
    },
    rentals: {
        title: "Luxury Rentals",
        hero: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1920&q=80",
        details: "Elevate your event with our exclusive collection of furniture and tableware.",
        features: ["Chiavari Chairs", "Dior Chairs", "Luxury Tables", "Centerpieces", "Marquee Tents"]
    },
    design: {
        title: "Event Design",
        hero: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1920&q=80",
        details: "We create immersive environments that tell your story through decor.",
        features: ["Mood Boards", "Custom Backdrops", "Lighting Design", "Space Planning"]
    },
    floral: {
        title: "Floral Design",
        hero: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=1920&q=80",
        details: "Fresh, premium blooms arranged to perfection.",
        features: ["Bridal Bouquets", "Table Centerpieces", "Floral Installations", "Flower Walls"]
    }
  };

  // @ts-ignore
  const data = content[id || 'planning'] || content.planning;

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="relative h-96 md:h-[500px]">
            <img src={data.hero} alt={data.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl text-white font-serif font-bold drop-shadow-lg"
                >
                  {data.title}
                </motion.h1>
            </div>
        </div>

        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-2/3"
            >
                <h2 className="text-3xl font-bold mb-6 text-neutral-900">Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {data.details} At KFA Events, we believe that every detail matters. We work closely with you to understand your vision and execute it with precision and flair. Our team is dedicated to providing a stress-free experience, allowing you to be a guest at your own event.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                   Whether you are looking for a complete transformation of a venue or simple elegant touches, our inventory and expertise are at your disposal.
                </p>

                <h3 className="text-2xl font-bold mb-6 text-neutral-900">What We Offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.features.map((feat: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-white hover:shadow-md transition-all">
                            <Check className="text-gold-500" />
                            <span className="font-medium text-neutral-700">{feat}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full md:w-1/3"
            >
                <div className="bg-neutral-900 text-white p-8 rounded-xl shadow-xl sticky top-24">
                    <h3 className="text-2xl font-serif font-bold mb-4">Ready to Start?</h3>
                    <p className="text-gray-400 mb-6">Contact us today to discuss your requirements for {data.title}.</p>
                    <Link to="/booking" className="block w-full py-3 bg-gold-500 hover:bg-gold-600 text-center rounded font-bold transition-colors mb-4">
                        Request Quote
                    </Link>
                    <Link to="/contact" className="block w-full py-3 border border-white hover:bg-white hover:text-black text-center rounded font-bold transition-colors">
                        Contact Team
                    </Link>
                </div>
            </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ServiceDetail;