import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import janeImage from '../../assets/jane.jpg';
import chikuImage from '../../assets/Chikumbutso-student.jpg';
import bernadettahImage from '../../assets/bernadettah-luhanga.jpg';
import archangelImage from '../../assets/archangel-chagwa.jpg';
import chimwemweImage from '../../assets/chimwemwe-duwa.jpg';
import ivyImage from '../../assets/ivy-chrispin.jpg';
import kenImage from '../../assets/ken.jpg';
import trynnessImage from '../../assets/tryness-Mkandawire.jpg';

// Single brand color
const brandColor = "#5AAFD1";

const stories = [
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Jane, Age 21',
    location: 'Mzuzu University, Malawi',
    image: janeImage,
    story: 'While in her second year at Mzuzu University, Jane was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming a teacher.',
    impact: [
      'Continuing with her studies at Mzuzu University',
      'Scholarship recipient',
      'Emotional healing',
      'Emotional support and connection'
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Chikumbutso, Age 22',
    location: 'Mzuzu University, Malawi',
    image: chikuImage,
    story: 'While in his early school years, Chiku was lacking tuition fees until we found him. Today, he\'s continuing his studies and excelling in school and moving towards his dreams of becoming a leader in his community.',
    impact: [
      'Continuing with his studies',
      'Scholarship recipient',
      'Emotional healing',
      'Emotional support and connection'
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Bernadettah, Age 19',
    location: 'Mzuzu University, Malawi',
    image: bernadettahImage,
    story: 'While in her school years, Bernadettah was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming an advocate for girls\' education in her community.',
    impact: [
      'Continuing with her studies',
      'Scholarship recipient',
      'Emotional healing',
      'Emotional support and connection'
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Archangel, Age 20',
    location: 'Mzuzu University, Malawi',
    image: archangelImage,
    story: 'While in his school years, Archangel was lacking tuition fees until we found him. Today, he\'s continuing his studies and excelling in school and moving towards his dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      'Continuing with his studies',
      'Scholarship recipient',
      'Emotional healing',
      'Emotional support and connection'
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Chimwemwe, Age 18',
    location: 'Mzuzu University, Malawi',
    image: chimwemweImage,
    story: 'While in her school years, Chimwemwe was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      'Continuing with her studies',
      'Scholarship recipient',
      'Emotional healing',
      'Emotional support and connection'
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Ivy, Age 17',
    location: 'Mzuzu University, Malawi',
    image: ivyImage,
    story: 'While in her school years, Ivy was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      'Continuing with her studies',
      'Scholarship recipient',
      'Emotional healing',
      'Emotional support and connection'
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Ken, Age 19',
    location: 'Mzuzu University, Malawi',
    image: kenImage,
    story: 'While in his school years, Ken was lacking tuition fees until we found him. Today, he\'s continuing his studies and excelling in school and moving towards his dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      'Continuing with his studies',
      'Scholarship recipient',
      'Emotional healing',
      'Emotional support and connection'
    ]
  },
  {
    title: 'From no Fees to Full Scholarship',
    child: 'Trynness, Age 21',
    location: 'Mzuzu University, Malawi',
    image: trynnessImage,
    story: 'While in her school years, Trynness was lacking tuition fees until we found her. Today, she\'s continuing her studies and excelling in school and moving towards her dreams of becoming a confident and successful student with a bright outlook on life.',
    impact: [
      'Continuing with her studies',
      'Scholarship recipient',
      'Emotional healing',
      'Emotional support and connection'
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function SuccessStories() {
  const [showAll, setShowAll] = useState(false);
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const displayedStories = showAll ? stories : stories.slice(0, 4);
  const hasMoreStories = stories.length > 4;

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white" id="success-stories">
      <div className="max-w-5xl mx-auto">
        
        {/* Newspaper-style Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          {/* Brand color accent line */}
          <div 
            className="w-24 h-0.5 mx-auto mb-8"
            style={{ backgroundColor: brandColor }}
          />
          
          <h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Success Stories
          </h1>
          
          <p className="text-xl text-gray-500 leading-relaxed">
            Real transformations, real lives changed
          </p>
          
          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mt-8" />
        </motion.div>

        {/* Stories Grid - Card-free, newspaper style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16 md:space-y-24"
        >
          {displayedStories.map((story, index) => {
            // Create ref for each story to track its scroll position
            const [imageRef, imageInView] = useInView({ 
              triggerOnce: false, 
              threshold: 0.2,
              rootMargin: "-100px 0px"
            });

            return (
              <motion.article
                key={index}
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-start border-b border-gray-100 pb-16 last:border-0"
              >
                {/* Image Column with Parallax */}
                <div 
                  ref={imageRef}
                  className={index % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={imageInView ? { 
                      opacity: 1, 
                      scale: 1,
                      x: 0,
                      transition: { 
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth parallax
                      }
                    } : { 
                      opacity: 0, 
                      scale: 0.95,
                      x: index % 2 === 0 ? 50 : -50
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-2xl"
                  >
                    {/* Parallax inner image with smooth movement */}
                    <motion.img
                      src={story.image}
                      alt={story.child}
                      className="w-full h-full object-cover"
                      style={{
                        scale: imageInView ? 1.1 : 1,
                        y: imageInView ? -10 : 0
                      }}
                      transition={{
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      animate={{
                        scale: imageInView ? 1.1 : 1,
                        y: imageInView ? -10 : 0
                      }}
                    />
                    
                    {/* Subtle overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                  
                  {/* Image caption - brand color with slide-up animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={imageInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.6, 
                        delay: 0.2,
                        ease: "easeOut"
                      }
                    } : {}}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.2 }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="mt-3 flex items-center gap-2 text-sm"
                  >
                    <span className="text-gray-400">—</span>
                    <span style={{ color: brandColor }}>Photograph</span>
                    <span className="text-gray-400">| {story.location}</span>
                  </motion.div>
                </div>

                {/* Content Column with staggered animations */}
                <div className={index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}>
                  {/* Location line */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.5, delay: 0.1 }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="text-sm text-gray-400 mb-3 flex items-center gap-2"
                  >
                    <span>STUDENT PROFILE</span>
                    <span className="w-8 h-px bg-gray-300" />
                    <span>{story.location}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: 0.15 }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {story.title}
                  </motion.h2>

                  {/* Child name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: 0.2 }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="mb-4"
                  >
                    <span 
                      className="text-lg font-semibold"
                      style={{ color: brandColor }}
                    >
                      {story.child}
                    </span>
                  </motion.div>

                  {/* Story text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: 0.25 }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="text-gray-700 leading-relaxed mb-6 text-lg"
                  >
                    {story.story}
                  </motion.p>

                  {/* Impact section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ 
                      opacity: 1,
                      transition: { duration: 0.6, delay: 0.3 }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="mt-8"
                  >
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      Impact Highlights
                    </h3>
                    <ul className="space-y-3">
                      {story.impact.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { duration: 0.5, delay: 0.35 + i * 0.08 }
                          }}
                          viewport={{ once: true, margin: "-150px" }}
                          className="flex items-start gap-3"
                        >
                          <span 
                            className="text-lg leading-none"
                            style={{ color: brandColor }}
                          >
                            ◆
                          </span>
                          <span className="text-gray-600">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Read more link */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: 0.55 }
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="mt-6"
                  >
                    <button 
                      className="text-sm font-medium inline-flex items-center gap-2 group"
                      style={{ color: brandColor }}
                    >
                      <span>Read full story</span>
                      <motion.span 
                        className="group-hover:translate-x-1 transition-transform"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        →
                      </motion.span>
                    </button>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* View More Button - Clean, minimal */}
        {hasMoreStories && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-20"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 text-sm font-medium transition-all duration-300 flex items-center gap-3 border-t border-b border-gray-200 hover:border-gray-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="w-8 h-px bg-gray-300 group-hover:w-12 transition-all duration-300"
                style={{ backgroundColor: brandColor }}
                animate={{ width: showAll ? 12 : 8 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-gray-600 group-hover:text-gray-900">
                {showAll ? 'Show fewer stories' : 'Discover more stories'}
              </span>
              <motion.span 
                className="w-8 h-px bg-gray-300 group-hover:w-12 transition-all duration-300"
                style={{ backgroundColor: brandColor }}
                animate={{ width: showAll ? 12 : 8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24 pt-8 border-t border-gray-100"
        >
          <motion.p 
            className="text-xs text-gray-400"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {stories.length} students currently supported through our scholarship program
          </motion.p>
          <motion.p 
            className="text-xs text-gray-300 mt-1"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Each story represents a life transformed through education and support
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}