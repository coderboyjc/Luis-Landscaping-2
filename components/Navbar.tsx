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
              className={`p-2 rounded-full transition-all duration-300 ${isScrolled
                  ? 'text-stone-800 bg-stone-100'
                  : 'text-white bg-white/20 backdrop-blur-md border border-white/10'
                }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-[80%] max-w-xs bg-stone-50 z-50 shadow-2xl transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full">
          {/* Header in Menu */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-100 text-green-700">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="ml-2 text-lg font-bold text-stone-900">Luis Landscaping</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-stone-500 hover:text-stone-800 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            <nav className="flex flex-col space-y-2">
              {[
                { label: 'Services', id: SectionId.SERVICES },
                { label: 'About Us', id: SectionId.ABOUT },
                { label: 'AI Advisor', id: SectionId.AI_ADVISOR },
                { label: 'Gallery', id: SectionId.GALLERY },
                { label: 'Reviews', id: SectionId.TESTIMONIALS },
                { label: 'Contact', id: SectionId.CONTACT },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-between w-full text-left text-stone-600 font-medium py-3 px-4 rounded-xl hover:bg-green-50 hover:text-green-700 transition-all group"
                >
                  <span>{item.label}</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Leaf className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-stone-200">
              <div className="flex flex-col space-y-4">
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-stone-100 text-stone-800 rounded-xl font-bold hover:bg-stone-200 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </a>
                <Button fullWidth onClick={() => scrollTo(SectionId.CONTACT)}>
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Footer in Menu */}
          <div className="p-6 bg-stone-100 text-center">
            <p className="text-xs text-stone-400 font-medium uppercase tracking-widest">Springfield's Finest</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;