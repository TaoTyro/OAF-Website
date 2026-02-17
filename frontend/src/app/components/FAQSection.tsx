import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: 'Donations',
    question: 'How can I make a donation?',
    answer:
      'You can donate through our website using the Donate button, which accepts credit/debit cards. We also accept bank transfers, checks, and cryptocurrency. All donations are secure and tax-deductible. For large donations, please contact our team directly at donate@orphansofafrica.org.',
  },
  {
    id: 2,
    category: 'Donations',
    question: 'Is my donation tax-deductible?',
    answer:
      'Yes! Orphans of Africa is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent permitted by law. You will receive a tax receipt via email after your donation.',
  },
  {
    id: 3,
    category: 'Donations',
    question: 'Can I set up a monthly recurring donation?',
    answer:
      'Absolutely! Monthly giving is a powerful way to sustain our programs. When you make a donation through our platform, you can select the "Monthly" option to set up a recurring donation. You can modify or cancel anytime from your account.',
  },
  {
    id: 4,
    category: 'Programs',
    question: 'What programs do you support?',
    answer:
      'We focus on four main areas: Education Access (scholarships and school supplies), Healthcare Support (medical clinics and preventive care), Social Justice (advocacy and community empowerment), and Sustainable Climate Solutions (environmental conservation). Each program is designed to create lasting change in the communities we serve.',
  },
  {
    id: 5,
    category: 'Programs',
    question: 'How do you measure impact?',
    answer:
      'We track multiple metrics including number of children supported, schools built/renovated, healthcare services provided, and environmental acres protected. We conduct quarterly impact assessments and publish annual reports showing measurable outcomes. Visit our Impact page for detailed statistics.',
  },
  {
    id: 6,
    category: 'Volunteering',
    question: 'How can I volunteer with your organization?',
    answer:
      'We welcome volunteers both locally and remotely. Visit our Get Involved section or email volunteer@orphansofafrica.org to learn about current opportunities. We offer volunteer training sessions monthly, and you can participate in fundraisers, community events, and advocacy campaigns.',
  },
  {
    id: 7,
    category: 'Volunteering',
    question: 'Do I need experience to volunteer?',
    answer:
      'No experience necessary! We value passion and commitment. We provide comprehensive training for all volunteer roles. Whether you have professional skills to share or just want to help, we have opportunities for everyone.',
  },
  {
    id: 8,
    category: 'Organization',
    question: 'Where does my donation go?',
    answer:
      '85% of donations go directly to programs and services. The remaining 15% covers operational costs, staff, and administration. We are committed to transparency and publish detailed financial reports annually. You can view our Form 990 on Charity Navigator.',
  },
  {
    id: 9,
    category: 'Organization',
    question: 'How long have you been operating?',
    answer:
      'Orphans of Africa was founded in 2010. Over the past 14+ years, we have impacted the lives of over 5,000 children across 12 African countries. We are recognized by multiple charity watchdog organizations for our effectiveness and transparency.',
  },
  {
    id: 10,
    category: 'General',
    question: 'How can I get more information about specific programs?',
    answer:
      'You can explore our Programs section on this website for detailed descriptions. We also offer quarterly webinars explaining our work. For personalized information, contact our team at info@orphansofafrica.org or call 1-800-ORPHANS.',
  },
];

const categories = ['All', 'Donations', 'Programs', 'Volunteering', 'Organization', 'General'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs =
    selectedCategory === 'All' ? faqs : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section className="min-h-screen py-20 px-4  bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full flex items-center justify-center"
            >
              <HelpCircle className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our organization, programs, and how you can help
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-4"
        >
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <motion.button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full p-6 flex items-start justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900 dark:to-orange-900 text-gray-800 dark:text-gray-200">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4 mt-1"
                  >
                    <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Didn't find your answer? We're here to help!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
