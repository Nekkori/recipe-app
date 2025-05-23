import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onLogin: (data: LoginFormValues) => void;
  onForgotPassword: () => void;
  onSignUpClick: () => void;
}

export const LoginForm = ({ onLogin, onForgotPassword, onSignUpClick }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      await onLogin(data);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-serif font-bold text-3xl mb-2">Welcome Back</h2>
        <p className="text-neutral-600">
          Sign in to access your favorite recipes
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-400' : 'border-neutral-300'
            } focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
              Password
            </label>
            <button 
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-primary-600 hover:text-primary-800 font-medium"
            >
              Forgot password?
            </button>
          </div>
          <input
            id="password"
            type="password"
            {...register('password')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.password ? 'border-red-400' : 'border-neutral-300'
            } focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        
        <div className="flex items-center">
          <input
            id="rememberMe"
            type="checkbox"
            {...register('rememberMe')}
            className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-neutral-700">
            Remember me
          </label>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          className="w-full py-3 rounded-lg font-medium"
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-neutral-600">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={onSignUpClick}
            className="font-medium text-primary-600 hover:text-primary-800"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}; 