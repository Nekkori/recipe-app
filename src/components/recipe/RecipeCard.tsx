import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

// Define Recipe type to match existing application structure
export interface Recipe {
  id: string;
  name: string;
  description: string;
  image?: string | null;
  prepTime: number;
  cookTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string;
  dietary: string[];
  isFavorite?: boolean;
}

interface RecipeCardProps {
  recipe: Recipe;
  onFavoriteToggle?: (id: string) => void;
  onClick?: (id: string) => void;
  className?: string;
}

export const RecipeCard = ({
  recipe,
  onFavoriteToggle,
  onClick,
  className,
}: RecipeCardProps) => {
  const {
    id,
    name,
    description,
    image,
    cookTime,
    prepTime,
    difficulty,
    isFavorite,
  } = recipe;

  // Determine background color for placeholder based on name
  const getColorFromTitle = (title: string): string => {
    const colors = [
      'bg-primary-100', 'bg-accent-yellow-light', 'bg-accent-green-light',
      'bg-primary-50', 'bg-neutral-100'
    ];
    
    // Simple hash function to get consistent color for same title
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };
  
  // Generate difficulty badge variant
  const difficultyVariant: 'green' | 'yellow' | 'red' = 
    difficulty === 'easy' ? 'green' : 
    difficulty === 'medium' ? 'yellow' : 'red';
  
  // Format cook time to show as "30 min" or "1h 15m"
  const formatCookTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };
  
  const totalTime = prepTime + cookTime;
  
  const handleClick = () => {
    onClick?.(id);
  };
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavoriteToggle?.(id);
  };
  
  return (
    <div className={cn('premium-card recipe-card group cursor-pointer', className)} onClick={handleClick}>
      <div className="overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover recipe-image"
          />
        ) : (
          <div className={cn('h-48 relative overflow-hidden', getColorFromTitle(name))}>
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" x2="4" y1="22" y2="15"></line>
              </svg>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2">
            <Badge variant={difficultyVariant}>{difficulty}</Badge>
            <Badge variant="primary">{formatCookTime(totalTime)}</Badge>
          </div>
          <button 
            className={cn(
              "transition", 
              isFavorite ? "text-primary-500" : "text-neutral-400 hover:text-primary-500"
            )} 
            aria-label={isFavorite ? "Remove from favorites" : "Save recipe"}
            onClick={handleFavoriteClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
        </div>
        
        <h3 className="text-xl font-serif font-semibold mb-2 line-clamp-2">{name}</h3>
        <p className="text-neutral-600 line-clamp-2 mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {recipe.dietary.slice(0, 2).map((diet) => (
              <Badge key={diet} variant="outline" size="sm">{diet}</Badge>
            ))}
          </div>
          <Button variant="ghost" size="sm" onClick={handleClick}>View Recipe</Button>
        </div>
      </div>
    </div>
  );
}; 