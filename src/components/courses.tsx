import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { BookOpen, Code } from 'lucide-react';

interface CoursesProps {
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

const Courses = ({ language }: CoursesProps) => {
  const coursesData = [
    {
      id: 'web-dev',
      title: {
        en: 'Web Development',
        bn: 'ওয়েব ডেভেলপমেন্ট',
      },
      institution: {
        en: 'Self-taught & Online Platforms',
        bn: 'স্ব-শিক্ষিত ও অনলাইন প্ল্যাটফর্ম',
      },
      duration: {
        en: '2020 - Present',
        bn: '২০২০ - বর্তমান',
      },
      skills: {
        en: ['HTML, CSS, JavaScript', 'React.js', 'Node.js', 'MongoDB'],
        bn: ['HTML, CSS, JavaScript', 'React.js', 'Node.js', 'MongoDB'],
      },
      description: {
        en: 'Comprehensive web development learning covering frontend and backend technologies',
        bn: 'ফ্রন্টএন্ড এবং ব্যাকএন্ড প্রযুক্তি নিয়ে বিস্তৃত ওয়েব ডেভেলপমেন্ট শিক্ষা',
      },
      icon: <Code size={20} className="text-blue-500" />,
    },
    {
      id: 'digital-marketing',
      title: {
        en: 'Digital Marketing',
        bn: 'ডিজিটাল মার্কেটিং',
      },
      institution: {
        en: 'Online Courses & Practical Experience',
        bn: 'অনলাইন কোর্স ও ব্যবহারিক অভিজ্ঞতা',
      },
      duration: {
        en: '2021 - 2022',
        bn: '২০২১ - ২০২২',
      },
      skills: {
        en: ['Social Media Marketing', 'SEO', 'Content Creation', 'Analytics'],
        bn: ['সোশ্যাল মিডিয়া মার্কেটিং', 'SEO', 'কন্টেন্ট তৈরি', 'Analytics'],
      },
      description: {
        en: 'Learning digital marketing strategies and implementing them for various projects',
        bn: 'ডিজিটাল মার্কেটিং কৌশল শিখা এবং বিভিন্ন প্রকল্পে তা প্রয়োগ করা',
      },
      icon: <BookOpen size={20} className="text-green-500" />,
    },
  ];

  return (
    <Element name="courses">
      <ProfessionalLayout
        title={language === 'en' ? 'Courses & Training' : 'কোর্স ও প্রশিক্ষণ'}
        icon={<BookOpen className="text-blue-600" size={24} />}
      >
        <div className="space-y-6">
          {coursesData.map((course) => (
            <motion.div
              key={course.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className="border-l-4 border-blue-500 pl-4 py-4 hover:bg-blue-50 rounded-r-lg transition-all duration-300 group relative"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors flex-shrink-0 shadow-sm">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-bold text-lg text-gray-800">
                      {course.title[language]}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {course.duration[language]}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mt-1">
                    {course.institution[language]}
                  </p>
                  
                  <p className="text-gray-600 mt-2 text-sm">
                    {course.description[language]}
                  </p>
                  
                  <div className="mt-3">
                    <h4 className="font-medium text-gray-800 mb-2">
                      {language === 'en' ? 'Skills Learned:' : 'শেখা দক্ষতা:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills[language].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
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

export default Courses;