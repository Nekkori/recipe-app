'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, Grid3X3, LayoutList, Bookmark, Clock, ChevronDown, ChevronRight, ChevronsRight, Heart, Trophy, Flame, Sparkles, TrendingUp, Utensils, Globe, Calendar, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RecipeGrid } from '@/components/recipe/RecipeGrid';
import { recipes } from '@/data/recipes';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define interfaces for our filter states
interface SelectedFilters {
  cuisines: string[];
  dietary: string[];
  difficulty: string[];
  mealType: string[];
}

export default function RecipesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeView, setActiveView] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    cuisines: [],
    dietary: [],
    difficulty: [],
    mealType: [],
  });
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  
  // Refs for scrolling
  const browseRef = useRef<HTMLDivElement>(null);

  // Load saved favorites when the component mounts
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      setFavoriteRecipes(JSON.parse(savedFavorites));
    }
  }, []);

  // Handle search params from URL
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
      setIsSearched(true);
      // Scroll to results after a short delay to ensure the page has loaded
      setTimeout(() => {
        if (browseRef.current) {
          browseRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [searchParams]);

  const categories = [
    { name: 'All', count: recipes.length },
    { name: 'Popular', count: 24 },
    { name: 'Seasonal', count: 16 },
    { name: 'Quick & Easy', count: 32 },
    { name: 'Healthy', count: 28 },
    { name: 'Vegetarian', count: 22 },
    { name: 'Desserts', count: 18 },
  ];

  const filterOptions = {
    cuisines: ['Italian', 'Mexican', 'Asian', 'Mediterranean', 'American', 'Indian', 'French', 'Thai'],
    dietary: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Keto', 'Low-Carb', 'Paleo'],
    difficulty: ['Easy', 'Intermediate', 'Expert'],
    mealType: ['Breakfast', 'Lunch', 'Dinner', 'Appetizer', 'Snack', 'Dessert'],
  };

  // Filter and sort recipes based on current filters
  const filteredRecipes = recipes
    .filter(recipe => {
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          recipe.name.toLowerCase().includes(searchLower) ||
          recipe.description.toLowerCase().includes(searchLower) ||
          recipe.cuisine.toLowerCase().includes(searchLower) ||
          recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchLower))
        );
      }
      return true;
    })
    .filter(recipe => {
      if (activeCategory === 'All') return true;
      if (activeCategory === 'Popular') return recipe.rating && recipe.rating >= 4.7;
      if (activeCategory === 'Seasonal') return recipe.seasonal;
      if (activeCategory === 'Quick & Easy') return recipe.cookTime <= 30;
      if (activeCategory === 'Healthy') return recipe.dietary.includes('Healthy');
      if (activeCategory === 'Vegetarian') return recipe.dietary.includes('Vegetarian');
      if (activeCategory === 'Desserts') return recipe.mealType && recipe.mealType.includes('Dessert');
      return true;
    })
    .filter(recipe => {
      // Apply selected filters
      if (selectedFilters.cuisines.length > 0 && !selectedFilters.cuisines.includes(recipe.cuisine)) {
        return false;
      }
      if (selectedFilters.dietary.length > 0 && !selectedFilters.dietary.some(diet => recipe.dietary.includes(diet))) {
        return false;
      }
      if (selectedFilters.difficulty.length > 0 && !selectedFilters.difficulty.includes(recipe.difficulty)) {
        return false;
      }
      if (selectedFilters.mealType.length > 0 && !selectedFilters.mealType.some(type => recipe.mealType && recipe.mealType.includes(type))) {
        return false;
      }
      return true;
    })
    .map(recipe => ({
      ...recipe,
      isFavorite: favoriteRecipes.includes(recipe.id),
    }));

  // Select a few featured recipes
  const featuredRecipes = recipes
    .filter(recipe => recipe.rating && recipe.rating >= 4.8)
    .slice(0, 3)
    .map(recipe => ({
      ...recipe,
      isFavorite: favoriteRecipes.includes(recipe.id),
    }));

  const handleFavoriteToggle = (id: string) => {
    const newFavorites = favoriteRecipes.includes(id)
      ? favoriteRecipes.filter(recipeId => recipeId !== id)
      : [...favoriteRecipes, id];
    
    setFavoriteRecipes(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  const handleRecipeClick = (id: string) => {
    router.push(`/recipes/${id}`);
  };

  const toggleFilter = (category: keyof SelectedFilters, value: string) => {
    setSelectedFilters(prev => {
      const current = [...prev[category]];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...current, value] };
      }
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      cuisines: [],
      dietary: [],
      difficulty: [],
      mealType: [],
    });
    setSearchTerm('');
    setIsSearched(false);
  };

  const handleSearch = () => {
    setIsSearched(true);
    // Scroll to results
    if (browseRef.current) {
      browseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const setQuickSearch = (term: string) => {
    setSearchTerm(term);
    setIsSearched(true);
    if (browseRef.current) {
      browseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalActiveFilters = 
    selectedFilters.cuisines.length + 
    selectedFilters.dietary.length + 
    selectedFilters.difficulty.length + 
    selectedFilters.mealType.length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Home Logo/Button */}
          <Link 
            href="/" 
            className="absolute top-0 left-4 md:left-6 flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
            aria-label="Return to Homepage"
          >
            <ChefHat size={24} className="text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="font-serif font-medium text-primary-600 group-hover:text-primary-800 transition-colors">RecipeFinder</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover <span className="text-primary-200">Delicious</span> Recipes
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              From quick weeknight dinners to special occasion feasts, find the perfect recipe for any moment.
            </p>

            <div className="relative max-w-2xl mx-auto mb-4">
              <input 
                type="text" 
                placeholder="Search for a recipe..." 
                className="w-full pl-12 pr-4 py-4 rounded-full border-none focus:ring-4 focus:ring-white/30 text-neutral-800 shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full py-2" 
                variant="primary"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="text-primary-100">Popular searches:</span>
              <button onClick={() => setQuickSearch("pasta")} className="text-white hover:text-primary-200 transition-colors">Pasta</button>
              <span className="text-primary-300">•</span>
              <button onClick={() => setQuickSearch("chicken")} className="text-white hover:text-primary-200 transition-colors">Chicken</button>
              <span className="text-primary-300">•</span>
              <button onClick={() => setQuickSearch("vegetarian")} className="text-white hover:text-primary-200 transition-colors">Vegetarian</button>
              <span className="text-primary-300">•</span>
              <button onClick={() => setQuickSearch("dessert")} className="text-white hover:text-primary-200 transition-colors">Dessert</button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* Featured Recipes Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-2xl md:text-3xl font-bold text-neutral-800 flex items-center relative"
            >
              <Trophy size={24} className="text-yellow-500 mr-2" />
              Featured Recipes
              <div className="absolute -left-6 -top-6 w-16 h-16 rounded-full border-4 border-yellow-100 opacity-50 z-0"></div>
            </motion.h2>
            <Button variant="outline" className="rounded-full border-primary-200 text-primary-600 hover:bg-primary-50 btn-3d">
              View All <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
          <p className="text-neutral-600 mt-2">Our most loved recipes that are perfect for any occasion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 transform hover:-translate-y-1 card-layered glow-on-hover"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10"></div>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFavoriteToggle(recipe.id);
                    }}
                    className={`p-2.5 rounded-full backdrop-blur-sm ${recipe.isFavorite ? 'bg-primary-500 text-white' : 'bg-white/30 text-white hover:bg-white/50'} transition-colors`}
                  >
                    <Heart size={20} className={recipe.isFavorite ? 'fill-current' : ''} />
                  </button>
                </div>
                <div className="absolute top-4 left-4 z-20">
                  {index === 0 && (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
                      <Sparkles size={14} className="mr-1" /> Top Rated
                    </span>
                  )}
                  {index === 1 && (
                    <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
                      <Flame size={14} className="mr-1" /> Trending
                    </span>
                  )}
                  {index === 2 && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
                      <TrendingUp size={14} className="mr-1" /> Popular
                    </span>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-serif font-bold text-2xl text-white mb-2 drop-shadow-md">{recipe.name}</h3>
                  <div className="flex items-center">
                    <Badge variant="primary">{recipe.cuisine}</Badge>
                    <div className="ml-auto flex items-center text-white">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill={i < Math.floor(recipe.rating || 0) ? "currentColor" : "none"} 
                            stroke="currentColor" 
                            className="w-4 h-4"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">{recipe.rating || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6" onClick={() => handleRecipeClick(recipe.id)}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-neutral-600">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{recipe.cookTime} min</span>
                  </div>
                  <Badge variant="outline" className="bg-neutral-50">{recipe.difficulty}</Badge>
                </div>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                <Button 
                  variant="primary" 
                  className="w-full justify-center rounded-full btn-3d"
                  onClick={() => handleRecipeClick(recipe.id)}
                >
                  View Recipe
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Seasonal Highlight Section with 3D Effect */}
      <div className="container mx-auto px-4 py-12 mb-16 relative">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-2xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-yellow-200 opacity-30 floating"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 rounded-full bg-amber-300 opacity-20 floating-slow"></div>
          
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-amber-200/40 text-amber-800 px-4 py-1 text-sm font-medium">
                <span className="mr-1">✨</span> Seasonal Highlight
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900">
                Fall Harvest Favorites
              </h2>
              <p className="text-amber-800">
                Embrace the autumn season with our collection of recipes featuring fresh fall produce. 
                From pumpkin spice to apple cider, these recipes celebrate the cozy flavors of fall.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                  Pumpkin
                </span>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                  Apple
                </span>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                  Squash
                </span>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                  Cinnamon
                </span>
              </div>
              <Button variant="primary" className="mt-2 rounded-full bg-amber-600 hover:bg-amber-700 border-none btn-3d">
                Explore Seasonal Recipes
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-amber-300 opacity-20 absolute floating-slow"></div>
              </div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 transform rotate-6">
                  <img 
                    src="https://images.unsplash.com/photo-1509995476556-a1c27b573f03?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=200&h=200"
                    alt="Pumpkin soup" 
                    className="rounded-lg shadow-lg transform -rotate-3 hover:scale-105 transition-transform card-layered"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1605100804567-1ffe00dfc4a6?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=200&h=200" 
                    alt="Apple pie" 
                    className="rounded-lg shadow-lg transform rotate-3 hover:scale-105 transition-transform card-layered"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1549219137-2f064e2b63d9?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=200&h=200" 
                    alt="Roasted vegetables" 
                    className="rounded-lg shadow-lg transform rotate-6 hover:scale-105 transition-transform card-layered"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1567010755783-5f1bb8021f98?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=200&h=200" 
                    alt="Spiced drink" 
                    className="rounded-lg shadow-lg transform -rotate-6 hover:scale-105 transition-transform card-layered"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cooking Inspiration Section */}
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-16 my-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 select-none pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary-500/30 blur-3xl"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-yellow-500/30 blur-3xl"></div>
          <div className="grid grid-cols-6 gap-4 rotate-12 opacity-10 scale-125">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/10 rounded-lg"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl font-bold mb-6"
            >
              Discover Your Cooking Inspiration
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-300 mb-8"
            >
              From mastering kitchen essentials to exploring global cuisines, find your next culinary adventure.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors group glassmorphism"
            >
              <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Utensils size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Cooking Techniques</h3>
              <p className="text-neutral-300 mb-4">Master essential skills from knife techniques to advanced cooking methods.</p>
              <a href="/cooking-guides" className="inline-flex items-center text-primary-300 hover:text-primary-200 transition-colors font-medium">
                Explore Guides
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors group glassmorphism"
            >
              <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Global Cuisines</h3>
              <p className="text-neutral-300 mb-4">Travel the world through your kitchen with authentic international recipes.</p>
              <a href="#" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 transition-colors font-medium">
                Discover Cuisines
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors group glassmorphism"
            >
              <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Meal Planning</h3>
              <p className="text-neutral-300 mb-4">Save time and eat better with our curated meal plans for every lifestyle.</p>
              <a href="/meal-plans" className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors font-medium">
                View Meal Plans
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Browse Categories with Visual Enhancement */}
      <div className="container mx-auto px-4 py-10" ref={browseRef}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
              Browse Recipes
            </h2>
            <p className="text-neutral-600">
              Discover recipes from our collection, filtered to match your preferences
            </p>
          </div>

          {/* Categories */}
          <div className="flex items-center overflow-x-auto pb-2 mb-8 hide-scrollbar">
            <div className="flex space-x-2 flex-nowrap">
              {categories.map((category, index) => (
                <motion.div 
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Button
                    variant={activeCategory === category.name ? 'primary' : 'outline'}
                    size="sm"
                    className={`rounded-full whitespace-nowrap ${activeCategory === category.name ? 'shadow-md btn-3d' : 'hover:btn-3d'}`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.name}
                    <span className="ml-1 text-xs">({category.count})</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Search and View Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Filter results..." 
                className="w-full pl-10 pr-4 py-3 rounded-full border border-neutral-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className={`rounded-full border-neutral-200 ${isFiltersOpen ? 'bg-primary-50 text-primary-600 btn-3d' : ''} hover:btn-3d`}
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                <Filter size={18} className="mr-2" />
                Filters
                {totalActiveFilters > 0 && (
                  <span className="ml-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalActiveFilters}
                  </span>
                )}
              </Button>
              <div className="border-r border-neutral-200 mx-1"></div>
              <Button 
                variant="ghost" 
                className={`rounded-full p-2 ${activeView === 'grid' ? 'text-primary-600 neumorphic-inset' : 'text-neutral-400 hover:neumorphic'}`}
                onClick={() => setActiveView('grid')}
              >
                <Grid3X3 size={22} />
              </Button>
              <Button 
                variant="ghost" 
                className={`rounded-full p-2 ${activeView === 'list' ? 'text-primary-600 neumorphic-inset' : 'text-neutral-400 hover:neumorphic'}`}
                onClick={() => setActiveView('list')}
              >
                <LayoutList size={22} />
              </Button>
            </div>
          </div>

          {/* Active Search Term Indicator */}
          {isSearched && searchTerm && (
            <div className="bg-primary-50 p-3 rounded-lg mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <Search size={18} className="text-primary-500 mr-2" />
                <span className="text-primary-700">
                  Showing results for: <strong>"{searchTerm}"</strong>
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-primary-700 hover:bg-primary-100">
                Clear Search
              </Button>
            </div>
          )}

          {/* Filter Panel */}
          {isFiltersOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-xl shadow-soft-md p-6 mb-8 border border-neutral-100"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif font-bold text-lg">Filter Recipes</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Cuisine Filters */}
                <div>
                  <h4 className="font-medium text-neutral-800 mb-3">Cuisine</h4>
                  <div className="space-y-2">
                    {filterOptions.cuisines.map(cuisine => (
                      <label key={cuisine} className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="form-checkbox h-4 w-4 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
                          checked={selectedFilters.cuisines.includes(cuisine)}
                          onChange={() => toggleFilter('cuisines', cuisine)}
                        />
                        <span className="ml-2 text-neutral-700">{cuisine}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Dietary Filters */}
                <div>
                  <h4 className="font-medium text-neutral-800 mb-3">Dietary</h4>
                  <div className="space-y-2">
                    {filterOptions.dietary.map(diet => (
                      <label key={diet} className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="form-checkbox h-4 w-4 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
                          checked={selectedFilters.dietary.includes(diet)}
                          onChange={() => toggleFilter('dietary', diet)}
                        />
                        <span className="ml-2 text-neutral-700">{diet}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Difficulty Filters */}
                <div>
                  <h4 className="font-medium text-neutral-800 mb-3">Difficulty</h4>
                  <div className="space-y-2">
                    {filterOptions.difficulty.map(level => (
                      <label key={level} className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="form-checkbox h-4 w-4 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
                          checked={selectedFilters.difficulty.includes(level)}
                          onChange={() => toggleFilter('difficulty', level)}
                        />
                        <span className="ml-2 text-neutral-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Meal Type Filters */}
                <div>
                  <h4 className="font-medium text-neutral-800 mb-3">Meal Type</h4>
                  <div className="space-y-2">
                    {filterOptions.mealType.map(type => (
                      <label key={type} className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="form-checkbox h-4 w-4 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
                          checked={selectedFilters.mealType.includes(type)}
                          onChange={() => toggleFilter('mealType', type)}
                        />
                        <span className="ml-2 text-neutral-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-neutral-600">
              Showing <span className="font-medium text-neutral-800">{filteredRecipes.length}</span> recipes
            </p>
            <div className="flex items-center">
              <span className="text-sm text-neutral-600 mr-2">Sort by:</span>
              <select className="form-select border-neutral-200 rounded-md text-sm">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Cooking Time</option>
                <option>Difficulty</option>
              </select>
            </div>
          </div>

          {/* Recipe Grid with enhanced styling */}
          {activeView === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-all duration-300 border border-neutral-100 group transform hover:-translate-y-1 card-layered glow-on-hover"
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-neutral-100">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name} 
                      className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavoriteToggle(recipe.id);
                        }}
                        className={`p-2 rounded-full ${recipe.isFavorite ? 'bg-primary-500 text-white' : 'bg-white/80 text-neutral-500 hover:text-primary-500'}`}
                      >
                        <Heart size={18} className={recipe.isFavorite ? 'fill-current' : ''} />
                      </button>
                    </div>
                  </div>
                  <div 
                    className="p-5 cursor-pointer"
                    onClick={() => handleRecipeClick(recipe.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="primary">{recipe.cuisine}</Badge>
                      <div className="flex items-center">
                        <Clock size={14} className="text-neutral-400 mr-1" />
                        <span className="text-xs text-neutral-500">{recipe.cookTime} min</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800 group-hover:text-primary-600 transition-colors">{recipe.name}</h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.dietary.map(tag => (
                        <span key={tag} className="inline-flex items-center text-xs bg-neutral-100 text-neutral-700 rounded-full px-2.5 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 24 24" 
                              fill={i < Math.floor(recipe.rating || 0) ? "currentColor" : "none"} 
                              stroke="currentColor" 
                              className="w-4 h-4"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium">{recipe.rating || 0}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary-600 hover:bg-primary-50 p-2 rounded-full group-hover:bg-primary-50 transition-colors">
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 mb-12">
              {filteredRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-soft-sm hover:shadow-soft-md transition-all duration-300 border border-neutral-100 p-4 flex group depth-gradient"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="ml-4 flex-grow cursor-pointer" onClick={() => handleRecipeClick(recipe.id)}>
                    <div className="flex justify-between">
                      <h3 className="font-serif font-bold text-lg mb-1 text-neutral-800 group-hover:text-primary-600 transition-colors">{recipe.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-yellow-400">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-4 h-4"
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-1 text-sm font-medium">{recipe.rating || 0}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="text-neutral-400 mr-1" />
                          <span className="text-xs text-neutral-500">{recipe.cookTime} min</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-600 text-sm mb-2 line-clamp-2">{recipe.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="primary">{recipe.cuisine}</Badge>
                      {recipe.dietary.slice(0, 2).map(tag => (
                        <span key={tag} className="inline-flex items-center text-xs bg-neutral-100 text-neutral-700 rounded-full px-2.5 py-1">
                          {tag}
                        </span>
                      ))}
                      {recipe.dietary.length > 2 && (
                        <span className="inline-flex items-center text-xs bg-neutral-100 text-neutral-700 rounded-full px-2.5 py-1">
                          +{recipe.dietary.length - 2} more
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="bg-neutral-50">{recipe.difficulty}</Badge>
                      <div className="flex gap-2">
                        <Button 
                          variant={recipe.isFavorite ? "primary" : "outline"} 
                          size="sm" 
                          className="rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFavoriteToggle(recipe.id);
                          }}
                        >
                          <Heart size={16} className={`mr-1 ${recipe.isFavorite ? 'fill-current' : ''}`} />
                          {recipe.isFavorite ? 'Saved' : 'Save'}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-primary-600 hover:bg-primary-50 rounded-full group-hover:bg-primary-50 transition-colors">
                          <ChevronsRight size={16} className="mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Pagination with enhanced style */}
          <div className="flex justify-center">
            <nav>
              <ul className="flex items-center">
                <li>
                  <a href="#" className="px-3 py-2 text-neutral-500 hover:text-primary-600 hover:bg-primary-50 rounded-l-full flex items-center">
                    <ChevronRight size={16} className="mr-1 transform rotate-180" />
                    Prev
                  </a>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 bg-primary-500 text-white font-medium rounded-full mx-1 w-8 h-8 flex items-center justify-center">1</a>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-full mx-1 w-8 h-8 flex items-center justify-center">2</a>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-full mx-1 w-8 h-8 flex items-center justify-center">3</a>
                </li>
                <li>
                  <span className="px-3 py-2 text-neutral-400">...</span>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-full mx-1 w-8 h-8 flex items-center justify-center">8</a>
                </li>
                <li>
                  <a href="#" className="px-3 py-2 text-neutral-500 hover:text-primary-600 hover:bg-primary-50 rounded-r-full flex items-center">
                    Next
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* CSS for enhanced styling */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Enhanced card styling */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        /* Floating animation */
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

        /* Depth gradient overlays */
        .depth-gradient {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.05) 40%,
            rgba(0, 0, 0, 0.05) 70%,
            rgba(0, 0, 0, 0.1) 100%
          );
        }
        
        /* 3D button effect */
        .btn-3d {
          transform: translateY(0);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .btn-3d:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }
        
        .btn-3d:active {
          transform: translateY(1px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        /* Layered card effect */
        .card-layered {
          position: relative;
        }
        
        .card-layered::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 8px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
          border-radius: inherit;
          z-index: -1;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .card-layered:hover::before {
          transform: translate(-4px, -4px);
          opacity: 0.7;
        }
        
        /* Glow effect */
        .glow-on-hover {
          position: relative;
          overflow: hidden;
        }
        
        .glow-on-hover::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          opacity: 0;
          transform: scale(1.5);
          transition: opacity 0.8s, transform 0.8s;
          pointer-events: none;
        }
        
        .glow-on-hover:hover::after {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Neumorphic elements */
        .neumorphic {
          background: #f0f2f5;
          box-shadow: 
            8px 8px 16px rgba(174, 174, 192, 0.4), 
            -8px -8px 16px rgba(255, 255, 255, 0.6);
        }
        
        .neumorphic-inset {
          background: #f0f2f5;
          box-shadow: 
            inset 2px 2px 5px rgba(174, 174, 192, 0.2), 
            inset -2px -2px 5px rgba(255, 255, 255, 0.7);
        }
        
        /* Floating elements */
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-slow {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Glass morphism */
        .glassmorphism {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Decorative Elements for Visual Interest */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Background decorative circles */}
        <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full bg-primary-50 mix-blend-multiply blur-3xl opacity-50 floating-slow"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-yellow-50 mix-blend-multiply blur-3xl opacity-50 floating"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-green-50 mix-blend-multiply blur-3xl opacity-40 floating-slow"></div>
        
        {/* Decorative grid for texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      </div>
    </main>
  );
} 