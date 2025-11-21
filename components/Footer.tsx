import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t-4 border-gold-500">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-gold-500 mb-4">KFA Events</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Crafting unforgettable memories through bespoke event planning, exquisite floral design, and Nigeria's premier Selfie Arena.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-200">Services</h4>
          <ul className="space-y-3">
            <li><Link to="/services/planning" className="text-gray-400 hover:text-gold-500 transition-colors">Event Planning</Link></li>
            <li><Link to="/services/design" className="text-gray-400 hover:text-gold-500 transition-colors">Event Design</Link></li>
            <li><Link to="/services/rentals" className="text-gray-400 hover:text-gold-500 transition-colors">Rentals</Link></li>
            <li><Link to="/services/floral" className="text-gray-400 hover:text-gold-500 transition-colors">Floral Décor</Link></li>
            <li><Link to="/selfie-arena" className="text-pink-400 hover:text-pink-300 transition-colors font-semibold flex items-center gap-2"><Camera size={16}/> Selfie Arena</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-200">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={20} />
              <span>123 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone className="text-gold-500 flex-shrink-0" size={20} />
              <span>+234 800 KFA EVENTS</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Mail className="text-gold-500 flex-shrink-0" size={20} />
              <span>hello@kfaevents.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-200">Experience the Fun</h4>
          <p className="text-gray-400 mb-4">Ready to capture the moment?</p>
          <Link to="/booking" className="inline-block w-full text-center bg-gradient-to-r from-pink-600 to-purple-600 py-3 rounded text-white font-bold hover:opacity-90 transition-opacity">
            Book Selfie Arena
          </Link>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
             <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} KFA Events.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;