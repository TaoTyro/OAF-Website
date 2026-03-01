import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpcomingEventsSidebar } from './UpcomingEventsSidebar';

const backgroundImages = [
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop'
];

export function Hero({ onDonateClick }: { onDonateClick?: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setNextImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setFadeOut(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden " id="hero">
      {/* <UpcomingEventsSidebar /> */}
      {/* TODO: Re-enable UpcomingEventsSidebar when ready to implement event modal */}
      
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Current Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/50 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 
            className="mb-6 text-white drop-shadow-lg" 
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3.5rem', lineHeight: '1.2' }}
          >
            Giving Hope and a Future to Orphans Across Africa
          </h1>
          
          <p 
            className="mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md" 
            style={{ fontSize: '1.125rem' }}
          >
            Every child deserves access to education, healthcare, and a loving community. 
            Join us in transforming lives and building brighter futures across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onDonateClick}
              className="px-8 py-3 rounded-lg text-white transition-all hover:opacity-85 shadow-lg"
              style={{ backgroundColor: 'var(--primary-orange)' }}
            >
              Donate Now
            </button>
            <button 
              onClick={() => navigate('/get-involved')}
              className="px-8 py-3 rounded-lg border-2 transition-all hover:bg-white/20 text-white backdrop-blur-sm shadow-lg"
              style={{ 
                borderColor: 'white'
              }}
            >
              Get Involved
            </button>
          </div>
        </motion.div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImageIndex(index);
              setNextImageIndex((index + 1) % backgroundImages.length);
            }}
            className={`transition-all ${
              index === currentImageIndex ? 'bg-white w-8 h-2' : 'bg-white/50 w-2 h-2'
            } rounded-full`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
