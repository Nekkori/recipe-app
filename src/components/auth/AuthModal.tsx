import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

// Shape of form values from login form
interface LoginValues {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Shape of form values from signup form
interface SignupValues {
  name: string;
  email: string;
  password: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'signup';
  onLogin: (values: LoginValues) => Promise<void>;
  onSignup: (values: SignupValues) => Promise<void>;
  onForgotPassword: () => void;
}

export const AuthModal = ({
  isOpen,
  onClose,
  initialView = 'login',
  onLogin,
  onSignup,
  onForgotPassword,
}: AuthModalProps) => {
  const [view, setView] = useState<'login' | 'signup'>(initialView);

  // Reset view when modal closes and reopens
  React.useEffect(() => {
    if (isOpen) {
      setView(initialView);
    }
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity" onClick={onClose} />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-auto relative p-6 md:p-8"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} className="text-neutral-500" />
          </button>

          {/* Form content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, x: view === 'login' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: view === 'login' ? 20 : -20 }}
              transition={{ duration: 0.2 }}
            >
              {view === 'login' ? (
                <LoginForm 
                  onLogin={onLogin}
                  onForgotPassword={onForgotPassword}
                  onSignUpClick={() => setView('signup')}
                />
              ) : (
                <SignUpForm 
                  onSignUp={onSignup}
                  onLoginClick={() => setView('login')}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}; 