import { useState } from 'react';
import { MapPin, Book, Award, Brain, Handshake, ChevronDown, ChevronUp, HeartHandshake } from 'lucide-react';
import janeImage from '../../assets/jane.jpg';
import chikuImage from '../../assets/Chikumbutso-student.jpg';
import bernadettahImage from '../../assets/bernadettah-luhanga.jpg';
import archangelImage from '../../assets/archangel-chagwa.jpg';
import chimwemweImage from '../../assets/chimwemwe-duwa.jpg';
import ivyImage from '../../assets/ivy-chrispin.jpg';
import kenImage from '../../assets/ken.jpg';
import trynnessImage from '../../assets/tryness-Mkandawire.jpg';

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
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' },
      { icon: HeartHandshake, text: 'Emotional support and connection', color: 'var(--primary-purple)' }
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
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' },
      { icon: HeartHandshake, text: 'Emotional support and connection', color: 'var(--primary-purple)' }
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
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' },
      { icon: HeartHandshake, text: 'Emotional support and connection', color: 'var(--primary-purple)' }
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Archangel, Age 20',
    location: 'Mzuzu University, Malawi',
    image: archangelImage,
    story: 'While in his school years, Archangel was lacking tuition fees until we found him. Today, he\'s continuing his studies and excelling in school and moving towards his dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      { icon: Book, text: 'Continuing with his studies', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' },
      { icon: HeartHandshake, text: 'Emotional support and connection', color: 'var(--primary-purple)' }
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Chimwemwe, Age 18',
    location: 'Mzuzu University, Malawi',
    image: chimwemweImage,
    story: 'While in her school years, Chimwemwe was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      { icon: Book, text: 'Continuing with her studies', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' },
      { icon: HeartHandshake, text: 'Emotional support and connection', color: 'var(--primary-purple)' }
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Ivy, Age 17',
    location: 'Mzuzu University, Malawi',
    image: ivyImage,
    story: 'While in her school years, Ivy was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      { icon: Book, text: 'Continuing with her studies', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' },
      { icon: HeartHandshake, text: 'Emotional support and connection', color: 'var(--primary-purple)' }
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Ken, Age 19',
    location: 'Mzuzu University, Malawi',
    image: kenImage,
    story: 'While in his school years, Ken was lacking tuition fees until we found him. Today, he\'s continuing his studies and excelling in school and moving towards his dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      { icon: Book, text: 'Continuing with his studies', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' },
      { icon: HeartHandshake, text: 'Emotional support and connection', color: 'var(--primary-purple)' }
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Trynness, Age 21',
    location: 'Mzuzu University, Malawi',
    image: trynnessImage,
    story: 'While in her school years, Trynness was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      { icon: Book, text: 'Continuing with her studies', color: 'var(--primary-blue)' },
      { icon: Award, text: 'Scholarship recipient', color: 'var(--primary-orange)' },
      { icon: Brain, text: 'Emotional healing', color: 'var(--primary-green)' },
      { icon: Handshake, text: 'Emotional support and connection', color: 'var(--primary-purple)' }
    ]
  }
];

export function SuccessStories() {
  const [showAll, setShowAll] = useState(false);
  const displayedStories = showAll ? stories : stories.slice(0, 4);
  const hasMoreStories = stories.length > 4;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" id="success-stories">
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
          {displayedStories.map((story, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={story.image}
                  alt={story.child}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      className="font-bold text-xl mb-2 text-gray-800 dark:text-white group-hover:text-blue-400 transition-colors duration-300"
                    >
                      {story.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" style={{ color: 'var(--primary-orange)' }} />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-semibold mb-3 px-3 py-1 rounded-full inline-block" style={{ color: 'var(--primary-orange)', backgroundColor: 'rgba(255, 152, 0, 0.1)' }}>
                  {story.child}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {story.story}
                </p>

                {/* Impact Highlights */}
                <div className="bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-700 dark:to-transparent p-4 rounded-lg border border-blue-100 dark:border-gray-600">
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    {story.impact.map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-3 group/item">
                          <IconComponent className="w-5 h-5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" style={{ color: item.color }} />
                          <span className="group-hover/item:font-medium transition-all">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {hasMoreStories && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {showAll ? (
                <>
                  <span>Show Less Students</span>
                  <ChevronUp className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>Discover More Students</span>
                  <ChevronDown className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
