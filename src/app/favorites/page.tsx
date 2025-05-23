'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RecipeGrid } from '@/components/recipe/RecipeGrid';
import { Recipe, recipes } from '@/data/recipes';
import { useAuth } from '@/lib/auth/authContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function FavoritesPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [loadingFavorites, setLoadingFavorites] = useState(true);

  useEffect(() => {
    // If not authenticated and not loading, redirect to home
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    // Simulate loading favorites from storage
    const loadFavorites = () => {
      setLoadingFavorites(true);
      // Get favorite IDs from local storage
      const savedFavorites = localStorage.getItem('favoriteRecipes');
      const favoriteIds = savedFavorites ? JSON.parse(savedFavorites) : [];
      
      // Filter recipes by favorites
      const favorites = recipes
        .filter(recipe => favoriteIds.includes(recipe.id))
        .map(recipe => ({
          ...recipe,
          isFavorite: true
        }));
      
      setFavoriteRecipes(favorites);
      setLoadingFavorites(false);
    };

    if (isAuthenticated) {
      loadFavorites();
    }
  }, [isAuthenticated]);

  const handleFavoriteToggle = (id: string) => {
    // Get current favorites from storage
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    let favoriteIds = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    // Toggle the ID
    if (favoriteIds.includes(id)) {
      favoriteIds = favoriteIds.filter((recipeId: string) => recipeId !== id);
    } else {
      favoriteIds.push(id);
    }
    
    // Save back to storage
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteIds));
    
    // Update UI
    setFavoriteRecipes(prev => 
      prev.filter(recipe => recipe.id !== id)
    );
  };

  const handleRecipeClick = (id: string) => {
    router.push(`/recipes/${id}`);
  };

  // Show loading state
  if (isLoading || loadingFavorites) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Loading your favorites...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-neutral-50 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="font-serif font-bold text-3xl md:text-4xl mb-4">
                My Favorite Recipes
              </h1>
              <p className="text-neutral-600 max-w-2xl">
                Here are all the recipes you've saved for quick access.
              </p>
            </motion.div>
            
            <RecipeGrid 
              recipes={favoriteRecipes}
              onFavoriteToggle={handleFavoriteToggle}
              onRecipeClick={handleRecipeClick}
              emptyMessage="You haven&apos;t saved any recipes yet. Browse our collection and save your favorites!"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 