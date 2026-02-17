import { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { SkeletonSection } from '../components/Skeleton';

const Programs = lazy(() => import('../components/Programs').then(m => ({ default: m.Programs })));

export function ProgramsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <Navbar />
      
      <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
        <Programs />
      </Suspense>

      <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
        <Footer />
      </Suspense>

      <ScrollToTopButton />
    </motion.div>
  );
}
