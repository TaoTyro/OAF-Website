import { useEffect, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ContactForm } from './components/ContactForm';
import ScrollToTopButton from './components/ScrollToTopButton';
import { SkeletonSection, SkeletonImpact } from './components/Skeleton';
import { useTheme } from '../hooks/useTheme';

// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
const MissionSnapshot = lazy(() => import('./components/MissionSnapshot').then(m => ({ default: m.MissionSnapshot })));
const Programs = lazy(() => import('./components/Programs').then(m => ({ default: m.Programs })));
const ImpactStats = lazy(() => import('./components/ImpactStats').then(m => ({ default: m.ImpactStats })));
const SuccessStories = lazy(() => import('./components/SuccessStories').then(m => ({ default: m.SuccessStories })));
const GetInvolved = lazy(() => import('./components/GetInvolved').then(m => ({ default: m.GetInvolved })));
const EventsCalendar = lazy(() => import('./components/EventsCalendar'));
const NewsletterSignup = lazy(() => import('./components/NewsletterSignup'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const PartnersSponsors = lazy(() => import('./components/PartnersSponsors'));
const Team = lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const Blog = lazy(() => import('./components/Blog').then(m => ({ default: m.Blog })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const { isDark } = useTheme();

  useEffect(() => {
    // Initialize theme on app load
    const saved = localStorage.getItem('theme');
    const shouldBeDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <Navbar />
      <Hero />
      
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <MissionSnapshot />
        </Suspense>
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <Programs />
        </Suspense>
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonImpact /></div>}>
          <ImpactStats />
        </Suspense>
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <SuccessStories />
        </Suspense>
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <GetInvolved />
        </Suspense>
      </motion.div>

      <motion.div
        custom={5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <EventsCalendar />
        </Suspense>
      </motion.div>

      <motion.div
        custom={6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <NewsletterSignup />
        </Suspense>
      </motion.div>

      <motion.div
        custom={7}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <PartnersSponsors />
        </Suspense>
      </motion.div>

      <motion.div
        custom={8}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <FAQSection />
        </Suspense>
      </motion.div>

      <motion.div
        custom={9}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <Team />
        </Suspense>
      </motion.div>

      <motion.div
        custom={10}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <Blog />
        </Suspense>
      </motion.div>

      <motion.div
        custom={11}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <ContactForm />
        </Suspense>
      </motion.div>

      <motion.div
        custom={12}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <Footer />
        </Suspense>
      </motion.div>

      <ScrollToTopButton />
    </motion.div>
  );
}