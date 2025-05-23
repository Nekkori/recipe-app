'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useAuth } from '@/lib/auth/authContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { User, Settings, Mail, Clock, Heart, ChevronRight, BookOpen, Award, PieChart, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { recipes } from '@/data/recipes';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    // If not authenticated and not loading, redirect to home
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    // Get favorite count from local storage
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    const favoriteIds = savedFavorites ? JSON.parse(savedFavorites) : [];
    setFavoriteCount(favoriteIds.length);
  }, []);

  // Cooking statistics - these would come from a real backend in a production app
  const cookingStats = {
    recipesCompleted: 24,
    totalCookingTime: 1856, // minutes
    favoriteRecipe: "Butternut Squash Risotto",
    topCuisine: "Italian"
  };

  // Show loading state
  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Loading profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="font-serif font-bold text-3xl md:text-4xl mb-2">
                  My Profile
                </h1>
                <p className="text-neutral-600">
                  Manage your account settings, view your cooking stats, and customize your experience
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column - Profile info */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    {/* Profile header */}
                    <div className="bg-primary-500 p-6 text-white">
                      <div className="flex items-center">
                        <div className="bg-white text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                          <User size={32} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">{user.name}</h2>
                          <p className="opacity-90">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Profile menu */}
                    <div className="p-4">
                      <div className="space-y-1">
                        <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-neutral-50 transition-colors">
                          <div className="flex items-center">
                            <User size={18} className="mr-3 text-primary-500" />
                            <span>Personal Information</span>
                          </div>
                          <ChevronRight size={16} className="text-neutral-400" />
                        </button>
                        
                        <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-neutral-50 transition-colors"
                          onClick={() => router.push('/favorites')}>
                          <div className="flex items-center">
                            <Heart size={18} className="mr-3 text-primary-500" />
                            <span>My Favorites</span>
                          </div>
                          <ChevronRight size={16} className="text-neutral-400" />
                        </button>
                        
                        <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-neutral-50 transition-colors">
                          <div className="flex items-center">
                            <BookOpen size={18} className="mr-3 text-primary-500" />
                            <span>Recipe Collections</span>
                          </div>
                          <ChevronRight size={16} className="text-neutral-400" />
                        </button>
                        
                        <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-neutral-50 transition-colors">
                          <div className="flex items-center">
                            <Calendar size={18} className="mr-3 text-primary-500" />
                            <span>Meal Planner</span>
                          </div>
                          <ChevronRight size={16} className="text-neutral-400" />
                        </button>
                        
                        <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-neutral-50 transition-colors">
                          <div className="flex items-center">
                            <Settings size={18} className="mr-3 text-primary-500" />
                            <span>Account Settings</span>
                          </div>
                          <ChevronRight size={16} className="text-neutral-400" />
                        </button>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-neutral-100">
                        <Button
                          variant="outline"
                          className="w-full justify-center text-red-500 border-red-200 hover:bg-red-50"
                          onClick={logout}
                        >
                          Sign Out
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right column - Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Cooking statistics */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="font-serif font-bold text-xl mb-4 flex items-center">
                        <PieChart size={20} className="mr-2 text-primary-500" />
                        Your Cooking Statistics
                      </h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-primary-50 p-4 rounded-lg text-center">
                          <span className="text-3xl font-bold text-primary-600">{cookingStats.recipesCompleted}</span>
                          <p className="text-sm text-neutral-600">Recipes Cooked</p>
                        </div>
                        
                        <div className="bg-accent-yellow-light p-4 rounded-lg text-center">
                          <span className="text-3xl font-bold text-accent-yellow-dark">{favoriteCount}</span>
                          <p className="text-sm text-neutral-600">Favorites Saved</p>
                        </div>
                        
                        <div className="bg-accent-green-light p-4 rounded-lg text-center">
                          <span className="text-3xl font-bold text-accent-green-dark">{Math.round(cookingStats.totalCookingTime / 60)}</span>
                          <p className="text-sm text-neutral-600">Hours Cooking</p>
                        </div>
                        
                        <div className="bg-neutral-100 p-4 rounded-lg text-center">
                          <span className="text-3xl font-bold text-neutral-700">4</span>
                          <p className="text-sm text-neutral-600">Recipe Collections</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2 text-sm text-neutral-500">FAVORITE CUISINES</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="primary">Italian</Badge>
                            <Badge variant="primary">Mexican</Badge>
                            <Badge variant="primary">Thai</Badge>
                            <Badge variant="primary">French</Badge>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2 text-sm text-neutral-500">DIETARY PREFERENCES</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">Vegetarian</Badge>
                            <Badge variant="outline">Low Carb</Badge>
                            <Badge variant="outline">High Protein</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Recent activity */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="font-serif font-bold text-xl mb-4 flex items-center">
                        <Clock size={20} className="mr-2 text-primary-500" />
                        Recent Activity
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start p-3 border-l-4 border-primary-500 bg-primary-50 rounded-r-lg">
                          <div className="mr-4 bg-white p-2 rounded-full">
                            <Award size={20} className="text-primary-500" />
                          </div>
                          <div>
                            <p className="font-medium">You cooked "Mediterranean Grilled Chicken"</p>
                            <p className="text-sm text-neutral-500">2 days ago</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 border-l-4 border-accent-yellow-DEFAULT bg-accent-yellow-light rounded-r-lg">
                          <div className="mr-4 bg-white p-2 rounded-full">
                            <Heart size={20} className="text-accent-yellow-dark" />
                          </div>
                          <div>
                            <p className="font-medium">You saved "Butternut Squash Risotto" to favorites</p>
                            <p className="text-sm text-neutral-500">3 days ago</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 border-l-4 border-accent-green-DEFAULT bg-accent-green-light rounded-r-lg">
                          <div className="mr-4 bg-white p-2 rounded-full">
                            <Calendar size={20} className="text-accent-green-dark" />
                          </div>
                          <div>
                            <p className="font-medium">You added 3 recipes to your weekly meal plan</p>
                            <p className="text-sm text-neutral-500">5 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Suggested recipes */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="font-serif font-bold text-xl mb-4">Recommended for You</h3>
                      <p className="text-neutral-600 mb-6">Based on your cooking preferences and previous activity</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recipes.slice(0, 4).map((recipe) => (
                          <div key={recipe.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors">
                            <div className="h-16 w-16 bg-neutral-100 rounded-md flex-shrink-0 overflow-hidden">
                              {recipe.image && (
                                <img 
                                  src={recipe.image} 
                                  alt={recipe.name}
                                  className="h-full w-full object-cover"
                                />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{recipe.name}</h4>
                              <div className="flex items-center text-sm text-neutral-500">
                                <Clock size={14} className="mr-1" />
                                <span>{recipe.prepTime + recipe.cookTime} min</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 text-center">
                        <Button variant="outline" onClick={() => router.push('/')}>
                          View All Recommendations
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 