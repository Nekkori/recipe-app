import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cuisines, dietaryOptions, difficultyLevels } from '@/data/recipes';
import { Search, Filter, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: SearchFilters) => void;
  className?: string;
  isSticky?: boolean;
}

export interface SearchFilters {
  cuisines: string[];
  dietary: string[];
  difficulty: string[];
}

export const SearchBar = ({ onSearch, onFilterChange, className, isSticky = false }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    cuisines: [],
    dietary: [],
    difficulty: [],
  });

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterToggle = (type: keyof SearchFilters, value: string) => {
    const updatedFilters = { ...filters };
    
    if (updatedFilters[type].includes(value)) {
      updatedFilters[type] = updatedFilters[type].filter(item => item !== value);
    } else {
      updatedFilters[type] = [...updatedFilters[type], value];
    }
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      cuisines: [],
      dietary: [],
      difficulty: [],
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const hasActiveFilters = 
    filters.cuisines.length > 0 || 
    filters.dietary.length > 0 || 
    filters.difficulty.length > 0;

  // Filter categories for display in horizontal bar
  const filterCategories = [
    { name: 'Difficulty', type: 'difficulty', options: difficultyLevels },
    { name: 'Dietary', type: 'dietary', options: dietaryOptions },
    { name: 'Cuisine', type: 'cuisines', options: cuisines }
  ];

  return (
    <div className={cn(
      'w-full bg-white', 
      isSticky && 'sticky top-16 z-40 py-3 shadow-md border-b border-neutral-100',
      className
    )}>
      {/* Main search bar */}
      <div className="relative mb-4">
        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden border border-neutral-200 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
          <div className="pl-4 text-neutral-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search recipes by name, ingredient, or cuisine..."
            className="w-full py-3 px-4 outline-none text-neutral-800"
          />
          <Button
            type="button"
            variant="ghost"
            className="mr-2 text-neutral-500 hover:text-neutral-700"
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
            aria-label="Toggle filters"
          >
            <Filter size={18} />
            {hasActiveFilters && (
              <span className="ml-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {filters.cuisines.length + filters.dietary.length + filters.difficulty.length}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Horizontal filters */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: showFilters ? 1 : 0,
          height: showFilters ? 'auto' : 0
        }}
        className="overflow-hidden"
      >
        <div className="flex flex-col space-y-4 mb-4">
          {/* Filter header */}
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-neutral-800">Filters</h3>
            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="text-sm text-primary-500 hover:text-primary-600 flex items-center"
              >
                <X size={14} className="mr-1" />
                Clear all
              </button>
            )}
          </div>

          {/* Filter categories */}
          {filterCategories.map((category) => (
            <div key={category.type}>
              <h4 className="text-sm font-medium mb-2">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.options.map((option) => {
                  const isActive = filters[category.type as keyof SearchFilters].includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => handleFilterToggle(category.type as keyof SearchFilters, option)}
                      className={cn(
                        'text-sm py-1 px-3 rounded-full border transition-colors flex items-center',
                        isActive
                          ? 'bg-primary-500 text-white border-primary-500'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
                      )}
                    >
                      {isActive && <Check size={14} className="mr-1" />}
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Active filters pills - shown when filters are hidden */}
      {!showFilters && hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(filters).map(([type, values]) => 
            values.map((value: string) => (
              <div 
                key={`${type}-${value}`}
                className="flex items-center bg-primary-50 text-primary-700 text-sm py-1 px-3 rounded-full"
              >
                {value}
                <button 
                  onClick={() => handleFilterToggle(type as keyof SearchFilters, value)}
                  className="ml-1 hover:text-primary-800"
                >
                  <X size={14} />
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}; 