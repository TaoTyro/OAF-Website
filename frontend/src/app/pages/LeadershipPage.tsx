import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, MessageCircle } from 'lucide-react';

// Contact details
const PHONE_NUMBER = '+265886691492';
const PHONE_FORMATTED = '+265 886 69 14 92';
const EMAIL = 'mwale7410@gmail.com';

// Brand Color
const brandColor = "#5AAFD1";

// Counter Component
const Counter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const startCounting = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(startCounting);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(startCounting);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export function LeadershipPage() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.95]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Editorial Masthead */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Decorative Line */}
            <motion.div 
              className="w-20 h-px mx-auto mb-12"
              style={{ backgroundColor: brandColor }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 tracking-tight leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Timothy Mwale
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-2xl md:text-3xl font-light" style={{ color: brandColor }}>
                Founder & Executive Director
              </p>
              <p className="text-xl text-gray-500 font-light">
                Orphans of Africa Foundation
              </p>
            </motion.div>

            {/* Decorative Line */}
            <motion.div 
              className="w-20 h-px mx-auto mt-12"
              style={{ backgroundColor: brandColor }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Portrait Image with Parallax */}
      <section className="py-16 px-6">
        <motion.div 
          ref={imageRef}
          className="max-w-2xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <motion.img 
              src="/images/leadership/timothy-mwale.jpg" 
              alt="Timothy Mwale"
              className="w-full h-full object-cover"
              style={{ y: imageY, scale: imageScale }}
            />
            
            {/* Pill Overlay Effect */}
            <motion.div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 0%, ${brandColor}10 50%, transparent 100%)`,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>

          {/* Image Caption */}
          <motion.p 
            className="text-center text-sm text-gray-400 mt-6 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Executive Portrait, 2024
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Information - Centered */}
      <section className="py-16 px-6 border-y border-gray-100">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-8">Contact</p>
          
          <div className="space-y-4">
            <motion.button 
              onClick={() => window.location.href = `mailto:${EMAIL}`}
              className="text-lg text-gray-600 hover:underline transition-all bg-transparent border-none cursor-pointer p-0"
              whileHover={{ color: brandColor }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {EMAIL}
            </motion.button>
            
            <motion.a 
              href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-gray-600 hover:underline transition-all"
              style={{ color: 'inherit' }}
              whileHover={{ color: brandColor }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {PHONE_FORMATTED}
            </motion.a>
            
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Malawi
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="#" 
              className="text-gray-400 transition-colors"
              whileHover={{ color: brandColor, scale: 1.1 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 transition-colors"
              whileHover={{ color: brandColor, scale: 1.1 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="text-gray-400 transition-colors"
              whileHover={{ color: brandColor, scale: 1.1 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Executive Profile - Centered Editorial */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs uppercase tracking-wider text-gray-400 text-center mb-16">
              Executive Profile
            </p>
            
            <div className="space-y-8 text-center">
              <motion.p 
                className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Timothy Mwale is a social worker and communications specialist with extensive 
                experience in youth leadership, community development, and nonprofit management.
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                As Founder and Executive Director of the <span style={{ color: brandColor }}>Orphans of 
                Africa Foundation (OAF)</span>, established in 2018, he leads a youth-led organization 
                working across Malawi and other African countries to support orphans, youth, and women.
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                His professional background spans education, climate action, health and maternal care, 
                gender-based violence prevention, and social justice advocacy. Through OAF, he has 
                designed and led multi-sectoral projects impacting over <span style={{ color: brandColor }}>
                10,000 vulnerable people</span>.
              </motion.p>
            </div>

            <motion.div 
              className="w-16 h-px mx-auto mt-16"
              style={{ backgroundColor: brandColor }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Stats - Minimal Centered */}
      <section className="py-24 px-6 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-3" style={{ color: brandColor }}>
                <Counter end={2018} />
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-light">Founded OAF</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-3" style={{ color: brandColor }}>
                <Counter end={10} suffix="k+" />
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-light">Lives Impacted</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-3" style={{ color: brandColor }}>
                <Counter end={42} />
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-light">Villages Reached</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-3" style={{ color: brandColor }}>
                <Counter end={8} />
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-light">Partner Schools</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements - Editorial List */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-6">Impact Highlights</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Key Achievements</h2>
          </motion.div>

          <div className="space-y-20">
            {/* Achievement 1 */}
            <motion.div 
              className="text-center border-b border-gray-100 pb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-6" style={{ color: brandColor }}>
                27+
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light max-w-2xl mx-auto">
                Students at Mzuzu University and one at University of Malawi have received 
                <span style={{ color: brandColor }}> fully funded Scholarships</span>
              </p>
            </motion.div>

            {/* Achievement 2 */}
            <motion.div 
              className="text-center border-b border-gray-100 pb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-6" style={{ color: brandColor }}>
                20
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light max-w-2xl mx-auto mb-4">
                Orphans supported through secondary education
              </p>
              <p className="text-lg text-gray-500 font-light">
                4 now qualified teachers
              </p>
            </motion.div>

            {/* Achievement 3 */}
            <motion.div 
              className="text-center border-b border-gray-100 pb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-6" style={{ color: brandColor }}>
                45% → 75%
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light max-w-2xl mx-auto">
                Primary school pass rate increase across <span style={{ color: brandColor }}>8 schools</span>
              </p>
            </motion.div>

            {/* Achievement 4 */}
            <motion.div 
              className="text-center border-b border-gray-100 pb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-6" style={{ color: brandColor }}>
                7,000+
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light max-w-2xl mx-auto mb-4">
                Clean birthing kits distributed to expectant mothers
              </p>
              <p className="text-lg text-gray-500 font-light">
                In partnership with district health authorities
              </p>
            </motion.div>

            {/* Achievement 5 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-5xl md:text-6xl font-light mb-6" style={{ color: brandColor }}>
                10,000+
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light max-w-2xl mx-auto">
                Vulnerable people directly impacted
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Background - Two Column */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center md:text-left"
            >
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-12">Academic Background</p>
              
              <div className="space-y-12">
                <div>
                  <p className="text-2xl font-light text-gray-900 mb-2">BA in Communication Studies</p>
                  <p className="text-lg text-gray-500 font-light">Mzuzu University</p>
                  <p className="text-sm text-gray-400 mt-1">(In Progress)</p>
                </div>

                <div>
                  <p className="text-2xl font-light text-gray-900 mb-2">BBA</p>
                  <p className="text-lg text-gray-500 font-light">University of the People, USA</p>
                  <p className="text-sm text-gray-400 mt-1">(In Progress)</p>
                </div>
              </div>

              <motion.div 
                className="w-16 h-px mt-16"
                style={{ backgroundColor: brandColor }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />

              <div className="mt-16">
                <h3 className="text-2xl font-light text-gray-900 mb-8">Certifications</h3>
                <div className="space-y-4 text-left">
                  {[
                    "Organizational Development",
                    "Leadership & Communication",
                    "Environmental Protection",
                    "Emerging Technologies"
                  ].map((cert, index) => (
                    <motion.p
                      key={index}
                      className="text-lg text-gray-600 font-light"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {cert}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Global Recognition */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center md:text-left"
            >
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-12">International</p>
              
              <h3 className="text-2xl font-light text-gray-900 mb-8">Global Recognition</h3>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="border-l-2 pl-6"
                  style={{ borderLeftColor: brandColor }}
                >
                  <p className="text-xl font-light text-gray-900 mb-2">
                    Tällberg-SNF-Eliasson Global Leadership Prize
                  </p>
                  <p className="text-lg text-gray-500 font-light mb-2">2025</p>
                  <span 
                    className="inline-block text-sm px-3 py-1"
                    style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                  >
                    Nomination
                  </span>
                </motion.div>

                {[
                  { name: "World Bank Group Youth Summit", year: "2023" },
                  { name: "African Climate Summit", year: "2023" },
                  { name: "UNCTAD Youth Forum", year: "2024" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="border-l-2 border-gray-200 pl-6"
                  >
                    <p className="text-xl font-light text-gray-900 mb-1">{item.name}</p>
                    <p className="text-lg text-gray-500 font-light">{item.year}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="w-16 h-px mt-16"
                style={{ backgroundColor: brandColor }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />

              <div className="mt-16">
                <h3 className="text-2xl font-light text-gray-900 mb-8">Key Partnerships</h3>
                <div className="space-y-4 text-left">
                  {[
                    "International Organizations",
                    "Government Departments",
                    "Traditional Leaders",
                    "Community Structures"
                  ].map((partner, index) => (
                    <motion.p
                      key={index}
                      className="text-lg text-gray-600 font-light"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {partner}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Areas - Centered List */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-12">Professional Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">Areas of Expertise</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              "Grant Writing",
              "Project Design",
              "M&E",
              "Fundraising",
              "Stakeholder Engagement",
              "Youth Leadership",
              "Community Development",
              "Nonprofit Management"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <p className="text-lg font-light text-gray-800">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-3xl md:text-4xl text-gray-700 italic leading-relaxed font-light mb-8">
              "Every child deserves access to education, healthcare, and equal opportunity 
              to break the cycle of poverty."
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gray-300" />
              <p className="text-sm text-gray-400 uppercase tracking-wider">Timothy Mwale</p>
              <span className="w-8 h-px bg-gray-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src="/images/pupils.jpg" 
            alt="Children in Malawi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Pill Overlay */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${brandColor}20 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 leading-relaxed">
              For partnerships, speaking engagements, 
              <br />or collaboration opportunities
            </h2>
            
            <motion.div 
              className="w-16 h-px mx-auto my-12 bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.location.href = `mailto:${EMAIL}`}
                className="px-10 py-4 bg-white font-light text-lg transition-all border-none cursor-pointer"
                style={{ color: brandColor }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Send Email
              </motion.button>
              
              <motion.a
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-white text-white font-light text-lg hover:bg-white transition-all"
                whileHover={{ scale: 1.05, color: brandColor }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}