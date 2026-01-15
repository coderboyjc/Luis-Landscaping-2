import React, { useState } from 'react';
import { SectionId } from '../types';
import Button from './Button';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6 font-serif">
              Ready to transform your outdoor space?
            </h2>
            <p className="text-xl text-stone-600 mb-12">
              Get a free, no-obligation quote today. Fill out the form or give us a call. We usually respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-stone-900">Call Us</h3>
                  <p className="mt-1 text-stone-600">Mon-Fri from 8am to 6pm</p>
                  <a href="tel:+15551234567" className="mt-1 block text-green-700 font-semibold hover:underline">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-stone-900">Email Us</h3>
                  <p className="mt-1 text-stone-600">For general inquiries</p>
                  <a href="mailto:hello@luislandscaping.com" className="mt-1 block text-green-700 font-semibold hover:underline">
                    hello@luislandscaping.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-stone-900">Service Area</h3>
                  <p className="mt-1 text-stone-600">
                    Serving Springfield, Oakville, Riverview, and surrounding communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Message Sent!</h3>
                <p className="text-stone-600 mb-6">
                  Thank you for contacting Luis Landscaping. One of our team members will be in touch with you shortly to discuss your project.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-1">Interested Service</label>
                  <select id="service" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                    <option>General Inquiry</option>
                    <option>Lawn Maintenance</option>
                    <option>Landscape Design</option>
                    <option>Yard Cleanup</option>
                    <option>Irrigation Systems</option>
                    <option>Tree & Shrub Care</option>
                    <option>Seasonal Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-green-500 focus:border-green-500"></textarea>
                </div>

                <Button type="submit" fullWidth size="lg">
                  Send Quote Request
                </Button>
                
                <p className="text-xs text-stone-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and allow us to contact you regarding your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;