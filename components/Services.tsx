import React from 'react';
import { SectionId } from '../types';
import { Scissors, PenTool, Shovel, Droplets, Trees, Snowflake } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="h-8 w-8 text-green-600" />,
    title: "Lawn Maintenance",
    description: "Weekly mowing, edging, and fertilization to keep your grass lush, green, and healthy all season long."
  },
  {
    icon: <PenTool className="h-8 w-8 text-amber-600" />,
    title: "Landscape Design",
    description: "Custom hardscapes, planting plans, and renovations. We turn your vision into a reality."
  },
  {
    icon: <Shovel className="h-8 w-8 text-stone-600" />,
    title: "Yard Cleanup",
    description: "Spring and fall cleanups, leaf removal, and debris clearing to protect your lawn's health."
  },
  {
    icon: <Droplets className="h-8 w-8 text-blue-500" />,
    title: "Irrigation Systems",
    description: "Installation, repairs, and winterization of sprinkler systems to ensure water efficiency."
  },
  {
    icon: <Trees className="h-8 w-8 text-green-700" />,
    title: "Tree & Shrub Care",
    description: "Professional pruning, trimming, and disease management for your property's trees and hedges."
  },
  {
    icon: <Snowflake className="h-8 w-8 text-sky-400" />,
    title: "Seasonal Services",
    description: "Snow removal, ice management, and seasonal flower planting to keep your curb appeal high year-round."
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-green-600 uppercase tracking-wide">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-stone-900 sm:text-4xl">
            Complete Outdoor Care Solutions
          </p>
          <p className="mt-4 text-xl text-stone-600">
            We handle the hard work so you can enjoy your weekends. Professional, reliable, and tailored to your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-stone-100 group">
              <div className="bg-stone-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;