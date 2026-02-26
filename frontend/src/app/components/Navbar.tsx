import { Heart, Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import logoImg from '../../assets/logo.png';
import { DonateModal } from './DonateModal';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleHashScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const mainNavLinks = [
    {
      label: 'About Us',
      href: null,
      dropdown: [
        { label: 'Who We Are', href: '/about-us' },
        { label: 'Leadership', href: '/leadership' },
        { label: 'Executive Staff', href: '/executive-staff' },
        { label: 'Our Partners', href: '/partners' },
        { label: 'Funding Transparency', href: '/funding-transparency' },
      ]
    },
    {
      label: 'Our Work',
      href: null,
      dropdown: [
        { label: 'Our Mission', href: '/our-mission' },
        { label: 'Programs', href: '/programs' },
        { label: 'Gallery', href: '/gallery' },
      ]
    },
    {
      label: 'Our Impact',
      href: null,
      dropdown: [
        { label: 'Our Projects', href: '/projects' },
        { label: 'Impact Statistics', href: '/metrics' },
        { label: 'Success Stories', href: '/success-stories' },
        { label: 'Blog', href: '/blog' },
      ]
    },
    {
      label: 'Get Involved',
      href: null,
      dropdown: [
        { label: 'Volunteer', href: '/volunteer' },
        { label: 'Become a Donor', href: '/donate' },
        { label: 'Become a Partner', href: '/become-partner' },
      ]
    },
    {
      label: 'Contact Details',
      href: null,
      dropdown: [
        { label: 'Our Contacts', href: '/contact' },
      ]
    },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownLink = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white/50 backdrop-blur-md dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="Orphans of Africa" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-semibold text-gray-900 dark:text-white hidden sm:inline" style={{ fontFamily: 'Poppins, sans-serif' }}>Orphans of Africa</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {mainNavLinks.map((link) => (
              <div key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 dark:hover:text-yellow-500 hover:text-yellow-500 transition-colors py-2"
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Desktop Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  {link.dropdown && link.dropdown.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDropdownLink(item.href)}
                      className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-gray-700 hover:text-yellow-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Section - Donate + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDonateModalOpen(true)}
              className="px-6 py-2 rounded-lg text-white font transition-all hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: '#0EA5E9' }}
            >
              Donate
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800"
            >
              {mainNavLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-50 dark:bg-gray-800"
                      >
                        {link.dropdown && link.dropdown.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleDropdownLink(item.href)}
                            className="w-full text-left px-8 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-yellow-600 transition-colors"
                          >
                            {item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <DonateModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />
      </div>
    </nav>
  );
}