import { BookOpen, Heart, Users, Scale, Leaf } from 'lucide-react';
import React from 'react';
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
  return (
    <section
  id="about"
  className="
    bg-cover bg-center
    py-20 px-4 sm:px-6 lg:px-8
    bg-gradient-to-t from-blue-100/80 to-yellow-100/80
    dark:from-gray-900/80 dark:to-gray-800/80
  "
  style={{
    backgroundImage: `url(${pupilsImage})`,
    backgroundBlendMode: "overlay",
  }}
>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem', color: 'var(--primary-blue)'}} className="font-bold">Our Mission</h2>
          <p className="text-orange-600 mt-2">Building hope through action</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {missions.map((mission, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 dark:text-white  rounded-lg dark:hover:shadow-cyan-600 hover:translate-1 hover:shadow-lg duration-300 transition-transform"
            >
              <mission.icon 
                className="w-12 h-12 mb-4" 
                style={{ color: mission.color }}
              />
              <h3 className="mb-2 font-bold" style={{ fontFamily: 'Poppins, sans-serif',  }}>{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
