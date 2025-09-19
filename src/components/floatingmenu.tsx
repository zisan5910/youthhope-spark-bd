import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, GraduationCap, BookOpen, Briefcase, Award, Users, Mail } from 'lucide-react';

interface FloatingMenuProps {
  scrollToSection: (section: string) => void;
  language: 'en' | 'bn';
}

const FloatingMenu = ({ scrollToSection, language }: FloatingMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { key: 'profile', icon: <Home size={18} />, en: 'Profile', bn: 'প্রোফাইল' },
    { key: 'education', icon: <GraduationCap size={18} />, en: 'Education', bn: 'শিক্ষা' },
    { key: 'courses', icon: <BookOpen size={18} />, en: 'Courses', bn: 'কোর্স' },
    { key: 'experience', icon: <Briefcase size={18} />, en: 'Experience', bn: 'অভিজ্ঞতা' },
    { key: 'certificates', icon: <Award size={18} />, en: 'Certificates', bn: 'সার্টিফিকেট' },
    { key: 'skills', icon: <User size={18} />, en: 'Skills', bn: 'দক্ষতা' },
    { key: 'family', icon: <Users size={18} />, en: 'Family', bn: 'পরিবার' },
    { key: 'contact', icon: <Mail size={18} />, en: 'Contact', bn: 'যোগাযোগ' },
  ];

  const handleMenuClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-2 min-w-[200px]"
          >
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={() => handleMenuClick(item.key)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200 text-left text-sm font-medium"
                >
                  <div className="flex-shrink-0 text-gray-500">
                    {item.icon}
                  </div>
                  <span>{item[language]}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingMenu;