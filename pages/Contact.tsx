import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { MapPin, Phone, Mail, Instagram, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-4">Get in Touch</h1>
              <p className="text-gray-600">We'd love to hear from you. Let's create something beautiful.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Info */}
              <div>
                 <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-gold-600" />
                       </div>
                       <div>
                          <h4 className="font-bold text-neutral-900">Visit Us</h4>
                          <p className="text-gray-600">123 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="text-gold-600" />
                       </div>
                       <div>
                          <h4 className="font-bold text-neutral-900">Call Us</h4>
                          <p className="text-gray-600">+234 800 KFA EVENTS</p>
                          <p className="text-gray-600">+234 801 123 4567</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="text-gold-600" />
                       </div>
                       <div>
                          <h4 className="font-bold text-neutral-900">Email</h4>
                          <p className="text-gray-600">hello@kfaevents.com</p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded hover:bg-neutral-700 transition-colors">
                           <Instagram size={20}/> @KFAEvents
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                           <MessageSquare size={20}/> WhatsApp
                        </button>
                    </div>
                 </div>
              </div>

              {/* Form */}
              <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-gray-100">
                 <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                 <form className="space-y-6">
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                       <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" placeholder="Your Name" />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                       <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" placeholder="Your Email" />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Service Interest</label>
                       <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500">
                          <option>Event Planning</option>
                          <option>Selfie Arena</option>
                          <option>Rentals</option>
                          <option>Venue</option>
                          <option>Other</option>
                       </select>
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                       <textarea rows={4} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" placeholder="Tell us about your event..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-gold-500 text-white font-bold rounded hover:bg-gold-600 transition-colors">
                       Send Message
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;