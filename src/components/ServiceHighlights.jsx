'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function ServiceHighlights() {
  const services = [
    {
      image: '/assets/services/corporate.png',
      icon: 'https://i.pinimg.com/1200x/6a/d6/0d/6ad60db79e97190a53bb80e085552d1f.jpg',
      title: 'Corporate Cab Service',
      link: '/our-services/corporate-cab-services'
    },
    {
      image: '/assets/services/airport.png',
      icon: 'https://i.pinimg.com/1200x/6a/d6/0d/6ad60db79e97190a53bb80e085552d1f.jpg',
      title: 'Airport Cab Service',
      link: '/our-services/airport-cab-services'
    },
    {
      image: '/assets/services/indoretobhopal.png',
      icon: 'https://i.pinimg.com/1200x/6a/d6/0d/6ad60db79e97190a53bb80e085552d1f.jpg',
      title: 'Indore to Bhopal',
      link: '/our-services/indore-to-bhopal'
    },
    {
      image: '/assets/services/indoretomandav.png',
      icon: 'https://i.pinimg.com/1200x/6a/d6/0d/6ad60db79e97190a53bb80e085552d1f.jpg',
      title: 'Indore to Mandav',
      link: '/our-services/indore-to-mandav'
    },
    {
      image: '/assets/services/indoretoujjain.png',
      icon: 'https://i.pinimg.com/1200x/6a/d6/0d/6ad60db79e97190a53bb80e085552d1f.jpg',
      title: 'Indore to Ujjain',
      link: '/our-services/indore-to-ujjain'
    },
    {
      image: '/assets/services/bhopaltoindore.png',
      icon: 'https://i.pinimg.com/1200x/6a/d6/0d/6ad60db79e97190a53bb80e085552d1f.jpg',
      title: 'Bhopal to Indore',
      link: '/our-services/bhopal-to-indore'
    },
    {
      image: '/assets/services/ujjaintoindore.png',
      icon: 'https://i.pinimg.com/1200x/6a/d6/0d/6ad60db79e97190a53bb80e085552d1f.jpg',
      title: 'Ujjain to Indore',
      link: '/our-services/ujjain-to-indore'
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsToShow = isMobile ? 1 : 3;
  const totalServices = services.length;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (prev >= totalServices - cardsToShow) {
        return 0; // Loop back to start
      }
      return prev + 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalServices, cardsToShow]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return totalServices - cardsToShow; // Loop to end
      }
      return prev - 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalServices, cardsToShow]);

  // Update scroll position when currentIndex changes (smooth scroll)
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const cardWidth = carouselRef.current.scrollWidth / totalServices;
    const scrollPosition = currentIndex * cardWidth;
    
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, [currentIndex, totalServices]);

  // Auto-play functionality (optional - remove if not needed)
  const autoPlayRef = useRef(null);
  
  const startAutoPlay = useCallback(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  }, [nextSlide]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay]);

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  // Handle button clicks with auto-play reset
  const handleNextClick = () => {
    nextSlide();
    resetAutoPlay();
  };

  const handlePrevClick = () => {
    prevSlide();
    resetAutoPlay();
  };

  return (
    <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Background Banner */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/Banner4.png"
          alt="Travel Partner Banner"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-12">
          {/* Left Side - Headings */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="inline-block py-1 sm:py-2 text-[#FDD700] font-semibold rounded-full text-sm sm:text-base mb-3">
              Explore Our Wide Range of Cab & Travel Services
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Reliable Cab Services in Indore for Every Need
            </h2>
          </div>

          {/* Right Side - Navigation Buttons (Desktop only) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handlePrevClick}
              className="bg-[#FDD700] hover:bg-[#e6c200] text-black p-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              aria-label="Previous services"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextClick}
              className="bg-[#FDD700] hover:bg-[#e6c200] text-black p-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              aria-label="Next services"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden scrollbar-hide select-none"
            style={{ cursor: 'grab' }}
          >
            <div className="flex">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`
                    flex-shrink-0
                    ${isMobile ? 'w-full' : 'w-1/3'}
                    px-3
                  `}
                >
                  <div className="bg-white p-4 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform h-full">
                    {/* Service Image */}
                    <div className="relative h-46 md:h-48">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Service Content */}
                    <div className="px-2 pb-2 pt-3">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-[#FDD700] rounded-full flex items-center justify-center text-black font-bold text-sm">
                            {service.title.split(' ').map(word => word[0]).join('')}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-black">{service.title}</h3>
                      </div>
                      
                      {/* Learn More Button */}
                      <a
                        href={service.link}
                        className="block w-full bg-[#141414] hover:bg-[#FDD700] text-white hover:text-black text-center py-3 px-4 font-semibold transition-all duration-200 transform cursor-pointer"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="lg:hidden flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrevClick}
              className="bg-[#FDD700] hover:bg-[#e6c200] text-black p-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextClick}
              className="bg-[#FDD700] hover:bg-[#e6c200] text-black p-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              aria-label="Next service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators (Optional - similar to testimonial carousel) */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalServices - cardsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  resetAutoPlay();
                }}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? "bg-[#FDD700] w-8 shadow-lg shadow-[#FDD700]/50" 
                    : "bg-gray-400 hover:bg-[#FDD700]/50"
                  }
                `}
                aria-label={`Go to service group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}