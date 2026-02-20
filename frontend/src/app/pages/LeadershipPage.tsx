import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';

export function LeadershipPage() {
  const leaders = [
    {
      name: 'Leadership Team',
      role: 'Board of Directors',
      bio: 'Our leadership team is dedicated to ensuring effective governance and strategic direction of the organization.',
      email: 'contact@orphansofafrica21.org'
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
        <div className="max-w-5xl mx-auto">
          <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4">
            Leadership Team
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Meet the dedicated individuals driving our mission to transform lives.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl text-white">👤</span>
                </div>
                <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">{leader.name}</h3>
                <p className="text-orange-500 font-semibold mb-3">{leader.role}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{leader.bio}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>{leader.email}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Leadership Principles</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Visionary thinking guided by organizational values</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Transparent decision-making and accountability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Commitment to sustainable impact and growth</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
