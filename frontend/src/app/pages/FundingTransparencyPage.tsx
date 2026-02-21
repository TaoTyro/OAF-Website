import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  Eye,
  FileText,
  Download,
  CheckCircle,
  Users,
  HandHeart,
  Award,
  Scale,
  FileCheck,
  Landmark,
  Mail,
  BookOpen,
  Heart,
  Target,
  AlertCircle,
  Info,
  Lock,
  Globe,
  Clock,
  ArrowRight,
  ExternalLink,
  Phone,
  MapPin,
  UserCheck,
  HelpCircle,
  FileSignature,
  Printer,
  FolderOpen,
  Search,
  ThumbsUp,
  HeartHandshake,
  Sparkles,
  Lightbulb,
  TrendingUp,
  BarChart3,
  PieChart,
  DollarSign
} from 'lucide-react';

// Brand Colors
const brandColors = {
  orange: "#F97316",
  lightBlue: "#0EA5E9",
  brightGreen: "#22C55E",
  green: "#10B981",
};

export function FundingTransparencyPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Unsplash Image */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        {/* Unsplash Image - Transparency/Glass concept */}
        <div className="absolute inset-0" style={{ backgroundAttachment: 'fixed' }}>
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Transparent glass building representing clarity and openness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/90 to-[#0EA5E9]/90 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex gap-2 mb-6">
              <div className="w-12 h-1 bg-white rounded-full" />
              <div className="w-12 h-1 bg-white rounded-full opacity-70" />
              <div className="w-12 h-1 bg-white rounded-full opacity-50" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Funding Transparency
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              We believe trust is built through openness. Here's how we manage and report our finances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Statement */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F97316]/10 mb-6">
              <HeartHandshake className="w-8 h-8 text-[#F97316]" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every donation, regardless of size, is handled with the utmost care and integrity. 
              We provide clear, accessible information about our funding sources and how resources 
              are used to serve orphans and vulnerable children in Malawi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Handle Funds - Three Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Independent Oversight",
                description: "Our finances are reviewed quarterly by an independent finance committee and annually by external auditors.",
                color: brandColors.lightBlue
              },
              {
                icon: Eye,
                title: "Clear Documentation",
                description: "All transactions are documented and available for donor review upon reasonable request.",
                color: brandColors.orange
              },
              {
                icon: Users,
                title: "Community Reporting",
                description: "We share financial summaries with community leaders and stakeholders during quarterly meetings.",
                color: brandColors.brightGreen
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-10 h-10 mb-4" style={{ color: item.color }} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Funding Sources - Ethical Disclosure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Where Our Funding Comes From</h2>
              <p className="text-gray-700 mb-6">
                We believe in transparency about our funding sources. Here are the types of organizations 
                and individuals who support our work:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center mt-0.5">
                    <Users className="w-3 h-3 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Individual Donors</h4>
                    <p className="text-sm text-gray-600">People like you who believe in our mission</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F97316]/10 flex items-center justify-center mt-0.5">
                    <Landmark className="w-3 h-3 text-[#F97316]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Grant-Making Foundations</h4>
                    <p className="text-sm text-gray-600">Organizations that fund specific programs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center mt-0.5">
                    <HandHeart className="w-3 h-3 text-[#22C55E]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Corporate Partners</h4>
                    <p className="text-sm text-gray-600">Businesses that support community development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center mt-0.5">
                    <Globe className="w-3 h-3 text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Government Grants</h4>
                    <p className="text-sm text-gray-600">Public funding for specific development projects</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-5 bg-blue-50 border-l-4 border-[#0EA5E9]">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Note:</span> We do not accept funding from tobacco, alcohol, 
                  or arms industries. All donors agree to our ethical partnership policy.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2011&q=80"
                alt="Diverse group of people collaborating"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Accountability */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="Financial transparency and accountability"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Ensure Accountability</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Annual External Audit</h4>
                    <p className="text-sm text-gray-600">Conducted by an independent Malawian audit firm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Board Finance Committee</h4>
                    <p className="text-sm text-gray-600">Meets quarterly to review all financial transactions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Segregation of Duties</h4>
                    <p className="text-sm text-gray-600">No single person controls all aspects of any transaction</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Monthly Reconciliation</h4>
                    <p className="text-sm text-gray-600">Bank statements reconciled by independent staff member</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency in Action - Unsplash Image */}
      <section className="relative h-[40vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
          alt="Community working together with transparency and trust"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <Eye className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl font-bold mb-4">Open Book Policy</h2>
            <p className="text-lg text-white/90">
              Donors are welcome to request information about how their contributions are used.
              We respond to all inquiries within 10 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Documents Available */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents Available for Review</h2>
            <p className="text-gray-600">The following documents can be requested via email</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: FileText, name: "Annual Financial Statements", desc: "Audited statements from past fiscal year" },
              { icon: FileCheck, name: "Auditor's Report", desc: "Independent auditor's opinion" },
              { icon: FolderOpen, name: "Board Financial Policies", desc: "Our internal financial governance" },
              { icon: FileSignature, name: "Donor Privacy Policy", desc: "How we protect donor information" },
              { icon: Printer, name: "Annual Report", desc: "Program and financial highlights" },
              { icon: Search, name: "Expenditure Guidelines", desc: "How we approve spending" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 border border-gray-100 hover:border-[#0EA5E9] transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-5 bg-gray-50 text-center"
          >
            <p className="text-gray-700 text-sm mb-3">
              To request any of these documents, please contact our finance team:
            </p>
            <div className="flex items-center justify-center gap-2 text-[#0EA5E9]">
              <Mail className="w-4 h-4" />
              <span className="font-medium">finance@orphansofafrica21.org</span>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              We aim to respond to all requests within 10 business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ethics Statement */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
              <Scale className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Our Ethical Promise</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We promise to use every contribution ethically and effectively. If at any time you have 
                questions about our finances, we welcome your inquiry. We believe that transparency 
                isn't just about sharing numbers—it's about building relationships based on trust.
              </p>
              <p className="text-sm font-medium text-gray-800 mt-3">
                — The OAF Leadership Team
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Finance CTA with Custom SVG Background */}
<section 
  className="relative h-[40vh] overflow-hidden bg-center bg-[#DFDBE5]" 
  style={{ 
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cpath fill='%230EA5E9' fill-opacity='0.4' d='M600 325.1v-1.17c-6.5 3.83-13.06 7.64-14.68 8.64-10.6 6.56-18.57 12.56-24.68 19.09-5.58 5.95-12.44 10.06-22.42 14.15-1.45.6-2.96 1.2-4.83 1.9l-4.75 1.82c-9.78 3.75-14.8 6.27-18.98 10.1-4.23 3.88-9.65 6.6-16.77 8.84-1.95.6-3.99 1.17-6.47 1.8l-6.14 1.53c-5.29 1.35-8.3 2.37-10.54 3.78-3.08 1.92-6.63 3.26-12.74 5.03...'/%3E%3C/svg%3E")`
  }}
>
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <div className="text-center text-white max-w-3xl px-6">
      <h3 className="text-2xl font-bold mb-3">Have Questions About Our Finances?</h3>
      <p className="text-white/90 text-sm mb-5">
        We're here to provide clarity and answer any questions you may have.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a 
          href="mailto:finance@orphansofafrica21.org" 
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0EA5E9] text-white text-sm font-medium hover:bg-[#0284C7] transition-colors"
        >
          <Mail className="w-4 h-4" />
          Email Finance Team
        </a>
        <a 
          href="#" 
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white/70 text-white text-sm font-medium hover:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Schedule a Call
        </a>
      </div>
    </div>
  </div>
</section>


      <Footer />
      <ScrollToTopButton />
    </div>
  );
}