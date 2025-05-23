import React from 'react';
import Link from 'next/link';
import { ChevronRight, ChefHat } from 'lucide-react';

type SitemapCategory = {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
};

export default function SitemapPage() {
  const sitemapCategories: SitemapCategory[] = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "Recipes", href: "/recipes" },
        { name: "Meal Plans", href: "/meal-plans" },
        { name: "Ingredients", href: "/ingredients" },
        { name: "Cooking Guides", href: "/cooking-guides" },
      ]
    },
    {
      title: "Recipe Categories",
      links: [
        { name: "Breakfast", href: "/recipes/breakfast" },
        { name: "Lunch", href: "/recipes/lunch" },
        { name: "Dinner", href: "/recipes/dinner" },
        { name: "Dessert", href: "/recipes/dessert" },
        { name: "Snacks", href: "/recipes/snacks" },
        { name: "Appetizers", href: "/recipes/appetizers" },
        { name: "Drinks", href: "/recipes/drinks" },
      ]
    },
    {
      title: "Dietary Preferences",
      links: [
        { name: "Vegetarian", href: "/recipes/vegetarian" },
        { name: "Vegan", href: "/recipes/vegan" },
        { name: "Gluten-Free", href: "/recipes/gluten-free" },
        { name: "Dairy-Free", href: "/recipes/dairy-free" },
        { name: "Keto", href: "/recipes/keto" },
        { name: "Low-Carb", href: "/recipes/low-carb" },
      ]
    },
    {
      title: "Cuisines",
      links: [
        { name: "Italian", href: "/recipes/cuisine/italian" },
        { name: "Mexican", href: "/recipes/cuisine/mexican" },
        { name: "Asian", href: "/recipes/cuisine/asian" },
        { name: "Mediterranean", href: "/recipes/cuisine/mediterranean" },
        { name: "Indian", href: "/recipes/cuisine/indian" },
        { name: "American", href: "/recipes/cuisine/american" },
      ]
    },
    {
      title: "User Features",
      links: [
        { name: "Profile", href: "/profile" },
        { name: "Favorites", href: "/favorites" },
        { name: "Saved Recipes", href: "/saved-recipes" },
        { name: "Shopping Lists", href: "/shopping-lists" },
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Legal & Information",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Accessibility", href: "/accessibility" },
      ]
    },
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white pt-32 pb-16">
        <div className="container mx-auto px-4 relative">
          {/* Home Logo/Button */}
          <Link 
            href="/" 
            className="absolute top-0 left-4 md:left-6 -mt-16 flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
            aria-label="Return to Homepage"
          >
            <ChefHat size={24} className="text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="font-serif font-medium text-primary-600 group-hover:text-primary-800 transition-colors">RecipeFinder</span>
          </Link>
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Sitemap
            </h1>
            <p className="text-neutral-600 text-lg">
              Find all pages on RecipeFinder organized in one place
            </p>
          </div>
        </div>
      </section>
      
      {/* Sitemap Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {sitemapCategories.map((category, index) => (
              <div key={index}>
                <h2 className="font-serif text-xl font-semibold text-primary-800 mb-4 pb-2 border-b border-neutral-200">
                  {category.title}
                </h2>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href} 
                        className="text-neutral-700 hover:text-primary-600 flex items-center group transition-all duration-300"
                      >
                        <ChevronRight size={16} className="text-primary-300 group-hover:text-primary-500 mr-2 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-6 border-t border-neutral-200">
            <h2 className="font-serif text-xl font-semibold text-primary-800 mb-4">
              Additional Resources
            </h2>
            <p className="text-neutral-600 mb-4">
              Looking for something specific? Try these resources:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <li>
                <Link 
                  href="/search" 
                  className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all text-center"
                >
                  Search All Recipes
                </Link>
              </li>
              <li>
                <Link 
                  href="/tags" 
                  className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all text-center"
                >
                  Browse Recipe Tags
                </Link>
              </li>
              <li>
                <Link 
                  href="/help" 
                  className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all text-center"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all text-center"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 