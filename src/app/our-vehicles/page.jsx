// src/app/our-fleets/page.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { getAllCars } from "./fleetsData";

export default function OurVehicles() {
  const [activeFilter, setActiveFilter] = useState("all");
  const vehicles = getAllCars();

  const filteredVehicles =
    activeFilter === "all"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.type === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/our-fleets/vehiclesbanner.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 heading-font">
              Our Vehicles
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Discover our premium fleet of well-maintained vehicles
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16">
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
              Find the Right Vehicle for Your Trip
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse fleet of vehicles to match your travel
              needs and budget. From economical rides to luxury experiences, we
              have the perfect vehicle for every journey.
            </p>
          </div>

          {/* Filter Buttons - Centered */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1 h-fit">
              {["all", "prime", "exclusive"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 text-md font-semibold transition-all duration-200 cursor-pointer ${
                    activeFilter === filter
                      ? "bg-[#141414] text-white shadow-md cursor-pointer"
                      : "text-gray-700 hover:bg-gray-200 cursor-pointer"
                  }`}
                >
                  {filter === "all"
                    ? "All Vehicles"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicles Grid - 2x2 on ALL devices including mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="relative p-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* <div className="absolute inset-0 w-full h-full">
                  <img
                    src="/assets/Banner2.png"
                    alt="Travel Partner Banner"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div> */}

                {/* Vehicle Image */}
                <div className="relative z-10 w-full h-52 px-2 pt-2">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain md:object-cover lg:object-cover"
                  />
                </div>

                {/* Vehicle Name */}
                <div className="relative z-10 text-center py-3 border-b border-gray-400">
                  <Link href={`/our-vehicles/${vehicle.slug}`}>
                    <h3 className="text-2xl font-bold text-black hover:text-yellow-300 cursor-pointer transition-colors">
                      {vehicle.name}
                    </h3>
                  </Link>
                  <span className="text-sm text-black capitalize">
                    {vehicle.type}
                  </span>
                </div>

                {/* Rate and Price - SAME LINE, left and right aligned */}
                <div className="relative z-10 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-left">
                      <p className="text-md font-semibold text-black">
                        {vehicle.ratePerKm}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-md font-bold text-black">
                        {vehicle.price}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-6">
                    <Link href={`/our-vehicles/${vehicle.slug}`} className="flex-1">
                      <button className="w-full bg-[#FDD700] text-black hover:scale-105 py-2 font-semibold transition-all duration-200 text-md cursor-pointer">
                        View Details
                      </button>
                    </Link>
                    {/* <Link  className="flex-1"> */}
                    <Link href="tel:+917772075970" className="flex-1 bg-transparent text-[#141414] hover:bg-[#FDD700] hover:text-black border border-[#141414] hover:border-[#FDD700] hover:scale-105 py-2 font-semibold transition-all duration-200 text-center text-md cursor-pointer">
                      Call Now
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No vehicles found for the selected category.
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              * All prices include taxes. Additional charges may apply for
              tolls, parking, and night travel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}