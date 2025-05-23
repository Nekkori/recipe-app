import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Contact Us | RecipeFinder',
  description: 'Get in touch with the RecipeFinder team for questions, feedback, or support.',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about recipes, feedback on our platform, 
            or want to explore collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-soft-md p-8 border border-neutral-100">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full py-3 rounded-lg">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white mb-8">
              <h2 className="font-serif font-bold text-2xl mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white mb-1">Email</h3>
                    <a 
                      href="mailto:hello@recipefinder.com" 
                      className="text-primary-50 hover:text-white transition-colors"
                    >
                      hello@recipefinder.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white mb-1">Phone</h3>
                    <a 
                      href="tel:+11234567890" 
                      className="text-primary-50 hover:text-white transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                    <p className="text-primary-50 text-sm mt-1">Monday to Friday, 9am to 6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white mb-1">Office</h3>
                    <p className="text-primary-50">
                      123 Culinary Street<br/>
                      Foodington, FK 12345<br/>
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 text-white">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white mb-1">Hours</h3>
                    <p className="text-primary-50">
                      Monday - Friday: 9:00 AM - 6:00 PM<br/>
                      Saturday: 10:00 AM - 4:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft-md p-8 border border-neutral-100">
              <h3 className="font-serif font-bold text-xl mb-4 text-neutral-800">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="border-b border-neutral-100 pb-4">
                  <h4 className="font-medium text-neutral-800 mb-2">How do I reset my password?</h4>
                  <p className="text-sm text-neutral-600">
                    Click on the "Forgot Password" link on the login page, and we'll send you instructions to reset it.
                  </p>
                </div>
                <div className="border-b border-neutral-100 pb-4">
                  <h4 className="font-medium text-neutral-800 mb-2">Can I suggest a recipe?</h4>
                  <p className="text-sm text-neutral-600">
                    Yes! We welcome recipe suggestions. Please use the contact form with the subject "Recipe Suggestion."
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 mb-2">Is there a mobile app?</h4>
                  <p className="text-sm text-neutral-600">
                    We're currently developing our mobile apps for iOS and Android. Stay tuned for updates!
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="/faq" 
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  <MessageSquare size={16} className="mr-2" />
                  View all FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mb-20">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-neutral-100 rounded-xl overflow-hidden h-96 relative">
            {/* For a real implementation, you would integrate a proper map service here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-neutral-500">Map placeholder - integrate Google Maps or another mapping service here</p>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center mb-8">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary-800 mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest recipes, cooking tips, and special offers.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-neutral-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none"
              required
            />
            <Button 
              type="submit" 
              variant="primary" 
              className="rounded-full px-6"
            >
              <span className="mr-2">Subscribe</span>
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
} 