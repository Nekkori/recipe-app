'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { recipes, Recipe } from '@/data/recipes';
import { Clock, Users, ChefHat, Heart, Printer, Share2, Check } from 'lucide-react';
import { RecipeCard } from '@/components/recipe/RecipeCard';
import { motion } from 'framer-motion';

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  // Find the recipe by ID
  const recipe = recipes.find(recipe => recipe.id === id) as Recipe;
  
  // If recipe not found
  if (!recipe) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="font-serif font-bold text-3xl mb-4">Recipe Not Found</h1>
            <p className="text-neutral-600 mb-8">
              Sorry, we couldn&apos;t find the recipe you were looking for.
            </p>
            <Link href="/">
              <Button variant="primary">
                Return to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Toggle checked state for ingredients
  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients(prev => 
      prev.includes(ingredient)
        ? prev.filter(item => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  // Calculate total time
  const totalTime = recipe.prepTime + recipe.cookTime;

  // Get related recipes (same cuisine, excluding current one)
  const relatedRecipes = recipes
    .filter(r => r.cuisine === recipe.cuisine && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${recipe.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary" size="md">{recipe.cuisine}</Badge>
                <Badge variant="subtle" size="md">{recipe.difficulty}</Badge>
                {recipe.dietary.map(diet => (
                  <Badge key={diet} variant="outline" size="md">{diet}</Badge>
                ))}
              </div>
              
              <h1 className="font-serif font-bold text-3xl md:text-5xl text-white mb-4">
                {recipe.name}
              </h1>
              
              <p className="text-white/90 text-lg max-w-2xl mb-6">
                {recipe.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center">
                  <Clock className="mr-2" size={20} />
                  <div>
                    <div className="text-sm opacity-80">Total Time</div>
                    <div className="font-medium">{totalTime} min</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2" size={20} />
                  <div>
                    <div className="text-sm opacity-80">Servings</div>
                    <div className="font-medium">{recipe.servings} people</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <ChefHat className="mr-2" size={20} />
                  <div>
                    <div className="text-sm opacity-80">Chef</div>
                    <div className="font-medium">{recipe.author}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Action Buttons */}
        <section className="bg-white border-b border-neutral-200">
          <div className="container mx-auto py-4 px-4">
            <div className="flex justify-between items-center">
              {/* Left side buttons */}
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  size="sm"
                  className="rounded-full flex items-center"
                >
                  <Heart size={16} className="mr-2" />
                  Save
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="rounded-full flex items-center"
                >
                  <Printer size={16} className="mr-2" />
                  Print
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="rounded-full flex items-center"
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
              
              {/* Tab navigation */}
              <div className="hidden md:flex space-x-6">
                <button
                  className={`py-2 border-b-2 font-medium transition-colors ${
                    activeTab === 'ingredients' 
                      ? 'border-primary-500 text-primary-500' 
                      : 'border-transparent text-neutral-500 hover:text-neutral-800'
                  }`}
                  onClick={() => setActiveTab('ingredients')}
                >
                  Ingredients
                </button>
                <button
                  className={`py-2 border-b-2 font-medium transition-colors ${
                    activeTab === 'instructions' 
                      ? 'border-primary-500 text-primary-500' 
                      : 'border-transparent text-neutral-500 hover:text-neutral-800'
                  }`}
                  onClick={() => setActiveTab('instructions')}
                >
                  Instructions
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tab navigation for mobile */}
        <div className="md:hidden bg-white border-b border-neutral-200">
          <div className="container mx-auto">
            <div className="grid grid-cols-2">
              <button
                className={`py-3 text-center font-medium transition-colors ${
                  activeTab === 'ingredients' 
                    ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-500' 
                    : 'text-neutral-500'
                }`}
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </button>
              <button
                className={`py-3 text-center font-medium transition-colors ${
                  activeTab === 'instructions' 
                    ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-500' 
                    : 'text-neutral-500'
                }`}
                onClick={() => setActiveTab('instructions')}
              >
                Instructions
              </button>
            </div>
          </div>
        </div>
        
        {/* Recipe Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="md:grid md:grid-cols-12 gap-8">
              {/* Ingredients (always visible on desktop, conditionally on mobile) */}
              <div className={`md:col-span-4 ${activeTab === 'ingredients' ? 'block' : 'hidden md:block'}`}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="font-serif font-bold text-2xl mb-4">Ingredients</h2>
                  <p className="text-neutral-600 mb-6">for {recipe.servings} servings</p>
                  
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <div
                          onClick={() => toggleIngredient(ingredient.name)}
                          className={`w-5 h-5 rounded border flex-shrink-0 mr-3 mt-0.5 flex items-center justify-center cursor-pointer transition-colors ${
                            checkedIngredients.includes(ingredient.name)
                              ? 'bg-primary-500 border-primary-500'
                              : 'border-neutral-300'
                          }`}
                        >
                          {checkedIngredients.includes(ingredient.name) && (
                            <Check size={12} className="text-white" />
                          )}
                        </div>
                        <span className={`${
                          checkedIngredients.includes(ingredient.name) 
                            ? 'text-neutral-400 line-through' 
                            : 'text-neutral-800'
                        }`}>
                          <strong>{ingredient.quantity}</strong> {ingredient.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Nutrition info */}
                <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                  <h2 className="font-serif font-bold text-2xl mb-4">Nutrition</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <div className="text-sm text-neutral-500">Calories</div>
                      <div className="font-bold text-lg">{recipe.nutrition.calories}</div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <div className="text-sm text-neutral-500">Protein</div>
                      <div className="font-bold text-lg">{recipe.nutrition.protein}g</div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <div className="text-sm text-neutral-500">Carbs</div>
                      <div className="font-bold text-lg">{recipe.nutrition.carbs}g</div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <div className="text-sm text-neutral-500">Fat</div>
                      <div className="font-bold text-lg">{recipe.nutrition.fat}g</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Instructions (always visible on desktop, conditionally on mobile) */}
              <div className={`md:col-span-8 mt-6 md:mt-0 ${activeTab === 'instructions' ? 'block' : 'hidden md:block'}`}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="font-serif font-bold text-2xl mb-6">Instructions</h2>
                  
                  <ol className="space-y-8">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex">
                        <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium flex-shrink-0 mr-4 mt-1">
                          {index + 1}
                        </div>
                        <p className="text-neutral-800">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <section className="py-8 bg-neutral-50">
            <div className="container mx-auto px-4">
              <h2 className="font-serif font-bold text-2xl md:text-3xl mb-6">You might also like</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedRecipes.map(relatedRecipe => (
                  <motion.div
                    key={relatedRecipe.id}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RecipeCard
                      recipe={relatedRecipe}
                      onClick={(id) => console.log(`Navigate to recipe ${id}`)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
} 