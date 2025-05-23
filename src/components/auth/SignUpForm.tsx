import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signupSchema>;

interface SignUpFormProps {
  onSignUp: (data: Omit<SignUpFormValues, 'confirmPassword' | 'terms'>) => void;
  onLoginClick: () => void;
}

export const SignUpForm = ({ onSignUp, onLoginClick }: SignUpFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setIsLoading(true);
    try {
      // Extract only needed fields
      const { name, email, password } = data;
      await onSignUp({ name, email, password });
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-serif font-bold text-3xl mb-2">Create an Account</h2>
        <p className="text-neutral-600">
          Join our community of food lovers
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-400' : 'border-neutral-300'
            } focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

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
          <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
            Password
          </label>
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
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.confirmPassword ? 'border-red-400' : 'border-neutral-300'
            } focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all`}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              {...register('terms')}
              className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-medium text-neutral-700">
              I agree to the <a href="#" className="text-primary-600 hover:text-primary-800">Terms</a> and <a href="#" className="text-primary-600 hover:text-primary-800">Privacy Policy</a>
            </label>
            {errors.terms && (
              <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
            )}
          </div>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          className="w-full py-3 rounded-lg font-medium"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-neutral-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onLoginClick}
            className="font-medium text-primary-600 hover:text-primary-800"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}; 