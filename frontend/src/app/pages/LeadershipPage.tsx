import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Award, 
  Target, 
  Heart, 
  Users, 
  Briefcase,
  Quote,
  ChevronRight,
  Star,
  Clock,
  Shield,
  Globe,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Sparkles,
  UserCheck,
  Calendar,
  Phone
} from 'lucide-react';

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

// Types
interface Leader {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  longBio?: string;
  email: string;
  phone?: string;
  expertise: string[];
  education?: string[];
  achievements?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
  };
  imagePlaceholder: string; // Path to custom image: e.g., "/images/leadership/timothy-mwale.jpg"
  joinDate?: string;
}

interface Principle {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

// Leadership Data
const leadershipTeam: Leader[] = [
  {
    id: "timothy-mwale",
    name: "Timothy Mwale",
    role: "Founder & Executive Director",
    title: "Executive Director",
    bio: "Founded OAF at 16 years old, transforming a personal vision into a registered organization impacting thousands of lives across Malawi.",
    longBio: "Timothy's journey began when he witnessed children in his community dropping out of school due to lack of resources. At just 16, he started a small initiative that would grow into The Orphans of Africa Foundation. His leadership has guided OAF from a youth-led idea to a recognized organization working across 42 villages, partnering with schools, government institutions, and international supporters.",
    email: "timothy@orphansofafrica21.org",
    phone: "+265 999 123 456",
    expertise: [
      "Strategic Leadership",
      "Community Development",
      "Non-Profit Management",
      "Advocacy & Policy"
    ],
    education: [
      "Bachelor's in Development Studies",
      "Certificate in Non-Profit Management"
    ],
    achievements: [
      "Founded OAF at age 16",
      "Secured official registration in 2021",
      "Expanded to 42 villages in 3 years"
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
    imagePlaceholder: "/images/leadership/timothy-mwale.jpg", // Replace with your CEO's image path
    joinDate: "2018"
  },
  {
    id: "board-chair",
    name: "Dr. Elizabeth Banda",
    role: "Board Chair",
    title: "Board of Directors",
    bio: "Experienced educator and community leader with over 20 years in educational policy and child welfare advocacy in Malawi.",
    email: "board@orphansofafrica21.org",
    expertise: [
      "Educational Policy",
      "Governance",
      "Strategic Planning",
      "Child Welfare"
    ],
    achievements: [
      "Former Education Ministry Advisor",
      "PhD in Educational Development",
      "Awarded for child advocacy work"
    ],
    imagePlaceholder: "/images/leadership/elizabeth-banda.jpg", // Replace with actual image path
  },
  {
    id: "treasurer",
    name: "James Phiri",
    role: "Treasurer",
    title: "Board of Directors",
    bio: "Financial expert specializing in non-profit financial management and sustainable funding strategies for community organizations.",
    email: "finance@orphansofafrica21.org",
    expertise: [
      "Financial Management",
      "Fund Development",
      "Risk Assessment",
      "Audit & Compliance"
    ],
    achievements: [
      "15+ years in financial sector",
      "Certified Public Accountant",
      "Managed $2M+ in development funds"
    ],
    imagePlaceholder: "/images/leadership/james-phiri.jpg", // Replace with actual image path
  },
  {
    id: "secretary",
    name: "Grace Mkandawire",
    role: "Secretary",
    title: "Board of Directors",
    bio: "Human rights lawyer passionate about gender justice and legal protection for vulnerable children in rural communities.",
    email: "legal@orphansofafrica21.org",
    expertise: [
      "Legal Advocacy",
      "Gender Justice",
      "Child Protection",
      "Policy Development"
    ],
    achievements: [
      "Human Rights Law Specialist",
      "Led 5 policy reform initiatives",
      "Community legal aid pioneer"
    ],
    imagePlaceholder: "/images/leadership/grace-mkandawire.jpg", // Replace with actual image path
  }
];

const leadershipPrinciples: Principle[] = [
  {
    icon: Target,
    title: "Vision-Led",
    description: "Every decision guided by our mission to create lasting change for orphans and vulnerable children.",
    color: brandColors.orange.primary
  },
  {
    icon: Shield,
    title: "Accountable",
    description: "Transparent governance with clear reporting to communities, donors, and stakeholders.",
    color: brandColors.lightBlue.primary
  },
  {
    icon: Users,
    title: "Community-First",
    description: "Leadership rooted in understanding and responding to community needs and priorities.",
    color: brandColors.brightGreen.primary
  },
  {
    icon: Heart,
    title: "Compassionate",
    description: "Empathy-driven approach ensuring the most vulnerable are always prioritized.",
    color: brandColors.green.primary
  }
];

const milestones = [
  { year: "2018", event: "Founded by Timothy Mwale", icon: Star },
  { year: "2021", event: "Official NGO Registration", icon: Shield },
  { year: "2022", event: "First University Scholarships", icon: Award },
  { year: "2024", event: "42 Villages Reached", icon: Globe },
];

export function LeadershipPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [principlesRef, principlesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Brand accent */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-[#F97316] rounded-full" />
              <div className="w-12 h-1 bg-[#0EA5E9] rounded-full" />
              <div className="w-12 h-1 bg-[#22C55E] rounded-full" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Leadership That
              <span className="block text-[#F97316]">Inspires Change</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Meet the dedicated team guiding OAF's mission to transform lives 
              and create sustainable impact in communities across Malawi.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#0EA5E9]">2018</div>
                <div className="text-sm text-gray-500">Founded</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#22C55E]">42</div>
                <div className="text-sm text-gray-500">Villages</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#F97316]">1500+</div>
                <div className="text-sm text-gray-500">Lives Impacted</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight - Executive Director */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image Column - CEO Image Placeholder */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl">
                {/* 
                  REPLACE THIS DIV WITH YOUR CEO'S IMAGE:
                  <img 
                    src={leadershipTeam[0].imagePlaceholder} 
                    alt="Timothy Mwale - Founder & Executive Director"
                    className="w-full h-full object-cover"
                  />
                */}
                <div className="w-full h-full bg-gradient-to-br from-[#F97316] to-[#0EA5E9] flex items-center justify-center">
                  <div className="text-center text-white">
                    <UserCheck className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">CEO Image Placeholder</p>
                    <p className="text-sm opacity-80">Replace with: /images/leadership/timothy-mwale.jpg</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#22C55E]/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#F97316]/10 rounded-full blur-2xl" />
            </div>

            {/* Content Column */}
            <div>
              <span className="text-sm font-semibold text-[#F97316] mb-2 block">FOUNDER & EXECUTIVE DIRECTOR</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {leadershipTeam[0].name}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {leadershipTeam[0].longBio || leadershipTeam[0].bio}
                </p>

                {/* Key Achievements */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#F97316]" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {leadershipTeam[0].achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact & Expertise */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F0F9FF] p-4 rounded-lg">
                    <Mail className="w-5 h-5 text-[#0EA5E9] mb-2" />
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-sm font-medium text-gray-900 break-all">
                      {leadershipTeam[0].email}
                    </p>
                  </div>
                  {leadershipTeam[0].phone && (
                    <div className="bg-[#FFF7ED] p-4 rounded-lg">
                      <Phone className="w-5 h-5 text-[#F97316] mb-2" />
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="text-sm font-medium text-gray-900">
                        {leadershipTeam[0].phone}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seasoned professionals providing strategic governance and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.slice(1).map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image placeholder for board members */}
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {/*
                    REPLACE WITH ACTUAL IMAGES:
                    <img 
                      src={leader.imagePlaceholder} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  */}
                  <div className="text-center text-gray-500">
                    <Users className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Board Member Image</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-[#F97316] font-semibold text-sm mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>

                  {/* Expertise tags */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">EXPERTISE</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.slice(0, 2).map((item, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-[#0EA5E9]" />
                    <span className="truncate">{leader.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Journey Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in OAF's growth under dedicated leadership
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <span className="text-2xl font-bold text-[#F97316]">{milestone.year}</span>
                      <p className="text-gray-700 mt-2">{milestone.event}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-white border-4 border-[#0EA5E9] flex items-center justify-center">
                      <milestone.icon className="w-4 h-4 text-[#0EA5E9]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section ref={principlesRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The values that guide every decision and action at OAF
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${principle.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: principle.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory & Governance Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governance Structure</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                OAF operates under a robust governance framework that ensures accountability, 
                transparency, and effective decision-making at all levels.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Board of Directors</h3>
                    <p className="text-sm text-gray-600">Provides strategic oversight and governance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Executive Leadership</h3>
                    <p className="text-sm text-gray-600">Manages daily operations and implementation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Advisory Board</h3>
                    <p className="text-sm text-gray-600">Ensures community voices guide our work</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Our Leadership Matters</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Youth-led perspective with mature governance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Diverse expertise across education, finance, and law</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Deep community connections and understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Proven track record of sustainable impact</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Leadership CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F97316] to-[#0EA5E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With Our Leadership
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Interested in partnerships, collaborations, or learning more about our work?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#F97316] rounded-lg font-semibold hover:shadow-xl transition-shadow">
                Contact Executive Director
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Board Inquiries
              </button>
            </div>

            <p className="text-sm text-white/80 mt-6">
              Or email us directly at: leadership@orphansofafrica21.org
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}