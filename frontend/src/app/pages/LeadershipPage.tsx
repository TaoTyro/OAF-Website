import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
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

// Brand Colors
const brandColors = {
  orange: "#F97316",
  lightBlue: "#0EA5E9",
  brightGreen: "#22C55E",
  green: "#10B981",
};

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
     label: "Students at Mzuzu University and one at University of Malawi have received fully funded Scholarships ",
     color: brandColors.brightGreen,
    },
  {
    icon: School,
    stat: "20",
    label: "Orphans supported through secondary education",
    sub: "4 now qualified teachers",
    color: brandColors.lightBlue,
  },
  {
    icon: TrendingUp,
    stat: "45% → 75%",
    label: "Primary school pass rate increase across 8 schools",
    color: brandColors.orange,
  },
  {
    icon: Droplet,
    stat: "7,000+",
    label: "Clean birthing kits distributed to expectant mothers",
    sub: "In partnership with district health authorities",
    color: brandColors.brightGreen,
  },
  {
    icon: Users,
    stat: "10,000+",
    label: "Vulnerable people directly impacted",
    color: brandColors.lightBlue,
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
  { name: "International Organizations", icon: Globe, color: brandColors.lightBlue },
  { name: "Government Departments", icon: Building2, color: brandColors.orange },
  { name: "Traditional Leaders", icon: Shield, color: brandColors.brightGreen },
  { name: "Community Structures", icon: Users, color: brandColors.green },
];

// Areas of Expertise Data
const expertiseAreas = [
  { title: "Grant Writing", icon: FileText, color: brandColors.lightBlue },
  { title: "Project Design", icon: Lightbulb, color: brandColors.orange },
  { title: "M&E", icon: BarChart3, color: brandColors.brightGreen },
  { title: "Fundraising", icon: DollarSign, color: brandColors.green },
  { title: "Stakeholder Engagement", icon: Handshake, color: brandColors.lightBlue },
  { title: "Youth Leadership", icon: Users2, color: brandColors.orange },
  { title: "Community Development", icon: Network, color: brandColors.brightGreen },
  { title: "Nonprofit Management", icon: Zap, color: brandColors.green },
];

