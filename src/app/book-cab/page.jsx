"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Users,
  Car,
  ChevronDown,
  User,
  ArrowRightLeft,
} from "lucide-react";
import emailjs from '@emailjs/browser';

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  pickup: "",
  destination: "",
  date: "",
  time: "",
  vehicleType: "",
  passengers: "",
  tripType: "one-way", // 'one-way' or 'round-trip'
};

// Custom Input Component to match the image's aesthetic
const FormInput = ({
  id,
  label,
  type,
  icon: Icon,
  value,
  onChange,
  placeholder,
  options,
}) => {
  const isSelect = options && options.length > 0;

  // Style class to match the light beige background area
  const inputBgClass = "bg-white shadow-inner";

  const inputElement = isSelect ? (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`w-full py-3 pl-12 pr-4 text-gray-700 border-none focus:ring-2 focus:ring-yellow-500 rounded-lg ${inputBgClass} appearance-none`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
        <ChevronDown className="h-5 w-5" />
      </div>
    </div>
  ) : (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full py-3 pl-12 pr-4 text-gray-700 border-none focus:ring-2 focus:ring-yellow-500 rounded-lg ${inputBgClass} placeholder-gray-400`}
    />
  );

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-semibold text-gray-800">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
          {Icon && <Icon className="h-5 w-5" />}
        </div>
        {inputElement}
      </div>
    </div>
  );
};

const VehicleOptions = [
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

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
  };

  emailjs
    .send(
      "service_evfvfgf", // ✅ Your EmailJS Service ID
      "template_vzgme59", // ✅ Your EmailJS Template ID
      templateParams,
      "XKNNeElEOX4ObAgRf" // ✅ Your Public Key
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        setShowPopup(true);
        setFormData(initialFormData);
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

  // Placeholder image URL for the driver on the left
  const driverImageUrl =
    "https://bracketweb.com/cityridewp/wp-content/uploads/2025/04/taxi-booking-1-1.jpg";

  return (
    <div className="min-h-screen">
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
                className="w-full bg-[#FDD700] text-gray-800 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

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
              Book Your Cab
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Discover our carefully crafted travel packages
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-gray-100 font-sans">
        {/* Main Container Card */}
        <div className="relative max-w-6xl w-full mx-auto px-6 py-10 bg-[#f8f4ed] shadow-2xl overflow-hidden lg:grid lg:grid-cols-3">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/contact/FormBgImg.png"
              alt="Jai Maa Baglamukhi Tour And Travels Banner"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Left Side: Image Section (Yellow Background) */}
          <div
            className="relative z-10 col-span-1 min-h-[300px] lg:min-h-full bg-cover bg-center hidden lg:block"
            style={{
              backgroundImage: `url(${driverImageUrl})`,
              backgroundPosition: "center 40%", // Adjusts the focus of the placeholder image
            }}
          ></div>

          {/* Right Side: Form Section (Light Textured Background) */}
          <div className="relative z-10 col-span-2 px-6 md:px-12 lg:px-16">
            {/* Title Area */}
            <div className="mb-8 flex items-center">
              {/* The small vertical yellow line next to the title */}
              <div className="w-1 h-8 bg-[#FDD700] mr-3"></div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                Book your cab now!
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 1: Contact Details & Trip Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  id="fullName"
                  label="Full Name"
                  type="text"
                  icon={User}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                <FormInput
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  icon={Phone}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                />
                <FormInput
                  id="email"
                  label="Email Address"
                  type="email"
                  icon={Mail}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

                {/* Trip Type Toggle/Radio */}
                <div>
                  <label className="text-sm font-semibold text-gray-800 mb-1 block">
                    Trip Type
                  </label>
                  <div className="flex cursor-pointer bg-white rounded-lg shadow-inner p-1">
                    {["one-way", "round-trip"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormData((p) => ({ ...p, tripType: type }))
                        }
                        className={`flex-1 py-2 text-sm cursor-pointer font-medium rounded-md transition-all duration-200 capitalize flex items-center justify-center ${
                          formData.tripType === type
                            ? "bg-[#FDD700] text-black shadow-md"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {type.replace("-", " ")}
                        <ArrowRightLeft className="h-4 w-4 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2: Pick Up & Destination (Matching image layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                <FormInput
                  id="pickup"
                  label="Pick Up Location"
                  type="text"
                  icon={MapPin}
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="Type Location"
                />
                <FormInput
                  id="destination"
                  label="Drop Off Location"
                  type="text"
                  icon={MapPin}
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Type Location"
                />
              </div>

              {/* Section 3: Passengers & Vehicle Type (Matching image layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  id="passengers"
                  label="Passengers"
                  type="number"
                  icon={Users}
                  value={formData.passengers}
                  onChange={handleChange}
                  placeholder="Number of Passengers"
                  min="1"
                />
                <FormInput
                  id="vehicleType"
                  label="Vehicle"
                  type="select"
                  icon={Car}
                  value={formData.vehicleType}
                  onChange={handleChange}
                  placeholder="Choose Vehicle"
                  options={VehicleOptions}
                />
              </div>

              {/* Section 4: Date & Time (Matching image layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  id="date"
                  label="Pick Up Date"
                  type="date"
                  icon={Calendar}
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Select Date"
                  min={new Date().toISOString().split('T')[0]}
                />
                <FormInput
                  id="time"
                  label="Pick Up Time"
                  type="time"
                  icon={Clock}
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="Select Time"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-8 w-full md:w-auto px-8 py-2 bg-[#FDD700] text-black font-bold uppercase cursor-pointer shadow-lg transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <Car className="h-5 w-5" />
                    <span>Book Taxi Now</span>
                  </>
                )}
              </button>
            </form>
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
    </div>
  );
}