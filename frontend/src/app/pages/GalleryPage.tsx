import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function GalleryPage() {
  const galleryItems = [
    { id: 1, title: 'Community Outreach', category: 'Events' },
    { id: 2, title: 'Education Programs', category: 'Programs' },
    { id: 3, title: 'Healthcare Services', category: 'Health' },
    { id: 4, title: 'Student Achievements', category: 'Success' },
    { id: 5, title: 'Volunteer Activities', category: 'Volunteers' },
    { id: 6, title: 'Community Impact', category: 'Impact' },
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
            Gallery
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Explore our visual journey of impact, programs, and community stories.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden aspect-square hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-orange-400 group-hover:from-blue-500 group-hover:to-orange-500 transition-all duration-300">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="font-semibold text-lg">{item.title}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-3 py-1 bg-orange-500 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 dark:bg-gray-800 p-12 rounded-lg text-center"
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Share Your Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Have photos or videos of our programs? We'd love to feature your contributions in our gallery.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-orange-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Submit Photos
            </button>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
