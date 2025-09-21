export interface BlogPost {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  date: string;
  author: {
    en: string;
    bn: string;
  };
  type: 'poem' | 'article';
  imageUrl: string;
  projectLinks?: {  // নতুন প্রোপার্টি যোগ করা হয়েছে
    url: string;
    label: {
      en: string;
      bn: string;
    };
  }[];
}

export const blogData: BlogPost[] = [
  {
    id: "portfolio",
    title: {
      en: "Personal Portfolio",
      bn: "পার্সোনাল পোর্টফোলিও"
    },
    content: {
      en: `My personal portfolio website showcasing my skills, projects and experience as a web developer. This responsive website features modern design principles and demonstrates my capabilities in frontend development. Built with HTML, CSS, JavaScript and modern frameworks, it serves as a comprehensive showcase of my work and achievements in the web development field.`,
      bn: `ওয়েব ডেভেলপার হিসেবে আমার দক্ষতা, প্রকল্প এবং অভিজ্ঞতা প্রদর্শনকারী আমার ব্যক্তিগত পোর্টফোলিও ওয়েবসাইট। এই রেসপনসিভ ওয়েবসাইটটি আধুনিক ডিজাইন নীতির বৈশিষ্ট্য প্রদর্শন করে এবং ফ্রন্টএন্ড ডেভেলপমেন্টে আমার সক্ষমতা প্রদর্শন করে। HTML, CSS, JavaScript এবং আধুনিক ফ্রেমওয়ার্ক দিয়ে তৈরি, এটি ওয়েব ডেভেলপমেন্ট ক্ষেত্রে আমার কাজ এবং অর্জনের একটি ব্যাপক প্রদর্শনী হিসেবে কাজ করে।`
    },
    date: "2024-12-01",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    projectLinks: [
      {
        url: "https://ridoan-zisan.netlify.app",
        label: {
          en: "Visit Portfolio",
          bn: "পোর্টফোলিও দেখুন"
        }
      }
    ]
  },
  {
    id: "dhunathub",
    title: {
      en: "DhunatHub - Local Help Directory",
      bn: "ধুনাটহাব - স্থানীয় সাহায্য ডিরেক্টরি"
    },
    content: {
      en: `DhunatHub is a comprehensive local help directory web application that connects people with local services and resources. This platform helps community members find reliable service providers, local businesses, and essential resources in their area. The application features user reviews, service categories, and an intuitive interface that makes finding local help effortless and efficient.`,
      bn: `ধুনাটহাব একটি ব্যাপক স্থানীয় সাহায্য ডিরেক্টরি ওয়েব অ্যাপ্লিকেশন যা মানুষকে স্থানীয় সেবা এবং সম্পদের সাথে সংযুক্ত করে। এই প্ল্যাটফর্মটি সম্প্রদায়ের সদস্যদিকে তাদের এলাকায় নির্ভরযোগ্য সেবা প্রদানকারী, স্থানীয় ব্যবসা এবং প্রয়োজনীয় সম্পদ খুঁজে পেতে সাহায্য করে। অ্যাপ্লিকেশনটিতে ব্যবহারকারীর পর্যালোচনা, সেবা বিভাগ এবং একটি স্বজ্ঞাত ইন্টারফেস রয়েছে যা স্থানীয় সাহায্য খুঁজে পাওয়া সহজ এবং দক্ষ করে তোলে।`
    },
    date: "2024-11-20",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop",
    projectLinks: [
      {
        url: "https://dhunat.netlify.app",
        label: {
          en: "Explore Directory",
          bn: "ডিরেক্টরি এক্সপ্লোর করুন"
        }
      }
    ]
  },
  {
    id: "netlistore", 
    title: {
      en: "Netlistore - E-commerce Platform",
      bn: "নেটলিস্টোর - ই-কমার্স প্ল্যাটফর্ম"
    },
    content: {
      en: `Netlistore is a complete e-commerce web application featuring product listings, shopping cart system, and secure checkout process. This platform provides a seamless shopping experience with user authentication, product categories, search functionality, and order management. Built with modern web technologies, it demonstrates my ability to create complex, user-friendly e-commerce solutions.`,
      bn: `নেটলিস্টোর একটি সম্পূর্ণ ই-কমার্স ওয়েব অ্যাপ্লিকেশন যাতে পণ্য তালিকা, শপিং কার্ট সিস্টেম এবং নিরাপদ চেকআউট প্রক্রিয়া রয়েছে। এই প্ল্যাটফর্মটি ব্যবহারকারী প্রমাণীকরণ, পণ্য বিভাগ, অনুসন্ধান কার্যকারিতা এবং অর্ডার ব্যবস্থাপনার সাথে একটি নিরবিচ্ছিন্ন শপিং অভিজ্ঞতা প্রদান করে। আধুনিক ওয়েব প্রযুক্তি দিয়ে তৈরি, এটি জটিল, ব্যবহারকারী-বান্ধব ই-কমার্স সমাধান তৈরি করার আমার সক্ষমতা প্রদর্শন করে।`
    },
    date: "2024-11-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
    projectLinks: [
      {
        url: "https://netlistore.vercel.app",
        label: {
          en: "Shop Now",
          bn: "এখনই কিনুন"
        }
      }
    ]
  },
  {
    id: "bobdo",
    title: {
      en: "BOBDO - Blood Donation Organization",
      bn: "বোবডো - রক্তদান সংগঠন"
    },
    content: {
      en: `BOBDO is a blood donation organization web application that connects blood donors with recipients in need. This life-saving platform helps reduce response time for blood requests by 40% and has served over 68,000 community members. The application features donor registration, blood request management, and real-time matching between donors and recipients, potentially saving countless lives.`,
      bn: `বোবডো একটি রক্তদান সংগঠন ওয়েব অ্যাপ্লিকেশন যা রক্তদাতাদের প্রয়োজনীয় গ্রহীতাদের সাথে সংযুক্ত করে। এই জীবনরক্ষাকারী প্ল্যাটফর্মটি রক্তের অনুরোধের জন্য প্রতিক্রিয়ার সময় 40% কমাতে সাহায্য করে এবং 68,000+ সম্প্রদায়ের সদস্যদের সেবা প্রদান করেছে। অ্যাপ্লিকেশনটিতে দাতা নিবন্ধন, রক্ত অনুরোধ ব্যবস্থাপনা এবং দাতা ও গ্রহীতাদের মধ্যে রিয়েল-টাইম ম্যাচিংয়ের বৈশিষ্ট্য রয়েছে, যা সম্ভাব্যভাবে অগণিত জীবন বাঁচায়।`
    },
    date: "2024-11-10",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop",
    projectLinks: [
      {
        url: "https://bobdo.vercel.app",
        label: {
          en: "Donate Blood",
          bn: "রক্তদান করুন"
        }
      }
    ]
  },
  {
    id: "zpad",
    title: {
      en: "Zpad - Note Taking Application",
      bn: "জেডপ্যাড - নোট টেকিং অ্যাপ্লিকেশন"
    },
    content: {
      en: `Zpad is a feature-rich note-taking application with markdown support and comprehensive organizational tools. This productivity app helps users create, organize, and manage their notes efficiently with features like categories, tags, search functionality, and cloud synchronization. The markdown support allows for rich text formatting while maintaining simplicity and focus on content creation.`,
      bn: `জেডপ্যাড একটি বৈশিষ্ট্যসমৃদ্ধ নোট টেকিং অ্যাপ্লিকেশন যাতে মার্কডাউন সমর্থন এবং ব্যাপক সাংগঠনিক সরঞ্জাম রয়েছে। এই উৎপাদনশীলতা অ্যাপটি ব্যবহারকারীদের বিভাগ, ট্যাগ, অনুসন্ধান কার্যকারিতা এবং ক্লাউড সিঙ্ক্রোনাইজেশনের মতো বৈশিষ্ট্যগুলির সাথে তাদের নোটগুলি দক্ষতার সাথে তৈরি, সংগঠিত এবং পরিচালনা করতে সহায়তা করে। মার্কডাউন সমর্থন সামগ্রী তৈরির উপর সরলতা এবং ফোকাস বজায় রেখে সমৃদ্ধ টেক্সট ফরম্যাটিংয়ের অনুমতি দেয়।`
    },
    date: "2024-11-05",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1518843025960-d60217f226f5?w=600&h=300&fit=crop",
    projectLinks: [
      {
        url: "https://zpad.netlify.app",
        label: {
          en: "Start Noting",
          bn: "নোট নেওয়া শুরু করুন"
        }
      }
    ]
  },
  {
    id: "youthhope",
    title: {
      en: "YouthHopeBD - Youth Organization Platform",
      bn: "ইয়ুথহোপবিডি - যুব সংগঠন প্ল্যাটফর্ম"
    },
    content: {
      en: `YouthHopeBD is a website for a youth organization focused on community development and social activities. This platform serves as a hub for youth engagement, featuring event management, volunteer opportunities, community projects, and educational resources. The website helps connect young people with meaningful social initiatives and provides tools for community organizing and youth development.`,
      bn: `ইয়ুথহোপবিডি একটি যুব সংগঠনের ওয়েবসাইট যা সম্প্রদায় উন্নয়ন এবং সামাজিক কার্যক্রমে মনোনিবেশ করে। এই প্ল্যাটফর্মটি ইভেন্ট ব্যবস্থাপনা, স্বেচ্ছাসেবক সুযোগ, সম্প্রদায় প্রকল্প এবং শিক্ষামূলক সম্পদ বৈশিষ্ট্যযুক্ত যুব সংযুক্তির একটি হাব হিসেবে কাজ করে। ওয়েবসাইটটি তরুণদের অর্থপূর্ণ সামাজিক উদ্যোগের সাথে সংযুক্ত করতে সাহায্য করে এবং সম্প্রদায় সংগঠন এবং যুব উন্নয়নের জন্য সরঞ্জাম প্রদান করে。`
    },
    date: "2024-10-28",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=300&fit=crop",
    projectLinks: [
      {
        url: "https://youthhope-bd.netlify.app",
        label: {
          en: "Visit Website",
          bn: "ওয়েবসাইট দেখুন"
        }
      }
    ]
  },
  {
    id: "uniconverter",
    title: {
      en: "UniConverter - Universal Conversion Tool",
      bn: "ইউনিকনভার্টার - সর্বজনীন রূপান্তর সরঞ্জাম"
    },
    content: {
      en: `UniConverter is a universal converter web application supporting multiple measurement types and units. This utility tool provides conversion capabilities for length, weight, temperature, currency, and various other measurement systems. The intuitive interface and comprehensive unit coverage make it an essential tool for students, professionals, and anyone needing quick and accurate conversions in their daily work or studies.`,
      bn: `ইউনিকনভার্টার একটি সর্বজনীন কনভার্টার ওয়েব অ্যাপ্লিকেশন যা একাধিক পরিমাপের ধরন এবং ইউনিট সমর্থন করে। এই ইউটিলিটি টুলটি দৈর্ঘ্য, ওজন, তাপমাত্রা, মুদ্রা এবং বিভিন্ন অন্যান্য পরিমাপ সিস্টেমের জন্য রূপান্তর ক্ষমতা প্রদান করে। স্বজ্ঞাত ইন্টারফেস এবং ব্যাপক ইউনিট কভারেজ এটিকে শিক্ষার্থী, পেশাদার এবং যে কেউ তাদের দৈনন্দিন কাজ বা পড়াশোনায় দ্রুত এবং সঠিক রূপান্তরের প্রয়োজন জন্য একটি অপরিহার্য সরঞ্জাম করে তোলে।`
    },
    date: "2024-10-22",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1581094288338-231b058b38b8?w=600&h=300&fit=crop",
    projectLinks: [
      {
        url: "https://uniconverter.netlify.app",
        label: {
          en: "Convert Now",
          bn: "এখনই রূপান্তর করুন"
        }
      }
    ]
  },
  {
    id: "hscian",
    title: {
      en: "HSCian - E-learning Platform for Students",
      bn: "এইচএসসিয়ান - শিক্ষার্থীদের জন্য ই-লার্নিং প্ল্যাটফর্ম"
    },
    content: {
      en: `HSCian is an e-learning web application specifically designed for HSC students, providing comprehensive study materials and educational resources. This platform offers chapter-wise preparation guides, smart study tips, built-in HTML and C compilers for practical learning, and a wealth of educational content. Completely non-profit, HSCian aims to make quality education accessible to all students regardless of their economic background.`,
      bn: `এইচএসসিয়ান একটি ই-লার্নিং ওয়েব অ্যাপ্লিকেশন যা বিশেষভাবে এইচএসসি শিক্ষার্থীদের জন্য ডিজাইন করা হয়েছে, যা ব্যাপক অধ্যয়ন সামগ্রী এবং শিক্ষামূলক সম্পদ প্রদান করে। এই প্ল্যাটফর্মটি অধ্যায়ভিত্তিক প্রস্তুতির গাইড, স্মার্ট অধ্যয়নের টিপস, ব্যবহারিক শেখার জন্য অন্তর্নিহিত HTML এবং C কম্পাইলার এবং শিক্ষামূলক সামগ্রীর প্রাচুর্য অফার করে। সম্পূর্ণ অলাভজনক, এইচএসসিয়ান তাদের অর্থনৈতিক পটভূমি নির্বিশেষে সকল শিক্ষার্থীর জন্য মানসম্মত শিক্ষা প্রবেশযোগ্য করার লক্ষ্য রাখে।`
    },
    date: "2024-10-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=300&fit=crop",
    projectLinks: [
      {
        url: "https://hscian.netlify.app",
        label: {
          en: "Start Learning",
          bn: "শেখা শুরু করুন"
        }
      }
    ]
  }
];
