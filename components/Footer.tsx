import React from 'react';
import { Leaf, Facebook, Instagram, Twitter } from 'lucide-react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white mb-4">
              <Leaf className="h-6 w-6 mr-2 text-green-500" />
              <span className="text-xl font-bold font-serif">Luis Landscaping</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Professional residential and commercial landscaping services tailored to your property's unique needs. Local, reliable, and trusted.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-500 transition-colors">Lawn Maintenance</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Landscape Design</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Irrigation Systems</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Tree Care</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Seasonal Cleanup</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView()} className="hover:text-green-500 transition-colors">About Us</button></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-stone-500 mr-2">A:</span>
                123 Green Valley Way<br/>Springfield, ST 12345
              </li>
              <li className="flex items-center">
                <span className="text-stone-500 mr-2">P:</span>
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <span className="text-stone-500 mr-2">E:</span>
                hello@luislandscaping.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Luis Landscaping. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Local Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;