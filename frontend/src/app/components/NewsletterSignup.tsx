import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using Formspree for newsletter signup (alternative endpoint)
      const response = await fetch('https://formspree.io/f/mlgedzkd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'Newsletter Signup',
          message: `New newsletter signup: ${email}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-20 px-4  bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Side - Content */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <div className="mb-6">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full flex items-center justify-center mb-4"
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4">
                Stay Informed
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                Get the latest updates about our programs, success stories, and events delivered to your inbox.
              </p>

              <ul className="space-y-3 mb-6">
                <motion.li
                  variants={itemVariants}
                  className="flex items-center text-gray-700 dark:text-gray-200"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mr-3"></span>
                  Monthly impact reports
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-center text-gray-700 dark:text-gray-200"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mr-3"></span>
                  Exclusive donation opportunities
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-center text-gray-700 dark:text-gray-200"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mr-3"></span>
                  Volunteer opportunities
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-center text-gray-700 dark:text-gray-200"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mr-3"></span>
                  Unsubscribe anytime
                </motion.li>
              </ul>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors duration-300"
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900 border-l-4 border-green-600 rounded flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-green-800 dark:text-green-200 text-sm">{message}</p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900 border-l-4 border-red-600 rounded flex items-start"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-red-800 dark:text-red-200 text-sm">{message}</p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status === 'loading' ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      {status === 'success' ? 'Subscribed!' : 'Subscribe Now'}
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
