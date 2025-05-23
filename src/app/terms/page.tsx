import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChefHat } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | RecipeFinder',
  description: 'The terms and conditions governing your use of the RecipeFinder platform.',
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-neutral-600">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-lg text-neutral-600 mb-8">
            Welcome to RecipeFinder. Please read these Terms of Service ("Terms", "Terms of Service") carefully 
            before using the RecipeFinder website operated by our company. Your access to and use of the Service 
            is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, 
            users, and others who access or use the Service.
          </p>
          
          <p className="mb-8">
            <strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, 
            you may not access the Service.</strong>
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">1. Accounts</h2>
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            <p className="mt-4">You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
            <p className="mt-4">You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">2. Content</h2>
            <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>
            <p className="mt-4">By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</p>
            <p className="mt-4">We reserve the right to terminate the account of anyone found to be infringing on a copyright or other intellectual property rights.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">3. Recipe Submission and Sharing</h2>
            <p>When you submit a recipe to our Service, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your recipe in any existing or future media. You also grant us the right to sub-license these rights and the right to bring an action for infringement of these rights.</p>
            <p className="mt-4">Your recipe will be credited to your username or the name you provide. If you wish to remain anonymous, please indicate this when submitting your recipe.</p>
            <p className="mt-4">We reserve the right to edit or decline to publish any recipe for any reason.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">4. User Generated Content</h2>
            <p>The Service may allow users to post reviews, comments, and ratings. These are considered User Generated Content. You retain all rights in, and are solely responsible for, the User Generated Content you post to the Service.</p>
            <p className="mt-4">You agree not to post User Generated Content that:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>May create a risk of harm to any other person or entity</li>
              <li>May constitute or contribute to a crime or tort</li>
              <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
              <li>Contains any information or content that is illegal</li>
              <li>Contains any information or content that you do not have a right to make available</li>
              <li>Infringes any intellectual property or other proprietary rights of RecipeFinder or any other party</li>
              <li>Contains any unsolicited or unauthorized advertising, promotional materials, or any other form of solicitation</li>
              <li>Contains software viruses or any other computer code designed to interfere with the functionality of the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">5. Intellectual Property</h2>
            <p>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of RecipeFinder and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of RecipeFinder.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">6. Links To Other Websites</h2>
            <p>Our Service may contain links to third-party websites or services that are not owned or controlled by RecipeFinder.</p>
            <p className="mt-4">RecipeFinder has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that RecipeFinder shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
            <p className="mt-4">We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">7. Termination</h2>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            <p className="mt-4">Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
            <p className="mt-4">All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">8. Disclaimer</h2>
            <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
            <p className="mt-4">RecipeFinder, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">9. Limitation of Liability</h2>
            <p>In no event shall RecipeFinder, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">10. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
            <p className="mt-4">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">11. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is a material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p className="mt-4">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-4">12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <div className="bg-neutral-50 p-6 rounded-xl mt-4">
              <p className="mb-1"><strong>RecipeFinder</strong></p>
              <p className="mb-1">123 Culinary Street</p>
              <p className="mb-1">Foodington, FK 12345</p>
              <p className="mb-1">United States</p>
              <p className="mb-3"><a href="mailto:legal@recipefinder.com" className="text-primary-600 hover:text-primary-700">legal@recipefinder.com</a></p>
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