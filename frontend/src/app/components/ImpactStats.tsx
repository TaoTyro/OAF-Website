import { Users, Heart, BookOpen, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: 150,
    label: 'Children Supported',
    color: 'var(--primary-blue)'
  },
  {
    icon: Heart,
    value: 50,
    label: 'Communities Reached',
    color: 'var(--primary-orange)'
  },
  {
    icon: BookOpen,
    value: 100,
    label: 'University Students Supported',
    color: 'var(--primary-green)'
  },
  {
    icon: Globe,
    value: 12,
    label: 'Global Donors',
    color: 'var(--primary-blue)'
  }
];

function CountingNumber({ target, symbol = '' }: { target: number; symbol?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [target]);

  return (
    <div>
      {count.toLocaleString()}
      {symbol}
    </div>
  );
}

export function ImpactStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  bg-white dark:from-gray-900 dark:to-gray-800" id="impact-stats">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4">Our Impact</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Making measurable difference in lives across Africa</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center dark:hover:shadow-cyan-600 border border-gray-200 hover:translate-1 hover:border-gray-300 duration-300 transition-transform"
              >
                <Icon
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: stat.color }}
                />
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: stat.color, fontFamily: 'Poppins, sans-serif' }}
                >
                  <CountingNumber target={stat.value} symbol="+" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
