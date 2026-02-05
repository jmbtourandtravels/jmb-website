
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export default function OurPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const packages = [
  {
    id: 1,
    title: "Indore Local Sightseeing",
    image: "/assets/packages/1.png",
    price: "₹2,500/-",
    description: "Explore Indore’s famous attractions easily",
  },
  {
    id: 2,
    title: "Indore - Ujjain - Indore",
    image: "/assets/packages/2.png",
    price: "₹2,500/-",
    description: "Spiritual journey to Mahakal temple",
  },
  {
    id: 3,
    title: "Indore - Omkareshwar - Indore",
    image: "/assets/packages/3.png",
    price: "₹2,750/-",
    description: "Peaceful trip to sacred Omkareshwar",
  },
  {
    id: 4,
    title: "Indore - Mandav - Indore",
    image: "/assets/packages/4.png",
    price: "₹2,500/-",
    description: "Historic day trip to Mandavgarh",
  },
  {
    id: 5,
    title: "Indore - Pithampur - Indore",
    image: "/assets/packages/5.png",
    price: "₹2,500/-",
    description: "Quick business travel made comfortable",
  },
  {
    id: 6,
    title: "Indore - Maheshwar - Indore",
    image: "/assets/packages/6.png",
    price: "₹2,500/-",
    description: "Cultural retreat by Narmada River",
  },
  {
    id: 7,
    title: "Near Indore Combo",
    image: "/assets/packages/7.png",
    price: "₹6,500/- ( for 2 days ) ",
    description: "Best weekend escape near Indore",
  },
  {
    id: 8,
    title: "Indore Airport",
    image: "/assets/packages/8.png",
    price: "₹1,000/-",
    description: "Quick and reliable airport transfers",
  },
  {
    id: 9,
    title: "Indore Railway Station",
    image: "/assets/packages/9.png",
    price: "₹750/-",
    description: "Affordable pickup and drop service",
  },
];


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
  const totalPackages = packages.length;

  // Drag functionality variables
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // Handle dragging
  const handleDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Snap to nearest card after drag
    const cardWidth = carouselRef.current.scrollWidth / totalPackages;
    const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, totalPackages - cardsToShow));
    
    setCurrentIndex(clampedIndex);
    resetAutoPlay();
  };

  const nextSlide = useCallback(() => {
    if (isAnimating || totalPackages <= cardsToShow) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (prev >= totalPackages - cardsToShow) {
        return 0; // Loop back to start
      }
      return prev + 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalPackages, cardsToShow]);

  const prevSlide = useCallback(() => {
    if (isAnimating || totalPackages <= cardsToShow) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return totalPackages - cardsToShow; // Loop to end
      }
      return prev - 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalPackages, cardsToShow]);

  // Update scroll position when currentIndex changes (smooth scroll)
  useEffect(() => {
    if (!carouselRef.current || totalPackages <= cardsToShow) return;
    
    const cardWidth = carouselRef.current.scrollWidth / totalPackages;
    const scrollPosition = currentIndex * cardWidth;
    
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, [currentIndex, totalPackages, cardsToShow]);

  // Auto-play functionality
  const autoPlayRef = useRef(null);
  
  const startAutoPlay = useCallback(() => {
    if (totalPackages <= cardsToShow) return;
    
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds interval for packages
  }, [nextSlide, totalPackages, cardsToShow]);

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

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  return (
    <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/Banner5.png"
          alt="JMB Tour And Travels Banner"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Packages
          </h2>

          {/* Description Paragraph */}
          <p className="text-black text-lg max-w-3xl mx-auto">
            Discover the perfect travel plan with JMB Tour And Travel's exclusive cab packages. Whether it’s a local city tour, an airport transfer, or an outstation trip from Indore, our flexible packages are designed to suit your schedule and budget. Enjoy transparent pricing, professional drivers, and a hassle-free travel experience every time you ride with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            className={`overflow-hidden scrollbar-hide select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleDragStart}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDrag}
            onTouchStart={(e) => handleDragStart(e.touches[0])}
            onTouchMove={(e) => handleDrag(e.touches[0])}
            onTouchEnd={handleDragEnd}
          >
            <div className="flex">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`
                    flex-shrink-0
                    ${isMobile ? 'w-full' : 'w-1/3'}
                    px-3
                  `}
                >
                  <div className="relative bg-primary-white rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src="/assets/CardBgBanner.png"
                        alt="JMB Tour And Travels Banner"
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                      />
                    </div>

                    {/* Package Image */}
                    <div className="p-6 relative z-10">
                      <div className="w-full h-48 flex items-center justify-center mb-6">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Package Title */}
                      <div className="text-center mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {pkg.title}
                        </h3>
                        <p className="text-white text-sm md:text-md mt-1">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-left">
                          <p className="text-lg font-semibold text-white">Price</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-white">{pkg.price}</p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-5">
                        <Link href="/book-cab" className="flex-1 bg-[#FDD700] text-black py-2 font-semibold transition-all duration-200 text-center transform hover:scale-105 cursor-pointer">
                          Book Now
                        </Link>
                        
                        <Link  href="tel:+917772075970" className="flex-1 bg-transparent text-[#FDD700] hover:text-black border-2 border-[#FDD700] text-center hover:bg-[#FDD700] py-2 font-semibold transition-all duration-200 transform hover:scale-105 cursor-pointer">
                          Call Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          {totalPackages > cardsToShow && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPackages - cardsToShow + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                    ${index === currentIndex 
                      ? "bg-[#FDD700] w-8 shadow-lg shadow-[#FDD700]/50" 
                      : "bg-gray-400 hover:bg-[#FDD700]/50"
                    }
                  `}
                  aria-label={`Go to package group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View More CTA Button */}
        <div className="text-center mt-12">
          <Link href="/our-packages">
          <button className="bg-[#FDD700] text-black px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer">
            View More Packages
          </button></Link>
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
  );
}