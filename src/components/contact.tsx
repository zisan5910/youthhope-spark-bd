import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Mail, MessageCircle, MapPin, Phone, ExternalLink } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'bn';
}

// Professional Layout Component
const ProfessionalLayout = ({ children, title, icon, className = '' }: {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`professional-card professional-section ${className}`}
    >
      <div className="professional-title">
        <div className="icon-professional">
          {icon}
        </div>
        {title}
      </div>
      {children}
    </motion.section>
  );
};

const Contact = ({ language }: ContactProps) => {
  const contactData = {
    title: {
      en: 'Get in Touch',
      bn: 'যোগাযোগ করুন',
    },
    description: {
      en: 'Feel free to reach out for collaborations, opportunities, or just to say hello!',
      bn: 'সহযোগিতা, সুযোগ, বা শুধু হ্যালো বলার জন্য নির্দ্বিধায় যোগাযোগ করুন!',
    },
    contactInfo: [
      {
        icon: <Mail size={20} className="text-blue-500" />,
        label: { en: 'Email', bn: 'ইমেইল' },
        value: 'ridoan.zisan@gmail.com',
        link: 'mailto:ridoan.zisan@gmail.com',
        color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      },
      {
        icon: <Phone size={20} className="text-green-500" />,
        label: { en: 'Phone', bn: 'ফোন' },
        value: '+880 1712 525910',
        link: 'tel:+8801712525910',
        color: 'bg-green-50 border-green-200 hover:bg-green-100',
      },
      {
        icon: <MessageCircle size={20} className="text-green-600" />,
        label: { en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ' },
        value: '+880 1712 525910',
        link: 'https://wa.me/8801712525910',
        color: 'bg-green-50 border-green-200 hover:bg-green-100',
      },
      {
        icon: <MapPin size={20} className="text-red-500" />,
        label: { en: 'Location', bn: 'অবস্থান' },
        value: { en: 'Bogura, Bangladesh', bn: 'বগুড়া, বাংলাদেশ' },
        link: 'https://goo.gl/maps/bogura',
        color: 'bg-red-50 border-red-200 hover:bg-red-100',
      },
    ],
    socialLinks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ridoan-zisan',
        color: 'bg-blue-600 hover:bg-blue-700',
        icon: '🔗',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/RidoanDev',
        color: 'bg-gray-800 hover:bg-gray-900',
        icon: '🐙',
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/rid0anzisan',
        color: 'bg-blue-500 hover:bg-blue-600',
        icon: '📘',
      },
      {
        name: 'YouTube',
        url: 'https://youtube.com/@ridoan-zisan',
        color: 'bg-red-500 hover:bg-red-600',
        icon: '📺',
      },
    ],
    cta: {
      en: 'Ready to start a conversation?',
      bn: 'কথোপকথন শুরু করতে প্রস্তুত?',
    },
    ctaButton: {
      en: 'Send Email',
      bn: 'ইমেইল পাঠান',
    },
  };

  return (
    <Element name="contact">
      <ProfessionalLayout
        title={contactData.title[language]}
        icon={<Mail className="text-blue-600" size={24} />}
      >
        <div className="space-y-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              {contactData.description[language]}
            </p>
          </motion.div>

          {/* Contact Information Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {contactData.contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${contact.color} p-4 rounded-lg border transition-all duration-300 flex items-center gap-4 group shadow-sm hover:shadow-md`}
              >
                <div className="flex-shrink-0">
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {contact.label[language]}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {typeof contact.value === 'object' ? contact.value[language] : contact.value}
                  </p>
                </div>
                <ExternalLink 
                  size={16} 
                  className="text-gray-400 group-hover:text-gray-600 transition-colors" 
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4 text-center text-gray-800">
              {language === 'en' ? 'Connect on Social Media' : 'সোশ্যাল মিডিয়ায় যুক্ত হোন'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {contactData.socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`${social.color} text-white p-4 rounded-lg transition-all duration-300 flex flex-col items-center text-center space-y-2 shadow-md hover:shadow-lg`}
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span className="font-medium text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center py-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
          >
            <h3 className="font-bold text-xl mb-4 text-gray-800">
              {contactData.cta[language]}
            </h3>
            <motion.a
              href="mailto:ridoan.zisan@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={20} />
              {contactData.ctaButton[language]}
            </motion.a>
          </motion.div>
        </div>
      </ProfessionalLayout>
    </Element>
  );
};

export default Contact;