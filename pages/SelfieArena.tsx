import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Camera, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SelfieArena: React.FC = () => {
  return (
    <PageTransition className="bg-neutral-900 min-h-screen text-white selection:bg-pink-500 selection:text-white">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-60" 
            alt="Selfie Arena Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-900/20 to-neutral-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
             initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
             animate={{ scale: 1, opacity: 1, rotate: 0 }}
             transition={{ type: "spring", bounce: 0.5 }}
             className="text-6xl md:text-9xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-4 neon-text drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
          >
            SELFIE ARENA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl text-gray-200 font-light tracking-wide mb-10"
          >
            Snap. Share. Slay. <span className="text-pink-500 font-bold">#KFASelfieArena</span>
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
             <Link to="/booking?service=selfie" className="inline-block px-10 py-4 bg-pink-600 hover:bg-pink-500 rounded-full font-bold text-lg uppercase tracking-wider shadow-[0_0_20px_rgba(255,20,147,0.6)] hover:shadow-[0_0_40px_rgba(255,20,147,0.9)] transition-all transform hover:scale-105">
               Book Your Session
             </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
           <motion.div 
             initial={{ x: -50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="w-full md:w-1/2"
           >
             <h2 className="text-4xl font-bold mb-6 font-display">What is the <span className="text-pink-500 neon-text">Selfie Arena?</span></h2>
             <p className="text-gray-300 text-lg leading-relaxed mb-6">
               The Selfie Arena is Lagos' first fully interactive photography studio designed for the social media generation. 
               We feature over 20 curated installations, from infinity mirror rooms to neon typography walls and floral swings.
             </p>
             <p className="text-gray-300 text-lg leading-relaxed">
               Perfect for content creators, birthday shoots, music videos, or just a fun day out with friends. Bring your phone, 
               bring your vibe, and we provide the perfect backdrop.
             </p>
           </motion.div>
           
           <motion.div 
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="w-full md:w-1/2 grid grid-cols-2 gap-4"
           >
             <div className="space-y-4 pt-8">
               <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80" className="rounded-2xl border-2 border-purple-500 shadow-[0_0_15px_#a855f7] hover:scale-105 transition-transform" alt="Neon Room"/>
               <img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&w=400&q=80" className="rounded-2xl border-2 border-pink-500 shadow-[0_0_15px_#ec4899] hover:scale-105 transition-transform" alt="Typography Wall"/>
             </div>
             <div className="space-y-4">
               <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=400&q=80" className="rounded-2xl border-2 border-yellow-500 shadow-[0_0_15px_#eab308] hover:scale-105 transition-transform" alt="Vintage Car Set"/>
               <img src="https://images.unsplash.com/photo-1514525253440-b39345208668?auto=format&fit=crop&w=400&q=80" className="rounded-2xl border-2 border-blue-500 shadow-[0_0_15px_#3b82f6] hover:scale-105 transition-transform" alt="Blue Light Room"/>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-5xl font-bold mb-16 font-display text-white"
          >
            Choose Your Vibe
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard */}
            <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="bg-neutral-800 border border-gray-700 p-8 rounded-2xl hover:border-pink-500 transition-colors group"
            >
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors shadow-lg">
                <Clock className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">The Quick Snap</h3>
              <p className="text-pink-400 font-bold text-xl mb-6">₦5,000 <span className="text-sm text-gray-500 font-normal">/ Person</span></p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex gap-2"><Zap size={16} className="text-pink-500"/> 30 Minutes Access</li>
                <li className="flex gap-2"><Zap size={16} className="text-pink-500"/> Unlimited Photos</li>
                <li className="flex gap-2"><Zap size={16} className="text-pink-500"/> Ring Light Access</li>
              </ul>
              <Link to="/booking?package=quick" className="block w-full py-3 text-center border border-gray-600 rounded-lg hover:bg-pink-600 hover:border-pink-600 font-bold transition-all text-white">Select</Link>
            </motion.div>

            {/* Premium */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-900 border-2 border-purple-600 p-8 rounded-2xl transform md:-translate-y-4 md:scale-105 shadow-[0_0_30px_rgba(147,51,234,0.3)] relative"
            >
              <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg rounded-tr-lg tracking-wider">POPULAR</span>
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(147,51,234,0.8)]">
                <Camera className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">The Full Experience</h3>
              <p className="text-purple-400 font-bold text-xl mb-6">₦8,500 <span className="text-sm text-gray-500 font-normal">/ Person</span></p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex gap-2"><Zap size={16} className="text-purple-500"/> 1 Hour Access</li>
                <li className="flex gap-2"><Zap size={16} className="text-purple-500"/> Access to ALL Rooms</li>
                <li className="flex gap-2"><Zap size={16} className="text-purple-500"/> Changing Room Access (2 Outfits)</li>
                <li className="flex gap-2"><Zap size={16} className="text-purple-500"/> Bluetooth Remote</li>
              </ul>
              <Link to="/booking?package=full" className="block w-full py-3 text-center bg-purple-600 rounded-lg text-white font-bold hover:bg-purple-700 transition-all shadow-lg">Select</Link>
            </motion.div>

            {/* Group */}
            <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="bg-neutral-800 border border-gray-700 p-8 rounded-2xl hover:border-orange-500 transition-colors group"
            >
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors shadow-lg">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Squad Goals</h3>
              <p className="text-orange-400 font-bold text-xl mb-6">₦30,000 <span className="text-sm text-gray-500 font-normal">/ Group of 5</span></p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex gap-2"><Zap size={16} className="text-orange-500"/> 1 Hour Access</li>
                <li className="flex gap-2"><Zap size={16} className="text-orange-500"/> Private Booth Reservation</li>
                <li className="flex gap-2"><Zap size={16} className="text-orange-500"/> 1 Complimentary Drink</li>
              </ul>
              <Link to="/booking?package=squad" className="block w-full py-3 text-center border border-gray-600 rounded-lg hover:bg-orange-600 hover:border-orange-600 font-bold transition-all text-white">Select</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="py-16 container mx-auto px-6">
        <div className="border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur-md shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-pink-500">House Rules</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
             <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"/> Please arrive 15 minutes before your slot.</li>
             <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"/> No food or drinks allowed inside the shooting sets.</li>
             <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"/> Respect other creators' space and time.</li>
             <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"/> Children under 12 must be accompanied by an adult.</li>
             <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"/> Have fun and tag us @KFAEvents!</li>
          </ul>
        </div>
      </section>
    </PageTransition>
  );
};

export default SelfieArena;