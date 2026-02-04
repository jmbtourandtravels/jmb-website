'use client'

import React, { useState, useMemo } from 'react';
import { CheckCircle, Car, Map, DollarSign, Package } from 'lucide-react';
import Link from "next/link";

// --- Static Content Definition ---

// Define the content for each tab
const TAB_DATA = {
  Drivers: {
    title: "Professional & Verified Drivers",
    description: "At Travel Partner, your safety comes first. Our drivers are professionally trained, background-verified, and well-versed with all major routes in and around Indore — including Ujjain, Dewas, and Bhopal. They maintain punctuality, politeness, and professionalism throughout your journey, ensuring a comfortable and stress-free travel experience every time.",
    image: "/assets/home/whyus1.jpg",
    alt: "Verified Driver at Travel Partner",
  },
  Comfort: {
    title: "Clean, Comfortable & Well-Maintained Cabs",
    description: "Enjoy a premium ride experience with our clean and air-conditioned cabs. Each vehicle is regularly serviced and sanitized to offer maximum comfort. Whether it’s a quick city drop or an outstation tour, Travel Partner ensures smooth rides, ample space, and ultimate relaxation on every trip.",
    image: "/assets/home/whyus2.jpg",
    alt: "Clean and comfortable cabs",
  },
  Pricing: {
    title: "Transparent & Affordable Pricing",
    description: "With Travel Partner, you always know what you pay for. Our transparent pricing policy means no hidden charges — just honest fares and flexible packages for every budget. Whether you need a local taxi, airport pickup, or an Indore-to-Ujjain cab, you get the best rates guaranteed.",
    image: "/assets/home/whyus3.jpg",
    alt: "A graphic showing transparent pricing details.",
  },
  Support: {
    title: "24/7 Assistance & Quick Response",
    description: "We’re always here when you need us. Our dedicated support team operates round the clock to assist you with bookings, route changes, or urgent travel needs. No matter the time or location, Travel Partner ensures your journey is backed by prompt and reliable service every step of the way.",
    image: "/assets/home/whyus4.jpg",
    alt: "24/7 Assistant by Travel Partner",
  },
};

// Define the small, static list of benefits
const BENEFITS_LIST = [
  { text: "Easy & Emergency Solutions" },
  { text: "More Reliable & Experienced" },
  { text: "100% Satisfaction Guarantee" },
  { text: "Getting Affordable Price" },
  { text: "Award Winning Company" },
  { text: "Many Pickup Locations" },
];

// --- Main Component ---

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState('Drivers');

  const content = useMemo(() => TAB_DATA[activeTab], [activeTab]);

  // Styles for the active and inactive tab buttons
  const tabClasses = (tabKey) =>
    `relative p-3 px-6 text-sm font-semibold rounded-t-lg transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap
    ${
      activeTab === tabKey
        ? 'bg-[#FFD700] text-black shadow-md'
        : 'bg-gray-200 text-black hover:bg-yellow-50'
    }`;

  // Tab label rendering logic including the yellow accent triangle
  const TabLabel = ({ tabKey, label }) => (
    <div className={tabClasses(tabKey)} onClick={() => setActiveTab(tabKey)}>
      {label}
      {activeTab === tabKey && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#FFD700]"></div>
      )}
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden font-sans">
      
      {/* Absolute Decorative Triangles (Matching the image) */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-80 md:h-80 -mt-16 -ml-16 rotate-45 bg-yellow-400 opacity-20 hidden lg:block"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 -mb-16 -mr-16 -rotate-45 bg-yellow-400 opacity-20 hidden lg:block"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-black px-4 py-1 text-sm font-bold tracking-widest uppercase mb-2">
            — Why Choose Us —
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Most Trusted Cab Services In Indore
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          <TabLabel tabKey="Drivers" label="Drivers" />
          <TabLabel tabKey="Comfort" label="Comfort" />
          <TabLabel tabKey="Pricing" label="Pricing" />
          <TabLabel tabKey="Support" label="Support" />
        </div>

        {/* Main Content Box with Smooth Transition */}
        <div className="rounded-xl relative shadow-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-xl">

          <div className="absolute inset-0 w-full h-full">
                <img
                  src="/assets/Banner3.png"
                  alt="Travel Partner Banner"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

          <div className="flex flex-col relative z-10 lg:flex-row min-h-[500px]">
            
            {/* Left Column: Text Content */}
            <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 order-2 lg:order-1 flex flex-col justify-center">
              <div className="transition-all duration-500 ease-in-out flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-start">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {content.title}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {content.description}
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-8">
                  {BENEFITS_LIST.map((benefit, index) => (
                    <div key={index} className="flex items-center  space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action Button */}
                <Link href="/book-cab">
                <button
                  className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-lg shadow-lg text-black bg-[#FFD700] transition duration-300 transform hover:scale-[1.02]"
                  onClick={() => console.log('Booking a taxi...')}
                >
                  <Car className="w-5 h-5 mr-2" />
                  BOOK A TAXI
                </button>
                </Link>
              </div>
            </div>

            {/* Right Column: Image with Proper Styling */}
            <div className="lg:w-1/2 order-1 lg:order-2 p-4 lg:p-6 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] rounded-lg overflow-hidden">
                <img
                  src={content.image}
                  alt={content.alt}
                  className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105"
                  // Placeholder Image Fallback
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/600x400/FACC15/1f2937?text=Image+Not+Found" 
                  }}
                />
                {/* Optional overlay for better text readability on some images */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent lg:bg-gradient-to-l lg:from-white/10 lg:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;