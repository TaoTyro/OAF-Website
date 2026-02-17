import { Star, MapPin, Book, TrendingUp, Zap, Heart, Home, Smile, Megaphone, Users, Award, Brain, Handshake } from 'lucide-react';
import janeImage from '../../assets/jane.jpg';
import chikuImage from '../../assets/Chikumbutso-student.jpg';
import bernadettahImage from '../../assets/bernadettah-luhanga.jpg';
import archangelImage from '../../assets/archangel-chagwa.jpg';

const stories = [
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Jane, Age 21',
    location: 'Mzuzu University, Malawi',
    image: janeImage,
    story: 'While in her second year at Mzuzu University, Jane was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming a teacher.',
    impact: [
      { icon: Book, text: 'Continuing with her studies at Mzuzu University', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' }
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Chikumbutso, Age 22',
    location: 'Mzuzu University, Malawi',
    image: chikuImage,
    story: 'While in his early school years, Chiku was lacking tuition fees until we found him. Today, he\'s continuing his studies and excelling in school and moving towards his dreams of becoming a leader in his community.',
    impact: [
      { icon: Book, text: 'Continuing with his studies', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' }
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Bernadettah, Age 19',
    location: 'Mzuzu University, Malawi',
    image: bernadettahImage,
    story: 'While in her school years, Bernadettah was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming an advocate for girls\' education in her community.',
    impact: [
      { icon: Book, text: 'Continuing with her studies', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' }
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Archangel, Age 20',
    location: 'Mzuzu University, Malawi',
    image: archangelImage,
    story: 'While in her school years, Archangel was lacking tuition fees until we found him. Today, he\'s continuing his studies and excelling in school and moving towards his dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      { icon: Book, text: 'Continuing with his studies', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' }
    ]
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800" id="success-stories">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Real transformations, real lives changed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-white dark:bg-gray-800 p-8 rounded-lg dark:hover:shadow-cyan-600 hover:translate-1 hover:shadow-lg duration-300 transition-transform"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={story.image}
                  alt={story.child}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      className="font-bold text-xl mb-1 text-white-400 dark:text-amber-50 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      {story.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 text-purple-500" />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-medium mb-1" style={{ color: 'var(--primary-orange)' }}>
                  {story.child}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {story.story}
                </p>

                {/* Impact Highlights */}
                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    {story.impact.map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 flex-shrink-0" style={{ color: item.color }} />
                          <span>{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
