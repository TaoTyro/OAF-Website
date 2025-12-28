import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const stats = [
  { value: 5000, label: 'Children Supported', suffix: '+' },
  { value: 150, label: 'Schools Partnered', suffix: '+' },
  { value: 45, label: 'Communities Reached', suffix: '' }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset counter when component mounts or becomes visible
    setCount(0);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  // Trigger animation when element comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-counter="${value}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span data-counter={value}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="impact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem' }}>Our Impact</h2>
          <p className="text-gray-600 mt-2">Real change, measurable results</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="mb-2"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-blue)'
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
