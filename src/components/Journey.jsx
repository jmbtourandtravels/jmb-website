"use client";
import { useState } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';

export default function Journey() {
  const [formData, setFormData] = useState({
    fullName: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "",
    vehicleType: "",
    tripType: "one-way",
    phone: "",
    email: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template params for EmailJS
    const templateParams = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      pickup: formData.pickup,
      destination: formData.destination,
      date: formData.date,
      time: formData.time,
      vehicleType: formData.vehicleType,
      passengers: formData.passengers,
      tripType: formData.tripType,
      source: "Journey Section", // To identify where the booking came from
    };

    // Use the same EmailJS credentials from your book cab page
    emailjs
      .send(
        "service_evfvfgf", // Your EmailJS Service ID
        "template_vzgme59", // Your EmailJS Template ID
        templateParams,
        "XKNNeElEOX4ObAgRf" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setShowPopup(true);
          // Reset form after successful submission
          setFormData({
            fullName: "",
            pickup: "",
            destination: "",
            date: "",
            time: "",
            passengers: "",
            vehicleType: "",
            tripType: "one-way",
            phone: "",
            email: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSubmitting(false);
          alert("Something went wrong! Please try again later.");
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const journeySteps = [
    {
      image: "/assets/home/1.png",
      title: "Choose Location",
    },
    {
      image: "/assets/home/2.png",
      title: "Select Vehicle",
    },
    {
      image: "/assets/home/3.png",
      title: "Get Price",
    },
  ];

  const vehicleTypes = [
   "Swift Dzire",
  "Suzuki Ertiga",
  "Toyota Innova",
  "Innova Crysta",
  "Tavera",
  "Toofan",
  "Tempo Traveller 12",
  "Tempo Traveller 17",
  "Tempo Traveller 20",
  "Tempo Traveller 26",
  "Urbania 17",
  ];

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-[#F4F1EA]">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/Banner2.png" 
          alt="Travel Partner Banner"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 lg:p-8 transform animate-scale-in">
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your cab has been booked successfully. Our team will contact you soon for more details and confirmation.
              </p>
              
              <button
                onClick={closePopup}
                className="w-full bg-[#FFD700] text-gray-800 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Mobile Layout - Form First */}
        <div className="lg:hidden space-y-8">
          {/* Booking Form - First on Mobile */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full mx-auto border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Book Your Ride
              </h3>
              <p className="text-gray-600 text-sm">
                Quick & Easy Booking
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                  required
                />
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="Enter pickup address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                  required
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Destination *
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Enter destination address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                  required
                />
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Trip Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-lg cursor-pointer hover:bg-yellow-50 transition-colors">
                    <input
                      type="radio"
                      name="tripType"
                      value="one-way"
                      checked={formData.tripType === "one-way"}
                      onChange={handleChange}
                      className="text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-sm">One Way</span>
                  </label>
                  <label className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-lg cursor-pointer hover:bg-yellow-50 transition-colors">
                    <input
                      type="radio"
                      name="tripType"
                      value="round-trip"
                      checked={formData.tripType === "round-trip"}
                      onChange={handleChange}
                      className="text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-sm">Round Trip</span>
                  </label>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Vehicle Type and Passengers */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Vehicle 
                  </label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                  >
                    <option value="">Select Vehicle</option>
                    {vehicleTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Passengers *
                  </label>
                  <input
                  type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                      placeholder="Number of Passengers"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                  />
                    {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Passenger" : "Passengers"}
                      </option>
                    ))} */}
                  {/* </input> */}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700] py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin h-5 w-5 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Booking...</span>
                    </div>
                  ) : (
                    "Book Now"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Rest of your mobile layout remains the same */}
          {/* Three Cards - Second on Mobile */}
          <div className="flex flex-wrap justify-center gap-6">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center group w-[45%] aspect-square"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-16 h-16 object-cover rounded-full"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <div className="hidden text-yellow-800 font-bold text-sm">
                      {step.title}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-base">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Text Content - Third on Mobile */}
          <div className="text-center px-4">
            <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-black mb-4 leading-tight">
              Book Your Ride in Just a Few Clicks
            </h2>
            <p className="text-gray-600 text-base mb-6 max-w-3xl mx-auto leading-relaxed">
              Find the perfect cab at the best price. Choose your location, select your car type, and get instant fare details. With Travel Partner, booking your cab in Indore is fast, simple, and reliable.
            </p>
            <Link href="https://wa.me/917772075970">
              <button className="bg-[#FFD700] text-gray-800 px-6 py-2 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer">
                Book via whatsapp
              </button>
            </Link>
          </div>

          {/* Cab Image - Fourth on Mobile */}
          <div className="px-4">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/assets/home/toyota.png"
                  alt="Premium Cab - Travel Partner"
                  className="w-full object-contain transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <div className="hidden w-full h-48 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-yellow-500 mx-auto mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 12l.62-1.87c.21-.62.79-1.04 1.44-1.04h10.88c.65 0 1.23.42 1.44 1.04L19 12H5z" />
                    </svg>
                    <p className="text-yellow-700 font-medium">
                      Premium Cab
                    </p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Updated with EmailJS integration */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Side - Three Cards */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-12">
            {/* Three Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center group w-[45%] sm:w-[30%] aspect-square"
                >
                  {/* Image Container */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-20 h-20 lg:w-28 lg:h-28 object-cover rounded-full"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "block";
                        }}
                      />
                      <div className="hidden text-yellow-800 font-bold text-sm lg:text-base">
                        {step.title}
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg lg:text-xl">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Text Content Below Cards */}
            <div className="text-center lg:text-left px-4">
              <div className="w-20 h-1 bg-[#FFD700] mx-auto lg:mx-0 mb-4 lg:mb-6 rounded-full"></div>
              <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4 lg:mb-6 leading-tight">
                Book Your Ride in Just a Few Clicks
              </h2>
              <p className="text-gray-600 text-base lg:text-lg mb-6 lg:mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Find the perfect cab at the best price. Choose your location, select your car type, and get instant fare details. With Travel Partner, booking your cab in Indore is fast, simple, and reliable.
              </p>
              <Link href="https://wa.me/917772075970">
                <button className="bg-[#FFD700] text-gray-800 px-6 py-2 rounded-lg font-semibold text-base lg:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer">
                  Book via whatsapp
                </button>
              </Link>
            </div>

            {/* Cab Image Section - Added after text content */}
            <div className="px-4">
              <div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                  {/* Cab Image */}
                  <div className="lg:w-full flex justify-center">
                    <div className="relative">
                      <img
                        src="/assets/home/toyota.png"
                        alt="Premium Cab - Travel Partner"
                        className="w-full md:h-96 object-contain transform hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "block";
                        }}
                      />
                      {/* Fallback SVG if image not found */}
                      <div className="hidden w-full max-w-xs lg:max-w-md h-48 bg-yellow-100 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            className="w-16 h-16 text-yellow-500 mx-auto mb-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 12l.62-1.87c.21-.62.79-1.04 1.44-1.04h10.88c.65 0 1.23.42 1.44 1.04L19 12H5z" />
                          </svg>
                          <p className="text-yellow-700 font-medium">
                            Premium Cab
                          </p>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 w-full max-w-md lg:max-w-full mx-auto lg:mx-0 border border-gray-100">
            <div className="h-full flex flex-col">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                  Book Your Ride
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Quick & Easy Booking
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                    required
                  />
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Enter pickup address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                    required
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                    Destination *
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Enter destination address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                    required
                  />
                </div>

                {/* Trip Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                    Trip Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-lg cursor-pointer hover:bg-yellow-50 transition-colors">
                      <input
                        type="radio"
                        name="tripType"
                        value="one-way"
                        checked={formData.tripType === "one-way"}
                        onChange={handleChange}
                        className="text-yellow-500 focus:ring-yellow-500"
                      />
                      <span className="text-sm lg:text-base">One Way</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-lg cursor-pointer hover:bg-yellow-50 transition-colors">
                      <input
                        type="radio"
                        name="tripType"
                        value="round-trip"
                        checked={formData.tripType === "round-trip"}
                        onChange={handleChange}
                        className="text-yellow-500 focus:ring-yellow-500"
                      />
                      <span className="text-sm lg:text-base">Round Trip</span>
                    </label>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                      Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                      required
                    />
                  </div>
                </div>

                {/* Vehicle Type and Passengers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                    >
                      <option value="">Select Vehicle</option>
                      {vehicleTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                      Passengers *
                    </label>
                    <input
                    type="number"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      placeholder="Number of Passengers"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                    />
                      {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Passenger" : "Passengers"}
                        </option>
                      ))} */}
                    {/* </select> */}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 text-sm lg:text-base"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700] py-2 rounded-lg font-semibold text-base lg:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <svg
                          className="animate-spin h-5 w-5 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Booking...</span>
                      </div>
                    ) : (
                      "Book Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation for popup */}
      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </section>
  );
}