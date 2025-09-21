import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, Minimize, Loader2, FileBadge } from 'lucide-react';
import { Element } from 'react-scroll';

interface Certificate {
  title: {
    en: string;
    bn: string;
  };
  image: string;
}

interface CertificateSliderProps {
  certificates: Certificate[];
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
          <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
            {icon}
          </div>
        </div>
        <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">
          {title}
        </span>
      </div>
      {children}
    </motion.section>
  );
};

const CertificateSlider = ({ certificates, language }: CertificateSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const sliderRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  // Preload images with WebP support and performance optimization
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = certificates.length;
    const failed = new Set<string>();

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setIsLoading(false);
      }
    };

    const handleImageError = (src: string) => {
      failed.add(src);
      loadedCount++;
      if (loadedCount === totalImages) {
        setFailedImages(failed);
        setIsLoading(false);
      }
    };

    // Preload all images immediately with high priority
    certificates.forEach((cert, index) => {
      const img = new Image();
      img.src = cert.image;
      img.loading = 'eager'; // High priority loading
      img.fetchPriority = 'high';
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(cert.image);
      
      // Preload the first few images with higher priority
      if (index < 3) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = cert.image;
        document.head.appendChild(link);
      }
    });

    return () => {
      // Clean up preload links
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, [certificates]);

  // Navigation handlers
  const handleNavigation = useCallback((newIndex: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(newIndex);
    
    // Resume autoplay after 3 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  }, []);

  const handlePrevious = useCallback(() => {
    handleNavigation(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1);
  }, [currentIndex, certificates.length, handleNavigation]);

  const handleNext = useCallback(() => {
    handleNavigation(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, certificates.length, handleNavigation]);

  const handleDotClick = useCallback((index: number) => {
    handleNavigation(index);
  }, [handleNavigation]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrevious();
  };

  // Fullscreen handlers
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (fullscreenRef.current?.requestFullscreen) {
        fullscreenRef.current.requestFullscreen().catch(() => {
          console.error('Error attempting to enable fullscreen');
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Auto-play functionality - faster transitions (1.5 seconds)
  useEffect(() => {
    if (!isAutoPlaying || isLoading) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    }, 1500); // Faster auto-play for better user experience

    return () => clearInterval(timer);
  }, [certificates.length, isAutoPlaying, isLoading]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // LinkedIn-style premium dot navigation calculation with 11 dots
  const getVisibleDots = () => {
    const maxDots = 11;
    const total = certificates.length;
    
    if (total <= maxDots) {
      return certificates.map((_, index) => index);
    }
    
    const current = currentIndex;
    const center = Math.floor(maxDots / 2);
    
    let start = Math.max(0, current - center);
    let end = Math.min(total - 1, current + center);
    
    // Adjust if we're near the boundaries
    if (end - start + 1 < maxDots) {
      if (start === 0) {
        end = Math.min(total - 1, maxDots - 1);
      } else if (end === total - 1) {
        start = Math.max(0, total - maxDots);
      }
    }
    
    const dots = [];
    for (let i = start; i <= end; i++) {
      dots.push(i);
    }
    return dots;
  };

  const getDotScale = (index: number) => {
    const visibleDots = getVisibleDots();
    const position = visibleDots.indexOf(index);
    const center = Math.floor(visibleDots.length / 2);
    const distance = Math.abs(position - center);
    
    if (index === currentIndex) return 1.2; // Current dot is largest but smaller
    if (distance === 0) return 1.2;
    if (distance === 1) return 1.0;
    if (distance === 2) return 0.8;
    if (distance === 3) return 0.6;
    if (distance === 4) return 0.5;
    return 0.3;
  };

  const getDotOpacity = (index: number) => {
    const visibleDots = getVisibleDots();
    const position = visibleDots.indexOf(index);
    const center = Math.floor(visibleDots.length / 2);
    const distance = Math.abs(position - center);
    
    if (index === currentIndex) return 1;
    if (distance === 0) return 1;
    if (distance === 1) return 0.8;
    if (distance === 2) return 0.6;
    if (distance === 3) return 0.4;
    if (distance === 4) return 0.3;
    return 0.2;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full h-[60vw] sm:h-[50vw] max-h-[400px] min-h-[250px] flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-gray-500 animate-spin" />
          <span className="text-gray-600 text-sm sm:text-base">Loading certificates...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full max-w-6xl mx-auto ${
        isFullscreen ? 'h-screen w-screen bg-black p-0 m-0 fixed inset-0 z-50' : 'px-2 sm:px-4'
      }`}
      ref={fullscreenRef}
    >
      {/* Certificate Image Container */}
      <div 
        className={`relative group ${
          isFullscreen 
            ? 'w-full h-full bg-black' 
            : 'w-full h-[60vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] max-h-[500px] min-h-[250px] bg-transparent'
        } overflow-hidden rounded-lg`}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={`w-full h-full flex items-center justify-center ${
              isFullscreen ? 'p-4 bg-black' : 'bg-transparent'
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2, ease: 'easeOut' }} // Faster, smoother transitions
          >
            {failedImages.has(certificates[currentIndex].image) ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                <div className="text-center p-4">
                  <div className="text-gray-600 font-medium mb-2">
                    Certificate image unavailable offline
                  </div>
                  <div className="text-sm text-gray-500">
                    {certificates[currentIndex].title[language]}
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].title[language]}
                className="max-w-full max-h-full object-contain cursor-pointer"
                style={{
                  background: 'transparent',
                  filter: isFullscreen ? 'none' : 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                }}
                loading="eager" // Eager loading for better performance
                fetchPriority="high" // High priority for current image
                decoding="async" // Async decoding for better performance
                onError={() => {
                  setFailedImages(prev => new Set([...prev, certificates[currentIndex].image]));
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Fullscreen Toggle Button */}
        <button
          onClick={toggleFullscreen}
          className={`absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm ${
            isFullscreen ? '!opacity-100' : ''
          }`}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
        >
          {isFullscreen ? (
            <Minimize className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Expand className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
      </div>

      {/* Navigation Controls - Always visible when not fullscreen */}
      {!isFullscreen && (
        <div className="mt-3 sm:mt-4">
          {/* Title with Navigation Arrows - Visible on all devices */}
          <div className="flex items-center justify-between mb-3">
            {/* Left Arrow - Visible on all devices */}
            <button
              onClick={handlePrevious}
              className="flex p-2 text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Certificate Title with Verify Button - Always visible */}
            <div className="flex-1 text-center px-4">
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-700 line-clamp-2 mb-2">
                {certificates[currentIndex].title[language]}
              </h3>
              <button
                onClick={() => window.open(certificates[currentIndex].image, '_blank')}
                className="px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm rounded-full hover:bg-green-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                {language === 'en' ? 'Verify Certificate' : 'সার্টিফিকেট যাচাই করুন'}
              </button>
            </div>

            {/* Right Arrow - Visible on all devices */}
            <button
              onClick={handleNext}
              className="flex p-2 text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* LinkedIn-style Premium Dot Navigation with 11 smaller dots */}
          {certificates.length > 1 && (
            <div className="flex justify-center mb-2">
              <div className="flex items-center space-x-2">
                {getVisibleDots().map((index) => (
                  <button
                    key={index}
                    className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
                      index === currentIndex 
                        ? 'bg-green-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    style={{
                      width: `${getDotScale(index) * 6}px`,
                      height: `${getDotScale(index) * 6}px`,
                      opacity: getDotOpacity(index),
                      transform: `scale(${getDotScale(index)})`,
                    }}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Position Counter */}
          <div className="flex justify-center">
            <div className="px-3 py-1 bg-gray-100/80 text-gray-600 text-xs sm:text-sm rounded-full backdrop-blur-sm">
              {currentIndex + 1} / {certificates.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface CertificateSectionProps {
  language: 'en' | 'bn';
  content: any;
  certificates: any[];
}

const CertificateSection = ({ language, content, certificates }: CertificateSectionProps) => {
  return (
    <Element name="certificates">
      <ProfessionalLayout
        title={content[language].certifications}
        icon={<FileBadge className="text-white" size={24} />}
      >
        <CertificateSlider
          certificates={certificates}
          language={language}
        />
      </ProfessionalLayout>
    </Element>
  );
};

export default CertificateSection;