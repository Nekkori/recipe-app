import React from 'react';
import Link from 'next/link';
import { Briefcase, GraduationCap, Utensils, Camera, Code, PenTool, BookOpen, Heart, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Our Team | RecipeFinder',
  description: 'Meet the passionate team behind RecipeFinder and learn about our company culture.',
};

type SocialLinks = {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
};

type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLinks;
};

export default function TeamPage() {
  const leadershipTeam: LeadershipMember[] = [
    {
      name: 'Emily Chen',
      role: 'Founder & CEO',
      bio: 'Emily founded RecipeFinder after 15 years in the restaurant industry. Her vision was to make professional cooking techniques accessible to home cooks everywhere.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com'
      }
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Technology Officer',
      bio: 'Former software engineer at a major tech company, Marcus is both a coding expert and avid food enthusiast who built the first version of RecipeFinder.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      name: 'Sophia Patel',
      role: 'Chief Content Officer',
      bio: 'An accomplished food writer and cookbook author, Sophia oversees all recipe content, ensuring accuracy, inspiration, and cultural authenticity.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com'
      }
    },
  ];

  const teamMembers = [
    {
      name: 'David Kim',
      role: 'Lead Photographer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      icon: <Camera className="h-5 w-5 text-primary-500" />
    },
    {
      name: 'Alex Rivera',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      icon: <Code className="h-5 w-5 text-primary-500" />
    },
    {
      name: 'Jasmine Taylor',
      role: 'Recipe Developer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      icon: <Utensils className="h-5 w-5 text-primary-500" />
    },
    {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      icon: <PenTool className="h-5 w-5 text-primary-500" />
    },
    {
      name: 'Olivia Wilson',
      role: 'Content Editor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      icon: <BookOpen className="h-5 w-5 text-primary-500" />
    },
    {
      name: 'Daniel Martinez',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      icon: <Briefcase className="h-5 w-5 text-primary-500" />
    },
    {
      name: 'Sarah Johnson',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      icon: <Heart className="h-5 w-5 text-primary-500" />
    },
    {
      name: 'James Wilson',
      role: 'Culinary Researcher',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      icon: <GraduationCap className="h-5 w-5 text-primary-500" />
    },
  ];

  const cultureValues = [
    {
      title: 'Culinary Excellence',
      description: 'We hold ourselves to high standards in recipe development, testing, and presentation.',
    },
    {
      title: 'Inclusivity',
      description: 'We celebrate diverse culinary traditions and make cooking accessible to everyone.',
    },
    {
      title: 'Innovation',
      description: 'We constantly seek new ways to improve the cooking experience for our users.',
    },
    {
      title: 'Community',
      description: 'We foster connections among food lovers and encourage knowledge sharing.',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto relative">
        {/* Home Logo/Button */}
        <Link 
          href="/" 
          className="absolute top-0 left-0 z-10 flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
          aria-label="Return to Homepage"
        >
          <ChefHat size={24} className="text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="font-serif font-medium text-primary-600 group-hover:text-primary-800 transition-colors">RecipeFinder</span>
        </Link>
        
        {/* Hero Section */}
        <div className="text-center mb-16 pt-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Meet Our Team
          </h1>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto mb-10">
            We're a diverse group of food enthusiasts, culinary experts, and technologists united by our passion 
            for making cooking accessible and enjoyable for everyone.
          </p>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581284986978-c42da2b8dd0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Team cooking together" 
              className="rounded-2xl shadow-soft-lg w-full max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-10 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 border border-neutral-100">
                <div className="aspect-w-1 aspect-h-1 bg-neutral-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-1 text-neutral-800">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-neutral-600 text-sm mb-5">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    {Object.keys(member.social).map((platform) => (
                      <a
                        key={platform}
                        href={member.social[platform as keyof SocialLinks]}
                        className="text-neutral-400 hover:text-primary-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{platform}</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          {platform === 'twitter' && (
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          )}
                          {platform === 'linkedin' && (
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          )}
                          {platform === 'instagram' && (
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                          )}
                          {platform === 'github' && (
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          )}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-20">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-10 text-center">
            Meet the Rest of Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-soft-sm hover:shadow-soft-md transition-shadow duration-300 border border-neutral-100 flex flex-col">
                <div className="w-full aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 flex items-center">
                  <div className="mr-3">{member.icon}</div>
                  <div>
                    <h3 className="font-medium text-base text-neutral-800">{member.name}</h3>
                    <p className="text-primary-600 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Culture */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-primary-50 to-white p-8 rounded-2xl mb-10">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary-800 mb-6 text-center">
              Our Culture
            </h2>
            <p className="text-primary-700 text-lg text-center max-w-3xl mx-auto">
              At RecipeFinder, we foster a collaborative, creative environment where everyone's ideas are valued. 
              We're united by our love of food and our mission to empower home cooks worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft-sm hover:shadow-soft-md transition-shadow duration-300 border border-neutral-100">
                <h3 className="font-serif font-bold text-xl mb-3 text-neutral-800">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544147844-b773346d590c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Team collaboration" 
                className="rounded-xl shadow-soft-md mb-4"
              />
              <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">Collaborative Environment</h3>
              <p className="text-neutral-600">We believe the best ideas come from open collaboration across departments and disciplines.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Kitchen testing" 
                className="rounded-xl shadow-soft-md mb-4"
              />
              <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">Recipe Testing</h3>
              <p className="text-neutral-600">Every recipe goes through rigorous testing in our kitchen to ensure reliability and delicious results.</p>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4">
            Join Our Team
          </h2>
          <p className="mb-6 text-primary-50 max-w-2xl mx-auto">
            Passionate about food, technology, or content creation? We're always looking for talented individuals to join our growing team.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary-700 hover:bg-primary-50 rounded-full shadow-md"
          >
            View Open Positions
          </Button>
        </div>
      </div>
    </main>
  );
} 