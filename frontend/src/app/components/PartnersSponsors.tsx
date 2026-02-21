import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Award, 
  Heart, 
  BookOpen, 
  Globe, 
  GraduationCap, 
  Droplet,
  HandHeart,
  Leaf,
  Users,
  Target,
  TrendingUp,
  Sparkles,
  Star,
  Trophy,
  Shield,
  Handshake,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ChevronRight,
  Quote
} from 'lucide-react';

// Brand Colors
const brandColors = {
  orange: "#F97316",
  lightBlue: "#0EA5E9",
  brightGreen: "#22C55E",
  green: "#10B981",
};

// Partner Interface
interface Partner {
  id: number;
  name: string;
  logoPlaceholder: string; // Path to custom logo
  initials: string;
  description: string;
  impact: string;
  partnershipSince: string;
  website?: string;
  category: 'health' | 'education' | 'sports' | 'university' | 'government';
  featured: boolean;
}

// Partners Data
const partners: Partner[] = [
  {
    id: 1,
    name: 'Birthing Kits Foundation Australia',
    logoPlaceholder: '/images/partners/birthing-kit-foundation.jpg',
    initials: '',
    description: 'Providing clean birthing kits to improve maternal and neonatal health outcomes in rural Malawi.',
    impact: '7,500+ birthing kits distributed to expectant mothers',
    partnershipSince: '2021',
    category: 'health',
    featured: true,
  },
  {
    id: 2,
    name: 'International Book Project',
    logoPlaceholder: '/images/partners/international-book-project.png',
    initials: '',
    description: 'Supplying educational books and resources to schools and libraries in underserved communities.',
    impact: '5,000+ books distributed across 8 primary schools',
    partnershipSince: '2020',
    category: 'education',
    featured: true,
  },
  {
    id: 3,
    name: 'UEFA Foundation for Children',
    logoPlaceholder: '/images/partners/uefa-foundation.webp',
    initials: '',
    description: 'Supporting children through sport, promoting health, education, and social inclusion.',
    impact: '42 villages reached with inclusive sports initiatives',
    partnershipSince: '2022',
    category: 'sports',
    featured: true,
  },
  {
    id: 4,
    name: 'A Ball for All',
    logoPlaceholder: '/images/partners/aballfor-all-logo.jpg',
    initials: '',
    description: 'Providing sports equipment and organizing inclusive activities for children with disabilities.',
    impact: '500+ children reached with Mini Blind Balls',
    partnershipSince: '2022',
    category: 'sports',
    featured: false,
  },
  {
    id: 5,
    name: 'Mzuzu University',
    logoPlaceholder: '/images/partners/mzuni-logo.png',
    initials: '',
    description: 'Higher education partnership supporting scholarships and academic development for orphans.',
    impact: '27 students supported through university education',
    partnershipSince: '2021',
    category: 'university',
    featured: true,
  },
  {
    id: 6,
    name: 'Feed My Starving Children',
    logoPlaceholder: '/images/partners/feed-my-starving-children.jpg',
    initials: '',
    description: 'Providing nutritious meals to vulnerable children to support their health and education.',
    impact: '10,000+ meals provided to school children',
    partnershipSince: '2022',
    category: 'health',
    featured: false,
  },
  {
    id: 7,
    name: 'Seedlings Braille Books',
    logoPlaceholder: '/images/partners/seedlings-braille-books-Logo.png',
    initials: '',
    description: 'Supplying braille books to ensure visually impaired children have access to education.',
    impact: '200+ braille books for visually impaired students',
    partnershipSince: '2023',
    category: 'education',
    featured: false,
  },
  {
    id: 8,
    name: 'Book for Africa',
    logoPlaceholder: '/images/partners/book-for-africa.png',
    initials: '',
    description: 'Shipping educational materials and books to support literacy across African communities.',
    impact: '3,000+ educational materials distributed',
    partnershipSince: '2020',
    category: 'education',
    featured: false,
  },
  {
    id: 9,
    name: 'Malawi Ministry of Health',
    logoPlaceholder: '/images/partners/malawi-ministry-of-health.jpg',
    initials: '',
    description: 'Government partnership supporting healthcare initiatives and maternal health programs.',
    impact: 'Partner on birthing kit distribution and SRHR campaigns',
    partnershipSince: '2021',
    category: 'government',
    featured: true,
  },
];

