import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import childrenImg from "../../assets/childrenImg.jpeg";
import communityImg from "../../assets/communityImg.jpg";
import universityImg from "../../assets/universityImg.jpg";
import donorsImg from "../../assets/donorImg.jpg";
import classroomImg from "../../assets/classroom.jpg";
import birthingImg from "../../assets/birthing1.jpg";
import teacherImg from "../../assets/teacher.jpg";

// Brand Color - Single consistent color
const brandColor = "#5AAFD1";

// Stats data
const stats = [

   {
    value: 50,
    label: 'Communities Reached',
    description: 'Villages and communities across Malawi where we have active programs and partnerships.',
    imageUrl: communityImg,
    altText: 'Rural community gathering'
  },

  {
    value: 100,
    label: 'University Students Supported',
    description: 'Scholarships and educational support for orphans pursuing higher education.',
    imageUrl: universityImg,
    altText: 'University students studying'
  },

  {
    value: 150,
    label: 'Children Supported',
    description: 'Orphans and vulnerable children receiving education, healthcare, and emotional support.',
    imageUrl: childrenImg,
    altText: 'Children smiling in Malawi'
  },
  
  {
    value: 12,
    label: 'Global Donors',
    description: 'International partners and organizations funding our mission.',
    imageUrl: donorsImg,
    altText: 'Global partnership meeting'
  }
];

// Impact highlights
const impactHighlights = [
  {
    stat: '45% → 75%',
    label: 'Increase in primary school pass rates',
    description: 'Across 8 partner schools since 2020',
    imageUrl: classroomImg,
    altText: 'Children in classroom'
  },
  {
    stat: '7,500+',
    label: 'Clean birthing kits distributed',
    description: 'To expectant mothers in rural communities',
    imageUrl: birthingImg,
    altText: 'Healthcare worker with mother'
  },
  {
    stat: '4',
    label: 'Former orphans now qualified teachers',
    description: 'Returning to teach in their home communities',
    imageUrl: teacherImg,
    altText: 'Teacher in classroom'
  }
];

// Counter Component
function CountingNumber({ target, symbol = '' }: { target: number; symbol?: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {symbol}
    </span>
  );
}

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

export function ImpactStats() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [milestonesRef, milestonesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-blue" id="impact-stats">
      <div className="max-w-7xl mx-auto">
        
        {/* Newspaper-style Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-32"
        >
             
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#5AAFD1] mb-6 tracking-tight"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Our Impact
          </h1>
          
          <motion.p 
            className="text-xl text-gray-500 leading-relaxed"
            variants={textRevealVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.3}
          >
            Measuring the difference we make together
          </motion.p>
        </motion.div>

        {/* Main Stats - Full bleed newspaper feature */}
        <div className="space-y-32 md:space-y-40 mb-40">
          {stats.map((stat, index) => {
            const [statRef, statInView] = useInView({
              triggerOnce: false,
              threshold: 0.3,
              rootMargin: "-100px 0px",
            });

            const [imageRef, imageInView] = useInView({
              triggerOnce: false,
              threshold: 0.3,
              rootMargin: "-150px 0px",
            });

            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={index}
                ref={statRef}
                className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
                initial={{ opacity: 0 }}
                animate={statInView ? { opacity: 1 } : {}}
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
                  >
                    {/* Main Image with Parallax Scale */}
                    <motion.img
                      src={stat.imageUrl}
                      alt={stat.altText}
                      className="w-full h-[350px] object-cover"
                      style={{
                        scale: imageInView ? 1.15 : 1,
                        y: imageInView ? -20 : 0,
                      }}
                      transition={{
                        duration: 1.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                    
                    {/* Professional Pill Overlay Effect */}
                    <motion.div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${brandColor}30 0%, transparent 70%)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={imageInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                    
                    {/* Corner Accent */}
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
                    
                    <span style={{ color: brandColor }}>Impact</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500">{stat.label}</span>
                  </motion.div>
                </div>

                {/* Content Column */}
                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  {/* Section Label */}
                  <motion.div
                    className="text-sm text-gray-400 mb-4 flex items-center gap-2"
                    variants={textRevealVariants}
                    initial="hidden"
                    animate={statInView ? "visible" : "hidden"}
                    custom={0.1}
                  >
                   
                    <span>IMPACT METRIC {index + 1} OF 4</span>
                  </motion.div>

                  {/* Stat Number with Scale Animation */}
                  <motion.div
                    variants={statNumberVariants}
                    initial="hidden"
                    animate={statInView ? "visible" : "hidden"}
                    custom={0.15}
                    className="text-7xl md:text-8xl font-bold mb-4 leading-none"
                    style={{ color: brandColor, fontFamily: 'Georgia, Times New Roman, serif' }}
                  >
                    <CountingNumber target={stat.value} symbol="+" />
                  </motion.div>
                  
                  {/* Label */}
                  <motion.h3
                    className="text-2xl font-medium text-gray-900 mb-4"
                    variants={textRevealVariants}
                    initial="hidden"
                    animate={statInView ? "visible" : "hidden"}
                    custom={0.25}
                  >
                    {stat.label}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p
                    className="text-gray-500 leading-relaxed text-lg"
                    variants={textRevealVariants}
                    initial="hidden"
                    animate={statInView ? "visible" : "hidden"}
                    custom={0.35}
                  >
                    {stat.description}
                  </motion.p>

                  {/* Decorative Line */}
                  <motion.div 
                    className="mt-6 w-16 h-0.5"
                    style={{ backgroundColor: brandColor }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={statInView ? { 
                      scaleX: 1,
                      transition: { duration: 0.8, delay: 0.45 }
                    } : {}}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Impact Highlights - Three-column newspaper style */}
        <motion.div
          ref={milestonesRef}
          initial={{ opacity: 0 }}
          animate={milestonesInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-40"
        >
          <div className="text-center mb-16">
            <motion.div 
              className="w-16 h-0.5 mx-auto mb-6"
              style={{ backgroundColor: brandColor }}
              initial={{ scaleX: 0 }}
              animate={milestonesInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <motion.h2 
              className="text-3xl font-light text-gray-900 uppercase tracking-widest"
              variants={textRevealVariants}
              initial="hidden"
              animate={milestonesInView ? "visible" : "hidden"}
              custom={0.2}
            >
              Key Milestones
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-8">
            {impactHighlights.map((item, index) => {
              const [highlightRef, highlightInView] = useInView({
                triggerOnce: true,
                threshold: 0.3,
              });

              return (
                <motion.div
                  key={index}
                  ref={highlightRef}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={highlightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  {/* Image with professional overlay */}
                  <div className="relative overflow-hidden bg-gray-100 mb-6">
                    <motion.img
                      src={item.imageUrl}
                      alt={item.altText}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Pill Overlay Effect */}
                    <motion.div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(45deg, ${brandColor}40 0%, transparent 70%)`,
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    
                    {/* Corner Accent */}
                    <div 
                      className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2"
                      style={{ borderColor: brandColor }}
                    />
                  </div>

                  {/* Content */}
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: brandColor, fontFamily: 'Georgia, Times New Roman, serif' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {item.stat}
                  </motion.div>
                  
                  <p className="text-gray-900 font-medium mb-2">
                    {item.label}
                  </p>
                  
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <motion.div 
                    className="mt-4 w-0 h-0.5 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: brandColor }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Narrative section - Newspaper editorial style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center pt-24 border-t border-gray-100"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl text-gray-400 italic font-bold leading-relaxed" 
               style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
              "Every number represents a life changed, a future transformed."
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}