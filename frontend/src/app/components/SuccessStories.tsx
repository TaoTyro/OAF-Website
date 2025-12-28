import { Star, MapPin } from 'lucide-react';

const stories = [
  {
    title: 'From Street to School',
    child: 'Amara, Age 12',
    location: 'Uganda',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    story: 'Amara was living on the streets until we found her. Today, she\'s excelling in school and dreams of becoming a teacher. With proper nutrition and education, she\'s transformed her entire future.',
    impact: '📚 Now in secondary school | 📈 Top 5% grades | 💪 Mentoring younger children'
  },
  {
    title: 'A Second Chance at Life',
    child: 'David, Age 8',
    location: 'Kenya',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    story: 'David lost both parents to illness. Our care center provided him with shelter, healthcare, and love. His health has improved dramatically, and he\'s become a joyful, confident child.',
    impact: '❤️ Fully recovered health | 🏠 Safe home provided | 😊 Regained childhood'
  },
  {
    title: 'Breaking the Cycle',
    child: 'Grace, Age 15',
    location: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    story: 'Grace was at risk of child marriage. We enrolled her in our leadership program where she\'s learned skills and confidence. She\'s now an advocate for girls\' education in her community.',
    impact: '📢 Community advocate | 👧 Helping 20+ girls | 🎓 Scholarship recipient'
  },
  {
    title: 'Healing Through Education',
    child: 'Michael, Age 10',
    location: 'Rwanda',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    story: 'Michael struggled with trauma from loss. Our counseling and education programs helped him process his grief. He\'s now a confident student with a bright outlook on life.',
    impact: '🧠 Emotional healing | 🎓 Academic improvement | 🤝 Social integration'
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800" id="success-stories">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem', color: 'var(--primary-blue)' }} className="font-bold">
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
              className=" overflow-hidden bg-white dark:bg-gray-800 p-8 rounded-lg dark:hover:shadow-cyan-600 hover:translate-1 hover:shadow-lg duration-300 transition-transform"
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
                      className="font-bold text-xl mb-1 text-white-400 dark:text-amber-50"
                    >
                      {story.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
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
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {story.impact.split(' | ').map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ color: 'var(--primary-orange)' }}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
