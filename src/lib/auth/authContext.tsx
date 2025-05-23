'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
}

// Define auth context shape
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Interface for the provider props
interface AuthProviderProps {
  children: React.ReactNode;
}

// Mock API calls - would be replaced with real API calls
const mockLogin = async (email: string, password: string): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Use password for verification in a real implementation
  console.log('Login with password:', password);
  
  // For demo purposes, just return a mock user
  return {
    id: '1',
    name: 'Demo User',
    email: email,
  };
};

const mockSignup = async (name: string, email: string, password: string): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Use password for account creation in a real implementation
  console.log('Signup with password:', password);
  
  // For demo purposes, just return a mock user
  return {
    id: '1',
    name: name,
    email: email,
  };
};

// Provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if user is already logged in on mount
  useEffect(() => {
    const checkUser = async () => {
      try {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkUser();
  }, []);
  
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await mockLogin(email, password);
      setUser(user);
      // Save user to local storage for persistence
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await mockSignup(name, email, password);
      setUser(user);
      // Save user to local storage for persistence
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook for easy context use
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 