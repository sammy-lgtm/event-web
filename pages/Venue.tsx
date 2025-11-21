import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Users, Wifi, Music, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Venue: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-20">
         <div className="relative h-[60vh]">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80" 
              alt="KFA Venue Hall" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
               <motion.h1 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 className="text-5xl md:text-7xl font-serif font-bold mb-4"
               >
                 The Venue
               </motion.h1>
               <motion.p 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-xl font-light"
               >
                 Elegance. Capacity. Convenience.
               </motion.p>
            </div>
         </div>

         <div className="container mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
               <motion.div 
                 initial={{ x: -20, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-6">The Perfect Setting</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                     Located in the heart of Lagos, the KFA Event Center is a premier destination for weddings, corporate conferences, and grand celebrations. Our fully air-conditioned marquee and banquet hall provide a blank canvas that can be transformed to suit any theme.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                     With ample parking, top-tier security, and modern amenities, we ensure your guests are comfortable from arrival to departure.
                  </p>

                  <h3 className="text-2xl font-bold mb-6">Amenities</h3>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                     <div className="flex items-center gap-3 text-gray-700 bg-neutral-50 p-4 rounded">
                        <Users className="text-gold-500"/> <span className="font-medium">500-1000 Guests</span>
                     </div>
                     <div className="flex items-center gap-3 text-gray-700 bg-neutral-50 p-4 rounded">
                        <Car className="text-gold-500"/> <span className="font-medium">Secure Parking (200+)</span>
                     </div>
                     <div className="flex items-center gap-3 text-gray-700 bg-neutral-50 p-4 rounded">
                        <Wifi className="text-gold-500"/> <span className="font-medium">High-Speed WiFi</span>
                     </div>
                     <div className="flex items-center gap-3 text-gray-700 bg-neutral-50 p-4 rounded">
                        <Music className="text-gold-500"/> <span className="font-medium">Sound System</span>
                     </div>
                  </div>
                  
                  <Link to="/booking?service=venue" className="inline-block px-8 py-4 bg-neutral-900 text-white font-bold rounded hover:bg-neutral-800 transition-colors shadow-lg">
                     Check Availability
                  </Link>
               </motion.div>

               <motion.div 
                 className="grid grid-cols-2 gap-4"
                 initial={{ x: 20, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
               >
                  <img src="https://images.unsplash.com/photo-1505373877733-3e648b49bd9c?auto=format&fit=crop&w=600&q=80" className="rounded-lg shadow-lg w-full h-64 object-cover" alt="Interior Banquet Setup"/>
                  <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80" className="rounded-lg shadow-lg mt-12 w-full h-64 object-cover" alt="Party Atmosphere"/>
               </motion.div>
            </div>
         </div>
      </div>
    </PageTransition>
  );
};

export default Venue;