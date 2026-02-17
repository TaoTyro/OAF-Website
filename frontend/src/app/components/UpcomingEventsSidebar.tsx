import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'fundraiser' | 'awareness' | 'community';
}

const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: 'Annual Gala Fundraiser',
    date: 'January 15, 2025',
    time: '6:00 PM',
    location: 'Grand Ballroom',
    category: 'fundraiser',
  },
  {
    id: 2,
    title: 'Community Health Outreach',
    date: 'January 22, 2025',
    time: '9:00 AM',
    location: 'Central Park',
    category: 'community',
  },
];

const categoryColors: Record<string, { color: string; bg: string }> = {
  fundraiser: { color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-950/40' },
  community: { color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-950/40' },
  awareness: { color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/40' },
};

export function UpcomingEventsSidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="fixed bottom-8 left-8 z-30 hidden lg:block max-w-sm"
    >
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-lg border border-blue-200/30 dark:border-blue-900/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/20 rounded-lg">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Upcoming Events</h3>
              <p className="text-xs text-blue-100">Join us soon</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Events List */}
        <div className="divide-y divide-blue-100 dark:divide-blue-900/30 p-3 space-y-2 max-h-64 overflow-y-auto">
          {upcomingEvents.map((event, index) => (
            <motion.button
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              onClick={() => navigate('/events')}
              className={`w-full p-3 rounded-lg transition-all hover:scale-105 origin-left text-left ${categoryColors[event.category].bg}`}
            >
              <div className="flex items-start gap-3">
                {/* Category indicator */}
                <div className="flex-shrink-0 w-2 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />

                <div className="flex-grow min-w-0">
                  {/* Title */}
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug line-clamp-2">
                    {event.title}
                  </h4>

                  {/* Date */}
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 mt-1.5">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="line-clamp-1">{event.date}</span>
                  </div>

                  {/* Time */}
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    ⏰ {event.time}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="px-4 py-3 bg-blue-50/50 dark:bg-blue-950/20 border-t border-blue-100/50 dark:border-blue-900/30">
          <button
            onClick={() => navigate('/events')}
            className="w-full py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center justify-center gap-1 hover:bg-blue-100/50 dark:hover:bg-blue-900/30 rounded-lg"
          >
            View All Events
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
