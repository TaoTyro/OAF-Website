import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  category: 'fundraiser' | 'awareness' | 'community';
  image?: string;
}

const events: CalendarEvent[] = [
  {
    id: 1,
    title: 'Annual Gala Fundraiser',
    date: 'January 15, 2025',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Ballroom, Downtown',
    description: 'Join us for an elegant evening celebrating our impact and raising funds for education programs.',
    attendees: 250,
    category: 'fundraiser',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Community Health Outreach',
    date: 'January 22, 2025',
    time: '9:00 AM - 2:00 PM',
    location: 'Central Park Community Center',
    description: 'Free health screening and awareness campaign for our partner communities.',
    attendees: 150,
    category: 'community',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Education Access Workshop',
    date: 'February 5, 2025',
    time: '10:00 AM - 1:00 PM',
    location: 'Virtual',
    description: 'Interactive workshop on improving educational access in underserved communities.',
    attendees: 500,
    category: 'awareness',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Volunteer Training Session',
    date: 'February 12, 2025',
    time: '3:00 PM - 5:00 PM',
    location: 'Main Office, Suite 200',
    description: 'Comprehensive training for new volunteers joining our programs.',
    attendees: 75,
    category: 'community',
    image: 'https://images.unsplash.com/photo-1552508875-66a54c0eef20?w=500&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Climate Solutions Summit',
    date: 'February 28, 2025',
    time: '8:00 AM - 5:00 PM',
    location: 'Convention Center',
    description: 'Major summit bringing together environmental leaders and donors for climate initiatives.',
    attendees: 400,
    category: 'fundraiser',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'Back-to-School Campaign Launch',
    date: 'March 10, 2025',
    time: '11:00 AM - 12:30 PM',
    location: 'Social Media & In-Person',
    description: 'Kickoff of our annual back-to-school supplies and scholarships campaign.',
    attendees: 1000,
    category: 'awareness',
    image: 'https://images.unsplash.com/photo-1427504494785-cdec0f72fad3?w=500&h=300&fit=crop',
  },
];

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

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'fundraiser':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    case 'awareness':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'community':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
};

export default function EventsCalendar() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Join us for fundraisers, community events, and awareness campaigns
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:hover:translate-1 dark:hover:shadow-cyan-600 hover:translate-1 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Event Image */}
                <div className="md:w-1/4 h-64 md:h-auto overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Event Details */}
                <div className="p-6 md:p-8 md:w-3/4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
                          event.category
                        )}`}
                      >
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Calendar className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-orange-600 dark:text-orange-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Users className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 via-orange-600 to-green-600 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Don't Miss Out</h3>
          <p className="mb-6">
            Subscribe to our newsletter to get updates about upcoming events and campaigns.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
          >
            Subscribe Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
