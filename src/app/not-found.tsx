'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Search, ChefHat, Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-neutral-50 flex items-center justify-center py-16">
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 rounded-full bg-primary-100 blur-xl opacity-70"></div>
                <div className="relative bg-white h-32 w-32 mx-auto rounded-full shadow-md flex items-center justify-center">
                  <ChefHat size={64} className="text-primary-500" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Page Not Found
              </h1>
              
              <p className="text-neutral-600 text-lg mb-8 max-w-md mx-auto">
                We couldn't find the page you're looking for. It may have been moved or doesn't exist.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="flex items-center justify-center"
                  >
                    <Home size={18} className="mr-2" />
                    Return Home
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex items-center justify-center"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Go Back
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 pt-12 border-t border-neutral-200"
            >
              <h2 className="font-serif font-bold text-xl mb-6">
                Popular Recipe Categories
              </h2>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-neutral-800">
                  Italian Cuisine
                </Link>
                <Link href="/" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-neutral-800">
                  Quick & Easy
                </Link>
                <Link href="/" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-neutral-800">
                  Vegetarian
                </Link>
                <Link href="/" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-neutral-800">
                  Desserts
                </Link>
                <Link href="/" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-neutral-800">
                  Healthy Options
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 