export function LeadershipPage() {
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-1 bg-[#F97316] rounded-full" />
            <div className="w-8 h-1 bg-[#0EA5E9] rounded-full" />
            <div className="w-8 h-1 bg-[#22C55E] rounded-full" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Timothy Mwale</h1>
          <p className="text-xl text-[#F97316] font-medium mb-2">Founder & Executive Director</p>
          <p className="text-gray-600 max-w-3xl">Orphans of Africa Foundation (OAF)</p>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Image & Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-1"
            >
              {/* Image Placeholder */}
              <div className=" rounded-xl aspect-square mb-6 overflow-hidden">
                <img 
                  src="/images/leadership/timothy-mwale.jpg" 
                  alt="Timothy Mwale"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <h3 className="font-semibold text-gray-900">Contact</h3>
                <button 
                  onClick={() => window.location.href = 'mailto:mwale7410@gmail.com'}
                  className="flex items-center gap-3 text-sm hover:text-[#F97316] transition-colors group cursor-pointer bg-transparent border-none p-0"
                >
                  <Mail className="w-4 h-4 text-[#F97316]" />
                  <span className="text-gray-600 group-hover:underline">{EMAIL}</span>
                </button>
                <a 
                  href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-[#0EA5E9] transition-colors group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0EA5E9]" />
                  <span className="text-gray-600 group-hover:underline">{PHONE_FORMATTED}</span>
                </a>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-[#22C55E]" />
                  <span className="text-gray-600">Malawi</span>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => window.location.href = 'mailto:mwale7410@gmail.com'}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:shadow-md hover:bg-[#FFF5F0] transition-all cursor-pointer border-none" 
                    title="Send Email"
                  >
                    <Mail className="w-4 h-4 text-[#F97316]" />
                  </button>
                  <a 
                    href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:shadow-md hover:bg-[#F0FDF4] transition-all" 
                    title="WhatsApp Message"
                  >
                    <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:shadow-md">
                    <Linkedin className="w-4 h-4 text-[#0EA5E9]" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:shadow-md">
                    <Twitter className="w-4 h-4 text-[#F97316]" />
                  </a>
                </div>

                <button className="w-full mt-2 px-4 py-2 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Bio
                </button>
              </div>
            </motion.div>

            {/* Right Column - Bio & Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2 space-y-8"
            >
              {/* Executive Summary */}
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  Timothy Mwale is a social worker and communications specialist with extensive experience 
                  in youth leadership, community development, and nonprofit management. As Founder and 
                  Executive Director of the Orphans of Africa Foundation (OAF), established in 2018, he 
                  leads a youth-led organization working across Malawi and other African countries to 
                  support orphans, youth, and women.
                </p>
              </div>

              {/* Quick Stats */}
              <div ref={metricsRef} className="grid grid-cols-2 gap-4">
                <div className="bg-[#F0F9FF] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#0EA5E9]"><Counter end={2018} /></div>
                  <div className="text-sm text-gray-600">Founded OAF</div>
                </div>
                <div className="bg-[#FFF7ED] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#F97316]"><Counter end={10} suffix="k+" /></div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="bg-[#F0FDF4] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#22C55E]"><Counter end={42} /></div>
                  <div className="text-sm text-gray-600">Villages Reached</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#10B981]"><Counter end={8} /></div>
                  <div className="text-sm text-gray-600">Partner Schools</div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-gray-600">
                <p>
                  His professional background spans education, climate action, health and maternal care, 
                  gender-based violence prevention, and social justice advocacy. Through OAF, he has 
                  designed and led multi-sectoral projects impacting over 10,000 vulnerable people.
                </p>
                <p>
                  Timothy has strong expertise in grant writing, project design, M&E, fundraising, and 
                  stakeholder engagement. He has mobilized partnerships with international organizations, 
                  government departments, traditional leaders, and community structures for sustainable, 
                  community-driven interventions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.stat}</div>
                      <p className="text-gray-700 mb-2">{item.label}</p>
                      {item.sub && <p className="text-sm text-gray-500">{item.sub}</p>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[#0EA5E9] mt-1" />
                  <div>
                    <p className="font-medium">BA in Communication Studies</p>
                    <p className="text-sm text-gray-500">Mzuzu University (In Progress)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[#F97316] mt-1" />
                  <div>
                    <p className="font-medium">BBA</p>
                    <p className="text-sm text-gray-500">University of the People, USA (In Progress)</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Certifications</h2>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <Icon className="w-4 h-4 text-[#22C55E]" />
                      <span className="text-sm">{cert.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Global Recognition */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Global Recognition</h2>
              <div className="space-y-3">
                {recognitions.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className={`bg-white p-4 rounded-lg border ${item.highlight ? 'border-l-4 border-[#F97316]' : 'border-gray-100'}`}>
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-[#0EA5E9] mt-0.5" />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.year}</p>
                          {item.highlight && (
                            <span className="inline-block mt-2 text-xs bg-[#F97316] text-white px-2 py-1 rounded-full">Nomination</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Partnerships */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Key Partnerships</h2>
              <div className="grid grid-cols-2 gap-3">
                {partnerships.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                        <Icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertiseAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${item.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-8 h-8 text-[#F97316] mx-auto mb-4" />
          <p className="text-lg text-gray-700 italic">
            "Every child deserves access to education, healthcare, and equal opportunity to break the cycle of poverty."
          </p>
          <p className="text-sm text-gray-500 mt-4">— Timothy Mwale</p>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/pupils.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-lg mb-6 font-medium">For partnerships, speaking engagements, or collaboration</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = 'mailto:mwale7410@gmail.com'}
                className="px-8 py-3 bg-gradient-to-r from-[#F97316] to-orange-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 cursor-pointer border-none"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </button>
              <a
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-[#22C55E] text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}