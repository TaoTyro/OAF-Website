import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { Handshake, Target, Briefcase, TrendingUp } from 'lucide-react';

export function BecomePartnerPage() {
  const partnershipTypes = [
    {
      title: 'Corporate Partnership',
      desc: 'Align your organization with our mission for mutual growth and impact',
      benefits: ['Brand Visibility', 'Employee Engagement', 'Social Impact', 'Tax Benefits']
    },
    {
      title: 'NGO Collaboration',
      desc: 'Partner with us to amplify our collective impact across communities',
      benefits: ['Resource Sharing', 'Joint Programs', 'Knowledge Exchange', 'Network Access']
    },
    {
      title: 'Government Partnership',
      desc: 'Work together to create sustainable systemic change and policy influence',
      benefits: ['Policy Development', 'Capacity Building', 'Scalability', 'Sustainability']
    },
    {
      title: 'Academic Partnership',
      desc: 'Engage students and institutions in research, learning, and service',
      benefits: ['Research Opportunities', 'Internships', 'Community Experience', 'Publications']
    },
    {
      title: 'Community Partnership',
      desc: 'Build strong relationships with local communities and organizations',
      benefits: ['Local Ownership', 'Cultural Relevance', 'Sustainability', 'Trust Building']
    },
    {
      title: 'International Partnership',
      desc: 'Collaborate with global organizations to expand reach and resources',
      benefits: ['Global Network', 'Best Practices', 'Funding Access', 'Cross-Cultural Learning']
    }
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
            Become a Partner
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Together we can achieve more. Partner with Orphans of Africa Foundation to create sustainable impact.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {partnershipTypes.map((partnership, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all p-8 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{partnership.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{partnership.desc}</p>
                <div className="space-y-2">
                  {partnership.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-800 dark:to-gray-900 p-12 rounded-lg mb-16"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Partnership Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: 1, title: 'Explore', desc: 'Discuss shared values and interests' },
                { num: 2, title: 'Design', desc: 'Co-create partnership framework' },
                { num: 3, title: 'Implement', desc: 'Execute collaborative programs' },
                { num: 4, title: 'Evaluate', desc: 'Measure impact and celebrate wins' }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-orange-400 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Handshake, title: 'Strategic Alignment', desc: 'Shared vision and complementary strengths' },
              { icon: Target, title: 'Clear Goals', desc: 'Defined objectives and expected outcomes' },
              { icon: TrendingUp, title: 'Mutual Benefit', desc: 'Value creation for all stakeholders' }
            ].map((principle, idx) => (
              <div key={idx} className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                <principle.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{principle.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{principle.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-50 dark:bg-gray-800 p-12 rounded-lg text-center"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Make a Difference Together?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're excited to explore how we can collaborate to create sustainable, transformative change in our communities.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-orange-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Start Partnership Conversation
            </button>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
