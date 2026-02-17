import { BookOpen, Heart, Users, Scale, Leaf } from 'lucide-react';
import React, { useState } from 'react';
import pupilsImage from '../../assets/pupils.jpg';
const missions = [
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Providing quality education and learning materials to children in need.',
    color: 'var(--primary-orange)'
  },
  {
    icon: Heart,
    title: 'Health & Care',
    description: 'Ensuring access to healthcare, nutrition, and emotional support.',
    color: 'var(--primary-green)'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Building strong communities that nurture and protect every child.',
    color: 'var(--primary-orange)'
  },
  {
    icon: Scale,
    title: 'Social Justice',
    description: 'Advocating for equality and protecting the rights of vulnerable children.',
    color: 'var(--primary-blue)'
  },
  {
    icon: Leaf,
    title: 'Sustainable Climate Solutions',
    description: 'Creating environmental solutions for a healthier and greener future.',
    color: 'var(--primary-green)'
  }
];


export function MissionSnapshot() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch relative transition-all duration-500 ${isImageHovered ? 'lg:grid-cols-3' : ''}`}>
          {/* Left Content Section */}
          <div className="relative z-10 flex flex-col justify-center">
            {/* Header Section */}
            <div className="mb-12">
              <h2 
                style={{ fontFamily: 'Poppins, sans-serif' }} 
                className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4"
              >
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                We are committed to creating lasting positive change through education, health, community support, social justice, and environmental sustainability.
              </p>
            </div>

            {/* Mission Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {missions.map((mission, index) => (
                <div 
                  key={index}
                  className="group flex flex-col p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <mission.icon 
                      className="w-8 h-8" 
                      style={{ color: mission.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-base font-semibold text-gray-900 dark:text-white mb-2" 
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {mission.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    {mission.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div 
                      className="w-6 h-1 rounded-full" 
                      style={{ backgroundColor: mission.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div 
            className={`relative hidden lg:flex items-center justify-end transition-all duration-500 ${isImageHovered ? 'lg:col-span-2' : ''}`}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url(${pupilsImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: isImageHovered ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)',
                transition: 'clip-path 0.5s ease-in-out',
              }}
            />
            {/* Overlay for better text readability on content side */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: isImageHovered ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)',
                transition: 'clip-path 0.5s ease-in-out',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