// Category Icons
const categoryIcons = {
  health: Heart,
  education: BookOpen,
  sports: Trophy,
  university: GraduationCap,
  government: Shield,
};

// Category Colors
const categoryColors = {
  health: brandColors.orange,
  education: brandColors.lightBlue,
  sports: brandColors.brightGreen,
  university: brandColors.green,
  government: '#6B7280',
};

// Stats Data
const partnershipStats = [
  { label: 'Active Partners', value: 9, icon: Handshake, color: brandColors.orange },
  { label: 'Countries Reached', value: 5, icon: Globe, color: brandColors.lightBlue },
  { label: 'Communities Impacted', value: 42, icon: Users, color: brandColors.brightGreen },
  { label: 'Years of Collaboration', value: 5, icon: Calendar, color: brandColors.green },
];

// Background Images for Hero Section Carousel
const heroBackgroundImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop', // Community work
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop' // Children education
];

// Partnership Category Images
const partnershipImages = {
  health: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop', // Healthcare
  education: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=400&fit=crop', // Students/learning
  sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop', // Sports/children
  university: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=400&fit=crop', // University/learning
};

// CTA Background Image
const ctaBackgroundImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop';

export default function PartnersSponsors() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroBackgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: '0 20px 30px -10px rgba(0,0,0,0.2)',
      transition: { duration: 0.3 },
    },
  };

  // Group partners by category
  const featuredPartners = partners.filter(p => p.featured);
  const otherPartners = partners.filter(p => !p.featured);

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-b from-gray-50 to-white py-40 overflow-hidden bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url('${heroBackgroundImages[currentImageIndex]}')`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Partners & Sponsors
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Collaborating with organizations that share our vision for creating 
              lasting change in communities across Malawi.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {partnershipStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ backgroundColor: `${stat.color}` }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Image Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {heroBackgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/50 w-2 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Partners Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our closest collaborators who have made significant contributions to our mission
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredPartners.map((partner, index) => {
              const CategoryIcon = categoryIcons[partner.category];
              const categoryColor = categoryColors[partner.category];
              
              return (
                <motion.div
                  key={partner.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  {/* Logo Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                    <img 
                      src={partner.logoPlaceholder} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: `${categoryColor}15`, color: categoryColor }}
                      >
                        {partner.category.charAt(0).toUpperCase() + partner.category.slice(1)}
                      </span>
                      <span className="text-xs text-gray-400">Since {partner.partnershipSince}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{partner.description}</p>

                    {/* Impact Highlight */}
                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-[#22C55E] mt-0.5" />
                        <p className="text-sm text-gray-700">{partner.impact}</p>
                      </div>
                    </div>

                    {/* Website Link */}
                    {partner.website && (
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#0EA5E9] hover:underline"
                      >
                        Visit website <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Partners by Category */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Partners by Sector</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse organizations supporting our multi-sectoral approach
            </p>
          </motion.div>

          {/* Categories Grid */}
          {['health', 'education', 'sports', 'university', 'government'].map((category) => {
            const categoryPartners = partners.filter(p => p.category === category);
            if (categoryPartners.length === 0) return null;
            
            const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
            const categoryColor = categoryColors[category as keyof typeof categoryColors];
            
            return (
              <div key={category} className="mb-16 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${categoryColor}15` }}>
                    <CategoryIcon className="w-5 h-5" style={{ color: categoryColor }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Partners
                  </h3>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {categoryPartners.map((partner) => (
                    <motion.div
                      key={partner.id}
                      variants={itemVariants}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        {/* Small Logo Placeholder */}
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                          <img 
                            src={partner.logoPlaceholder} 
                            alt={partner.name}
                            className="w-12 h-12 object-contain"
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{partner.name}</h4>
                          <p className="text-xs text-gray-500 mb-2">Since {partner.partnershipSince}</p>
                          <p className="text-sm text-gray-600">{partner.description}</p>
                          
                          {/* Impact Tag */}
                          <div className="mt-3 inline-flex items-center gap-1 text-xs bg-[#22C55E]/10 text-[#22C55E] px-2 py-1 rounded-full">
                            <TrendingUp className="w-3 h-3" />
                            <span>{partner.impact}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact Story */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnerships in Action</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Through our partnerships, we've been able to create sustainable impact across multiple sectors:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Droplet className="w-3 h-3 text-[#F97316]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Birthing Kits Foundation Australia & Malawi Ministry of Health</p>
                    <p className="text-sm text-gray-600">7,500+ clean birthing kits distributed to rural health centers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="w-3 h-3 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">International Book Project, Book for Africa & Seedlings Braille Books</p>
                    <p className="text-sm text-gray-600">8,000+ books and educational materials distributed to schools</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Trophy className="w-3 h-3 text-[#22C55E]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">UEFA Foundation & A Ball for All</p>
                    <p className="text-sm text-gray-600">Inclusive sports programs reaching 42 villages and 500+ children with disabilities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GraduationCap className="w-3 h-3 text-[#10B981]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mzuzu University Partnership</p>
                    <p className="text-sm text-gray-600">27 orphans supported through university education</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <Quote className="w-6 h-6 text-[#F97316] mb-2" />
                <p className="text-gray-600 italic">
                  "These partnerships amplify our impact and allow us to reach communities 
                  we could never reach alone. Together, we're creating lasting change."
                </p>
                <p className="text-sm text-gray-500 mt-2">— Timothy Mwale, Executive Director</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Partnership Images Placeholder */}
              <div className="space-y-4">
                <div 
                  className="bg-cover bg-center h-40 rounded-xl flex items-center justify-center text-white text-center p-4 relative overflow-hidden"
                  style={{ backgroundImage: `url('${partnershipImages.health}')` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10">
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Health Partners</p>
                  </div>
                </div>
                <div 
                  className="bg-cover bg-center h-40 rounded-xl flex items-center justify-center text-white text-center p-4 relative overflow-hidden"
                  style={{ backgroundImage: `url('${partnershipImages.education}')` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10">
                    <BookOpen className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Education Partners</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div 
                  className="bg-cover bg-center h-40 rounded-xl flex items-center justify-center text-white text-center p-4 relative overflow-hidden"
                  style={{ backgroundImage: `url('${partnershipImages.sports}')` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10">
                    <Trophy className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Sports Partners</p>
                  </div>
                </div>
                <div 
                  className="bg-cover bg-center h-40 rounded-xl flex items-center justify-center text-white text-center p-4 relative overflow-hidden"
                  style={{ backgroundImage: `url('${partnershipImages.university}')` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10">
                    <GraduationCap className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">University Partners</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="py-20 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url('${ctaBackgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Partnership Network
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We're always looking for organizations that share our vision for sustainable impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-transparent border-1 border-white text-white rounded-lg font-semibold hover:text-[#0EA5E9] transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Become a Partner
              </button>
              <button className="px-8 py-3 bg-transparent border-1 border-white text-white rounded-lg font-semibold hover:text-[#0EA5E9] transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>

            <p className="text-sm text-white/80 mt-6">
              Already a partner? <a href="#" className="underline hover:text-[#0EA5E9]">Access partner resources</a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos Strip */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by these organizations</p>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="w-22 h-22 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
                <img 
                  src={partner.logoPlaceholder} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}