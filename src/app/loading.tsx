'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-primary-100 blur-lg opacity-70"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity
                }}
                className="relative w-16 h-16 mx-auto bg-white rounded-full shadow-md flex items-center justify-center"
              >
                <ChefHat size={32} className="text-primary-500" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-serif font-semibold mb-2"
          >
            Preparing your recipes...
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-neutral-600"
          >
            Just a moment while we get everything ready
          </motion.p>
          
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "300px" }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="h-1 bg-primary-500 rounded-full mt-8 mx-auto"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 