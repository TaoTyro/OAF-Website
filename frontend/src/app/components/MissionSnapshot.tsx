import { BookOpen, Heart, Scale, Leaf } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Brand Colors
const brandColors = {
  orange: "#F97316",
  lightBlue: "#0EA5E9",
  brightGreen: "#22C55E",
  green: "#10B981",
};

// Mission Data
const missions = [
  {
    id: 'literacy',
    icon: BookOpen,
    title: 'Literacy Education',
    description: 'Providing quality education, learning materials, and scholarships to orphans and vulnerable children in rural Malawi.',
    color: brandColors.lightBlue,
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80',
    altText: 'Children reading books in classroom',
    stats: '1,500+ students supported',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Health Care',
    description: 'Ensuring access to maternal health, clean birthing kits, and reproductive health education for rural communities.',
    color: brandColors.orange,
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    altText: 'Healthcare worker with mother and child',
    stats: '7,000+ birthing kits distributed',
  },
  {
    id: 'justice',
    icon: Scale,
    title: 'Social Justice',
    description: 'Advocating for gender equality, preventing GBV, and protecting the rights of vulnerable children and women.',
    color: brandColors.brightGreen,
    imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    altText: 'Community gathering advocating for rights',
    stats: '42 villages reached',
  },
  {
    id: 'climate',
    icon: Leaf,
    title: 'Sustainable Climate Solutions',
    description: 'Creating environmental resilience through tree planting, sustainable agriculture, and climate education.',
    color: brandColors.green,
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    altText: 'Children planting trees',
    stats: '1,000+ trees planted',
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function MissionSnapshot() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Brand Accent */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-[#F97316] rounded-full" />
            <div className="w-12 h-1 bg-[#0EA5E9] rounded-full" />
            <div className="w-12 h-1 bg-[#22C55E] rounded-full" />
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Mission
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            We are committed to creating lasting positive change through four core interventions 
            that address the root causes of poverty and vulnerability.
          </p>
        </motion.div>

        {/* Mission Cards Grid */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {missions.map((mission) => {
            const Icon = mission.icon;
            
            return (
              <motion.div
                key={mission.id}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={mission.imageUrl}
                    alt={mission.altText}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay with color gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, ${mission.color} 0%, transparent 100%)` 
                    }}
                  />
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-medium" style={{ color: mission.color }}>
                      {mission.stats}
                    </p>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Icon and Title Row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${mission.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: mission.color }} />
                    </div>
                    <h3 
                      className="text-xl font-bold text-gray-900"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {mission.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>

                  {/* Bottom Accent - Animated on hover */}
                  <motion.div 
                    className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: mission.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Statement - Appears on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Decorative line */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-0.5 bg-gradient-to-r from-[#F97316] via-[#0EA5E9] to-[#22C55E]" />
            
            <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
              Together, we're building a future where every child has access to 
              <span className="font-semibold text-[#F97316]"> education</span>, 
              <span className="font-semibold text-[#0EA5E9]"> healthcare</span>, 
              <span className="font-semibold text-[#22C55E]"> justice</span>, and 
              <span className="font-semibold text-[#10B981]"> a sustainable environment</span>.
            </p>
          </div>
        </motion.div>

        {/* Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '1,500+', label: 'Students', color: brandColors.lightBlue },
            { number: '7,000+', label: 'Birthing Kits', color: brandColors.orange },
            { number: '42', label: 'Villages', color: brandColors.brightGreen },
            { number: '1,000+', label: 'Trees Planted', color: brandColors.green },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}