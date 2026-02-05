"use client";
import { Calendar, Phone, Star, Shield, Clock } from "lucide-react";
import { useState } from "react";
import OurVehicles from "../our-vehicles/page";
import Link from "next/link";

export default function Pricing() {
  const [hoveredVehicle, setHoveredVehicle] = useState(null);

  const pricingData = [
    {
      id: 1,
      vehicleType: "Swift Dzire",
      image: "/assets/our-fleets/dzire.png",
      link: "/our-vehicles/swift-dzire",
      seating: "4+1",
      pricePerKm: "₹11/-",
      perDayCharge: "₹2750/-",
      features: ["AC", "Music System", "Comfortable Seating", "Fuel Efficient"],
    },
    {
      id: 2,
      vehicleType: "Suzuki Ertiga",
      image: "/assets/our-fleets/ertiga.png",
      link: "/our-vehicles/suzuki-ertiga",
      seating: "7+1",
      pricePerKm: "₹13/-",
      perDayCharge: "₹3250/-",
      features: ["AC", "Music System", "Spacious Interior", "Family Friendly"],
    },
    {
      id: 3,
      vehicleType: "Toyota Innova",
      image: "/assets/our-fleets/toyota.png",
      link: "/our-vehicles/toyota-innova",
      seating: "7+1",
      pricePerKm: "₹15/-",
      perDayCharge: "₹3750/-",
      features: [
        "AC",
        "Music System",
        "Premium Comfort",
        "Ample Luggage Space",
      ],
    },
    {
      id: 4,
      vehicleType: "Innova Crysta",
      image: "/assets/our-fleets/innova.png",
      link: "/our-vehicles/innove-crysta",
      seating: "7+1",
      pricePerKm: "₹18/-",
      perDayCharge: "₹4500/-",
      features: [
        "Premium AC",
        "Music System",
        "Luxury Interiors",
        "Spacious Luggage",
      ],
    },
    {
      id: 5,
      vehicleType: "Tavera",
      image: "/assets/our-fleets/tavera.png",
      link: "/our-vehicles/tavera",
      seating: "10+1",
      pricePerKm: "₹13/-",
      perDayCharge: "₹3250/-",
      features: ["AC", "Music System", "Spacious Seating", "Family Trips"],
    },
    {
      id: 6,
      vehicleType: "Toofan",
      image: "/assets/our-fleets/toofan.png",
      link: "/our-vehicles/toofan",
      seating: "11+1",
      pricePerKm: "₹15/-",
      perDayCharge: "₹3750/-",
      features: ["AC", "Music System", "Spacious Interior", "Smooth Handling"],
    },
    {
      id: 7,
      vehicleType: "Tempo Traveller 12",
      image: "/assets/our-fleets/traveller1.png",
      link: "/our-vehicles/tempo-traveller-12",
      seating: "12+1",
      pricePerKm: "₹22/-",
      perDayCharge: "₹5500/-",
      features: [
        "AC",
        "Music System",
        "Individual Seats",
        "Group Travel Friendly",
      ],
    },
    {
      id: 8,
      vehicleType: "Tempo Traveller 17",
      image: "/assets/our-fleets/traveller2.png",
      link: "/our-vehicles/tempo-traveller-17",
      seating: "17+1",
      pricePerKm: "₹25/-",
      perDayCharge: "₹6250/-",
      features: [
        "AC",
        "Music System",
        "Comfortable Seats",
        "Large Group Travel",
      ],
    },
    {
      id: 9,
      vehicleType: "Tempo Traveller 20",
      image: "/assets/our-fleets/traveller3.png",
      link: "/our-vehicles/tempo-traveller-20",
      seating: "20+1",
      pricePerKm: "₹28/-",
      perDayCharge: "₹7000/-",
      features: [
        "AC",
        "Music System",
        "Spacious Interior",
        "Extra Large Group Travel",
      ],
    },
    {
      id: 10,
      vehicleType: "Tempo Traveller 26",
      image: "/assets/our-fleets/traveller4.png",
      link: "/our-vehicles/tempo-traveller-26",
      seating: "26+1",
      pricePerKm: "₹35/-",
      perDayCharge: "₹8750/-",
      features: [
        "AC",
        "Music System",
        "Individual Seating",
        "Extra Large Group Travel",
      ],
    },
    {
      id: 11,
      vehicleType: "Urbania 17",
      image: "/assets/our-fleets/urbania.png",
      link: "/our-vehicles/urbania-17",
      seating: "17+1",
      pricePerKm: "₹35/-",
      perDayCharge: "₹8750/-",
      features: [
        "AC",
        "Music System",
        "Comfortable Seats",
        "Corporate & Group Travel",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/pricing/pricingbanner.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 heading-font">
              Our Pricing
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
              Transparent and competitive pricing for all your travel needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Header Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/Banner5.png"
            alt="Jai Maa Baglamukhi Tour And Travels Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Perfect Ride with Perfect Price
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Choose from our wide range of vehicles at competitive prices
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/book-cab"
              className="w-full sm:w-auto bg-[#FDD700] text-black px-5 py-2 font-semibold text-base sm:text-lg transition-all duration-300 text-center flex items-center justify-center gap-2 sm:gap-3 cursor-pointer transform hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book a Trip
            </Link>
            <Link
              href="https://wa.me/917772075970"
              className="w-full sm:w-auto bg-[#FDD700] text-black px-5 py-2 font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 cursor-pointer text-center transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              View via WhatsApp
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDD700] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Safe & Secure
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Verified drivers and insured vehicles
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDD700] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                24/7 Available
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Round the clock service
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDD700] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Best Price
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Guaranteed competitive rates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/Banner5.png"
            alt="Jai Maa Baglamukhi Tour And Travels Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="relative bg-gradient-to-r from-gray-900 to-black text-white">
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="/assets/FooterBanner.png"
                    alt="Jai Maa Baglamukhi Tour  Banner"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
                <div className="relative z-10 grid grid-cols-4 min-h-[60px]">
                  <div className="p-3 font-semibold text-sm border-r border-gray-600 flex items-center justify-center text-center">
                    Cab Name
                  </div>
                  <div className="p-3 font-semibold text-sm border-r border-gray-600 flex items-center justify-center text-center">
                    Price/KM
                  </div>
                  <div className="p-3 font-semibold text-sm border-r border-gray-600 flex items-center justify-center text-center">
                    Seating
                  </div>
                  <div className="p-3 font-semibold text-sm flex items-center justify-center text-center">
                    Per Day
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div>
                {pricingData.map((vehicle, index) => (
                  <div
                    key={vehicle.id}
                    className={`grid grid-cols-4 min-h-[60px] hover:bg-gray-50 transition-all duration-200 ${
                      index !== pricingData.length - 1
                        ? "border-b border-gray-300"
                        : ""
                    }`}
                  >
                    {/* Vehicle Name Column */}
                    <div className="border-r border-gray-300 flex items-center justify-center p-2">
                      <span className="text-black text-xs font-bold text-center leading-tight">
                        {vehicle.vehicleType}
                      </span>
                    </div>

                    {/* Price Per KM Column */}
                    <div className="border-r border-gray-300 flex items-center justify-center p-2">
                      <span className="text-black text-xs font-bold">
                        {vehicle.pricePerKm}
                      </span>
                    </div>

                    {/* Seating Column */}
                    <div className="border-r border-gray-300 flex items-center justify-center p-2">
                      <span className="text-black text-xs font-bold">
                        {vehicle.seating}
                      </span>
                    </div>

                    {/* Per Day Charge Column */}
                    <div className="flex items-center justify-center p-2">
                      <span className="text-black text-xs font-bold">
                        {vehicle.perDayCharge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Features Info for Mobile */}
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="text-sm font-bold text-gray-900 mb-2 text-center">
                All Cabs Include:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs  text-gray-700">
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-[#FDD700] rounded-full"></div>
                  <span>Cooling AC</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-[#FDD700] rounded-full"></div>
                  <span>Music System</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-[#FDD700] rounded-full"></div>
                  <span>Comfortable Seating</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-[#FDD700] rounded-full"></div>
                  <span>Spacious Interior</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-[#FDD700] rounded-full"></div>
                  <span>Fuel Efficient</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-[#FDD700] rounded-full"></div>
                  <span>Verified Drivers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1024px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Table Header */}
                <div className="relative grid grid-cols-12 bg-gradient-to-r from-gray-900 to-black text-white min-h-[70px]">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="/assets/FooterBanner.png"
                      alt="Jai Maa Baglamukhi Tour And Travels Footer Banner"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>

                  <div className="relative z-10 col-span-3 p-4 font-semibold text-lg border-r border-gray-600 flex items-center justify-center text-center">
                    Vehicle Type
                  </div>
                  <div className="relative z-10 col-span-2 p-4 font-semibold text-lg border-r border-gray-600 flex items-center justify-center text-center">
                    Price/KM
                  </div>
                  <div className="relative z-10 col-span-2 p-4 font-semibold text-lg border-r border-gray-600 flex items-center justify-center text-center">
                    Seating
                  </div>
                  <div className="relative z-10 col-span-2 p-4 font-semibold text-lg border-r border-gray-600 flex items-center justify-center text-center">
                    Per Day
                  </div>
                  <div className="relative z-10 col-span-3 p-4 font-semibold text-lg flex items-center justify-center text-center">
                    Features
                  </div>
                </div>

                {/* Table Body */}
                <div>
                  {pricingData.map((vehicle, index) => (
                    <div
                      key={vehicle.id}
                      className={`grid grid-cols-12 min-h-[200px] hover:bg-gray-50 transition-all duration-200 ${
                        index !== pricingData.length - 1
                          ? "border-b border-gray-400"
                          : ""
                      }`}
                      onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                      onMouseLeave={() => setHoveredVehicle(null)}
                    >
                      {/* Vehicle Type Column */}
                      <div className="col-span-3 border-r border-gray-400 relative group cursor-pointer">
                        <div className="absolute inset-0 w-full h-full">
                          <img
                            src={vehicle.image}
                            alt={vehicle.vehicleType}
                            className="w-full h-[70%] md:h-[90%] object-cover"
                          />
                          <div className="absolute inset-0 flex items-end">
                            <div className="w-full">
                              <h3 className="text-lg font-bold bg-black/80 py-2 text-white text-center">
                                {vehicle.vehicleType}
                              </h3>
                            </div>
                          </div>

                          {hoveredVehicle === vehicle.id && (
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300">
                              <a
                                href={vehicle.link}
                                className="bg-[#FDD700] text-black px-5 py-2 font-semibold text-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
                              >
                                Explore More
                              </a>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Price Per KM Column */}
                      <div className="col-span-2 border-r border-gray-400 flex items-center justify-center">
                        <span className="text-black text-xl font-bold">
                          {vehicle.pricePerKm}
                        </span>
                      </div>

                      {/* Seating Column */}
                      <div className="col-span-2 border-r border-gray-400 flex items-center justify-center">
                        <span className="text-black text-xl font-bold">
                          {vehicle.seating}
                        </span>
                      </div>

                      {/* Per Day Charge Column */}
                      <div className="col-span-2 border-r border-gray-400 flex items-center justify-center">
                        <span className="text-black text-xl font-bold">
                          {vehicle.perDayCharge}
                        </span>
                      </div>

                      {/* Features Column */}
                      <div className="col-span-3 flex items-center justify-center p-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {vehicle.features.map((feature, index) => (
                            <span
                              key={index}
                              className="bg-[#FDD700]/20 text-black px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-gray-600 text-sm sm:text-base">
                * All prices are inclusive of taxes. Additional charges may
                apply for tolls, parking, and night charges. Minimum 250 KMs per
                day. Fuel charges extra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
}
