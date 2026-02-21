import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Heart,
  Users,
  Leaf,
  Award,
  Target,
  TrendingUp,
  ChevronRight,
  GraduationCap,
  Stethoscope,
  HandHeart,
  Sprout,
  BarChart3,
  MapPin,
  Calendar,
  Quote,
  Globe,
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Activity,
  Briefcase,
  UserCheck,
  Home,
  School,
  Droplet,
  Sun,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";

// Types
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

interface ImpactMetric {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  prefix?: string;
  color: string;
}

interface ProgramData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  stats: { value: string; label: string }[];
  achievements: string[];
  image: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

// Brand Colors
const brandColors = {
  orange: {
    primary: "#F97316",
    light: "#FED7AA",
    dark: "#C2410C",
    bg: "#FFF7ED",
  },
  lightBlue: {
    primary: "#0EA5E9",
    light: "#E0F2FE",
    dark: "#0369A1",
    bg: "#F0F9FF",
  },
  brightGreen: {
    primary: "#22C55E",
    light: "#DCFCE7",
    dark: "#15803D",
    bg: "#F0FDF4",
  },
  green: {
    primary: "#10B981",
    light: "#D1FAE5",
    dark: "#047857",
    bg: "#ECFDF5",
  },
};

// Counter Component
const Counter: React.FC<CounterProps> = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState<number>(0);
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

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Chart Data
const impactTrendData = [
  { year: "2020", students: 200, villages: 12, kits: 1500, youth: 300 },
  { year: "2021", students: 450, villages: 18, kits: 2500, youth: 600 },
  { year: "2022", students: 800, villages: 27, kits: 4500, youth: 1000 },
  { year: "2023", students: 1200, villages: 35, kits: 6000, youth: 1600 },
  { year: "2024", students: 1500, villages: 42, kits: 7500, youth: 2000 },
];

const programAllocationData = [
  { name: "Literacy Education", value: 40, color: brandColors.lightBlue.primary },
  { name: "Healthcare", value: 30, color: brandColors.orange.primary },
  { name: "Social Inclusion", value: 20, color: brandColors.brightGreen.primary },
  { name: "Climate Action", value: 10, color: brandColors.green.primary },
];

const educationProgressData = [
  { year: "2020", rate: 45, target: 50 },
  { year: "2021", rate: 55, target: 60 },
  { year: "2022", rate: 65, target: 70 },
  { year: "2023", rate: 75, target: 75 },
  { year: "2024", rate: 78, target: 80 },
];

// Data
const impactMetrics: ImpactMetric[] = [
  { icon: Users, value: 1500, label: "Students Supported", suffix: "+", color: brandColors.lightBlue.primary },
  { icon: MapPin, value: 42, label: "Villages Reached", suffix: "", color: brandColors.orange.primary },
  { icon: Heart, value: 7500, label: "Birthing Kits", suffix: "", color: brandColors.brightGreen.primary },
  { icon: GraduationCap, value: 2000, label: "Youths Educated", suffix: "+", color: brandColors.green.primary },
];

const timelineEvents: TimelineEvent[] = [
  {
    year: "2018",
    title: "The Vision Begins",
    description: "At 16 years old, Timothy Mwale witnesses children dropping out of school due to lack of resources, sparking the idea for OAF.",
    icon: Clock,
    color: brandColors.orange.primary,
  },
  {
    year: "2021",
    title: "Official Registration",
    description: "The Orphans of Africa Foundation is officially registered, transitioning from a youth initiative to a recognized organization.",
    icon: Shield,
    color: brandColors.lightBlue.primary,
  },
  {
    year: "2022",
    title: "First Major Impact",
    description: "Reached 500 students with educational materials and launched the first scholarship program for university students.",
    icon: Star,
    color: brandColors.brightGreen.primary,
  },
  {
    year: "2023",
    title: "Expansion Phase",
    description: "Expanded to 42 villages, introduced healthcare initiatives, and partnered with 8 primary schools.",
    icon: Globe,
    color: brandColors.green.primary,
  },
  {
    year: "2024",
    title: "Sustainable Growth",
    description: "Four supported orphans become qualified teachers, marking the first generation of OAF success stories.",
    icon: Award,
    color: brandColors.orange.primary,
  },
];

