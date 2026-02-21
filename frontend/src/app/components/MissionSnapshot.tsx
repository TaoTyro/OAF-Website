import { BookOpen, Heart, Scale, Leaf } from 'lucide-react';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Single brand color
const brandColor = "#5AAFD1";

// Mission Data
const missions = [
  {
    id: 'literacy',
    icon: BookOpen,
    title: 'Literacy Education',
    description: 'Providing quality education, learning materials, and scholarships to orphans and vulnerable children in rural Malawi.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80',
    altText: 'Children reading books in classroom',
    stats: '1,500+ students supported',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Health Care',
    description: 'Ensuring access to maternal health, clean birthing kits, and reproductive health education for rural communities.',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    altText: 'Healthcare worker with mother and child',
    stats: '7,000+ birthing kits distributed',
  },
  {
    id: 'justice',
    icon: Scale,
    title: 'Social Justice',
    description: 'Advocating for gender equality, preventing GBV, and protecting the rights of vulnerable children and women.',
    imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    altText: 'Community gathering advocating for rights',
    stats: '42 villages reached',
  },
  {
    id: 'climate',
    icon: Leaf,
    title: 'Sustainable Climate Solutions',
    description: 'Creating environmental resilience through tree planting, sustainable agriculture, and climate education.',
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    altText: 'Children planting trees',
    stats: '1,000+ trees planted',
  },
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

const statVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.8 + index * 0.1,
    },
  }),
};

export function MissionSnapshot() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [statementRef, statementInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header - Newspaper Style */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-24"
        >          
          <h2 
            className="text-5xl md:text-6xl font-bold text-[#5AAFD1] mb-6 tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Mission
          </h2>
          
          <motion.p 
            className="text-xl text-gray-500 leading-relaxed"
            variants={textRevealVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.3}
          >
            Four pillars guiding our work to create lasting change 
            for children and communities across Malawi.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="w-16 h-0.5 bg-gray-200 mx-auto mt-8"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        {/* Mission Articles - Newspaper Feature Style */}
        <div className="space-y-32 md:space-y-40">
          {missions.map((mission, index) => {
            const [imageRef, imageInView] = useInView({
              triggerOnce: false,
              threshold: 0.3,
              rootMargin: "-100px 0px",
            });

            const [contentRef, contentInView] = useInView({
              triggerOnce: false,
              threshold: 0.2,
              rootMargin: "-100px 0px",
            });

            // Determine layout alternation
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={mission.id}
                className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
              >
                {/* Image Column with Parallax */}
                <div 
                  ref={imageRef}
                  className={`${isEven ? 'md:order-1' : 'md:order-2'}`}
                >
                  <motion.div
                    className="relative overflow-hidden bg-gray-100"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={imageInView ? { 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    } : {}}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 1.2 }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                  >
                    {/* Main Image with Parallax Scale */}
                    <motion.img
                      src={mission.imageUrl}
                      alt={mission.altText}
                      className="w-full h-[400px] object-cover"
                      style={{
                        scale: imageInView ? 1.15 : 1,
                        y: imageInView ? -20 : 0,
                      }}
                      transition={{
                        duration: 1.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      animate={{
                        scale: imageInView ? 1.15 : 1,
                        y: imageInView ? -20 : 0,
                      }}
                    />
                    
                    {/* Subtle overlay that appears on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>

                  {/* Image Caption */}
                  <motion.div
                    className="mt-3 flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={imageInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: 0.2 }
                    } : {}}
                  >
                    <span className="text-gray-400">—</span>
                    <span style={{ color: brandColor }}>Feature</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500">{mission.stats}</span>
                  </motion.div>
                </div>

                {/* Content Column */}
                <div 
                  ref={contentRef}
                  className={`${isEven ? 'md:order-2' : 'md:order-1'}`}
                >
                  {/* Section Label */}
                  <motion.div
                    className="text-sm text-gray-400 mb-4 flex items-center gap-2"
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    animate={contentInView ? { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.6, delay: 0.1 }
                    } : {}}
                  >
                    <span className="w-8 h-px bg-gray-300" />
                    <span>MISSION {index + 1} OF 4</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.7, delay: 0.15 }
                    } : {}}
                  >
                    {mission.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.7, delay: 0.25 }
                    } : {}}
                  >
                    {mission.description}
                  </motion.p>

                  {/* Stats Highlight */}
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={contentInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: 0.35 }
                    } : {}}
                  >
                    <span 
                      className="text-sm font-semibold tracking-wider uppercase"
                      style={{ color: brandColor }}
                    >
                      Impact: {mission.stats}
                    </span>
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div 
                    className="mt-6 w-16 h-0.5"
                    style={{ backgroundColor: brandColor }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={contentInView ? { 
                      scaleX: 1,
                      transition: { duration: 0.8, delay: 0.45 }
                    } : {}}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Impact Statement - Newspaper Editorial Style */}
        <motion.div
          ref={statementRef}
          initial={{ opacity: 0 }}
          animate={statementInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-40 text-center max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Decorative lines */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 -top-12 w-24 h-px"
              style={{ backgroundColor: brandColor }}
              initial={{ scaleX: 0 }}
              animate={statementInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.p 
              className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={statementInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Together, we're building a future where every child has access to 
              <span className="font-semibold" style={{ color: brandColor }}> education</span>, 
              <span className="font-semibold" style={{ color: brandColor }}> healthcare</span>, 
              <span className="font-semibold" style={{ color: brandColor }}> justice</span>, and 
              <span className="font-semibold" style={{ color: brandColor }}> a sustainable environment</span>.
            </motion.p>
          </div>
        </motion.div>

        {/* Quick Stats Row - Newspaper Footer Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16"
        >
          {[
            { number: '1,500+', label: 'Students', description: 'Supported through education programs' },
            { number: '7,000+', label: 'Birthing Kits', description: 'Distributed to rural health centers' },
            { number: '42', label: 'Villages', description: 'Reached with community programs' },
            { number: '1,000+', label: 'Trees Planted', description: 'Through climate initiatives' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="text-left"
            >
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: brandColor }}
              >
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center text-xs text-gray-300"
        >
          <p>All figures verified as of December 2024. Each number represents real lives changed.</p>
        </motion.div>

      </div>
    </section>
  );
}