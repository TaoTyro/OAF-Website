import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { TrendingUp, PieChart, DollarSign } from 'lucide-react';

export function FundingTransparencyPage() {
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
          <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-6">
            Funding Transparency
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            We believe in full transparency regarding our funding sources and how we allocate resources to maximize impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: DollarSign, label: 'Funding Sources', desc: 'Donations, Grants, Partnerships' },
              { icon: PieChart, label: 'Budget Allocation', desc: 'Transparent spending breakdown' },
              { icon: TrendingUp, label: 'Impact Metrics', desc: 'Measurable outcomes reported' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.label}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-orange-50 to-transparent dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg mb-12"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2024 Budget Overview
            </h2>
            <div className="space-y-4">
              {[
                { category: 'Programs & Services', percentage: 70 },
                { category: 'Administrative', percentage: 15 },
                { category: 'Fundraising', percentage: 10 },
                { category: 'Other', percentage: 5 }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">{item.category}</span>
                    <span className="text-orange-500 font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="bg-gradient-to-r from-blue-400 to-orange-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Annual Reports & Audits
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our annual financial reports and independent audits are available upon request, demonstrating our commitment to accountability and transparency.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Contact us at <span className="font-semibold">finance@orphansofafrica21.org</span> for detailed financial documents.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
