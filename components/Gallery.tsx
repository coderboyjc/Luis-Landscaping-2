import React from 'react';
import { SectionId } from '../types';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Modern Stone Patio",
    category: "Hardscape",
    image: "/assets/pexels-artbovich-8082319.jpg"
  },
  {
    id: 2,
    title: "Zen Garden Oasis",
    category: "Landscape Design",
    image: "/assets/pexels-artbovich-8134747.jpg"
  },
  {
    id: 3,
    title: "Commercial Frontage",
    category: "Maintenance",
    image: "/assets/pexels-pixabay-280222.jpg"
  },
  {
    id: 4,
    title: "Luxury Pool Deck",
    category: "Hardscape",
    image: "/assets/pexels-artbovich-7174103.jpg"
  },
  {
    id: 5,
    title: "Native Flower Beds",
    category: "Planting",
    image: "/assets/pexels-robertkso-12243105.jpg"
  },
  {
    id: 6,
    title: "Evening Landscape Lighting",
    category: "Lighting",
    image: "/assets/shaun-donnelly-3JYC5XK-LoM-unsplash.jpg"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id={SectionId.GALLERY} className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-green-600 uppercase tracking-wide">Our Portfolio</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-stone-900 sm:text-4xl font-serif">
            Recent Projects
          </p>
          <p className="mt-4 text-xl text-stone-600">
            See how we've transformed outdoor spaces across the region. From intimate gardens to expansive estates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-stone-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <span className="text-green-400 text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold font-serif mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  <div className="inline-flex items-center text-white border border-white/30 rounded-full px-4 py-2 text-sm hover:bg-white/10 transition-colors">
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-green-700 font-semibold hover:text-green-800 flex items-center justify-center mx-auto group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;