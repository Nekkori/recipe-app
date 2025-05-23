import React from 'react';
import { Calendar, Clock, PlusCircle, Star, Tag, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Meal Plans | RecipeFinder',
  description: 'Discover weekly and monthly meal plans to simplify your cooking routine.',
};

export default function MealPlansPage() {
  const mealPlans = [
    {
      id: 1,
      title: 'Healthy Week Starter',
      description: 'A balanced 7-day meal plan focusing on nutritious and easy-to-prepare recipes.',
      meals: 21,
      duration: '7 days',
      category: 'Health & Fitness',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      title: 'Mediterranean Month',
      description: 'Explore the rich flavors of Mediterranean cuisine with this 30-day meal plan.',
      meals: 90,
      duration: '30 days',
      category: 'Regional',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      title: 'Vegetarian Essentials',
      description: 'Delicious meat-free recipes that are satisfying and packed with flavor.',
      meals: 21,
      duration: '7 days',
      category: 'Vegetarian',
      rating: 4.7,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      title: 'Quick Family Dinners',
      description: 'Family-friendly meals that can be prepared in 30 minutes or less.',
      meals: 14,
      duration: '14 days',
      category: 'Family',
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 5,
      title: 'Budget Cooking Challenge',
      description: "Economical recipes that don't compromise on taste or nutrition.",
      meals: 21,
      duration: '7 days',
      category: 'Budget',
      rating: 4.5,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1464500422302-6188776dc039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 6,
      title: 'High Protein Plan',
      description: 'Protein-rich meals designed for active lifestyles and muscle recovery.',
      meals: 21,
      duration: '7 days',
      category: 'Fitness',
      rating: 4.7,
      reviews: 115,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Simplify Your Week with Meal Plans
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Take the guesswork out of meal preparation with our curated plans. From quick weeknight dinners to specialized diets, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mealPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 border border-neutral-100">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-neutral-100">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">{plan.title}</h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{plan.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center text-xs bg-primary-50 text-primary-700 rounded-full px-2.5 py-1">
                    <Calendar size={14} className="mr-1" />
                    {plan.duration}
                  </span>
                  <span className="inline-flex items-center text-xs bg-primary-50 text-primary-700 rounded-full px-2.5 py-1">
                    <Tag size={14} className="mr-1" />
                    {plan.category}
                  </span>
                  <span className="inline-flex items-center text-xs bg-primary-50 text-primary-700 rounded-full px-2.5 py-1">
                    <Clock size={14} className="mr-1" />
                    {plan.meals} meals
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{plan.rating}</span>
                    <span className="ml-1 text-xs text-neutral-500">({plan.reviews})</span>
                  </div>
                  <Button variant="primary" size="sm" className="rounded-full">
                    View Plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary-800 mb-3">Create Your Custom Meal Plan</h2>
              <p className="text-primary-700">
                Design a personalized meal plan that fits your preferences, dietary needs, and schedule.
              </p>
            </div>
            <Button variant="primary" size="lg" className="rounded-full px-6 shadow-md">
              <PlusCircle size={18} className="mr-2" />
              Start Planning
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
} 