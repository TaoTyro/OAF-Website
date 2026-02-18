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
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 
      bg-gradient-to-b from-white to-gray-50 
      dark:from-gray-900 dark:to-gray-800"
      id="impact-stats"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold 
            text-blue-500 dark:text-white"
          >
            Our Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Making measurable difference in lives across Africa
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 
                p-6 sm:p-8 rounded-2xl text-center 
                border border-gray-200 dark:border-gray-700
                shadow-sm hover:shadow-xl
                transition-all duration-300 
                hover:-translate-y-2"
              >
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 mx-auto mb-5 
                  flex items-center justify-center 
                  rounded-full bg-gray-100 
                  dark:bg-gray-700
                  group-hover:scale-110 
                  transition-transform duration-300"
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: stat.color }}
                  />
                </div>

                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: stat.color, fontFamily: 'Poppins, sans-serif' }}
                >
                  <CountingNumber target={stat.value} symbol="+" />
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