const programs: ProgramData[] = [
  {
    id: "literacy",
    title: "Literacy Education",
    description: "Transforming educational outcomes through comprehensive support systems, from primary school to university.",
    icon: BookOpen,
    color: brandColors.lightBlue.primary,
    stats: [
      { value: "1500+", label: "Students" },
      { value: "75%", label: "Pass Rate" },
      { value: "27", label: "University" },
    ],
    achievements: [
      "Distributed books across 8 primary schools",
      "Increased pass rates from 45% to 75%",
      "4 orphans became qualified teachers",
      "Fully funded scholarships at Mzuzu University",
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
  },
  {
    id: "healthcare",
    title: "Healthcare Access",
    description: "Improving maternal and child health outcomes through education and essential resources.",
    icon: Heart,
    color: brandColors.orange.primary,
    stats: [
      { value: "7500", label: "Birthing Kits" },
      { value: "2000+", label: "Youth Educated" },
      { value: "42", label: "Villages" },
    ],
    achievements: [
      "Distributed clean birthing kits to expectant mothers",
      "Sexual and reproductive health education programs",
      "Reduced complications during childbirth",
      "Community health worker training",
    ],
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "inclusion",
    title: "Social Inclusion",
    description: "Creating opportunities for children with disabilities to participate fully in community life.",
    icon: Users,
    color: brandColors.brightGreen.primary,
    stats: [
      { value: "42", label: "Villages" },
      { value: "500+", label: "Children" },
      { value: "100%", label: "Inclusion" },
    ],
    achievements: [
      "Mini Blind Balls reaching 500 children",
      "Inclusive sports initiatives",
      "Community awareness programs",
      "Accessible play areas",
    ],
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "climate",
    title: "Climate Action",
    description: "Sustainable solutions that protect the environment while supporting community livelihoods.",
    icon: Sprout,
    color: brandColors.green.primary,
    stats: [
      { value: "1000+", label: "Trees Planted" },
      { value: "15", label: "Communities" },
      { value: "3", label: "Initiatives" },
    ],
    achievements: [
      "Tree planting campaigns",
      "Sustainable agriculture training",
      "Climate resilience education",
      "Community conservation projects",
    ],
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

const storyImages = {
  founder: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  community: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  children: "https://images.unsplash.com/photo-1488521787991-1c523e642b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  education: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
};

export function AboutUsPage() {
  const { scrollYProgress } = useScroll();
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Clean and Professional */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={storyImages.children}
            alt="Children in Malawi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Brand indicator */}
            <div className="flex gap-2 mb-6">
              <div className="w-12 h-1 bg-[#F97316] rounded-full" />
              <div className="w-12 h-1 bg-[#0EA5E9] rounded-full" />
              <div className="w-12 h-1 bg-[#22C55E] rounded-full" />
              <div className="w-12 h-1 bg-[#10B981] rounded-full" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transforming Lives in
              <span className="block text-[#F97316]">Rural Malawi</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              The Orphans of Africa Foundation (OAF) is a youth-led grassroots organization 
              dedicated to breaking the cycle of poverty through education, healthcare, 
              and sustainable community development.
            </p>

            {/* Key metrics preview */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-3xl font-bold text-[#F97316]">2018</div>
                <div className="text-sm text-gray-300">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0EA5E9]">42</div>
                <div className="text-sm text-gray-300">Villages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#22C55E]">1500+</div>
                <div className="text-sm text-gray-300">Students</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Mission Statement - Clean and Impactful */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0EA5E9] mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To build resilient communities where every orphan and vulnerable child 
              has access to quality education, healthcare, and equal opportunities 
              to break the cycle of poverty.
            </p>
            
            {/* Brand accent */}
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-16 h-1 bg-[#F97316] rounded-full" />
              <div className="w-16 h-1 bg-[#0EA5E9] rounded-full" />
              <div className="w-16 h-1 bg-[#22C55E] rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Story - Executive Summary Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0EA5E9] mb-4">The Story Behind OAF</h2>
              <p className="text-[#F97316] font-semibold mb-6">A Youth-Led Movement for Change</p>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  In 2018, at just 16 years old, Timothy Mwale witnessed a reality that would 
                  shape his life's mission: children in his community dropping out of school, 
                  young girls forced into early marriages, and a cycle of poverty that seemed 
                  impossible to break.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  What started as a small initiative to help a few children has grown into 
                  The Orphans of Africa Foundation (OAF), officially registered in 2021. 
                  Today, we're a recognized organization working across 42 villages in 
                  Mzimba North, Malawi, with a proven track record of sustainable impact.
                </p>

                {/* Founder highlight */}
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#F97316] mt-8">
                  <Quote className="w-8 h-8 text-[#F97316] mb-2" />
                  <p className="text-gray-600 italic mb-4">
                    "Every child deserves more than just sympathy—they deserve opportunity, 
                    education, and the chance to write their own story."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src={storyImages.founder} 
                        alt="Timothy Mwale"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0EA5E9]">Timothy Mwale</p>
                      <p className="text-sm text-gray-500">Founder & Executive Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img
                src={storyImages.community}
                alt="Community meeting"
                className="rounded-xl shadow-lg"
              />
              
              {/* Timeline preview */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {timelineEvents.slice(0, 3).map((event, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold" style={{ color: event.color }}>
                      {event.year}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{event.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - Professional Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#0EA5E9] mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a teenager's vision to a recognized force for change
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-bold" style={{ color: event.color }}>
                      {event.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-4 flex items-center justify-center"
                       style={{ borderColor: event.color }}>
                    <event.icon className="w-4 h-4" style={{ color: event.color }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics - Data Driven */}
      <section ref={metricsRef} className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tangible results that demonstrate our commitment to change
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                     style={{ backgroundColor: `${metric.color}20` }}>
                  <metric.icon className="w-8 h-8" style={{ color: metric.color }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: metric.color }}>
                  <Counter end={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-sm text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Impact Trends Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6">5-Year Impact Growth</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={impactTrendData}>
                  <defs>
                    <linearGradient id="studentsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={brandColors.lightBlue.primary} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={brandColors.lightBlue.primary} stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="villagesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={brandColors.orange.primary} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={brandColors.orange.primary} stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#F3F4F6' }}
                  />
                  <Area type="monotone" dataKey="students" stroke={brandColors.lightBlue.primary} fill="url(#studentsGradient)" name="Students" />
                  <Area type="monotone" dataKey="villages" stroke={brandColors.orange.primary} fill="url(#villagesGradient)" name="Villages" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs - Professional Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#0EA5E9] mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive interventions addressing the root causes of poverty
            </p>
          </motion.div>

          {/* Program Distribution Chart */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold mb-4">Resource Allocation</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={programAllocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {programAllocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {programAllocationData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold mb-4">Education Progress</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={educationProgressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rate" fill={brandColors.lightBlue.primary} name="Pass Rate %" />
                    <Bar dataKey="target" fill={brandColors.green.primary} name="Target %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Pass rate increased from 45% to 78% (2020-2024)
              </p>
            </motion.div>
          </div>

          {/* Program Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: `${program.color}20` }}>
                      <program.icon className="w-6 h-6" style={{ color: program.color }} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">{program.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {program.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold" style={{ color: program.color }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {program.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: program.color }} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story - Human Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-[#F97316] mb-2 block">SUCCESS STORY</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Orphan to Teacher: The Ripple Effect
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  In 2018, four orphaned children received support through our first scholarship 
                  program. Today, they have all graduated from teachers college and are now 
                  educating the next generation in their home communities.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  This is the power of education. One investment creates a multiplier effect 
                  that transforms entire communities for generations to come.
                </p>

                <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Qualified Teachers</p>
                      <p className="text-sm text-gray-500">Former OAF beneficiaries now teaching in local schools</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={storyImages.education}
                alt="Children in classroom"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-[#F97316]">75%</div>
                  <div className="text-sm text-gray-600">Increase in<br/>pass rates</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Executive */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Us in Breaking the Cycle
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Your support can transform a child's future and create lasting change in their community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#F97316] text-white rounded-lg font-semibold hover:bg-[#EA580C] transition-colors flex items-center justify-center gap-2 group">
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-3 border-2 border-[#0EA5E9] text-[#0EA5E9] rounded-lg font-semibold hover:bg-[#0EA5E9] hover:text-white transition-colors">
                View Our Impact Report
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center gap-8 mt-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#22C55E]" />
                <span>Registered Non-Profit</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F97316]" />
                <span>Verified Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#0EA5E9]" />
                <span>Community-Led</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}