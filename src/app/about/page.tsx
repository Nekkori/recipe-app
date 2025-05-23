import React from 'react';
import Link from 'next/link';
import { Globe, Users, Heart, Award, Mail, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'About Us | RecipeFinder',
  description: 'Learn about our mission, values, and the team behind RecipeFinder.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <Globe className="h-10 w-10 text-primary-500" />,
      title: 'Global Inspiration',
      description: 'We celebrate culinary traditions from around the world, making diverse recipes accessible to everyone.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: 'Community Driven',
      description: 'Our community of home cooks and professional chefs share knowledge, tips, and culinary experiences.'
    },
    {
      icon: <Heart className="h-10 w-10 text-primary-500" />,
      title: 'Passion for Food',
      description: 'We believe cooking is an act of love and creativity that brings people together and nurtures connections.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary-500" />,
      title: 'Quality Content',
      description: 'Every recipe is carefully tested, well-documented, and presented with beautiful photography.'
    },
  ];

  const teamMembers = [
    {
      name: 'Emily Chen',
      role: 'Founder & Head Chef',
      bio: 'Former restaurant owner with 15 years of culinary experience. Emily founded RecipeFinder to make cooking accessible to everyone.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Technology Officer',
      bio: 'Tech enthusiast and home cook who built the first version of RecipeFinder. Passionate about creating intuitive digital experiences.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sophia Patel',
      role: 'Content Director',
      bio: 'Food writer and cookbook author who ensures all recipes are clear, accurate, and inspiring. Loves experimenting with global cuisines.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'David Kim',
      role: 'Photography Director',
      bio: 'Award-winning food photographer who captures the beauty and appeal of every dish. Believes food should look as good as it tastes.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Home Logo/Button */}
      <div className="max-w-4xl mx-auto relative">
        <Link 
          href="/" 
          className="absolute top-0 left-0 flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
          aria-label="Return to Homepage"
        >
          <ChefHat size={24} className="text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="font-serif font-medium text-primary-600 group-hover:text-primary-800 transition-colors">RecipeFinder</span>
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto pt-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Our Story
          </h1>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto mb-8">
            Founded in 2018, RecipeFinder was born from a simple idea: to make cooking 
            accessible, enjoyable, and inspiring for everyone, regardless of skill level or background.
          </p>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
              alt="Team cooking together" 
              className="rounded-2xl shadow-soft-lg max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-primary-50 to-white p-8 rounded-2xl">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary-800 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-primary-700 text-lg text-center max-w-2xl mx-auto">
              To empower people to create delicious, nutritious meals at home by providing 
              trustworthy recipes, practical cooking advice, and an inspiring community.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft-sm border border-neutral-100">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">{value.title}</h3>
                    <p className="text-neutral-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-soft-md border border-neutral-100 flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="p-5 sm:w-2/3">
                  <h3 className="font-serif font-bold text-xl mb-1 text-neutral-800">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-800 mb-8 text-center">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-5 rounded-xl shadow-soft-sm border border-neutral-100 inline-block">
                    <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">2018</h3>
                    <p className="text-neutral-600">RecipeFinder launched as a simple recipe blog with 50 recipes</p>
                  </div>
                </div>
                <div className="bg-primary-500 rounded-full h-8 w-8 flex items-center justify-center shadow-md z-10">
                  <span className="bg-white rounded-full h-3 w-3"></span>
                </div>
                <div className="md:w-1/2 md:pl-12 invisible md:visible">
                  {/* Spacer */}
                </div>
              </div>
              
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 invisible md:visible">
                  {/* Spacer */}
                </div>
                <div className="bg-primary-500 rounded-full h-8 w-8 flex items-center justify-center shadow-md z-10">
                  <span className="bg-white rounded-full h-3 w-3"></span>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                  <div className="bg-white p-5 rounded-xl shadow-soft-sm border border-neutral-100 inline-block">
                    <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">2020</h3>
                    <p className="text-neutral-600">Redesigned as a full recipe platform with user accounts and favorites</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-5 rounded-xl shadow-soft-sm border border-neutral-100 inline-block">
                    <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">2022</h3>
                    <p className="text-neutral-600">Reached 1 million monthly users and 5,000 recipes</p>
                  </div>
                </div>
                <div className="bg-primary-500 rounded-full h-8 w-8 flex items-center justify-center shadow-md z-10">
                  <span className="bg-white rounded-full h-3 w-3"></span>
                </div>
                <div className="md:w-1/2 md:pl-12 invisible md:visible">
                  {/* Spacer */}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 invisible md:visible">
                  {/* Spacer */}
                </div>
                <div className="bg-primary-500 rounded-full h-8 w-8 flex items-center justify-center shadow-md z-10">
                  <span className="bg-white rounded-full h-3 w-3"></span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-xl shadow-soft-sm border border-neutral-100 inline-block">
                    <h3 className="font-serif font-bold text-xl mb-2 text-neutral-800">Today</h3>
                    <p className="text-neutral-600">Continuing to grow our global community and recipe collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-primary-100 to-primary-50 rounded-2xl p-8 text-center">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
            Have questions, feedback, or ideas? We'd love to hear from you. Reach out to our team.
          </p>
          <Button variant="primary" size="lg" className="rounded-full shadow-md">
            <Mail size={18} className="mr-2" />
            Contact Us
          </Button>
        </div>
      </div>
    </main>
  );
} 