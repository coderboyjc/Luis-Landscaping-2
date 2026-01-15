import React from 'react';
import { SectionId } from '../types';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Springfield",
    text: "Luis Landscaping completely transformed our backyard. The AI suggestion tool actually gave us the initial idea for the rock garden, and the team executed it perfectly.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Ross",
    location: "Oakville",
    text: "We hire them for weekly maintenance and seasonal cleanups. Reliable, punctual, and they always leave the property looking immaculate.",
    rating: 5
  },
  {
    id: 3,
    name: "David & Emily Chen",
    location: "Riverview",
    text: "The hardscaping crew was phenomenal. They installed our new patio in record time, and the craftsmanship is top-notch. Highly recommended!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id={SectionId.TESTIMONIALS} className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 font-serif mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-stone-50 rounded-2xl p-8 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-green-200" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-stone-300'}`} 
                  />
                ))}
              </div>

              <p className="text-stone-600 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-stone-900">{review.name}</p>
                  <p className="text-xs text-stone-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;