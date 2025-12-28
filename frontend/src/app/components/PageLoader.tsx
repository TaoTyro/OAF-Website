import { motion } from 'motion/react';

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: 'var(--primary-blue)' }}
          >
            <span style={{ fontSize: '2rem' }}>❤️</span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-900 dark:text-white font-semibold"
        >
          Loading...
        </motion.p>

        {/* Animated Progress Bar */}
        <div className="w-32 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: 'var(--primary-orange)' }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}
