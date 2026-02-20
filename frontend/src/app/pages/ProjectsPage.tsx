import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { Target, Zap, Users } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'Education Empowerment',
      description: 'Providing quality education and scholarship programs to orphaned and vulnerable children.',
      icon: '📚',
      metrics: '500+ beneficiaries'
    },
    {
      title: 'Healthcare Initiative',
      description: 'Ensuring access to essential healthcare services and preventive health education.',
      icon: '⚕️',
      metrics: '1000+ medical visits'
    },
    {
      title: 'Skills Training',
      description: 'Vocational training programs to build economic independence and future readiness.',
      icon: '🔨',
      metrics: '200+ trained'
    },
    {
      title: 'Psychosocial Support',
      description: 'Mental health and emotional wellbeing support for traumatized children.',
      icon: '💝',
      metrics: '300+ supported'
    },
    {
      title: 'Community Engagement',
      description: 'Strengthening communities through capacity building and partnership programs.',
      icon: '🤝',
      metrics: '50+ partnerships'
    },
    {
      title: 'Food Security',
      description: 'Nutrition programs and feeding initiatives for vulnerable families.',
      icon: '🥗',
      metrics: '400+ families'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-6">
            Our Projects
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-16">
            Discover the transformative initiatives we're implementing across Malawi and Africa.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold" style={{ color: 'var(--primary-orange)' }}>
                    Impact: {project.metrics}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 p-12 rounded-lg"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: 'Targeted Solutions', desc: 'Addressing specific community needs' },
                { icon: Zap, title: 'Quick Impact', desc: 'Measuring tangible outcomes' },
                { icon: Users, title: 'Community Led', desc: 'Engaging stakeholders in decisions' }
              ].map((approach, idx) => (
                <div key={idx} className="text-center">
                  <approach.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{approach.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{approach.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
