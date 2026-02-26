import { useEffect, lazy, Suspense, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ContactForm } from './components/ContactForm';
import ScrollToTopButton from './components/ScrollToTopButton';
import { PageLoader } from './components/PageLoader';
import { SkeletonSection, SkeletonImpact } from './components/Skeleton';
import { useTheme } from '../hooks/useTheme';
import { ProgramsPage } from './pages/ProgramsPage';
import { BlogPage } from './pages/BlogPage';
import { TeamPage } from './pages/TeamPage';
import { EventsPage } from './pages/EventsPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { FAQPage } from './pages/FAQPage';
import { PartnersPage } from './pages/PartnersPage';
import { NewsletterPage } from './pages/NewsletterPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ExecutiveStaffPage } from './pages/ExecutiveStaffPage';
import { FundingTransparencyPage } from './pages/FundingTransparencyPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { MetricsPage } from './pages/MetricsPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { BecomeDonorPage } from './pages/BecomeDonorPage';
import { BecomePartnerPage } from './pages/BecomePartnerPage';
import { OurMissionPage } from './pages/OurMissionPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { ContactPage } from './pages/ContactPage';

// Lazy load components for homepage
const Hero = lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
const MissionSnapshot = lazy(() => import('./components/MissionSnapshot').then(m => ({ default: m.MissionSnapshot })));
const ImpactStats = lazy(() => import('./components/ImpactStats').then(m => ({ default: m.ImpactStats })));
const SuccessStories = lazy(() => import('./components/SuccessStories').then(m => ({ default: m.SuccessStories })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function HomePage() {
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
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonImpact /></div>}>
          <ImpactStats />
        </Suspense>
      </motion.div>
      
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <MissionSnapshot />
        </Suspense>
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <SuccessStories />
        </Suspense>
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <ContactForm />
        </Suspense>
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <Suspense fallback={<div className="py-20 px-4"><SkeletonSection /></div>}>
          <Footer />
        </Suspense>
      </motion.div>

      <ScrollToTopButton />
    </motion.div>
  );
}

export default function App() {
  const { isDark } = useTheme();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => setIsPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);



  return (
    <>
      <AnimatePresence mode="wait">
        {isPageLoading && <PageLoader key="loader" />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-mission" element={<OurMissionPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/executive-staff" element={<ExecutiveStaffPage />} />
        <Route path="/funding-transparency" element={<FundingTransparencyPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/donate" element={<BecomeDonorPage />} />
        <Route path="/become-partner" element={<BecomePartnerPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}