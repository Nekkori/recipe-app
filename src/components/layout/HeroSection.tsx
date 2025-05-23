import React from 'react';
import { Button } from '@/components/ui/Button';
import { SearchFilters } from '@/components/recipe/SearchBar';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Sparkles, ChefHat, Clock } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: SearchFilters) => void;
  className?: string;
}

export const HeroSection = ({
  onSearch,
  onFilterChange,
  className,
}: HeroSectionProps) => {
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = formData.get('query') as string;
    onSearch(query);
    
    // Reset filters when searching from hero
    onFilterChange({
      cuisines: [],
      dietary: [],
      difficulty: [],
    });
  };

  const popularSearchTerms = [
    "pasta", "chicken", "vegetarian", "dessert", "quick dinner", "healthy"
  ];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Improved Background with Gradient and Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-500 opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-yellow-500 opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Floating food icons (decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[15%] left-[10%] text-white opacity-20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-[45%] right-[15%] text-white opacity-15"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L4 9v12h16V9l-8-6zm.5 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S10.5 8.83 10.5 8s.67-1.5 1.5-1.5zm0 9.5c-2.48 0-4.5-2.02-4.5-4.5S10.02 7 12.5 7s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[20%] left-[20%] text-white opacity-15"
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/>
          </svg>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles size={16} className="mr-2" />
            <span>Discover 1000+ Delicious Recipes</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Transform Your <span className="text-yellow-300">Kitchen</span> Into a Culinary Wonderland
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            From quick weeknight dinners to show-stopping feasts, discover recipes that inspire and delight with step-by-step guidance.
          </motion.p>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 relative max-w-2xl mx-auto"
            onSubmit={handleSearchSubmit}
          >
            <div className="relative">
              <input 
                type="text"
                name="query"
                placeholder="Search for recipes by ingredient or cuisine…"
                className="w-full py-4 pl-5 pr-14 rounded-full border-none focus:ring-2 focus:ring-primary-400 bg-white text-neutral-800 placeholder-neutral-500 shadow-xl"
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white p-2.5 rounded-full transition-colors shadow-md"
              >
                <Search size={20} />
              </button>
            </div>
            
            {/* Popular search terms */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="text-white/70 text-sm">Popular:</span>
              {popularSearchTerms.map((term, index) => (
                <button 
                  key={term}
                  type="button"
                  onClick={() => {
                    const form = document.forms[0];
                    const input = form.elements.namedItem('query') as HTMLInputElement;
                    input.value = term;
                    form.dispatchEvent(new Event('submit', { cancelable: true }));
                  }}
                  className="text-white/90 hover:text-white text-sm hover:underline transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.form>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/recipes">
              <Button 
                variant="primary" 
                size="lg"
                className="shadow-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-primary-600 group"
              >
                <span>Browse All Recipes</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="shadow-md bg-white/10 border-white text-white hover:bg-white/20 font-medium rounded-full group"
            >
              <ChefHat size={16} className="mr-2" />
              <span>Get Meal Ideas</span>
            </Button>
          </motion.div>
          
          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center text-white/90">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <Clock size={20} className="text-white" />
              </div>
              <span className="text-sm">Quick Recipes</span>
            </div>
            <div className="flex flex-col items-center text-white/90">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 4.5C17 3.12 15.88 2 14.5 2S12 3.12 12 4.5V5h-2V4.5C10 3.12 8.88 2 7.5 2S5 3.12 5 4.5V8H3v2.65L4.5 12l-1.5 1.35V16h2v-1.5c0-1.5 2-2 2-2v5h10v-5s2 .5 2 2V16h2v-2.65L19.5 12l1.5-1.35V8h-2V4.5zM7 4.5C7 4.22 7.22 4 7.5 4s.5.22.5.5V5H7v-.5zm10 0c0-.28.22-.5.5-.5s.5.22.5.5V5h-1v-.5zM3 22h19v-2H3v2z" />
                </svg>
              </div>
              <span className="text-sm">Balanced Nutrition</span>
            </div>
            <div className="flex flex-col items-center text-white/90">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 3H3v18h18V9l-6-6zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 1V4.5l5.5 5.5H14z" />
                </svg>
              </div>
              <span className="text-sm">Shopping Lists</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}; 