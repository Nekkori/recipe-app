'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/layout/HeroSection';
import { RecipeGrid } from '@/components/recipe/RecipeGrid';
import { SearchFilters } from '@/components/recipe/SearchBar';
import { recipes } from '@/data/recipes';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, ChevronRight, Clock, Heart, Star, ChefHat, Utensils, BookOpen, Award, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    cuisines: [],
    dietary: [],
    difficulty: [],
  });
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);

  // Load saved favorites when the component mounts
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      setFavoriteRecipes(JSON.parse(savedFavorites));
    }
  }, []);

  // Filter recipes based on search query and filters
  const filteredRecipes = recipes
    .filter((recipe) => {
      // Search query filter
      const matchesQuery =
        searchQuery === '' ||
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some((ing) =>
          ing.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Cuisine filter
      const matchesCuisine =
        filters.cuisines.length === 0 || filters.cuisines.includes(recipe.cuisine);

      // Dietary filter
      const matchesDietary =
        filters.dietary.length === 0 ||
        filters.dietary.some((diet) => recipe.dietary.includes(diet));

      // Difficulty filter
      const matchesDifficulty =
        filters.difficulty.length === 0 || filters.difficulty.includes(recipe.difficulty);

      return matchesQuery && matchesCuisine && matchesDietary && matchesDifficulty;
    })
    .map(recipe => ({
      ...recipe,
      isFavorite: favoriteRecipes.includes(recipe.id)
    }));

  // Get top rated recipes
  const featuredRecipes = recipes
    .filter(recipe => recipe.rating && recipe.rating >= 4.7)
    .slice(0, 6)
    .map(recipe => ({
      ...recipe,
      isFavorite: favoriteRecipes.includes(recipe.id)
    }));

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  const handleFavoriteToggle = (id: string) => {
    const newFavorites = favoriteRecipes.includes(id)
      ? favoriteRecipes.filter((recipeId) => recipeId !== id)
      : [...favoriteRecipes, id];
    
    setFavoriteRecipes(newFavorites);
    
    // Save to local storage
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  const handleRecipeClick = (id: string) => {
    router.push(`/recipes/${id}`);
  };

  // Categories with their icons
  const categories = [
    { name: 'Quick Meals', icon: <Clock className="mb-2 text-primary-500" size={28} />, count: 95 },
    { name: 'Vegetarian', icon: <Utensils className="mb-2 text-primary-500" size={28} />, count: 78 },
    { name: 'Desserts', icon: <ChefHat className="mb-2 text-primary-500" size={28} />, count: 64 },
    { name: 'Healthy', icon: <ThumbsUp className="mb-2 text-primary-500" size={28} />, count: 120 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          onSearch={handleSearch} 
          onFilterChange={handleFilterChange} 
          className="min-h-[85vh]"
        />
        
        {/* Category Showcase */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="primary" className="mb-4">Explore by Category</Badge>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-neutral-800">Find Your Perfect Recipe</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Browse through our curated categories to discover recipes that match your preferences and dietary needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-neutral-100 shadow-soft text-center hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => router.push(`/recipes?category=${category.name.toLowerCase()}`)}
                >
                  {category.icon}
                  <h3 className="font-medium text-xl mb-2">{category.name}</h3>
                  <p className="text-neutral-500 text-sm">{category.count} recipes</p>
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <Button variant="ghost" size="sm" className="text-primary-600 mx-auto group">
                      <span>Explore</span>
                      <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute top-24 left-10 w-24 h-24 rounded-full bg-primary-50 opacity-80 -z-10"></div>
          <div className="absolute bottom-16 right-10 w-32 h-32 rounded-full bg-yellow-50 opacity-80 -z-10"></div>
        </section>
        
        {/* Featured Recipes with enhanced cards */}
        <section className="py-16 bg-neutral-50 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }}></div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <Badge variant="primary" className="mb-4">Staff Picks</Badge>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-neutral-800 relative inline-block">
                <span className="relative z-10">Featured Recipes</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-200 opacity-40 -z-10 transform -rotate-1"></div>
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Discover our handpicked selection of delicious recipes from around the world.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRecipes.slice(0, 3).map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group relative transform hover:-translate-y-1 border border-neutral-100"
                  onClick={() => handleRecipeClick(recipe.id)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="w-full h-full bg-neutral-200"></div>
                    {/* Placeholder for image - in production would use real images */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&q=80'})` }}
                    ></div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Floating badges */}
                    <div className="absolute top-3 left-3 flex space-x-2">
                      <span className="bg-primary-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {recipe.difficulty}
                      </span>
                      {index === 0 && (
                        <span className="bg-yellow-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center">
                          <Star size={12} className="mr-1" /> Top Rated
                        </span>
                      )}
                    </div>
                    
                    {/* Favorite button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteToggle(recipe.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full ${recipe.isFavorite ? 'bg-primary-500 text-white' : 'bg-white/80 text-neutral-600 hover:bg-white'} transition-colors`}
                    >
                      <Heart size={18} className={recipe.isFavorite ? 'fill-current' : ''} />
                    </button>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-serif font-bold text-xl text-white mb-1 drop-shadow-sm">{recipe.name}</h3>
                      <div className="flex items-center">
                        <Badge variant="primary" className="bg-white/20 text-white">{recipe.cuisine}</Badge>
                        <div className="ml-auto flex items-center text-white">
                          <Clock size={14} className="mr-1" />
                          <span className="text-sm">{recipe.cookTime} min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(recipe.rating || 0) ? 'text-yellow-400 fill-current' : 'text-neutral-300'}
                          />
                        ))}
                        <span className="ml-1 text-sm font-medium text-neutral-700">{recipe.rating?.toFixed(1) || 0}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary-600 rounded-full p-2 group-hover:bg-primary-50">
                        <ArrowRight size={18} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="outline"
                size="lg" 
                className="rounded-full border-primary-200 text-primary-600 hover:bg-primary-50"
                onClick={() => router.push('/recipes')}
              >
                <span>View All Recipes</span>
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Seasonal Highlight Banner */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden relative"
            >
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-yellow-200 opacity-40 transform rotate-12"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-amber-200 opacity-40"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 relative">
                  <div className="space-y-6">
                    <div className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-4 py-1 text-sm font-medium">
                      <span className="mr-1">✨</span> Seasonal Favorite
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900">
                      Autumn Harvest Recipes
                    </h2>
                    <p className="text-amber-800">
                      Celebrate the flavors of fall with our collection of cozy recipes featuring seasonal ingredients like pumpkin, apple, and warming spices.
                    </p>
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="rounded-full bg-amber-600 hover:bg-amber-700 border-none"
                      onClick={() => router.push('/recipes?seasonal=true')}
                    >
                      Explore Seasonal Recipes
                    </Button>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 transform rotate-3">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-lg transform -rotate-3 hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&q=80')" }}></div>
                      </div>
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=300&h=300&q=80')" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Why Choose Us - enhanced with improved cards */}
        <section className="py-16 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-50 opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-50 opacity-70 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <Badge variant="primary" className="mb-4">Our Approach</Badge>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-neutral-800">Why Choose Us</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Our platform offers a unique culinary experience with carefully tested recipes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-soft border border-neutral-100 hover:shadow-soft-lg transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-50/50 blur-2xl transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative">
                  <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    <Award className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-3 group-hover:text-primary-600 transition-colors">Tested & Trusted</h3>
                  <p className="text-neutral-600">
                    All our recipes are tested by professional chefs and home cooks to ensure quality and reliability.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-soft border border-neutral-100 hover:shadow-soft-lg transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-50/50 blur-2xl transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative">
                  <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    <Clock className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-3 group-hover:text-primary-600 transition-colors">Quick & Easy</h3>
                  <p className="text-neutral-600">
                    Find recipes that fit your schedule with accurate preparation and cooking times.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-soft border border-neutral-100 hover:shadow-soft-lg transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-50/50 blur-2xl transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative">
                  <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    <Heart className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-3 group-hover:text-primary-600 transition-colors">Save Favorites</h3>
                  <p className="text-neutral-600">
                    Create your personal collection by saving your favorite recipes for quick access.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <Badge variant="primary" className="mb-4">Testimonials</Badge>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-neutral-800">What Our Users Say</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Hear from people who have transformed their cooking with our recipes.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                  quote: "RecipeFinder has completely changed how I approach cooking. The recipes are easy to follow and always turn out delicious!",
                  role: "Home Cook"
                },
                {
                  name: "Michael Chen",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                  quote: "As a busy professional, I love how quickly I can find recipes that match my dietary needs and available ingredients.",
                  role: "Tech Professional"
                },
                {
                  name: "Emily Rodriguez",
                  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                  quote: "The meal planning feature has saved me so much time and reduced my grocery bill. I recommend this to everyone!",
                  role: "Food Blogger"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 relative"
                >
                  <div className="absolute top-0 left-6 transform -translate-y-1/2 bg-white p-1 rounded-full border border-neutral-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${testimonial.avatar})` }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <p className="text-neutral-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-medium text-neutral-800">{testimonial.name}</p>
                        <p className="text-sm text-neutral-500">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="inline-block text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }}></div>
          
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full opacity-30 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-30 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-serif font-bold text-3xl md:text-4xl mb-4"
              >
                Ready to Elevate Your Cooking?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              >
                Join thousands of food enthusiasts who have discovered the joy of cooking with our delicious recipes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-full border-none bg-white text-primary-600 hover:bg-neutral-100"
                  onClick={() => router.push('/recipes')}
                >
                  <BookOpen size={18} className="mr-2" />
                  <span>Browse Recipes</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white text-white hover:bg-white/10"
                  onClick={() => router.push('/signup')}
                >
                  <span>Create Account</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Add CSS for certain effects */}
      <style jsx global>{`
        .shadow-soft {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .shadow-soft-md {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
        }
        
        .shadow-soft-lg {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
