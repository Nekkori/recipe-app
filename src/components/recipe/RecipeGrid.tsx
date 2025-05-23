import React from 'react';
import { RecipeCard } from './RecipeCard';
import { Recipe } from '@/data/recipes';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

interface RecipeGridProps {
  recipes: Recipe[];
  onFavoriteToggle?: (id: string) => void;
  onRecipeClick?: (id: string) => void;
  className?: string;
  emptyMessage?: string;
}

export const RecipeGrid = ({
  recipes,
  onFavoriteToggle,
  onRecipeClick,
  className,
  emptyMessage = "No recipes found. Try different keywords or filters!",
}: RecipeGridProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="mb-6 bg-neutral-100 rounded-full w-24 h-24 flex items-center justify-center">
          <ChefHat size={48} className="text-neutral-400" />
        </div>
        <h3 className="text-2xl font-serif font-semibold mb-3">Oops! No recipes found</h3>
        <p className="text-neutral-600 max-w-md">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn(
        'grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        className
      )}
    >
      {recipes.map((recipe) => (
        <motion.div key={recipe.id} variants={item}>
          <RecipeCard
            recipe={recipe}
            onFavoriteToggle={onFavoriteToggle}
            onClick={onRecipeClick}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}; 