import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CookieIcon, Info, Shield, Settings, CheckCircle, ChefHat } from 'lucide-react';

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="text-neutral-600 text-lg mb-4">
              How we use cookies and similar technologies on RecipeFinder
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-primary">
            <p className="lead">
              This Cookie Policy explains how RecipeFinder uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies are 
              and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2>What are cookies?</h2>
            
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
              as well as to provide reporting information.
            </p>
            
            <p>
              Cookies set by the website owner (in this case, RecipeFinder) are called "first-party cookies."
              Cookies set by parties other than the website owner are called "third-party cookies."
              Third-party cookies enable third-party features or functionality to be provided on or through the website
              (e.g., advertising, interactive content, and analytics).
            </p>
            
            <div className="not-prose my-8">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
                <div className="p-6 border-b border-neutral-100">
                  <h3 className="font-serif text-xl font-medium text-primary-800 mb-2">Types of Cookies We Use</h3>
                  <p className="text-neutral-600 text-sm">
                    We use the following types of cookies on our website:
                  </p>
                </div>
                <div className="divide-y divide-neutral-100">
                  <div className="p-6 flex">
                    <div className="mr-4">
                      <div className="bg-primary-50 p-3 rounded-full">
                        <CookieIcon className="h-5 w-5 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-1">Essential Cookies</h4>
                      <p className="text-neutral-600 text-sm">
                        These cookies are necessary for the website to function and cannot be switched off.
                        They are usually only set in response to actions made by you which amount to a request for services,
                        such as setting your privacy preferences, logging in, or filling in forms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 flex">
                    <div className="mr-4">
                      <div className="bg-primary-50 p-3 rounded-full">
                        <Info className="h-5 w-5 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-1">Performance & Analytics Cookies</h4>
                      <p className="text-neutral-600 text-sm">
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                        They help us to know which pages are the most and least popular and see how visitors move around the site.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 flex">
                    <div className="mr-4">
                      <div className="bg-primary-50 p-3 rounded-full">
                        <Settings className="h-5 w-5 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-1">Functional Cookies</h4>
                      <p className="text-neutral-600 text-sm">
                        These cookies enable the website to provide enhanced functionality and personalization.
                        They may be set by us or by third-party providers whose services we have added to our pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>How can I control cookies?</h2>
            
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
              preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
            </p>
            
            <p>
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies,
              you may still use our website though your access to some functionality and areas of our website may be restricted.
              As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser,
              you should visit your browser's help menu for more information.
            </p>
            
            <h2>How often will we update this Cookie Policy?</h2>
            
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use
              or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly
              to stay informed about our use of cookies and related technologies.
            </p>
            
            <p>
              The date at the bottom of this Cookie Policy indicates when it was last updated.
            </p>
            
            <div className="not-prose bg-primary-50 rounded-xl p-6 my-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary-600 mr-2" />
                <h3 className="font-medium text-primary-700 text-lg">Your Cookie Preferences</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                You can update your cookie preferences at any time by clicking the "Cookie Settings" button below.
              </p>
              <Button variant="primary">
                Cookie Settings
              </Button>
            </div>
            
            <h2>Where can I get further information?</h2>
            
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            
            <ul>
              <li>Email: privacy@recipefinder.com</li>
              <li>
                <Link href="/contact" className="text-primary-600 hover:text-primary-700">
                  Contact Form
                </Link>
              </li>
            </ul>
            
            <div className="flex items-center mt-12 text-neutral-500 text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              <p>Last updated: July 15, 2023</p>
            </div>
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