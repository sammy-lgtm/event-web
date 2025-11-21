import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isSelfieArena = location.pathname === '/selfie-arena';

  // Navigation Links
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Venue', path: '/venue' },
    { name: 'Selfie Arena', path: '/selfie-arena', highlight: true },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Dynamic Styles based on Page type (Premium vs Neon)
  const navBgClass = isSelfieArena
    ? (scrolled ? 'bg-black/90 backdrop-blur-md border-b border-pink-500' : 'bg-transparent')
    : (scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent');

  const textColorClass = isSelfieArena
    ? 'text-white'
    : (scrolled ? 'text-neutral-900' : 'text-neutral-900 md:text-white'); // Assuming hero images on standard pages need white text initially

  // Fix: Force black text on inner pages if they don't have dark hero overlays, 
  // but simpler to just use white on transparent and dark on scrolled. 
  // For safety in this prompt, let's stick to a solid visible navbar on scroll.
  
  const getLinkClass = (linkPath: string, isHighlight: boolean) => {
    if (isSelfieArena) {
      if (isHighlight) return "text-neon-pink font-bold neon-text";
      return "text-gray-200 hover:text-neon-pink transition-colors";
    }
    // Standard Theme
    if (isHighlight) return "text-pink-600 font-bold";
    // For standard theme, handle contrast issues on Hero vs Scrolled.
    // To be safe, let's make the navbar standard white background on all pages except top of home.
    return scrolled ? "text-neutral-800 hover:text-gold-600" : "text-neutral-800 hover:text-gold-600 md:text-white"; 
  };
  
  // Simplified logic: Always white bg on scroll, transparent on top.
  // Exception: Selfie Arena always dark.
  const containerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass}`;
  const logoTextClass = isSelfieArena ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 neon-text" : (scrolled ? "text-gold-600" : "text-white");
  const burgerColor = isSelfieArena ? "text-white" : (scrolled ? "text-black" : "text-white");

  // Specific override for non-home pages to ensure visibility if hero isn't dark enough
  const isHome = location.pathname === '/';
  const forceDarkText = !isHome && !isSelfieArena && !scrolled; 

  return (
    <nav className={containerClass}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-widest z-50 relative">
           <span className={isSelfieArena ? logoTextClass : (scrolled || !isHome ? "text-gold-600" : "text-white")}>
             KFA
           </span>
           <span className={`text-sm ml-2 font-sans tracking-normal ${isSelfieArena ? "text-white" : (scrolled || !isHome ? "text-neutral-600" : "text-gray-200")}`}>
             Events
           </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                isSelfieArena 
                  ? (link.highlight ? "text-pink-500 drop-shadow-[0_0_5px_rgba(255,0,255,0.8)]" : "text-white hover:text-pink-400")
                  : (link.highlight ? "text-pink-600" : (scrolled || !isHome ? "text-neutral-800 hover:text-gold-600" : "text-white hover:text-gold-400"))
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className={`px-5 py-2 rounded-full font-bold text-xs uppercase transition-all transform hover:scale-105 ${
            isSelfieArena 
              ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-[0_0_15px_rgba(189,0,255,0.5)]" 
              : "bg-gold-500 text-white hover:bg-gold-600 shadow-md"
          }`}>
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden z-50 focus:outline-none ${scrolled || !isHome ? "text-black" : "text-white"} ${isSelfieArena ? "text-white" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color={isSelfieArena ? "white" : (scrolled ? "black" : "black")} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 ${isSelfieArena ? "bg-black" : "bg-white"}`}
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-2xl font-serif font-bold ${isSelfieArena ? "text-white" : "text-neutral-900"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setIsOpen(false)} className={`px-8 py-3 rounded-full text-white font-bold text-lg ${isSelfieArena ? "bg-pink-600" : "bg-gold-500"}`}>
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;