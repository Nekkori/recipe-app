import React from 'react';
import Link from 'next/link';
import { Search, Filter, Grid3X3, LayoutList, Info, Leaf, ShoppingCart, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Ingredients | RecipeFinder',
  description: 'Explore our ingredients database with detailed information and cooking tips.',
};

export default function IngredientsPage() {
  const categories = [
    { name: 'Vegetables', count: 87, icon: '🥕' },
    { name: 'Fruits', count: 64, icon: '🍎' },
    { name: 'Grains', count: 32, icon: '🌾' },
    { name: 'Meat', count: 45, icon: '🥩' },
    { name: 'Seafood', count: 38, icon: '🐟' },
    { name: 'Dairy', count: 28, icon: '🧀' },
    { name: 'Herbs & Spices', count: 72, icon: '🌿' },
    { name: 'Nuts & Seeds', count: 26, icon: '🥜' },
  ];

  const featuredIngredients = [
    {
      id: 1,
      name: 'Avocado',
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      category: 'Fruits',
      nutrition: { calories: 160, protein: '2g', fat: '15g', carbs: '9g' },
      organic: true,
      seasonality: 'Year-round',
      description: 'Creamy, nutrient-dense fruit with a mild flavor perfect for both sweet and savory dishes.',
    },
    {
      id: 2,
      name: 'Quinoa',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      category: 'Grains',
      nutrition: { calories: 222, protein: '8g', fat: '3.6g', carbs: '39g' },
      organic: true,
      seasonality: 'Year-round',
      description: 'Protein-rich ancient grain with a nutty flavor and fluffy texture when cooked.',
    },
    {
      id: 3,
      name: 'Salmon',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      category: 'Seafood',
      nutrition: { calories: 206, protein: '22g', fat: '13g', carbs: '0g' },
      organic: false,
      seasonality: 'Spring to Fall',
      description: 'Rich, fatty fish loaded with omega-3s and distinctive flavor that works with many cooking methods.',
    },
    {
      id: 4,
      name: 'Kale',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9921fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      category: 'Vegetables',
      nutrition: { calories: 49, protein: '4.3g', fat: '0.9g', carbs: '8.8g' },
      organic: true,
      seasonality: 'Fall to Spring',
      description: 'Hearty leafy green with sturdy texture and slightly bitter flavor, perfect for salads and cooking.',
    },
    {
      id: 5,
      name: 'Turmeric',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      category: 'Herbs & Spices',
      nutrition: { calories: 29, protein: '0.9g', fat: '0.3g', carbs: '6.3g' },
      organic: true,
      seasonality: 'Year-round',
      description: 'Vibrant yellow spice with earthy, slightly bitter flavor and powerful anti-inflammatory properties.',
    },
    {
      id: 6,
      name: 'Honey',
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      category: 'Sweeteners',
      nutrition: { calories: 304, protein: '0.3g', fat: '0g', carbs: '82g' },
      organic: true,
      seasonality: 'Year-round',
      description: 'Natural sweetener produced by bees with distinctive flavor profiles depending on the flowers sourced.',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-6xl mx-auto relative">
        {/* Home Logo/Button */}
        <Link 
          href="/" 
          className="absolute top-0 left-0 z-10 flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
          aria-label="Return to Homepage"
        >
          <ChefHat size={24} className="text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="font-serif font-medium text-primary-600 group-hover:text-primary-800 transition-colors">RecipeFinder</span>
        </Link>
        
        <div className="text-center mb-12 pt-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Explore Ingredients
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Discover detailed information about cooking ingredients, including nutrition facts, seasonality, and culinary uses.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-soft-md p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search ingredients..." 
                className="w-full pl-10 pr-4 py-3 rounded-full border border-neutral-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full border-neutral-200">
                <Filter size={18} className="mr-2" />
                Filters
              </Button>
              <div className="border-r border-neutral-200 mx-1"></div>
              <Button variant="ghost" className="rounded-full p-2">
                <Grid3X3 size={22} className="text-primary-600" />
              </Button>
              <Button variant="ghost" className="rounded-full p-2">
                <LayoutList size={22} className="text-neutral-400" />
              </Button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <a 
                key={index}
                href="#"
                className="bg-white rounded-xl border border-neutral-100 p-4 flex items-center hover:shadow-soft-md transition-shadow duration-300 group"
              >
                <span className="text-3xl mr-3">{category.icon}</span>
                <div>
                  <h3 className="font-medium text-neutral-800 group-hover:text-primary-600 transition-colors">{category.name}</h3>
                  <p className="text-neutral-500 text-sm">{category.count} ingredients</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Ingredients */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-6">
            Featured Ingredients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIngredients.map((ingredient) => (
              <div 
                key={ingredient.id}
                className="bg-white rounded-xl overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 border border-neutral-100"
              >
                <div className="aspect-w-16 aspect-h-10 bg-neutral-100">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name} 
                    className="object-cover w-full h-48"
                  />
                  {ingredient.organic && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-primary-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                        <Leaf size={12} className="mr-1" />
                        Organic
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-neutral-800">{ingredient.name}</h3>
                      <p className="text-neutral-500 text-sm">{ingredient.category}</p>
                    </div>
                    <Button variant="ghost" className="p-1 text-neutral-400 hover:text-primary-600" aria-label="More info">
                      <Info size={18} />
                    </Button>
                  </div>
                  
                  <p className="text-neutral-600 text-sm mb-4">{ingredient.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="bg-neutral-50 px-3 py-1.5 rounded-lg">
                      <span className="block text-xs text-neutral-500">Calories</span>
                      <span className="font-medium">{ingredient.nutrition.calories}</span>
                    </div>
                    <div className="bg-neutral-50 px-3 py-1.5 rounded-lg">
                      <span className="block text-xs text-neutral-500">Protein</span>
                      <span className="font-medium">{ingredient.nutrition.protein}</span>
                    </div>
                    <div className="bg-neutral-50 px-3 py-1.5 rounded-lg">
                      <span className="block text-xs text-neutral-500">Seasonality</span>
                      <span className="font-medium text-xs">{ingredient.seasonality}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <Button variant="outline" size="sm" className="rounded-full border-primary-200 hover:bg-primary-50">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary-600 hover:bg-primary-50 p-2 rounded-full">
                      <ShoppingCart size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Highlight */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Seasonal vegetables" 
                className="rounded-xl"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary-800 mb-4">
                What's in Season Now
              </h2>
              <p className="text-primary-700 mb-6">
                Cooking with seasonal ingredients ensures better flavor, nutrition, and sustainability. Discover what's fresh right now in your region.
              </p>
              <Button variant="primary" className="rounded-full shadow-md">
                View Seasonal Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 