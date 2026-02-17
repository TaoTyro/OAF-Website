import { Heart, Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import logoImg from '../../assets/logo.png';
import { DonateModal } from './DonateModal';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleHashScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Impact', href: '#impact-stats' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="Orphans of Africa" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Orphans of Africa Foundation</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => handleHashScroll(e, link.href)}
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-yellow-500 hover:text-yellow-500 transition-opacity transform-all cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.href} 
                  to={link.href} 
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-yellow-500 hover:text-yellow-500 transition-opacity transform-all"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Right Section - Donate + Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDonateModalOpen(true)}
              className="px-6 py-2 rounded-lg text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#1B82F1' }}
            >
              Donate
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
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
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleHashScroll(e, link.href)}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        )}

        <DonateModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />
      </div>
    </nav>
  );
}