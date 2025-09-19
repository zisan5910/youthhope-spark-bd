import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
  scrollToSection: (section: string) => void;
}

const Navigation = ({ language, setLanguage, scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'profile', en: 'Profile', bn: 'প্রোফাইল' },
    { key: 'education', en: 'Education', bn: 'শিক্ষা' },
    { key: 'courses', en: 'Courses', bn: 'কোর্স' },
    { key: 'experience', en: 'Experience', bn: 'অভিজ্ঞতা' },
    { key: 'certificates', en: 'Certificates', bn: 'সার্টিফিকেট' },
    { key: 'skills', en: 'Skills', bn: 'দক্ষতা' },
    { key: 'family', en: 'Family', bn: 'পরিবার' },
    { key: 'contact', en: 'Contact', bn: 'যোগাযোগ' },
  ];

  const handleMenuClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <img
              src="/profile.jpg"
              alt="Logo"
              className="w-8 h-8 rounded-full border border-gray-200"
            />
            <span className="font-bold text-lg text-gray-800">
              Ridoan Zisan
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item[language]}
              </motion.button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'বাং' : 'EN'}</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              whileTap={{ scale: 0.98 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-gray-100">
            {navigationItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => handleMenuClick(item.key)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {item[language]}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;