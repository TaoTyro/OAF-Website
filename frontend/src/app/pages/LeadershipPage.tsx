import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import {
  Award,
  Target,
  Heart,
  Users,
  Briefcase,
  Quote,
  CheckCircle,
  UserCheck,
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Globe,
  TrendingUp,
  Shield,
  Medal,
  Trophy,
  MapPin,
  Calendar,
  Sparkles,
  Leaf,
  Stethoscope,
  HandHeart,
  School,
  Droplet,
  Mic,
  PenTool,
  Building2,
  Landmark,
  Linkedin,
  Twitter,
  MessageCircle,
  Download,
  ExternalLink,
  ChevronRight,
  FileText,
  Lightbulb,
  BarChart3,
  DollarSign,
  Handshake,
  Users2,
  Network,
  Zap,
} from 'lucide-react';

// Contact details
const PHONE_NUMBER = '+265886691492';
const PHONE_FORMATTED = '+265 886 69 14 92';
const EMAIL = 'mwale7410@gmail.com';

// Brand Color - Single consistent color
const brandColor = "#5AAFD1";

// Counter Component
const Counter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const startCounting = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(startCounting);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(startCounting);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Key Achievements Data
const achievements = [
    {
     icon: GraduationCap,
     stat: "27+",
     label: "Students at Mzuzu University and one at University of Malawi have received fully funded Scholarships",
     color: brandColor,
    },
  {
    icon: School,
    stat: "20",
    label: "Orphans supported through secondary education",
    sub: "4 now qualified teachers",
    color: brandColor,
  },
  {
    icon: TrendingUp,
    stat: "45% → 75%",
    label: "Primary school pass rate increase across 8 schools",
    color: brandColor,
  },
  {
    icon: Droplet,
    stat: "7,000+",
    label: "Clean birthing kits distributed to expectant mothers",
    sub: "In partnership with district health authorities",
    color: brandColor,
  },
  {
    icon: Users,
    stat: "10,000+",
    label: "Vulnerable people directly impacted",
    color: brandColor,
  },
];

// Global Recognition Data
const recognitions = [
  { name: "Tällberg-SNF-Eliasson Global Leadership Prize", year: "2025", highlight: true, icon: Medal },
  { name: "World Bank Group Youth Summit", year: "2023", icon: Landmark },
  { name: "African Climate Summit", year: "2023", icon: Leaf },
  { name: "UNCTAD Youth Forum", year: "2024", icon: Globe },
];

// Certifications Data
const certifications = [
  { title: "Organizational Development", icon: Building2 },
  { title: "Leadership & Communication", icon: Mic },
  { title: "Environmental Protection", icon: Leaf },
  { title: "Emerging Technologies", icon: PenTool },
];

// Partnerships Data
const partnerships = [
  { name: "International Organizations", icon: Globe },
  { name: "Government Departments", icon: Building2 },
  { name: "Traditional Leaders", icon: Shield },
  { name: "Community Structures", icon: Users },
];

// Areas of Expertise Data
const expertiseAreas = [
  { title: "Grant Writing", icon: FileText },
  { title: "Project Design", icon: Lightbulb },
  { title: "M&E", icon: BarChart3 },
  { title: "Fundraising", icon: DollarSign },
  { title: "Stakeholder Engagement", icon: Handshake },
  { title: "Youth Leadership", icon: Users2 },
  { title: "Community Development", icon: Network },
  { title: "Nonprofit Management", icon: Zap },
];

// Quick Stats Data
const quickStats = [
  { value: 2018, label: "Founded OAF", color: brandColor },
  { value: 10, suffix: "k+", label: "Lives Impacted", color: brandColor },
  { value: 42, label: "Villages Reached", color: brandColor },
  { value: 8, label: "Partner Schools", color: brandColor },
];

// Animation Variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: delay,
    },
  }),
};

const statNumberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  }),
};

