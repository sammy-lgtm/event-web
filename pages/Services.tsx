import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-neutral-900 mb-6">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive event solutions tailored to your unique style and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon && <service.icon className="text-gold-500" size={28} />}
                    <h3 className="text-2xl font-serif font-bold text-neutral-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link 
                    to={service.path} 
                    className="inline-flex items-center justify-center w-full py-3 border-2 border-neutral-900 text-neutral-900 font-bold uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors rounded"
                  >
                    Details <ArrowRight size={16} className="ml-2"/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;