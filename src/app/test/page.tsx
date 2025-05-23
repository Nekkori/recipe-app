import { Button } from "@/components/ui/Button";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-neutral-50">
      <header className="border-b border-neutral-100 bg-white/70 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" x2="6" y1="1" y2="4"></line>
                <line x1="10" x2="10" y1="1" y2="4"></line>
                <line x1="14" x2="14" y1="1" y2="4"></line>
              </svg>
            </div>
            <span className="text-xl font-serif font-semibold">GourmetGuide</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#" className="text-neutral-900 hover:text-primary-600 transition">Home</a>
            <a href="#" className="text-neutral-900 hover:text-primary-600 transition">Recipes</a>
            <a href="#" className="text-neutral-900 hover:text-primary-600 transition">Collections</a>
            <a href="#" className="text-neutral-900 hover:text-primary-600 transition">About</a>
          </nav>
          
          <Button variant="primary" size="sm">Sign In</Button>
        </div>
      </header>

      <section className="py-16 premium-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-4 text-balance">
              Discover <span className="text-primary-600">Delicious</span> Recipes for Every Occasion
            </h1>
            <p className="text-lg text-neutral-700 mb-8 text-balance">
              Elevate your culinary experience with our premium collection of handcrafted recipes from world-class chefs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">Explore Recipes</Button>
              <Button variant="outline" size="lg">View Collections</Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-2 text-neutral-900">Featured Recipes</h2>
          <p className="text-neutral-600 mb-10">Discover our most popular dishes loved by our community</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recipe Card 1 */}
            <div className="premium-card recipe-card group">
              <div className="overflow-hidden">
                <div className="h-48 bg-primary-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 9v6M15 12H9M7 20l10-16"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-accent-yellow-light text-accent-yellow-dark text-xs font-medium rounded-full">
                    30 min
                  </span>
                  <button className="text-neutral-400 hover:text-primary-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Seared Salmon with Citrus Glaze</h3>
                <p className="text-neutral-600 line-clamp-2 mb-4">Pan-seared salmon with a tangy citrus glaze, served with fresh seasonal vegetables.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-xs font-medium">CM</div>
                      <div className="h-8 w-8 rounded-full bg-accent-yellow-light flex items-center justify-center text-accent-yellow-dark text-xs font-medium">JD</div>
                    </div>
                    <span className="text-sm text-neutral-500 ml-2">4.9 (128)</span>
                  </div>
                  <Button variant="ghost" size="sm">View Recipe</Button>
                </div>
              </div>
            </div>
            
            {/* Recipe Card 2 */}
            <div className="premium-card recipe-card group">
              <div className="overflow-hidden">
                <div className="h-48 bg-accent-yellow-light relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-accent-yellow-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                      <line x1="6" x2="18" y1="17" y2="17"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-accent-green-light text-accent-green-dark text-xs font-medium rounded-full">
                    45 min
                  </span>
                  <button className="text-neutral-400 hover:text-primary-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Butternut Squash Risotto</h3>
                <p className="text-neutral-600 line-clamp-2 mb-4">Creamy risotto with roasted butternut squash, sage, and parmesan cheese.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-xs font-medium">TS</div>
                      <div className="h-8 w-8 rounded-full bg-accent-green-light flex items-center justify-center text-accent-green-dark text-xs font-medium">MK</div>
                    </div>
                    <span className="text-sm text-neutral-500 ml-2">4.7 (96)</span>
                  </div>
                  <Button variant="ghost" size="sm">View Recipe</Button>
                </div>
              </div>
            </div>
            
            {/* Recipe Card 3 */}
            <div className="premium-card recipe-card group">
              <div className="overflow-hidden">
                <div className="h-48 bg-accent-green-light relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-accent-green-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" x2="4" y1="22" y2="15"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                    20 min
                  </span>
                  <button className="text-neutral-400 hover:text-primary-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Mediterranean Grilled Chicken</h3>
                <p className="text-neutral-600 line-clamp-2 mb-4">Tender grilled chicken marinated in herbs, served with a fresh Greek salad.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-accent-yellow-light flex items-center justify-center text-accent-yellow-dark text-xs font-medium">AJ</div>
                      <div className="h-8 w-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-xs font-medium">RK</div>
                    </div>
                    <span className="text-sm text-neutral-500 ml-2">4.8 (108)</span>
                  </div>
                  <Button variant="ghost" size="sm">View Recipe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-neutral-50 border-t border-neutral-100 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" x2="6" y1="1" y2="4"></line>
                    <line x1="10" x2="10" y1="1" y2="4"></line>
                    <line x1="14" x2="14" y1="1" y2="4"></line>
                  </svg>
                </div>
                <span className="text-xl font-serif font-semibold">GourmetGuide</span>
              </div>
              <p className="text-neutral-600 max-w-md">
                Discover and share recipes that inspire. Our mission is to make cooking at home more enjoyable and accessible.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-neutral-600 hover:text-primary-600 text-sm">Recipes</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-primary-600 text-sm">Collections</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-primary-600 text-sm">Chefs</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-primary-600 text-sm">Ingredients</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-neutral-600 hover:text-primary-600 text-sm">About</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-primary-600 text-sm">Careers</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-primary-600 text-sm">Privacy</a></li>
                  <li><a href="#" className="text-neutral-600 hover:text-primary-600 text-sm">Terms</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-semibold mb-4">Subscribe</h4>
                <p className="text-neutral-600 text-sm mb-2">Get weekly recipe inspirations.</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 border border-neutral-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <button className="bg-primary-500 text-white px-3 py-2 rounded-r-md hover:bg-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" x2="11" y1="2" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} GourmetGuide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 