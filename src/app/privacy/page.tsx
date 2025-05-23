import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChefHat } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | RecipeFinder',
  description: 'Our commitment to protecting your privacy and how we handle your personal information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 15, 2023';

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Home Logo/Button */}
      <div className="max-w-4xl mx-auto relative">
        <Link 
          href="/" 
          className="absolute top-0 left-0 -mt-6 flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
          aria-label="Return to Homepage"
        >
          <ChefHat size={24} className="text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="font-serif font-medium text-primary-600 group-hover:text-primary-800 transition-colors">RecipeFinder</span>
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-600">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-lg text-neutral-600 mb-8">
            At RecipeFinder, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. 
            If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">Information We Collect</h2>
            
            <h3 className="font-serif text-xl font-semibold text-neutral-800 mt-6 mb-3">Personal Data</h3>
            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>When registering on our site</li>
              <li>When subscribing to our newsletter</li>
              <li>When filling out a form</li>
              <li>In connection with other activities, services, features, or resources we make available</li>
            </ul>
            <p>The personal information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Profile picture (if provided)</li>
              <li>Account preferences</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold text-neutral-800 mt-6 mb-3">Non-Personal Data</h3>
            <p>We may collect non-personal identification information about Users whenever they interact with our Site. This may include:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Browser name</li>
              <li>Type of computer or device</li>
              <li>Technical information about Users' means of connection to our Site</li>
              <li>IP address</li>
              <li>Operating system</li>
              <li>Internet service providers</li>
              <li>Other similar information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">How We Use Collected Information</h2>
            <p>RecipeFinder may collect and use Users' personal information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>To improve customer service</strong> - Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
              <li><strong>To personalize user experience</strong> - We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li><strong>To improve our Site</strong> - We may use feedback you provide to improve our products and services.</li>
              <li><strong>To send periodic emails</strong> - We may use the email address to send User information and updates pertaining to their recipes, favorites, or requests. It may also be used to respond to inquiries, questions, and/or other requests.</li>
              <li><strong>To manage recipe preferences</strong> - We may use information about your dietary preferences, favorites, and usage patterns to recommend recipes that may interest you.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">How We Protect Your Information</h2>
            <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.</p>
            <p className="mt-4">Sensitive and private data exchange between the Site and its Users happens over an SSL secured communication channel and is encrypted and protected with digital signatures.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">Sharing Your Personal Information</h2>
            <p>We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">Third-Party Websites</h2>
            <p>Users may find content on our Site that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">Cookies</h2>
            <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">Children's Privacy</h2>
            <p>Our Site is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">Changes to This Privacy Policy</h2>
            <p>RecipeFinder has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">Your Acceptance of These Terms</h2>
            <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">Contacting Us</h2>
            <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
            <div className="bg-neutral-50 p-6 rounded-xl mt-4">
              <p className="mb-1"><strong>RecipeFinder</strong></p>
              <p className="mb-1">123 Culinary Street</p>
              <p className="mb-1">Foodington, FK 12345</p>
              <p className="mb-1">United States</p>
              <p className="mb-3"><a href="mailto:privacy@recipefinder.com" className="text-primary-600 hover:text-primary-700">privacy@recipefinder.com</a></p>
              <a href="/contact" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Contact Us <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 