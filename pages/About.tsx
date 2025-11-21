import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <div className="relative h-[50vh]">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80" 
              alt="KFA Event" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-6xl text-white font-serif font-bold"
                >
                  Who We Are
                </motion.h1>
            </div>
        </div>

        <div className="container mx-auto px-6 py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
                <h2 className="text-3xl font-serif font-bold mb-6 text-neutral-900">Crafting Memories Since 2010</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    KFA Events is Lagos's leading creative event company. We were founded on the belief that every celebration deserves to be a masterpiece. What started as a small rental business has blossomed into a full-service powerhouse offering planning, design, venue management, and now, immersive entertainment at The Selfie Arena.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-neutral-50 p-10 rounded-xl border-l-4 border-gold-500 shadow-sm"
                >
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">To deliver exceptional event experiences through creativity, precision, and world-class service, ensuring every client feels like royalty.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-neutral-50 p-10 rounded-xl border-l-4 border-gold-500 shadow-sm"
                >
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">To be the undisputed leader in the West African event industry, known for innovation and unparalleled elegance.</p>
                </motion.div>
            </div>

            <div className="text-center">
               <h3 className="text-3xl font-serif font-bold mb-10">Meet The Team</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { name: "Adeola K.", role: "Creative Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
                    { name: "Chinedu O.", role: "Head of Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
                    { name: "Zainab Y.", role: "Lead Planner", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" }
                  ].map((member, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                          <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg group">
                             <img src={member.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={member.name}/>
                          </div>
                          <h4 className="font-bold text-xl text-neutral-900">{member.name}</h4>
                          <p className="text-gold-600 text-sm uppercase font-bold tracking-wider">{member.role}</p>
                      </motion.div>
                  ))}
               </div>
            </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;