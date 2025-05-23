import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Instagram, Youtube, Send, ChevronRight, Mail, MapPin, Phone, Heart, ChefHat, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Discover",
      links: [
        { name: "All Recipes", href: "/recipes" },
        { name: "Meal Plans", href: "/meal-plans" },
        { name: "Cooking Guides", href: "/cooking-guides" },
        { name: "Ingredients", href: "/ingredients" },
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
      ]
    }
  ];

  return (
    <footer className={cn('bg-gradient-to-b from-white via-primary-50/30 to-primary-50/70 relative', className)}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-yellow-200/20 to-primary-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary-200/20 to-blue-200/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container mx-auto pt-20 pb-10 px-4 relative z-10">
        {/* Newsletter section */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl transform rotate-1 opacity-10"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-50 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-70"></div>
            
            <div className="px-8 py-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-50">
                <Sparkles className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4 text-primary-700">
                Join Our Culinary Community
              </h3>
              <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter for weekly recipes, cooking tips, and culinary inspiration delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3.5 rounded-full border border-neutral-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 focus:outline-none shadow-soft-sm hover:shadow-soft-md transition-all duration-300"
                  required
                />
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="rounded-full px-6 py-3.5 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 group"
                >
                  <span className="mr-2">Subscribe</span>
                  <Send size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center group mb-6">
              <ChefHat size={28} className="text-primary-600 mr-2 transition-all duration-300 group-hover:text-primary-700" />
              <span className="font-serif font-bold text-2xl text-primary-600 transition-all duration-300 group-hover:text-primary-700">
                RecipeFinder
              </span>
            </Link>
            <p className="text-neutral-600 mb-8 text-sm leading-relaxed">
              Discover recipes that fit your lifestyle, preferences, and schedule. Our curated collection helps you cook with confidence and explore new culinary horizons.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#" 
                className="text-neutral-500 hover:text-white hover:bg-primary-500 transition-all duration-300 p-2.5 rounded-full border border-neutral-200 hover:border-primary-500 shadow-soft-sm hover:shadow-soft-md group"
                aria-label="Facebook"
              >
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="text-neutral-500 hover:text-white hover:bg-primary-500 transition-all duration-300 p-2.5 rounded-full border border-neutral-200 hover:border-primary-500 shadow-soft-sm hover:shadow-soft-md group"
                aria-label="Twitter"
              >
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="text-neutral-500 hover:text-white hover:bg-primary-500 transition-all duration-300 p-2.5 rounded-full border border-neutral-200 hover:border-primary-500 shadow-soft-sm hover:shadow-soft-md group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="text-neutral-500 hover:text-white hover:bg-primary-500 transition-all duration-300 p-2.5 rounded-full border border-neutral-200 hover:border-primary-500 shadow-soft-sm hover:shadow-soft-md group"
                aria-label="YouTube"
              >
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="font-medium text-lg mb-6 text-primary-700 relative inline-block">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary-300 rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-neutral-600 hover:text-primary-600 transition-all duration-300 flex items-center group">
                      <ChevronRight size={16} className="text-primary-400 mr-1.5 group-hover:mr-2.5 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h4 className="font-medium text-lg mb-6 text-primary-700 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary-300 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start group">
                  <div className="bg-primary-50 p-2 rounded-lg mr-3 mt-0.5 group-hover:bg-primary-100 transition-colors">
                    <MapPin size={18} className="text-primary-500" />
                  </div>
                  <span className="text-neutral-600 text-sm leading-tight">
                    123 Culinary Street<br />Foodington, FK 12345
                  </span>
                </div>
              </li>
              <li>
                <Link href="mailto:hello@recipefinder.com" className="text-neutral-600 hover:text-primary-600 transition-all duration-300 flex items-center group">
                  <div className="bg-primary-50 p-2 rounded-lg mr-3 group-hover:bg-primary-100 transition-colors">
                    <Mail size={18} className="text-primary-500" />
                  </div>
                  <span className="text-sm">hello@recipefinder.com</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+11234567890" className="text-neutral-600 hover:text-primary-600 transition-all duration-300 flex items-center group">
                  <div className="bg-primary-50 p-2 rounded-lg mr-3 group-hover:bg-primary-100 transition-colors">
                    <Phone size={18} className="text-primary-500" />
                  </div>
                  <span className="text-sm">+1 (123) 456-7890</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center text-neutral-500 text-sm">
            <Heart size={16} className="text-primary-400 mr-2" />
            <p>
              &copy; {currentYear} RecipeFinder. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/accessibility" className="text-neutral-500 hover:text-primary-600 text-sm transition-all duration-300 hover:underline">
              Accessibility
            </Link>
            <Link href="/privacy" className="text-neutral-500 hover:text-primary-600 text-sm transition-all duration-300 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-500 hover:text-primary-600 text-sm transition-all duration-300 hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-neutral-500 hover:text-primary-600 text-sm transition-all duration-300 hover:underline">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-neutral-500 hover:text-primary-600 text-sm transition-all duration-300 hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 