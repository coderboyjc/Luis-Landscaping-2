import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';
import Button from './Button';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo(SectionId.HOME)}>
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-green-100 text-green-700' : 'bg-white/20 text-white backdrop-blur-md'}`}>
              <Leaf className="h-6 w-6" />
            </div>
            <span className={`ml-3 text-xl font-bold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              Luis Landscaping
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { label: 'Services', id: SectionId.SERVICES },
              { label: 'About', id: SectionId.ABOUT },
              { label: 'AI Advisor', id: SectionId.AI_ADVISOR },
              { label: 'Gallery', id: SectionId.GALLERY },
              { label: 'Reviews', id: SectionId.TESTIMONIALS },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium hover:text-green-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+15551234567" className={`flex items-center text-sm font-semibold ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
              <Phone className="h-4 w-4 mr-2" />
              (555) 123-4567
            </a>
            <Button 
              variant={isScrolled ? 'primary' : 'white'} 
              size="sm"
              onClick={() => scrollTo(SectionId.CONTACT)}
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-stone-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollTo(SectionId.SERVICES)} className="text-left text-stone-600 font-medium py-2">Services</button>
          <button onClick={() => scrollTo(SectionId.ABOUT)} className="text-left text-stone-600 font-medium py-2">About Us</button>
          <button onClick={() => scrollTo(SectionId.AI_ADVISOR)} className="text-left text-stone-600 font-medium py-2">AI Advisor</button>
          <button onClick={() => scrollTo(SectionId.GALLERY)} className="text-left text-stone-600 font-medium py-2">Gallery</button>
          <button onClick={() => scrollTo(SectionId.TESTIMONIALS)} className="text-left text-stone-600 font-medium py-2">Reviews</button>
          <button onClick={() => scrollTo(SectionId.CONTACT)} className="text-left text-stone-600 font-medium py-2">Contact</button>
          <hr className="border-stone-100" />
          <a href="tel:+15551234567" className="flex items-center text-stone-800 font-bold py-2">
            <Phone className="h-4 w-4 mr-2" />
            Call (555) 123-4567
          </a>
          <Button fullWidth onClick={() => scrollTo(SectionId.CONTACT)}>Get a Quote</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;