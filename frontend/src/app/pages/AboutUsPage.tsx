import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';

export function AboutUsPage() {
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
            Who We Are
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Orphans of Africa Foundation is committed to transforming the lives of vulnerable children, particularly orphans in Malawi and across Africa. Our mission is to provide comprehensive support encompassing education, healthcare, emotional wellbeing, and economic empowerment.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Founded with the belief that every child deserves a chance at a better future, we work tirelessly to bridge the gap between vulnerability and opportunity, creating pathways to success for the most marginalized children in our communities.
            </p>

            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-3xl font-bold text-blue-400 dark:text-white mt-12 mb-4">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Compassion', desc: 'We lead with empathy in all our actions' },
                { title: 'Integrity', desc: 'We maintain the highest standards of transparency' },
                { title: 'Impact', desc: 'We measure success by lives transformed' }
              ].map((value, idx) => (
                <div key={idx} className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
