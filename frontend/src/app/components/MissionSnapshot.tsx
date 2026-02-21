import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Users, TrendingUp, Baby, Accessibility, Trees, Sparkles, Megaphone, Eye } from 'lucide-react';

const brandColors = {
  orange: "#F97316",
  lightBlue: "#0EA5E9",
  brightGreen: "#22C55E",
  green: "#10B981",
  purple: "#8B5CF6",
  teal: "#14B8A6",
  amber: "#F59E0B",
  rose: "#F43F5E",
  indigo: "#6366F1",
  emerald: "#10B981"
};

const missions = [
  {
    icon: Heart,
    title: 'Supporting Orphans',
    desc: 'Shelter & emotional support',
    color: brandColors.orange,
    image: 'https://images.unsplash.com/photo-1488521787991-1c523e642b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'child welfare'
  },
  {
    icon: GraduationCap,
    title: 'Access to Education',
    desc: 'Breaking poverty cycle',
    color: brandColors.lightBlue,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'education'
  },
  {
    icon: Users,
    title: 'Community Dev',
    desc: 'Skills & leadership',
    color: brandColors.brightGreen,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'community'
  },
  {
    icon: TrendingUp,
    title: 'Poverty Reduction',
    desc: 'Economic empowerment',
    color: brandColors.green,
    image: 'https://images.unsplash.com/photo-1532629346022-e4c9bc0f4f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'economic'
  },
  {
    icon: Heart,
    title: 'Health & Wellbeing',
    desc: 'Healthcare & nutrition',
    color: brandColors.rose,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'health'
  },
  {
    icon: Baby,
    title: 'Women Empowerment',
    desc: 'Education & mentorship',
    color: brandColors.purple,
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'gender'
  },
  {
    icon: Accessibility,
    title: 'Disability Inclusion',
    desc: 'Accessible opportunities',
    color: brandColors.teal,
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'inclusion'
  },
  {
    icon: Trees,
    title: 'Environmental Care',
    desc: 'Tree planting & conservation',
    color: brandColors.emerald,
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'environment'
  },
  {
    icon: Sparkles,
    title: 'Values-Driven',
    desc: 'Compassion & integrity',
    color: brandColors.amber,
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'values'
  },
  {
    icon: Megaphone,
    title: 'Advocacy',
    desc: 'Children\'s rights & policy',
    color: brandColors.indigo,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'advocacy'
  }
];

// Parallax Card Component
const ParallaxCard = ({ mission, index, scrollY }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardPos, setCardPos] = useState(0);
  
  useEffect(() => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const offset = (elementCenter - window.innerHeight / 2) * 0.3;
    setCardPos(offset);
  }, [scrollY]);

  const Icon = mission.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        y: cardPos,
        perspective: 1000
      }}
      whileHover={{ y: cardPos - 12 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-100/50 h-full flex flex-col"
        style={{
          transform: isHovered ? 'translateZ(20px) rotateX(2deg)' : 'translateZ(0)',
          boxShadow: isHovered ? `0 20px 40px ${mission.color}20` : 'inherit'
        }}
      >
        {/* Image Container with Parallax */}
        <div className="relative h-32 sm:h-36 overflow-hidden bg-gradient-to-b from-gray-200 to-gray-100">
          <motion.img 
            src={mission.image} 
            alt={mission.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={{ duration: 0.6 }}
            style={{ y: cardPos * 0.5 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Stacked Badge Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            className="absolute top-2 left-2 text-xs font-bold px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-gray-700 shadow-md"
          >
            {mission.category}
          </motion.div>

          {/* Icon Badge - Floating Effect */}
          <motion.div
            className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-4 h-4" style={{ color: mission.color }} />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col">
          <motion.h3 
            className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.15, duration: 0.4 }}
          >
            {mission.title}
          </motion.h3>
          
          <motion.p 
            className="text-xs sm:text-sm text-gray-600 leading-snug mt-1.5 line-clamp-2 flex-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
          >
            {mission.desc}
          </motion.p>

          {/* Animated Bottom Bar */}
          <motion.div
            className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
          >
            <motion.div
              className="h-1 rounded-full flex-1"
              style={{ backgroundColor: mission.color }}
              animate={{ scaleX: isHovered ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-xs text-gray-400 ml-2 font-medium">{String(index + 1).padStart(2, '0')}</span>
          </motion.div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none border-2"
          style={{ borderColor: mission.color }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

// Main Component
export function MissionSnapshot() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const [containerInView, setContainerInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-10"
          animate={{ y: scrollY * 0.3 }}
          transition={{ type: "tween" }}
        />
        <motion.div
          className="absolute bottom-20 right-5 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-10"
          animate={{ y: -scrollY * 0.2 }}
          transition={{ type: "tween" }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-10"
          animate={{ y: scrollY * 0.15 }}
          transition={{ type: "tween" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Animated Color Bars */}
          <motion.div
            className="flex justify-center gap-1.5 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[brandColors.orange, brandColors.lightBlue, brandColors.brightGreen].map((color, i) => (
              <motion.div
                key={i}
                className="h-1 rounded-full"
                style={{ width: '32px', backgroundColor: color }}
                animate={{ width: ['32px', '48px', '32px'] }}
                transition={{ delay: i * 0.15, duration: 2, repeat: Infinity }}
              />
            ))}
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Our Mission
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ten pillars guiding lasting change for children, families, and communities across Malawi.
          </motion.p>

          {/* Stats with Staggered Animation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              { label: '10 Missions', icon: Heart, color: brandColors.orange },
              { label: 'Community-Led', icon: Users, color: brandColors.lightBlue },
              { label: 'Values-Driven', icon: Sparkles, color: brandColors.brightGreen }
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.span
                  key={i}
                  className="flex items-center gap-2 text-gray-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                >
                  <StatIcon className="w-4 h-4" style={{ color: stat.color }} />
                  {stat.label}
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Mission Cards Grid - Responsive */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 auto-rows-max"
          onViewportEnter={() => setContainerInView(true)}
        >
          {missions.map((mission, index) => (
            <ParallaxCard
              key={index}
              mission={mission}
              index={index}
              scrollY={scrollY}
            />
          ))}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Every project, partnership, and decision guided by these ten missions.
          </p>
          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {Object.values(brandColors).map((color, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ delay: index * 0.1, duration: 1.5, repeat: Infinity }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}