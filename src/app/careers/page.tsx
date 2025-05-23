import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Building2, ChevronRight, MapPin, Briefcase, Users, Star, Award, Heart, ChefHat } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Recipe Developer",
    department: "Culinary",
    location: "New York, NY",
    type: "Full-time",
    description: "Create and test innovative recipes that inspire our users. Collaborate with our content team to produce high-quality cooking guides.",
    requirements: [
      "5+ years experience in professional cooking or recipe development",
      "Strong understanding of various cuisines and cooking techniques",
      "Excellent writing and communication skills",
      "Portfolio of original recipes"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, responsive user interfaces that help home cooks discover and prepare amazing recipes.",
    requirements: [
      "3+ years experience with React and Next.js",
      "Experience with modern CSS frameworks (Tailwind preferred)",
      "Understanding of UI/UX principles",
      "Knowledge of TypeScript"
    ]
  },
  {
    id: 3,
    title: "Content Marketing Specialist",
    department: "Marketing",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Create engaging content strategies to grow our audience and enhance our brand presence in the culinary digital space.",
    requirements: [
      "3+ years experience in content marketing",
      "Knowledge of SEO best practices",
      "Excellent writing skills",
      "Experience in food, recipe, or lifestyle content creation"
    ]
  },
  {
    id: 4,
    title: "UX Researcher",
    department: "Product",
    location: "Remote",
    type: "Part-time",
    description: "Conduct user research to inform our product development and ensure we're meeting the needs of home cooks.",
    requirements: [
      "2+ years experience in UX research",
      "Experience with user interviews, usability testing, and survey design",
      "Strong analytical and communication skills",
      "Background in food or cooking apps a plus"
    ]
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
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
              Join Our Talented Team
            </h1>
            <p className="text-neutral-600 text-lg mb-10">
              Help us revolutionize how people discover, cook, and share recipes. We're looking for passionate individuals to join our growing team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="px-8 py-3">
                View Open Positions
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Company */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-primary-800 mb-10 text-center">
              Why Work With Us?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary-50 inline-block">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-serif text-xl font-medium text-neutral-800 mb-2">
                  Dynamic Team Culture
                </h3>
                <p className="text-neutral-600">
                  Join a diverse team of food enthusiasts, technologists, and creatives who are passionate about making cooking accessible to everyone.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary-50 inline-block">
                  <Star className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-serif text-xl font-medium text-neutral-800 mb-2">
                  Growth Opportunities
                </h3>
                <p className="text-neutral-600">
                  Develop your skills and advance your career with our mentorship programs and continuous learning opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary-50 inline-block">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-serif text-xl font-medium text-neutral-800 mb-2">
                  Comprehensive Benefits
                </h3>
                <p className="text-neutral-600">
                  Enjoy competitive compensation, health benefits, flexible work arrangements, and regular team events and celebrations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary-50 inline-block">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-serif text-xl font-medium text-neutral-800 mb-2">
                  Meaningful Impact
                </h3>
                <p className="text-neutral-600">
                  See the direct impact of your work as we help millions of people around the world discover joy in cooking and sharing meals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-semibold text-primary-800 mb-10 text-center">
            Current Openings
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-neutral-800 mb-1">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
                      <span className="flex items-center">
                        <Building2 size={16} className="mr-1.5" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Briefcase size={16} className="mr-1.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button variant="outline" className="group">
                      <span>View Details</span>
                      <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-4">
                  {job.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-neutral-700 mb-2">Key Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-600 text-sm">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-10 text-center">
            <p className="text-neutral-600 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
            </p>
            <Button variant="primary">
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 