import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, PieChart, Award } from 'lucide-react';

export function MetricsPage() {
  const metrics = [
    { icon: Award, label: 'Children Supported', value: '1200+', color: 'from-blue-400 to-blue-600' },
    { icon: TrendingUp, label: 'Success Rate', value: '85%', color: 'from-green-400 to-green-600' },
    { icon: BarChart3, label: 'Programs Active', value: '15', color: 'from-orange-400 to-orange-600' },
    { icon: PieChart, label: 'Communities Reached', value: '50+', color: 'from-purple-400 to-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-6">
            Performance Metrics
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-16">
            Measuring our impact through data-driven insights and transparent reporting.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${metric.color} p-8 rounded-lg text-white shadow-lg hover:shadow-2xl transition-all`}
              >
                <metric.icon className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-lg font-semibold mb-2 opacity-90">{metric.label}</h3>
                <p className="text-4xl font-bold">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 dark:bg-gray-800 p-12 rounded-lg mb-16"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Key Performance Indicators (KPIs)
            </h2>
            <div className="space-y-6">
              {[
                { label: 'Educational Attainment', current: 78, target: 90 },
                { label: 'Health Outcomes', current: 82, target: 95 },
                { label: 'Economic Empowerment', current: 65, target: 80 },
                { label: 'Social Integration', current: 88, target: 95 }
              ].map((kpi, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">{kpi.label}</span>
                    <span className="text-gray-700 dark:text-gray-300">{kpi.current}% / {kpi.target}%</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${kpi.current}%` }}
                      transition={{ duration: 1.5, delay: idx * 0.1 }}
                      className="bg-gradient-to-r from-blue-400 to-green-400 h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { title: 'Annual Reports', desc: 'Comprehensive yearly impact reports with detailed metrics' },
              { title: 'Quarterly Updates', desc: 'Regular progress updates on all active programs' },
              { title: 'Case Studies', desc: 'In-depth stories showcasing individual and community impact' },
              { title: 'Research Data', desc: 'Evidence-based research supporting our interventions' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
