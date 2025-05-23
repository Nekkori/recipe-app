import React from 'react';
import { BookOpen, Clock, PlayCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Cooking Guides | RecipeFinder',
  description: 'Master essential cooking techniques with our detailed guides and tutorials.',
};

export default function CookingGuidesPage() {
  const featuredGuides = [
    {
      id: 1,
      title: 'Knife Skills 101',
      description: 'Learn the basic cutting techniques that will improve your speed and precision in the kitchen.',
      difficulty: 'Beginner',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1591208891833-aa45d1868e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Perfect Pan Sauces',
      description: 'Master the art of creating rich, flavorful sauces using the fond left in your pan after cooking meat.',
      difficulty: 'Intermediate',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Bread Baking Fundamentals',
      description: 'Understand the science behind great bread and learn how to bake crusty, artisanal loaves at home.',
      difficulty: 'Intermediate',
      duration: '3 hours',
      image: 'https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    },
  ];

  const guideCategories = [
    {
      title: 'Cooking Techniques',
      guides: ['Sautéing', 'Braising', 'Roasting', 'Sous Vide', 'Stir-Frying']
    },
    {
      title: 'Ingredient Prep',
      guides: ['Vegetable Prep', 'Meat Butchery', 'Fish Filleting', 'Herb Handling', 'Spice Blending']
    },
    {
      title: 'Baking & Pastry',
      guides: ['Cake Decorating', 'Pie Crust Mastery', 'Cookie Techniques', 'Bread Basics', 'French Pastry']
    },
    {
      title: 'Kitchen Science',
      guides: ['Food Chemistry', 'Fermentation', 'Heat Transfer', 'Flavor Pairing', 'Texture Modification']
    },
  ];

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Master the Art of Cooking
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Our step-by-step guides will help you learn essential techniques and elevate your cooking skills.
          </p>
        </div>

        {/* Hero Video Section */}
        <div className="bg-gradient-to-r from-primary-100 to-primary-50 rounded-2xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary-800 mb-4">
                Free Video Technique Series
              </h2>
              <p className="text-primary-700 mb-8">
                Watch our professional chef demonstrate fundamental cooking techniques in this exclusive series.
              </p>
              <Button variant="primary" size="lg" className="self-start rounded-full shadow-md">
                <PlayCircle size={20} className="mr-2" />
                Watch First Lesson Free
              </Button>
            </div>
            <div className="bg-neutral-800 h-72 md:h-auto flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551218372-54d47802ee09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                alt="Cooking class video" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer">
                  <PlayCircle size={36} className="text-primary-600 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Guides */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-6">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-xl overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 border border-neutral-100">
                <div className="relative">
                  <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-white/90 text-neutral-800 rounded-full px-3 py-1 text-xs font-medium">
                        {guide.difficulty}
                      </span>
                      <span className="bg-white/90 text-neutral-800 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                        <Clock size={12} className="mr-1" />
                        {guide.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">{guide.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{guide.description}</p>
                  <Button variant="outline" className="w-full justify-center rounded-full border-primary-200 hover:bg-primary-50">
                    <BookOpen size={16} className="mr-2" />
                    Read Guide
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Categories */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-6">
            Browse By Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guideCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-soft-sm border border-neutral-100 p-6">
                <h3 className="font-serif font-bold text-lg mb-4 text-primary-700">{category.title}</h3>
                <ul className="space-y-3">
                  {category.guides.map((guide, idx) => (
                    <li key={idx}>
                      <a href="#" className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors group">
                        <CheckCircle size={16} className="text-primary-500 mr-2" />
                        <span>{guide}</span>
                        <ChevronRight size={16} className="ml-auto text-neutral-300 group-hover:text-primary-400 transform group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4">
              Ready to Elevate Your Cooking?
            </h2>
            <p className="mb-6 text-primary-50">
              Unlock all our premium cooking guides, video tutorials, and interactive lessons with a RecipeFinder subscription.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary-700 hover:bg-primary-50 rounded-full shadow-md"
              >
                View All Guides
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-primary-500 rounded-full shadow-md"
              >
                Get Premium Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 