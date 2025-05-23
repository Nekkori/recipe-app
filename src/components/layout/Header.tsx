import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Search, Filter, User, Menu, X, LogOut, ChevronRight, Coffee, Heart, BookOpen } from 'lucide-react';
import { AuthModal } from '@/components/auth/AuthModal';
import { useAuth } from '@/lib/auth/authContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<'login' | 'signup'>('login');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const router = useRouter();
  const { user, isAuthenticated, login, signup, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchModalOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchModalOpen]);

  const handleLoginClick = () => {
    setAuthModalView('login');
    setAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthModalView('signup');
    setAuthModalOpen(true);
  };

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password);
      setAuthModalOpen(false);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignup = async (values: { name: string; email: string; password: string }) => {
    try {
      await signup(values.name, values.email, values.password);
      setAuthModalOpen(false);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
  };

  const handleForgotPassword = () => {
    // For demo purposes, just log a message
    console.log('Forgot password clicked');
    alert('Password reset functionality would be implemented here');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/recipes?search=${encodeURIComponent(searchQuery)}`);
      setSearchModalOpen(false);
      setSearchQuery('');
    }
  };

  const quickSearchTerms = [
    "Italian pasta",
    "Vegan desserts",
    "Quick dinner",
    "Healthy lunch",
    "Gluten-free"
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Meal Plans", path: "/meal-plans" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-500 backdrop-blur-md',
          isScrolled 
            ? 'bg-white/95 shadow-layered' 
            : 'bg-gradient-to-r from-primary-50/80 via-white/80 to-primary-50/80',
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="mr-2 text-primary-600 transition-all duration-300 group-hover:text-primary-700">
                <Coffee size={28} className="stroke-current" />
              </div>
              <span className="font-serif font-bold text-2xl md:text-3xl text-primary-600 transition-all duration-300 group-hover:text-primary-700">
                RecipeFinder
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <nav className="mr-8">
                <ul className="flex space-x-6">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link href={link.path} className="text-neutral-700 hover:text-primary-600 font-medium transition-all duration-300 relative group">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="flex items-center space-x-5">
                <Button 
                  variant="ghost" 
                  aria-label="Search"
                  className="text-neutral-700 hover:text-primary-600 hover:bg-primary-50/70 transition-all duration-300 group"
                  onClick={() => setSearchModalOpen(true)}
                >
                  <Search size={20} className="group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  variant="ghost" 
                  aria-label="Favorites"
                  className="text-neutral-700 hover:text-primary-600 hover:bg-primary-50/70 transition-all duration-300 group"
                  onClick={() => router.push('/favorites')}
                >
                  <Heart size={20} className="group-hover:scale-110 transition-transform" />
                </Button>
                
                {isAuthenticated ? (
                  <div className="relative">
                    <Button 
                      variant="ghost" 
                      aria-label="Profile"
                      className="text-neutral-700 hover:text-primary-600 hover:bg-primary-50/70 transition-all duration-300 flex items-center space-x-2 group"
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    >
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-200 transition-colors">
                        <User size={16} />
                      </div>
                      <span className="font-medium">{user?.name.split(' ')[0]}</span>
                    </Button>
                    
                    {/* User dropdown menu */}
                    {userDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-soft-lg py-1 z-50 border border-neutral-100 overflow-hidden"
                      >
                        <Link href="/favorites" className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 transition-colors">
                          <div className="flex items-center">
                            <Heart size={16} className="mr-2 text-primary-500" />
                            <span>My Favorites</span>
                          </div>
                        </Link>
                        <Link href="/profile" className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 transition-colors">
                          <div className="flex items-center">
                            <User size={16} className="mr-2 text-primary-500" />
                            <span>Profile Settings</span>
                          </div>
                        </Link>
                        <Link href="/recipes/saved" className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 transition-colors">
                          <div className="flex items-center">
                            <BookOpen size={16} className="mr-2 text-primary-500" />
                            <span>Saved Recipes</span>
                          </div>
                        </Link>
                        <div className="border-t border-neutral-100 my-1"></div>
                        <button 
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 transition-colors flex items-center"
                        >
                          <LogOut size={16} className="mr-2 text-primary-500" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="font-medium border-neutral-200 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300"
                      onClick={handleLoginClick}
                    >
                      Log In
                    </Button>
                    <Button 
                      variant="primary"
                      size="sm"
                      className="font-medium shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                      onClick={handleSignupClick}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="text-neutral-700 hover:bg-primary-50/70"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-neutral-100 shadow-soft-md"
          >
            <div className="container mx-auto py-4 px-4">
              <div className="flex flex-col space-y-4">
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      href={link.path}
                      className="py-2 px-4 text-neutral-700 hover:bg-primary-50 rounded-lg font-medium transition-colors flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ChevronRight size={16} className="mr-2 text-primary-500" />
                      {link.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="flex justify-between">
                  <Button 
                    variant="ghost" 
                    aria-label="Search"
                    className="flex-1 justify-center text-neutral-600 hover:bg-primary-50/70"
                    onClick={() => {
                      setSearchModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Search size={20} />
                    <span className="ml-2">Search</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    aria-label="Favorites"
                    className="flex-1 justify-center text-neutral-600 hover:bg-primary-50/70"
                    onClick={() => {
                      router.push('/favorites');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Heart size={20} />
                    <span className="ml-2">Favorites</span>
                  </Button>
                </div>
                
                <div className="border-t border-neutral-100 pt-3">
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-3 flex items-center bg-primary-50 rounded-lg">
                        <div className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                          <User size={18} />
                        </div>
                        <div>
                          <div className="font-medium">{user?.name}</div>
                          <div className="text-sm text-neutral-500">{user?.email}</div>
                        </div>
                      </div>
                      <Button 
                        variant="outline"
                        className="w-full justify-center mt-3 border-neutral-200 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300"
                        onClick={handleLogout}
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <div className="flex space-x-2 mt-2">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-neutral-200 hover:border-primary-200 hover:bg-primary-50"
                        onClick={handleLoginClick}
                      >
                        Log In
                      </Button>
                      <Button 
                        variant="primary"
                        className="flex-1 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600"
                        onClick={handleSignupClick}
                      >
                        Sign Up
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-start justify-center overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl bg-white rounded-xl mt-24 mx-4 shadow-xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-serif font-semibold text-neutral-800">Find Delicious Recipes</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neutral-500 hover:text-neutral-700 rounded-full"
                  onClick={() => setSearchModalOpen(false)}
                >
                  <X size={20} />
                </Button>
              </div>
              
              <form onSubmit={handleSearchSubmit} className="mb-6">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                    <Search size={20} />
                  </div>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by recipe name, ingredient, cuisine..."
                    className="w-full py-3.5 pl-12 pr-4 rounded-full border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 shadow-sm hover:shadow-md transition-all duration-300"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-full px-4 py-1.5 bg-gradient-to-r from-primary-500 to-primary-600"
                  >
                    Search
                  </Button>
                </div>
              </form>
              
              <div>
                <h4 className="text-sm font-medium text-neutral-500 mb-4">Popular Searches</h4>
                <div className="grid grid-cols-2 gap-3">
                  {quickSearchTerms.map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        router.push(`/recipes?search=${encodeURIComponent(term)}`);
                        setSearchModalOpen(false);
                      }}
                      className="flex items-center justify-between text-left px-4 py-3 rounded-lg text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors border border-neutral-100 hover:border-primary-200 group"
                    >
                      <span>{term}</span>
                      <ChevronRight size={16} className="text-neutral-400 group-hover:text-primary-500 transform group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialView={authModalView}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onForgotPassword={handleForgotPassword}
      />
    </>
  );
}; 