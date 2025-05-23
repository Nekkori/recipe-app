import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Check, Mail, ChefHat } from 'lucide-react';

export default function AccessibilityPage() {
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
              Accessibility Statement
            </h1>
            <p className="text-neutral-600 text-lg mb-4">
              Our commitment to making RecipeFinder accessible to everyone
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-primary mx-auto">
            <p>
              At RecipeFinder, we believe that everyone should be able to access and enjoy our recipes and cooking content. 
              We are committed to ensuring our website is accessible to people of all abilities and disabilities.
            </p>
            
            <h2>Our Accessibility Principles</h2>
            
            <p>
              We strive to meet WCAG 2.1 AA standards across our website and are continuously working to improve our accessibility features.
              Our commitment includes:
            </p>
            
            <ul>
              <li>Clear, legible text with appropriate contrast</li>
              <li>Alternative text for images</li>
              <li>Keyboard navigation support</li>
              <li>Semantic HTML elements</li>
              <li>ARIA attributes where necessary</li>
              <li>Support for screen readers and other assistive technologies</li>
              <li>Responsive design that works across devices</li>
            </ul>
            
            <h2>Current Accessibility Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="bg-white p-6 rounded-lg border border-neutral-100 shadow-sm">
                <h3 className="flex items-center font-medium text-lg mb-3 text-primary-700">
                  <Check size={18} className="mr-2 text-primary-500" />
                  Text Readability
                </h3>
                <p className="text-neutral-600 text-sm">
                  We use clear, legible fonts and ensure sufficient contrast between text and background colors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-100 shadow-sm">
                <h3 className="flex items-center font-medium text-lg mb-3 text-primary-700">
                  <Check size={18} className="mr-2 text-primary-500" />
                  Keyboard Navigation
                </h3>
                <p className="text-neutral-600 text-sm">
                  All interactive elements are accessible via keyboard, with visible focus indicators.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-100 shadow-sm">
                <h3 className="flex items-center font-medium text-lg mb-3 text-primary-700">
                  <Check size={18} className="mr-2 text-primary-500" />
                  Screen Reader Support
                </h3>
                <p className="text-neutral-600 text-sm">
                  We use appropriate ARIA labels and semantic HTML to ensure compatibility with screen readers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-100 shadow-sm">
                <h3 className="flex items-center font-medium text-lg mb-3 text-primary-700">
                  <Check size={18} className="mr-2 text-primary-500" />
                  Responsive Design
                </h3>
                <p className="text-neutral-600 text-sm">
                  Our website adapts to different screen sizes and devices, ensuring usability across platforms.
                </p>
              </div>
            </div>
            
            <h2>Using Our Website with Assistive Technologies</h2>
            
            <p>
              RecipeFinder is designed to be compatible with the following assistive technologies:
            </p>
            
            <ul>
              <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
              <li>Screen magnification tools</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
            
            <h2>Known Limitations</h2>
            
            <p>
              While we strive to make our website as accessible as possible, we acknowledge that there may be areas that need improvement.
              We are actively working on addressing the following known issues:
            </p>
            
            <ul>
              <li>Some older recipe content may have images without proper alternative text</li>
              <li>Video content is being updated with complete captions and transcripts</li>
              <li>Some complex interactive features are being refined for better screen reader support</li>
            </ul>
            
            <h2>Accessibility Feedback</h2>
            
            <p>
              We welcome your feedback on the accessibility of RecipeFinder. If you encounter any barriers 
              or have suggestions for improvement, please contact us using one of the following methods:
            </p>
            
            <div className="bg-primary-50 p-6 rounded-xl my-8">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="font-medium text-primary-700">Contact Us</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                We are committed to addressing accessibility barriers and continuously improving our website.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="mailto:accessibility@recipefinder.com" className="text-primary-600 hover:text-primary-700 font-medium">
                  accessibility@recipefinder.com
                </Link>
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                  Contact Form
                </Link>
              </div>
            </div>
            
            <h2>Accessibility Statement Updates</h2>
            
            <p>
              This statement was last updated on August 1, 2023. We regularly review and update our accessibility 
              statement as we improve our website and address identified issues.
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/">
              <Button variant="outline">Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 