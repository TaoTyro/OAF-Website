import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';

export function ExecutiveStaffPage() {
  const staff = [
    { 
      title: 'Executive Team',
      description: 'Our dedicated staff members work tirelessly to implement our programs and serve the communities we support.',
      members: [
        'Program Coordinators',
        'Community Outreach Specialists',
        'Administrative Support'
      ]
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
        <div className="max-w-4xl mx-auto">
          <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-6">
            Executive Staff
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Meet the dedicated team members who bring our mission to life every day.
          </p>

          {staff.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg mb-8"
            >
              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {section.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {section.members.map((member, memberIdx) => (
                  <div key={memberIdx} className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                    <p className="font-semibold text-gray-900 dark:text-white">{member}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-50 dark:bg-gray-800 p-8 rounded-lg mt-12"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Career with Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Join our team and make a difference in the lives of vulnerable children. We are always looking for passionate individuals who share our commitment to empowerment and transformation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For employment opportunities, please contact us at <span className="font-semibold">careers@orphansofafrica21.org</span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
