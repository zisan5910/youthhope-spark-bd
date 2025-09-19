import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Briefcase, Users, Code2, Globe } from 'lucide-react';

interface ExperienceProps {
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

const Experience = ({ language }: ExperienceProps) => {
  const experienceData = [
    {
      id: 'freelance-web-dev',
      title: {
        en: 'Freelance Web Developer',
        bn: 'ফ্রিল্যান্স ওয়েব ডেভেলপার',
      },
      company: {
        en: 'Self-employed',
        bn: 'স্ব-নিয়োজিত',
      },
      duration: {
        en: '2021 - Present',
        bn: '২০২১ - বর্তমান',
      },
      type: {
        en: 'Freelance',
        bn: 'ফ্রিল্যান্স',
      },
      description: {
        en: 'Developing responsive websites and web applications for local businesses and personal projects.',
        bn: 'স্থানীয় ব্যবসা এবং ব্যক্তিগত প্রকল্পের জন্য রেসপনসিভ ওয়েবসাইট এবং ওয়েব অ্যাপ্লিকেশন তৈরি করা।',
      },
      achievements: {
        en: [
          'Created 10+ websites for local businesses',
          'Improved client online presence by 70%',
          'Maintained 100% client satisfaction rate'
        ],
        bn: [
          'স্থানীয় ব্যবসার জন্য ১০+ ওয়েবসাইট তৈরি',
          'ক্লায়েন্টের অনলাইন উপস্থিতি ৭০% উন্নত করা',
          '১০০% ক্লায়েন্ট সন্তুষ্টির হার বজায় রাখা'
        ],
      },
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
      icon: <Code2 size={20} className="text-purple-500" />,
    },
    {
      id: 'community-leader',
      title: {
        en: 'Community Leader',
        bn: 'কমিউনিটি নেতা',
      },
      company: {
        en: 'Local Youth Organization',
        bn: 'স্থানীয় যুব সংগঠন',
      },
      duration: {
        en: '2020 - Present',
        bn: '২০২০ - বর্তমান',
      },
      type: {
        en: 'Volunteer',
        bn: 'স্বেচ্ছাসেবক',
      },
      description: {
        en: 'Leading community development initiatives and organizing educational programs for youth.',
        bn: 'কমিউনিটি উন্নয়ন উদ্যোগের নেতৃত্ব এবং যুবদের জন্য শিক্ষামূলক কর্মসূচি আয়োজন।',
      },
      achievements: {
        en: [
          'Organized 20+ community events',
          'Mentored 50+ young individuals',
          'Raised awareness on social issues'
        ],
        bn: [
          '২০+ কমিউনিটি ইভেন্ট আয়োজন',
          '৫০+ তরুণ ব্যক্তিকে পরামর্শ দান',
          'সামাজিক বিষয়ে সচেতনতা বৃদ্ধি'
        ],
      },
      skills: ['Leadership', 'Event Management', 'Public Speaking', 'Team Building'],
      icon: <Users size={20} className="text-green-500" />,
    },
    {
      id: 'content-creator',
      title: {
        en: 'Digital Content Creator',
        bn: 'ডিজিটাল কন্টেন্ট ক্রিয়েটর',
      },
      company: {
        en: 'Social Media Platforms',
        bn: 'সোশ্যাল মিডিয়া প্ল্যাটফর্ম',
      },
      duration: {
        en: '2019 - Present',
        bn: '২০১৯ - বর্তমান',
      },
      type: {
        en: 'Part-time',
        bn: 'খণ্ডকালীন',
      },
      description: {
        en: 'Creating educational and motivational content on social media platforms to inspire youth.',
        bn: 'যুবদের অনুপ্রাণিত করার জন্য সোশ্যাল মিডিয়া প্ল্যাটফর্মে শিক্ষামূলক এবং অনুপ্রেরণামূলক কন্টেন্ট তৈরি।',
      },
      achievements: {
        en: [
          'Gained 5000+ followers across platforms',
          'Created 100+ educational posts',
          'Reached 50,000+ people monthly'
        ],
        bn: [
          'প্ল্যাটফর্ময়ে ৫০০০+ ফলোয়ার অর্জন',
          '১০০+ শিক্ষামূলক পোস্ট তৈরি',
          'মাসিক ৫০,০০০+ মানুষের কাছে পৌঁছানো'
        ],
      },
      skills: ['Content Writing', 'Social Media Marketing', 'Graphic Design', 'Video Editing'],
      icon: <Globe size={20} className="text-blue-500" />,
    },
  ];

  return (
    <Element name="experience">
      <ProfessionalLayout
        title={language === 'en' ? 'Experience' : 'অভিজ্ঞতা'}
        icon={<Briefcase className="text-purple-600" size={24} />}
      >
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-l-4 border-purple-500 pl-4 py-4 hover:bg-purple-50 rounded-r-lg transition-all duration-300 group relative"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors flex-shrink-0 shadow-sm">
                  {experience.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="font-bold text-lg text-gray-800">
                      {experience.title[language]}
                    </h3>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {experience.type[language]}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <p className="text-gray-700 font-medium">
                      {experience.company[language]}
                    </p>
                    <p className="text-sm text-gray-500">
                      {experience.duration[language]}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {experience.description[language]}
                  </p>
                  
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-800 mb-2">
                      {language === 'en' ? 'Key Achievements:' : 'মূল অর্জন:'}
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements[language].map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      {language === 'en' ? 'Skills Used:' : 'ব্যবহৃত দক্ষতা:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ProfessionalLayout>
    </Element>
  );
};

export default Experience;