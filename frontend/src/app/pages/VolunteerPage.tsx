import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { Heart, Users, Award, Clock } from 'lucide-react';

export function VolunteerPage() {
  const opportunities = [
    { title: 'Teaching & Tutoring', desc: 'Share knowledge with students needing academic support', icon: '📚' },
    { title: 'Healthcare Support', desc: 'Assist in health clinics and awareness campaigns', icon: '⚕️' },
    { title: 'Community Events', desc: 'Help organize and execute community programs', icon: '🎉' },
    { title: 'Mentoring', desc: 'Provide guidance and support to young people', icon: '🎓' },
    { title: 'Administrative', desc: 'Support office operations and program coordination', icon: '💼' },
    { title: 'Fundraising', desc: 'Help raise awareness and funds for our programs', icon: '🎯' }
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
            Volunteer With Us
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Make a direct impact by volunteering your time, skills, and passion.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{opp.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{opp.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{opp.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-800 dark:to-gray-900 p-12 rounded-lg mb-12"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Why Volunteer With Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: 'Make an Impact', desc: 'Directly change lives and transform communities' },
                { icon: Users, title: 'Build Community', desc: 'Connect with like-minded individuals' },
                { icon: Award, title: 'Gain Experience', desc: 'Develop new skills and perspectives' },
                { icon: Clock, title: 'Flexible Scheduling', desc: 'Volunteer at times that work for you' },
                { icon: Heart, title: 'Support System', desc: 'Join a caring and supportive team' },
                { icon: Users, title: 'Recognition', desc: 'Your contribution is valued and celebrated' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <item.icon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-50 dark:bg-gray-800 p-12 rounded-lg text-center"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our volunteer community and be part of creating meaningful change. Whether you have a few hours or want to commit long-term, there's a place for you.
            </p>
            <button className="px-8 py-3 bg-blue-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Apply to Volunteer
            </button>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
