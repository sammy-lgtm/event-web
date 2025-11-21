import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Calendar as CalendarIcon } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-4">Book Your Experience</h1>
              <p className="text-gray-600">Select a service to view availability.</p>
           </div>

           <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-8">
              {/* Mock Scheduler UI */}
              <div className="flex flex-col md:flex-row gap-8">
                 <div className="w-full md:w-1/3 border-r border-gray-100 pr-0 md:pr-8">
                    <h3 className="font-bold text-lg mb-4">Choose Service</h3>
                    <div className="space-y-3">
                       <button className="w-full text-left p-3 rounded-lg bg-pink-50 border border-pink-100 text-pink-700 font-bold hover:bg-pink-100 transition-colors">
                          Selfie Arena Session
                       </button>
                       <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors">
                          Event Consultation
                       </button>
                       <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors">
                          Venue Viewing
                       </button>
                       <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors">
                          Rental Inquiry
                       </button>
                    </div>
                 </div>

                 <div className="w-full md:w-2/3">
                    <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300">
                       <CalendarIcon className="text-gray-400 w-12 h-12 mb-4" />
                       <h4 className="text-gray-500 font-bold mb-2">Select a Date & Time</h4>
                       <p className="text-gray-400 text-sm">Interactive calendar would load here...</p>
                    </div>
                    <div className="mt-8">
                       <button className="w-full py-4 bg-neutral-900 text-white font-bold rounded hover:bg-neutral-800 transition-colors">
                          Confirm Booking
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Booking;