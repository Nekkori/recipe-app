import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CalendarIcon, Clock, Tag, ChevronRight, Search, Home, ChefHat } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Kitchen Tools Every Home Chef Needs",
    excerpt: "Discover the must-have tools that will take your cooking to the next level.",
    date: "June 15, 2023",
    readTime: "5 min read",
    category: "Kitchen Essentials",
    image: "/images/blog/kitchen-tools.jpg",
    slug: "essential-kitchen-tools"
  },
  {
    id: 2,
    title: "Seasonal Cooking: Making the Most of Summer Produce",
    excerpt: "Learn how to select, store, and prepare the freshest summer fruits and vegetables.",
    date: "July 3, 2023",
    readTime: "7 min read",
    category: "Seasonal Cooking",
    image: "/images/blog/summer-produce.jpg",
    slug: "summer-produce-guide"
  },
  {
    id: 3,
    title: "Mastering the Art of Meal Prepping",
    excerpt: "Time-saving strategies for meal preparation that will streamline your weekly cooking routine.",
    date: "August 12, 2023",
    readTime: "6 min read",
    category: "Meal Planning",
    image: "/images/blog/meal-prep.jpg",
    slug: "meal-prepping-guide"
  },
  {
    id: 4,
    title: "International Flavors: Exploring Global Spices",
    excerpt: "A journey through the world's most distinctive spices and how to use them in your cooking.",
    date: "September 5, 2023",
    readTime: "8 min read",
    category: "Global Cuisine",
    image: "/images/blog/global-spices.jpg",
    slug: "exploring-global-spices"
  },
  {
    id: 5,
    title: "Baking 101: Perfecting Your Bread Technique",
    excerpt: "From kneading to proofing, learn the fundamentals of baking delicious homemade bread.",
    date: "October 18, 2023",
    readTime: "10 min read",
    category: "Baking",
    image: "/images/blog/bread-baking.jpg",
    slug: "bread-baking-techniques"
  },
  {
    id: 6,
    title: "Sustainable Cooking: Reducing Food Waste in Your Kitchen",
    excerpt: "Practical tips for more eco-friendly cooking practices and minimizing your environmental impact.",
    date: "November 22, 2023",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/images/blog/food-waste.jpg",
    slug: "reducing-food-waste"
  }
];

const categories = [
  "Kitchen Essentials",
  "Seasonal Cooking",
  "Meal Planning",
  "Global Cuisine",
  "Baking",
  "Sustainability",
  "Cooking Techniques",
  "Recipe Collections"
];

export default function BlogPage() {
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
              Culinary Insights & Inspiration
            </h1>
            <p className="text-neutral-600 text-lg mb-10">
              Explore our collection of articles, tips, and stories about the world of cooking.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-neutral-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 focus:outline-none shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-100 flex flex-col"
                >
                  <div className="h-48 bg-neutral-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-300/20"></div>
                    <div className="absolute top-3 left-3 bg-primary-50 text-primary-700 text-xs font-medium py-1 px-2 rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-neutral-500 mb-2">
                      <CalendarIcon size={14} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-neutral-800 mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 font-medium text-sm flex items-center mt-auto group"
                    >
                      Read more
                      <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="mr-2">Previous</Button>
              <Button variant="outline" className="ml-2">Next</Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-neutral-100 shadow-sm p-6 mb-6">
              <h3 className="font-serif font-medium text-lg text-neutral-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors group"
                    >
                      <ChevronRight size={16} className="text-neutral-400 group-hover:text-primary-500 mr-2" />
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="font-serif font-medium text-lg text-primary-800 mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Get the latest recipes, tips, and culinary inspiration delivered to your inbox.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 focus:outline-none mb-3"
                  required
                />
                <Button type="submit" variant="primary" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 