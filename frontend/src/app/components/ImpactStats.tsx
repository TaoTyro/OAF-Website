import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Brand Color - Single consistent color
const brandColor = "#F97316"; // Orange

// Stats data - simplified
const stats = [
  {
    value: 150,
    label: 'Children Supported',
    description: 'Orphans and vulnerable children receiving education, healthcare, and emotional support.'
  },
  {
    value: 50,
    label: 'Communities Reached',
    description: 'Villages and communities across Malawi where we have active programs and partnerships.'
  },
  {
    value: 100,
    label: 'University Students Supported',
    description: 'Scholarships and educational support for orphans pursuing higher education.'
  },
  {
    value: 12,
    label: 'Global Donors',
    description: 'International partners and organizations funding our mission.'
  }
];

// Additional impact narrative
const impactHighlights = [
  {
    stat: '45% → 75%',
    label: 'Increase in primary school pass rates',
    description: 'Across 8 partner schools since 2020'
  },
  {
    stat: '7,500+',
    label: 'Clean birthing kits distributed',
    description: 'To expectant mothers in rural communities'
  },
  {
    stat: '4',
    label: 'Former orphans now qualified teachers',
    description: 'Returning to teach in their home communities'
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

export function ImpactStats() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white" id="impact-stats">
      <div className="max-w-6xl mx-auto">
        
        {/* Newspaper-style header with lots of space */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl mx-auto text-center"
        >
          {/* Decorative line - brand color */}
          <div className="w-24 h-0.5 bg-[#F97316] mx-auto mb-8" />
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Our Impact
          </h1>
          
          <p className="text-xl text-gray-500 leading-relaxed">
            Measuring the difference we make together
          </p>
          
          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mt-8" />
        </motion.div>

        {/* Main stats - Newspaper feature section */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                ref={index === 0 ? statsRef : null}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="border-b border-gray-100 pb-8 last:border-0 md:last:border-b"
              >
                {/* Stat number - brand color */}
                <div 
                  className="text-6xl md:text-7xl font-bold mb-3 leading-none"
                  style={{ color: brandColor, fontFamily: 'Georgia, Times New Roman, serif' }}
                >
                  <CountingNumber target={stat.value} symbol="+" />
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {stat.label}
                </h3>
                
                {/* Description - subtle gray */}
                <p className="text-gray-500 leading-relaxed max-w-md">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact highlights - Three-column newspaper style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6" />
            <h2 className="text-3xl font-light text-gray-900 uppercase tracking-widest">
              Key Milestones
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {impactHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {/* Highlight stat - brand color */}
                <div 
                  className="text-3xl md:text-4xl font-bold mb-3"
                  style={{ color: brandColor }}
                >
                  {item.stat}
                </div>
                
                {/* Label */}
                <p className="text-gray-900 font-medium mb-2">
                  {item.label}
                </p>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Narrative section - Newspaper editorial style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center pt-16 border-t border-gray-100"
        >
          <p className="text-lg text-gray-400 mb-4 italic font-light">
            "Every number represents a life changed, a future transformed."
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <span>—</span>
            <span>Impact Report 2024</span>
            <span>—</span>
          </div>
          
          {/* Fine print */}
          <p className="text-xs text-gray-300 mt-12">
            All figures verified as of December 2024. Full impact reports available upon request.
          </p>
        </motion.div>

      </div>
    </section>
  );
}