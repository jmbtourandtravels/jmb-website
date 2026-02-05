"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export default function OurVehicles() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const vehicles = [
    
    {
      id: 1,
      name: "Suzuki Ertiga",
      type: "prime",
      image: "/assets/our-fleets/ertiga.png",
      ratePerKm: "13/- KM",
      price: "₹ 3250 /day",
    },
    {
      id: 2,
      name: "Swift Dzire",
      type: "prime",
      image: "/assets/our-fleets/dzire.png",
      ratePerKm: "11/- KM",
      price: "₹ 2750 /day",
    },
    {
      id: 3,
      name: "Toyota Innova",
      type: "exclusive",
      image: "/assets/our-fleets/toyota.png",
      ratePerKm: "15/- KM",
      price: "₹ 3750 /day",
    },
    {
      id: 4,
      name: "Innova Crysta",
      type: "exclusive",
      image: "/assets/our-fleets/innova.png",
      ratePerKm: "18/- KM",
      price: "₹ 4500 /day",
    },
    {
      id: 5,
      name: "Tavera",
      type: "prime",
      image: "/assets/our-fleets/tavera.png",
      ratePerKm: "13/- KM",
      price: "₹ 3250 /day",
    },
    
    {
      id: 6,
      name: "Urbania",
      type: "exclusive",
      image: "/assets/our-fleets/urbania.png",
      ratePerKm: "35/- KM",
      price: "₹ 8750 /day",
    },
    {
      id: 7,
      name: "Tempo Traveller 12",
      type: "exclusive",
      image: "/assets/our-fleets/traveller1.png",
      ratePerKm: "22/- KM",
      price: "₹ 5500 /day",
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

  const filteredVehicles =
    activeFilter === "all"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.type === activeFilter);

  const cardsToShow = isMobile ? 1 : 3;
  const totalVehicles = filteredVehicles.length;

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
    const cardWidth = carouselRef.current.scrollWidth / totalVehicles;
    const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, totalVehicles - cardsToShow));
    
    setCurrentIndex(clampedIndex);
    resetAutoPlay();
  };

  const nextSlide = useCallback(() => {
    if (isAnimating || totalVehicles <= cardsToShow) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (prev >= totalVehicles - cardsToShow) {
        return 0; // Loop back to start
      }
      return prev + 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalVehicles, cardsToShow]);

  const prevSlide = useCallback(() => {
    if (isAnimating || totalVehicles <= cardsToShow) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return totalVehicles - cardsToShow; // Loop to end
      }
      return prev - 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalVehicles, cardsToShow]);

  // Update scroll position when currentIndex changes (smooth scroll)
  useEffect(() => {
    if (!carouselRef.current || totalVehicles <= cardsToShow) return;
    
    const cardWidth = carouselRef.current.scrollWidth / totalVehicles;
    const scrollPosition = currentIndex * cardWidth;
    
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, [currentIndex, totalVehicles, cardsToShow]);

  // Auto-play functionality
  const autoPlayRef = useRef(null);
  
  const startAutoPlay = useCallback(() => {
    if (totalVehicles <= cardsToShow) return;
    
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 2000);
  }, [nextSlide, totalVehicles, cardsToShow]);

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

  // Reset carousel when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    resetAutoPlay();
  }, [activeFilter]);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/Banner5.png"
          alt="JMB Tour And Travels Banner"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section with Title and Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mb-8 gap-6">
          {/* Left - Heading */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-start text-black mb-4">
              Our Vehicles 
            </h2>

            {/* Description Paragraph */}
            <p className="text-black text-lg max-w-2xl text-center md:text-start">
              Choose from a wide range of clean, air-conditioned cars perfect for every trip. From city rides to outstation journeys, JMB Tour And Travels ensures comfort, safety, and reliability in every ride.
            </p>
          </div>

          {/* Right - Filter Buttons */}
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1 h-fit">
            {["all", "prime", "exclusive"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-lg font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#FFD700] text-black shadow-md cursor-pointer"
                    : "text-font-gray hover:bg-gray-200 cursor-pointer"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className={`overflow-hidden scrollbar-hide select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleDragStart}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDrag}
          >
            <div className="flex">
              {filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className={`
                    flex-shrink-0
                    ${isMobile ? 'w-full' : 'w-1/3'}
                    px-3
                  `}
                >
                  <div className="rounded-2xl relative border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform cursor-pointer">
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src="/assets/CardBgBanner.png"
                        alt="Vehicle Card Background"
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                      />
                    </div>

                    {/* Vehicle Name - Top Center */}
                    <div className="relative z-10 text-center pt-4">
                      <h3 className="text-2xl md:text-2xl font-bold text-white">
                        {vehicle.name}
                      </h3>
                    </div>

                    {/* Vehicle Image */}
                    <div className="relative z-10 p-4">
                      <div className="w-full h-48 flex items-center justify-center mb-2 md:mb-6">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Rate and Price */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-left">
                          <p className="text-lg font-bold text-white">
                            {vehicle.ratePerKm}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-white">
                            {vehicle.price}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}

                      <div className="flex gap-5">
                        <Link href="/book-cabs" className="flex-1 bg-[#FFD700] text-black py-2  font-semibold transition-all duration-200 text-center transform hover:scale-105 cursor-pointer">
                          Book Now
                        </Link>
                        <Link href="tel:+919876543210"></Link>
                        <button className="flex-1 bg-transparent text-[#FDD700] hover:text-black border-2 border-[#FFD700] hover:bg-[#FDD700] py-2 font-semibold transition-all duration-200 transform hover:scale-105 cursor-pointer">
                          Call Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          {totalVehicles > cardsToShow && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalVehicles - cardsToShow + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetAutoPlay();
                  }}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                    ${index === currentIndex 
                      ? "bg-[#FFD700] w-8 shadow-lg shadow-[#FFD700]/50" 
                      : "bg-gray-400 hover:bg-[#FFD700]/50"
                    }
                  `}
                  aria-label={`Go to vehicle group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-font-gray text-lg">
              No vehicles found for the selected category.
            </p>
          </div>
        )}
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