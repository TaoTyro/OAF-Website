import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Primary Education Initiative',
    description: 'Building and supporting schools to give children access to quality education and a brighter future.',
    image: 'https://images.unsplash.com/photo-1585847812247-4482e9f6f0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjBzY2hvb2x8ZW58MXx8fHwxNzY2NjYwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Healthcare & Nutrition',
    description: 'Providing essential healthcare services and nutritious meals to ensure healthy development.',
    image: 'https://images.unsplash.com/photo-1761234852163-23f2ededd04e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2hpbGRyZW4lMjBhZnJpY2F8ZW58MXx8fHwxNzY2NzQ4ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Community Development',
    description: 'Empowering local communities through sustainable programs and partnerships.',
    image: 'https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlZHVjYXRpb24lMjBhZnJpY2F8ZW58MXx8fHwxNzY2NzQ4ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Orphan Care Centers',
    description: 'Safe, loving environments where orphaned children can grow and thrive together.',
    image: 'https://images.unsplash.com/photo-1547922938-a6dcb893f375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjY2OTQyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Social Justice Advocacy',
    description: 'Fighting for the rights and protection of vulnerable children in our communities.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    title: 'Sustainable Climate Solutions',
    description: 'Implementing environmental initiatives to create a sustainable future for generations to come.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080'
  }
];

export function Programs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8   bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800" id="programs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem', color: 'var(--primary-blue)'}} className="font-bold">Our Programs</h2>
          <p className="text-gray-600 mt-2 ">Making a real difference in communities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden dark:hover:shadow-cyan-600 hover:translate-1 duration-300 dark:text-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#all-programs" 
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--primary-blue)' }}
          >
            View all programs
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