export function LeadershipPage() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Newspaper Style */}
      <section className="pt-20 pb-16 px-6 sm:px-8 lg:px-12" >
        <div className="max-w-7xl bg-[#5AAFD1] mx-auto">
          <motion.div
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="max-w-4xl"
          >
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl  font-bold text-white mb-4 tracking-tight">
              Timothy Mwale
            </h1>
            
            <motion.p 
              className="text-xl font-bold text-white"
              variants={textRevealVariants}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              custom={0.4}
            >
               Founder & Executive Director of OAF
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Profile Section - Newspaper Feature */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Left Column - Image & Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              {/* Image with Parallax and Pill Overlay */}
              <motion.div 
                className="relative overflow-hidden bg-gray-100 mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.img 
                  src="/images/leadership/timothy-mwale.jpg" 
                  alt="Timothy Mwale"
                  className="w-[50%] rounded-full aspect-square object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Professional Pill Overlay Effect */}
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${brandColor}40 0%, transparent 70%)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
                
              
            
                <motion.div 
                  className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2"
                  style={{ borderColor: brandColor }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>

              {/* Image Caption */}
              <motion.div
                className="flex items-center gap-2 text-sm mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
          
                <span style={{ color: brandColor }}>Executive Portrait</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500">2026</span>
              </motion.div>

              {/* Contact Info - Minimal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4 border-t border-gray-100 pt-6"
              >
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact</h3>
                
                <button 
                  onClick={() => window.location.href = 'mailto:mwale7410@gmail.com'}
                  className="flex items-center gap-3 text-sm hover:underline group cursor-pointer bg-transparent border-none p-0"
                  style={{ color: brandColor }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-gray-900">{EMAIL}</span>
                </button>
                
                <a 
                  href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:underline group cursor-pointer"
                  style={{ color: brandColor }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-gray-900">{PHONE_FORMATTED}</span>
                </a>
                
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" style={{ color: brandColor }} />
                  <span>Malawi</span>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <a href="#" className="text-gray-400 hover:text-[#5AAFD1] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#5AAFD1] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-gray-400 hover:text-[#5AAFD1] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Bio & Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Section Label */}
              <div className="flex items-left gap-2 text-sm font-bold text-[#5AAFD1]">
                <span className="w-8  bg-gray-300" />
                <span>EXECUTIVE PROFILE</span>
              </div>

              {/* Bio - Newspaper Style */}
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="text-[#5AAFD1] font-mono">Timothy Mwale</span> is a social worker and communications specialist with extensive experience 
                  in youth leadership, community development, and nonprofit management. As Founder and 
                  Executive Director of the Orphans of Africa Foundation (OAF), established in 2018, he 
                  leads a <span className="text-[#5AAFD1] font-mono">youth-led organization</span> working across Malawi and other African countries to 
                  support orphans, youth, and women.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  His professional background spans education, climate action, health and maternal care, 
                  gender-based violence prevention, and social justice advocacy. Through OAF, he has 
                  designed and led multi-sectoral projects impacting over 10,000 vulnerable people.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Timothy has strong expertise in grant writing, project design, M&E, fundraising, and 
                  stakeholder engagement. He has mobilized partnerships with international organizations, 
                  government departments, traditional leaders, and community structures for sustainable, 
                  community-driven interventions.
                </p>
              </div>

              {/* Decorative line */}
              <motion.div 
                className="w-16 h-0.5"
                style={{ backgroundColor: brandColor }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats - Minimal Grid */}
      <section ref={statsRef} className="py-16 px-6 sm:px-8 lg:px-12 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div 
                 style={{ color: brandColor, fontFamily: 'Georgia, Times New Roman, serif' }}
                  className="text-4xl md:text-5xl font-bold mb-2"
              
                  variants={statNumberVariants}
                  initial="hidden"
                  animate={statsInView ? "visible" : "hidden"}
                  custom={0.1 + index * 0.1}
                >
                  <Counter end={stat.value} suffix={stat.suffix || ""} />
                </motion.div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements - Newspaper Feature */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-left gap-2 text-sm text-gray-400 mb-4">
              <span className="w-8 bg-gray-300" />
              <span className="text-[#5AAFD1] font-bold">IMPACT HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl md-2 font-bold text-white bg-[#5AAFD1]">Key Achievements</h2>
          </div>

          <div className="space-y-16">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              const [itemRef, itemInView] = useInView({ triggerOnce: true, threshold: 0.2 });

              return (
                <motion.div
                  key={index}
                  ref={itemRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={itemInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="grid md:grid-cols-5 gap-6 md:gap-8 items-start border-b border-gray-100 pb-12 last:border-0"
                >
                  {/* Stat Column */}
                  <div className="md:col-span-1">
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold leading-tight"
                      style={{ color: brandColor, fontFamily: 'Georgia, Times New Roman, serif' }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={itemInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {item.stat}
                    </motion.div>
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-4">
                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={itemInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}15` }}>
                        <Icon className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <p className="text-lg text-gray-900 mb-2">{item.label}</p>
                        {item.sub && <p className="text-sm text-gray-500">{item.sub}</p>}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Background - Two Column Newspaper */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-left gap-2 text-sm text-gray-400 mb-6">
                <span className="w-8 bg-gray-300" />
                <span className="text-[#5AAFD1] font-bold">ACADEMIC BACKGROUND</span>
              </div>

              <h2 className="text-3xl font-bold text-white bg-[#5AAFD1] mb-8">Education</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-medium text-gray-900">BA in Communication Studies</p>
                  <p className="text-gray-500">Mzuzu University (In Progress)</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">BBA</p>
                  <p className="text-gray-500">University of the People, USA (In Progress)</p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-light text-gray-900 mb-8">Certifications</h2>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-lg" style={{ color: brandColor }}>◆</span>
                      <span className="text-gray-700">{cert.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Global Recognition & Partnerships */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-left gap-2 text-sm text-gray-400 mb-6">
                <span className="w-8 bg-gray-300" />
                <span className="text-[#5AAFD1] font-bold">INTERNATIONAL</span>
              </div>

              <h2 className="text-3xl text-white bg-[#5AAFD1] font-bold mb-8">Global Recognition</h2>
              
              <div className="space-y-5">
                {recognitions.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-2 pl-4 py-1"
                      style={{ borderLeftColor: item.highlight ? brandColor : '#E5E7EB' }}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-4 h-4 mt-1" style={{ color: brandColor }} />
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.year}</p>
                          {item.highlight && (
                            <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>
                              Nomination
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Partnerships */}
              <div className="mt-12">
                <h2 className="text-3xl font-light text-gray-900 mb-8">Key Partnerships</h2>
                <div className="space-y-3">
                  {partnerships.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <Icon className="w-4 h-4" style={{ color: brandColor }} />
                        <span className="text-gray-700">{item.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Areas - Grid */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <span className="w-8 h-px bg-gray-300" />
            <span>PROFESSIONAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl font-light text-gray-900 mb-12">Areas of Expertise</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {expertiseAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Icon className="w-6 h-6 mb-3" style={{ color: brandColor }} />
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote - Newspaper Editorial */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Quote className="w-8 h-8 mx-auto mb-6" style={{ color: brandColor }} />
            <p className="text-2xl text-gray-700 italic leading-relaxed">
              "Every child deserves access to education, healthcare, and equal opportunity to break the cycle of poverty."
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
              <span>—</span>
              <span>Timothy Mwale</span>
              <span>—</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Full Width with Background Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/pupils.jpg" 
            alt="Children in Malawi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-4 bg-black/60" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">For partnerships, speaking engagements, or collaboration</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = 'mailto:mwale7410@gmail.com'}
                  className="px-8 py-3 bg-white text-[#5AAFD1] font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </button>
                <a
                  href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}