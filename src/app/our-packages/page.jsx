// src/app/packages/page.jsx
"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Packages() {
  const [expandedPackage, setExpandedPackage] = useState(null);

  const packages = [
  {
    id: 1,
    title: "Indore Local Sightseeing",
    image: "/assets/packages/1.png",
    price: "₹2,500/-",
    description: "Explore Indore’s famous attractions easily",
    destinations: [
      "Rajwada Palace",
      "Lal Bagh Palace",
      "Kanch Mandir",
      "Sarafa Night Market",
      "Chappan Dukan"
    ],
    details: {
      para: "Perfect for exploring Indore’s top tourist spots, cultural landmarks, and local food destinations in a day.",
      bulletPoints: [
        "8 hours / 80 kms package",
        "Includes driver and fuel charges",
        "Comfortable AC cabs",
        "Ideal for friends and families",
      ],
    },
  },
  {
    id: 2,
    title: "Indore - Ujjain - Indore",
    image: "/assets/packages/2.png",
    price: "₹2,500/-",
    description: "Spiritual journey to Mahakal temple",
    destinations: [
      "Mahakaleshwar Temple",
      "Harsiddhi Temple",
      "Ram Ghat",
      "Kal Bhairav Temple",
      "Sandipani Ashram"
    ],
    details: {
      para: "A peaceful round trip from Indore to Ujjain, covering the sacred Mahakaleshwar Jyotirlinga and other divine places.",
      bulletPoints: [
        "One-day round trip service",
        "Experienced drivers familiar with routes",
        "Customizable temple visit timings",
        "Comfortable for family pilgrims",
      ],
    },
  },
  {
    id: 3,
    title: "Indore - Omkareshwar - Indore",
    image: "/assets/packages/3.png",
    price: "₹2,750/-",
    description: "Peaceful trip to sacred Omkareshwar",
    destinations: [
      "Omkareshwar Temple",
      "Mamleshwar Temple",
      "Narmada Ghat",
      "Parikrama Path",
      "Omkareshwar Dam View"
    ],
    details: {
      para: "Enjoy a serene spiritual journey to the sacred Narmada ghats and Omkareshwar Jyotirlinga temple.",
      bulletPoints: [
        "Comfortable round trip journey",
        "A/C vehicles with driver",
        "Includes short halts and sightseeing",
        "Perfect for families and devotees",
      ],
    },
  },
  {
    id: 4,
    title: "Indore - Mandav - Indore",
    image: "/assets/packages/4.png",
    price: "₹2,500/-",
    description: "Historic day trip to Mandavgarh",
    destinations: [
      "Rani Roopmati Mahal",
      "Baz Bahadur Palace",
      "Jahaz Mahal",
      "Hindola Mahal",
      "Echo Point"
    ],
    details: {
      para: "Discover the heritage and romance of Mandu with a comfortable round trip from Indore.",
      bulletPoints: [
        "One-day sightseeing package",
        "Scenic drive through Ghats",
        "Heritage fort visits included",
        "Ideal for couples and explorers",
      ],
    },
  },
  {
    id: 5,
    title: "Indore - Pithampur - Indore",
    image: "/assets/packages/5.png",
    price: "₹2,500/-",
    description: "Quick business travel made comfortable",
    destinations: [
      "Industrial Area Zone 1",
      "Zone 2",
      "Zone 3",
      "Business Parks",
      "Corporate Offices"
    ],
    details: {
      para: "Designed for professionals traveling to and from the Pithampur industrial area with punctual service.",
      bulletPoints: [
        "Round trip with flexible timings",
        "On-time pickup and drop",
        "Comfortable executive vehicles",
        "Best for business travelers",
      ],
    },
  },
  {
    id: 6,
    title: "Indore - Maheshwar - Indore",
    image: "/assets/packages/6.png",
    price: "₹2,500/-",
    description: "Cultural retreat by Narmada River",
    destinations: [
      "Ahilya Fort",
      "Narmada Ghat",
      "Rehwa Society",
      "Rajwada Maheshwar",
      "Handloom Market"
    ],
    details: {
      para: "A delightful journey to the historic riverside town of Maheshwar, known for its temples and handlooms.",
      bulletPoints: [
        "Full-day sightseeing package",
        "Includes driver and fuel cost",
        "Comfortable AC vehicles",
        "Great for cultural lovers",
      ],
    },
  },
  {
    id: 7,
    title: "Near Indore Combo (2 Days)",
    image: "/assets/packages/7.png",
    price: "₹6,500/- (for 2 days)",
    description: "Best weekend escape near Indore",
    destinations: [
      "Ujjain",
      "Omkareshwar",
      "Maheshwar",
      "Mandav",
      "Janapav Hills"
    ],
    details: {
      para: "Perfect for weekend travelers looking to explore multiple nearby destinations around Indore with an overnight stay.",
      bulletPoints: [
        "2 days sightseeing plan",
        "Driver with night stay facility",
        "Custom itinerary option",
        "Ideal for groups and families",
      ],
    },
  },
  {
    id: 8,
    title: "Indore - Nalkheda - Indore",
    image: "/assets/packages/10.jpeg",
    price: "₹4,500/-",
    description: "Comfortable ride to the sacred town",
    destinations: [
      "Ujjain",
      "Omkareshwar",
      "Maheshwar",
      "Mandav",
      "Janapav Hills"
    ],
    details: {
      para: "Perfect for weekend travelers looking to explore multiple nearby destinations around Indore with an overnight stay.",
      bulletPoints: [
        "2 days sightseeing plan",
        "Driver with night stay facility",
        "Custom itinerary option",
        "Ideal for groups and families",
      ],
    },
  },
  {
    id: 9,
    title: "Indore - Bhopal - Indore",
    image: "/assets/packages/11.webp",
    price: "₹4,500/- ",
    description: "Smooth journey to the city of lakes",
    destinations: [
      "Ujjain",
      "Omkareshwar",
      "Maheshwar",
      "Mandav",
      "Janapav Hills"
    ],
    details: {
      para: "Perfect for weekend travelers looking to explore multiple nearby destinations around Indore with an overnight stay.",
      bulletPoints: [
        "2 days sightseeing plan",
        "Driver with night stay facility",
        "Custom itinerary option",
        "Ideal for groups and families",
      ],
    },
  },
  {
    id: 10,
    title: "Indore Airport Transfer",
    image: "/assets/packages/8.png",
    price: "₹1,000/-",
    description: "Quick and reliable airport transfers",
    destinations: [
      "Indore Airport (IDR)",
      "Vijay Nagar",
      "Palasia",
      "Rau",
      "Bhawarkuan"
    ],
    details: {
      para: "Hassle-free airport pickup and drop service with on-time arrival and flight tracking facility.",
      bulletPoints: [
        "Free waiting up to 30 minutes",
        "Luggage assistance available",
        "Real-time flight tracking",
        "24/7 service available",
      ],
    },
  },
  {
    id: 11,
    title: "Indore Railway Station",
    image: "/assets/packages/9.png",
    price: "₹750/-",
    description: "Affordable pickup and drop service",
    destinations: [
      "Indore Junction (INDB)",
      "LIG",
      "Palasia",
      "Bhawarkuan",
      "Rau"
    ],
    details: {
      para: "Budget-friendly and comfortable cab transfers to and from Indore Railway Station with reliable drivers.",
      bulletPoints: [
        "Fixed rates with no surge",
        "Door-to-door pickup",
        "Safe and clean cabs",
        "24x7 availability",
      ],
    },
  },
];


  const togglePackage = (id) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/packages/packagesbanner.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 heading-font">
              Our Packages
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Discover our carefully crafted travel packages
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/Banner5.png"
            alt="Travel Partner Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Center Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Travel Package
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of travel packages designed to meet
              every need and budget. From city rides to luxury experiences, we
              have the perfect solution for your journey.
            </p>
          </div>

          {/* Packages Grid - Use flex with wrap instead of grid for independent heights */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="w-full md:w-[calc(33.333%-16px)] min-w-[300px] flex-shrink-0"
              >
                <div
                  className={`relative p-5 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    expandedPackage === pkg.id ? 'h-auto' : 'h-auto'
                  }`}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="/assets/CardBgBanner.png"
                      alt="Travel Partner Banner"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>

                  {/* Package Image - Fixed display */}
                  <div className="relative z-10 w-full h-46 md:h-52 bg-white">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Package Content */}
                  <div className="relative z-10 py-4 md:py-6">
                    {/* Package Title and Dropdown Button */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white text-left">
                          {pkg.title}
                        </h3>
                        <p className="text-white text-sm md:text-sm mt-1 text-left">
                          {pkg.description}
                        </p>
                      </div>
                      {/* <button
                        onClick={() => togglePackage(pkg.id)}
                        className="ml-2 p-1 md:p-2 cursor-pointer text-white transition-colors duration-200 flex-shrink-0"
                      >
                        {expandedPackage === pkg.id ? (
                          <ChevronUp className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
                        ) : (
                          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
                        )}
                      </button> */}
                    </div>
                    {/* Price */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-left">
                        <p className="text-sm md:text-base font-semibold text-white">
                          Price
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm md:text-base font-bold text-white">
                          {pkg.price}
                        </p>
                      </div>
                    </div>

                    {/* Destinations Section - Only show when this card is expanded */}
                    {expandedPackage === pkg.id && (
                      <div className="overflow-hidden animate-slideDown mb-4">
                        <div className="mt-3 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <h4 className="text-sm md:text-base font-bold text-gray-800 mb-3">
                            Popular Destinations:
                          </h4>
                          <div className="space-y-2">
                            {pkg.destinations.map((destination, index) => (
                              <div
                                key={index}
                                className="flex items-center text-xs md:text-sm text-gray-600 bg-white px-3 py-2 rounded border"
                              >
                                <span className="text-green-500 mr-2">📍</span>
                                {destination}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons - Fixed position */}
                    <div className="mt-4">
                      <div className="flex flex-row gap-6">
                        <Link href="/book-cab" className="flex-1 bg-[#FDD700] hover:scale-105 text-black py-2  font-semibold text-center transition-all duration-200 text-md cursor-pointer">
                          Book Now
                        </Link>
                        <Link href="tel:+917772075970" className="flex-1 bg-transparent border-2 border-[#FDD700] text-[#FDD700] hover:text-black text-center hover:bg-[#FFD700] py-2 hover:scale-105 font-semibold transition-all duration-200 text-md cursor-pointer">
                          Call Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              * All packages include basic insurance. Additional charges may
              apply for extra services.
            </p>
          </div>
        </div>
      </section>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}