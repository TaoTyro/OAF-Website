import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Brand Color - Single consistent color
const brandColor = "#5AAFD1";

const programs = [
  {
    title: 'Primary Education Initiative',
    description: 'Building and supporting schools to give children access to quality education and a brighter future.',
    image: 'https://images.unsplash.com/photo-1585847812247-4482e9f6f0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjBzY2hvb2x8ZW58MXx8fHwxNzY2NjYwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Children in classroom in Malawi'
  },
  {
    title: 'Healthcare & Nutrition',
    description: 'Providing essential healthcare services and nutritious meals to ensure healthy development.',
    image: 'https://images.unsplash.com/photo-1761234852163-23f2ededd04e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2hpbGRyZW4lMjBhZnJpY2F8ZW58MXx8fHwxNzY2NzQ4ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Healthcare worker with children'
  },
  {
    title: 'Community Development',
    description: 'Empowering local communities through sustainable programs and partnerships.',
    image: 'https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlZHVjYXRpb24lMjBhZnJpY2F8ZW58MXx8fHwxNzY2NzQ4ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Community gathering in Malawi'
  },
  {
    title: 'Orphan Care Centers',
    description: 'Safe, loving environments where orphaned children can grow and thrive together.',
    image: 'https://images.unsplash.com/photo-1547922938-a6dcb893f375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjY2OTQyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Children at care center'
  },
  {
    title: 'Social Justice Advocacy',
    description: 'Fighting for the rights and protection of vulnerable children in our communities.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'Community advocacy meeting'
  },
  {
    title: 'Sustainable Climate Solutions',
    description: 'Implementing environmental initiatives to create a sustainable future for generations to come.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'Children planting trees'
  }
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export function Programs() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white" id="programs">
      <div className="max-w-7xl mx-auto">
        
        {/* Newspaper-style Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-32"
        >
          {/* Brand color accent line */}
          <motion.div 
            className="w-24 h-0.5 mx-auto mb-8"
            style={{ backgroundColor: brandColor }}
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Programs
          </h1>
          
          <motion.p 
            className="text-xl text-gray-500 leading-relaxed"
            variants={textRevealVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.3}
          >
            Making a real difference in communities across Malawi
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="w-16 h-0.5 bg-gray-200 mx-auto mt-8"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        {/* Programs Grid - Newspaper Feature Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-24 md:space-y-32"
        >
          {programs.map((program, index) => {
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

            // Alternate layout
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={index}
                variants={itemVariants}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Image Column with Parallax */}
                <div 
                  ref={imageRef}
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
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
                  >
                    {/* Main Image with Parallax Scale */}
                    <motion.div
                      style={{
                        scale: imageInView ? 1.15 : 1,
                        y: imageInView ? -20 : 0,
                      }}
                      transition={{
                        duration: 1.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <ImageWithFallback
                        src={program.image}
                        alt={program.alt || program.title}
                        className="w-full h-[400px] object-cover"
                      />
                    </motion.div>
                    
                    {/* Professional Pill Overlay Effect */}
                    <motion.div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${brandColor}40 0%, transparent 70%)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={imageInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                    
                    {/* Corner Accents */}
                    <motion.div 
                      className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2"
                      style={{ borderColor: brandColor }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={imageInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    
                    <motion.div 
                      className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2"
                      style={{ borderColor: brandColor }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={imageInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.div>

                  {/* Image Caption */}
                  <motion.div
                    className="mt-3 flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={imageInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: 0.3 }
                    } : {}}
                  >
                    <span className="text-gray-400">—</span>
                    <span style={{ color: brandColor }}>Program Feature</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500">Program {index + 1} of {programs.length}</span>
                  </motion.div>
                </div>

                {/* Content Column */}
                <div 
                  ref={contentRef}
                  className={isEven ? 'lg:order-2' : 'lg:order-1'}
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
                    <span>INITIATIVE</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.7, delay: 0.15 }
                    } : {}}
                  >
                    {program.title}
                  </motion.h2>

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
                    {program.description}
                  </motion.p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={contentInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: 0.35 }
                    } : {}}
                  >
                    <button 
                      className="text-sm font-medium inline-flex items-center gap-2 group"
                      style={{ color: brandColor }}
                    >
                      <span>Learn more about this program</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>

                  {/* Decorative Line */}
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
        </motion.div>

        {/* View All Programs Link - Newspaper Footer Style */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 text-center"
        >
          <div className="relative inline-block">
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-px"
              style={{ backgroundColor: brandColor }}
              initial={{ scaleX: 0 }}
              animate={footerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <a 
              href="#all-programs" 
              className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group text-lg"
            >
              <span>View all programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ color: brandColor }} />
            </a>
            
            <motion.div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-px"
              style={{ backgroundColor: brandColor }}
              initial={{ scaleX: 0 }}
              animate={footerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          {/* Program Count */}
          <motion.p 
            className="text-sm text-gray-400 mt-12"
            initial={{ opacity: 0 }}
            animate={footerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {programs.length} comprehensive programs serving communities across Malawi
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}