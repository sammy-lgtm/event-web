import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1920&auto=format&fit=crop" 
            alt="KFA Event Luxury Hall" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg"
          >
            Where Creativity Meets <span className="text-gold-400 italic">Celebration</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl font-light mb-10 text-gray-200 max-w-3xl mx-auto"
          >
            Premium event planning, bespoke décor, luxury rentals & Lagos' vibrant Selfie Arena.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <Link to="/booking" className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-full transition-all uppercase tracking-wide text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transform hover:-translate-y-1">
              Plan Your Event
            </Link>
            <Link to="/selfie-arena" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold rounded-full transition-all uppercase tracking-wide text-sm backdrop-blur-sm transform hover:-translate-y-1">
              Explore Selfie Arena
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg bg-white h-96"
              >
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-white opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      {service.icon && <service.icon className="text-gold-400" size={28} />}
                      <h3 className="text-2xl font-serif font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 line-clamp-2">{service.description}</p>
                    <Link to={service.path} className="inline-flex items-center gap-2 text-gold-400 font-bold text-sm uppercase tracking-wider group-hover:text-gold-300 hover:underline">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
              alt="KFA Team at work" 
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-6">Why Choose KFA?</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              We don't just plan events; we curate experiences. With over a decade of industry excellence in Lagos, 
              KFA Events combines meticulous logistical planning with high-end creative design to deliver weddings, birthdays, and corporate events that leave a lasting impression.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-gold-500 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Experienced Professional Team</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-gold-500 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Bespoke Design & Concepts</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-gold-500 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Premium Inventory & Rentals</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-gold-500 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Seamless Execution</span>
              </li>
            </ul>
            <div className="mt-10">
              <Link to="/about" className="inline-block border-b-2 border-gold-500 text-neutral-900 font-bold hover:text-gold-600 transition-colors pb-1">
                More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selfie Arena Strip */}
      <section className="py-20 bg-black relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 animate-pulse-slow"
          alt="Party Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-black/80 z-0" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ type: "spring", bounce: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-pink-500 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6">New Experience</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 mb-6 drop-shadow-lg neon-text">
              THE SELFIE ARENA
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-xl font-light">
              Step into a world of color, light, and creativity. 20+ interactive sets designed for your perfect shot.
            </p>
            <Link to="/selfie-arena" className="inline-flex items-center gap-2 px-10 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full shadow-[0_0_20px_rgba(255,20,147,0.5)] hover:shadow-[0_0_30px_rgba(255,20,147,0.8)] transition-all transform hover:scale-105">
              Book A Session <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Slider / Featured */}
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto px-6">
           <div className="flex justify-between items-end mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-serif font-bold text-neutral-900">Recent Masterpieces</h2>
              <p className="text-gray-600 mt-2">Highlights from our latest weddings, parties, and corporate events.</p>
            </motion.div>
            <Link to="/portfolio" className="hidden md:block text-gold-600 font-bold hover:underline">View All Projects</Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {PORTFOLIO_ITEMS.slice(0, 4).map((item, index) => (
               <motion.div 
                 key={item.id} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
                 viewport={{ once: true }}
               >
                 <Link to="/portfolio" className="block group relative overflow-hidden rounded-lg aspect-[3/4] shadow-md">
                   <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-gold-400 text-xs uppercase tracking-widest font-bold mb-2">{item.category}</p>
                        <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                      </div>
                   </div>
                 </Link>
               </motion.div>
             ))}
           </div>
           <div className="mt-8 text-center md:hidden">
              <Link to="/portfolio" className="text-gold-600 font-bold hover:underline">View All Projects</Link>
           </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
             <Star className="text-gold-500 w-12 h-12 mx-auto mb-6" fill="currentColor" />
             <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-16">Client Love</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-neutral-50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                 <div className="mb-6 text-gold-500 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{t.content}"</p>
                 <div className="flex items-center justify-center gap-4">
                   <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold-200" />
                   <div className="text-left">
                     <p className="font-bold text-neutral-900">{t.name}</p>
                     <p className="text-xs text-gold-600 uppercase font-bold">{t.role}</p>
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;