import React from 'react';

const BookCab = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      

      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Image Banner Section */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            
            <div className="h-64 lg:h-80 w-full">
             
              <img 
                src="https://bracketweb.com/cityridewp/wp-content/uploads/2025/04/service-d-1-1.jpg" // Placeholder path
                alt="Smiling driver ready to take a ride"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* "Book Your Ride Now" Call to Action Bar */}
            <div className="absolute left-0 bottom-0 transform translate-y-1/2">
              {/* This div replicates the specific yellow background bar placement and text */}
              <div className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 text-lg md:text-xl shadow-lg">
                Book Your Ride Now
              </div>
            </div>
            
            {/* Optional: Dark overlay to make the text stand out, though not strictly in the image */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>

          {/* Booking Form Card Section (The light beige card) */}
          <div className="bg-gray-100 p-8 pt-16 rounded-b-lg shadow-lg border-t-4 border-yellow-400 mt-[-10px]">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              {/* Row 1: Pick Up, Drop Off, Passengers, Taxi Type */}

              {/* Pick Up Location */}
              <div>
                <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700 mb-1">
                  Pick Up Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="pickup-location"
                    placeholder="Type Location"
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                  />
                  {/* Location Icon (Placeholder for the 'gps' or 'map-pin' icon) */}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    <i className="fa-solid fa-location-dot"></i> {/* Using Font Awesome icon for demonstration */}
                    📍
                  </span>
                </div>
              </div>

              {/* Drop Off Location */}
              <div>
                <label htmlFor="dropoff-location" className="block text-sm font-medium text-gray-700 mb-1">
                  Drop Off Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="dropoff-location"
                    placeholder="Type Location"
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                  />
                  {/* Location Icon */}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    📍
                  </span>
                </div>
              </div>

              {/* Passengers Dropdown */}
              <div>
                <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                  Passengers
                </label>
                <div className="relative">
                  <select
                    id="passengers"
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                  >
                    <option disabled value="">Passengers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                  {/* Down Arrow Icon */}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 pointer-events-none">
                    &#x25BC;
                  </span>
                </div>
              </div>

              {/* Taxi Type Dropdown */}
              <div>
                <label htmlFor="taxi-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Taxi Type
                </label>
                <div className="relative">
                  <select
                    id="taxi-type"
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                  >
                    <option disabled value="">Choose Taxi</option>
                    <option>Standard</option>
                    <option>Luxury</option>
                    <option>Van</option>
                  </select>
                  {/* Down Arrow Icon */}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 pointer-events-none">
                    &#x25BC;
                  </span>
                </div>
              </div>

              {/* Row 2: Pick Up Date, Select Driver, Book Taxi Now Button */}

              {/* Pick Up Date */}
              <div>
                <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Pick Up Date
                </label>
                <div className="relative">
                  <input
                    type="text" // Using text, but a date-picker component would be better
                    id="pickup-date"
                    placeholder="Select Date"
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                  />
                  {/* Calendar Icon */}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    📅
                  </span>
                </div>
              </div>

              {/* Select Driver */}
              <div>
                <label htmlFor="select-driver" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Driver
                </label>
                <div className="relative">
                  <select
                    id="select-driver"
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                  >
                    <option disabled value="">Select Driver</option>
                    <option>Any Driver</option>
                    <option>Driver A</option>
                    <option>Driver B</option>
                  </select>
                  {/* Driver/User Icon */}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    👤
                  </span>
                </div>
              </div>
              
              {/* Empty space to align the button correctly in the 4-column grid */}
              <div className="hidden md:block"></div> 

              {/* Book Taxi Now Button */}
              <div className="flex items-end justify-start md:justify-end">
                {/* The button is placed below the labels of the other fields */}
                <button
                  type="submit"
                  className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md shadow-md transition duration-150 ease-in-out text-sm flex items-center justify-center space-x-2"
                >
                  {/* Taxi Icon (placeholder) */}
                  <span>🚕</span> 
                  <span>BOOK TAXI NOW</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default BookCab;