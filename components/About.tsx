import React from 'react';
import { SectionId } from '../types';
import { ShieldCheck, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/assets/pexels-makrufinmuhammad-9029162.jpg"
              alt="Landscaper working"
              className="rounded-lg shadow-xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-stone-900 font-serif mb-6">
              More Than Just Cutting Grass.<br />
              We Cultivate Relationships.
            </h2>
            <p className="text-lg text-stone-600 mb-6">
              Founded in Springfield, Luis Landscaping began with a single truck and a passion for the outdoors. Today, we are the region's most trusted partner for residential and commercial property care.
            </p>
            <p className="text-stone-600 mb-8">
              We believe your outdoor space is an extension of your home—a place to relax, entertain, and make memories. That’s why we treat every lawn as if it were our own.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <ShieldCheck className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-medium text-stone-800">Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-medium text-stone-800">Reliable Scheduling & Communication</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-medium text-stone-800">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;