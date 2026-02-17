import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Home, AlertCircle, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 flex flex-col"
    >
      <Navbar />

      {/* 404 Content */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Animated Floating Elements Background */}
          <div className="mb-12 relative h-32 flex justify-center items-center">
            {/* Floating circles */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-20 h-20 rounded-full"
              style={{ backgroundColor: 'var(--primary-blue)', opacity: 0.1 }}
            />
            <motion.div
              animate={{ y: [20, 0, 20] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute w-16 h-16 rounded-full"
              style={{ backgroundColor: 'var(--primary-orange)', opacity: 0.1 }}
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute w-12 h-12 rounded-full"
              style={{ backgroundColor: 'var(--primary-green)', opacity: 0.1 }}
            />

            {/* Main Error Icon */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'easeInOut'
              }}
              className="relative z-10 flex justify-center"
            >
              <div className="p-6 rounded-full" style={{ backgroundColor: 'var(--primary-blue)' }}>
                <AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </motion.div>
          </div>

          {/* Error Code */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--primary-blue)' }}
            className="text-6xl md:text-7xl font-bold mb-2"
          >
            404
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-20 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: 'var(--primary-orange)' }}
          />

          {/* Error Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
          >
            Page Not Found
          </motion.h2>

          {/* Error Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 text-lg mb-10"
          >
            Sorry! We couldn't find the page you're looking for. It might have been moved or no longer exists.
          </motion.p>

          {/* Back to Home Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl"
            style={{ backgroundColor: 'var(--primary-orange)' }}
          >
            <Home className="w-5 h-5" />
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 p-6 rounded-lg border-2 bg-gray-50 dark:bg-gray-900/50"
            style={{ borderColor: 'var(--primary-blue)' }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">Need Help?</span>
              <br />
              Visit our{' '}
              <button
                onClick={() => navigate('/#contact')}
                className="font-semibold transition-colors"
                style={{ color: 'var(--primary-blue)' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                contact page
              </button>
              {' '}or{' '}
              <button
                onClick={() => navigate('/faq')}
                className="font-semibold transition-colors"
                style={{ color: 'var(--primary-blue)' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                FAQ section
              </button>
              {' '}for more information.
            </p>
          </motion.div>

          {/* Bottom Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-12 flex justify-center gap-4"
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--primary-blue)' }}
            />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--primary-orange)' }}
            />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--primary-green)' }}
            />
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
