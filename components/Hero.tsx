import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Button from './Button';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.jpg"
          alt="Beautiful landscaped garden by Luis Landscaping"
          className="w-full h-full object-cover hidden md:block"
        />
        <img
          src="/assets/pexels-jpgata-10831661.jpg"
          alt="Beautiful landscaped garden by Luis Landscaping"
          className="w-full h-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 text-green-300 font-semibold tracking-wider uppercase text-sm mb-4 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
            <Star className="h-4 w-4 fill-current" />
            <span>#1 Rated in Springfield</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Professional <span className="text-green-400">Landscaping</span> <br />
            You Can Trust.
          </h1>

          <p className="text-lg md:text-xl text-stone-200 mb-8 leading-relaxed max-w-lg">
            From weekly lawn maintenance to complete backyard transformations.
            We bring expert care and reliability to your outdoor space.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto group">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="white"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-6 text-white/80 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-800 bg-stone-600 overflow-hidden">
                  <img src={`https://picsum.photos/50/50?random=${i}`} alt="Client" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-stone-800 bg-green-700 flex items-center justify-center text-xs font-bold text-white">
                500+
              </div>
            </div>
            <p>Happy homeowners in your area.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;