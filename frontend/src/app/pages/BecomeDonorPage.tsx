import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { Heart, Gift, Users, TrendingUp } from 'lucide-react';

export function BecomeDonorPage() {
  const donationLevels = [
    { level: 'Champion', amount: '$5,000+', benefits: ['Recognition', 'Impact Report', 'Exclusive Events', 'Naming Opportunity'] },
    { level: 'Advocate', amount: '$1,000 - $4,999', benefits: ['Recognition', 'Impact Report', 'Annual Updates', 'Certificate'] },
    { level: 'Friend', amount: '$250 - $999', benefits: ['Impact Report', 'Anniversary Card', 'Newsletter'] },
    { level: 'Supporter', amount: '$1 - $249', benefits: ['Thank You Letter', 'Newsletter'] }
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
            Become a Donor
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Your contribution directly transforms lives and creates lasting change in our communities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-800 dark:to-gray-900 p-12 rounded-lg mb-16"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Where Your Donation Goes
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { percent: 70, label: 'Programs & Services', color: 'from-blue-400 to-blue-600' },
                { percent: 15, label: 'Administration', color: 'from-green-400 to-green-600' },
                { percent: 10, label: 'Fundraising', color: 'from-orange-400 to-orange-600' },
                { percent: 5, label: 'Operations', color: 'from-purple-400 to-purple-600' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3`}>
                    {item.percent}%
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Donation Levels
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {donationLevels.map((level, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-lg p-8 border-2 transition-all hover:shadow-2xl ${
                  idx === 0 
                    ? 'border-orange-400 bg-orange-50 dark:bg-gray-800' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{level.level}</h3>
                <p className="text-3xl font-bold" style={{ color: 'var(--primary-orange)' }} className="mb-6">{level.amount}</p>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <Heart className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 px-6 py-2 bg-gradient-to-r from-blue-400 to-orange-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Donate Now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Gift, title: 'One-Time Gift', desc: 'Make a single donation anytime' },
              { icon: TrendingUp, title: 'Monthly Giving', desc: 'Sustain impact with recurring donations' },
              { icon: Users, title: 'Group Giving', desc: 'Donate together with friends and family' }
            ].map((option, idx) => (
              <div key={idx} className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                <option.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{option.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{option.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 dark:bg-gray-800 p-12 rounded-lg text-center"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Tax Deductible Donations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We are a registered nonprofit organization. Your donation may be tax deductible. Please consult with a tax professional.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Registration Number: [Your Org Number]
            </p>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
