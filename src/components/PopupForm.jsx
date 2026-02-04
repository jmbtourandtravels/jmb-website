
"use client";
import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { usePopup } from "../context/PopupContext";
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
  X,
} from "lucide-react";

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
  tripType: "one-way",
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

// Custom Input Component
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

  const inputElement = isSelect ? (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 appearance-none"
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
      className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
    />
  );

  return (
    <div className="flex flex-col space-y-2">
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

export const PopupForm = () => {
  const {
    showBookingPopup,
    showSuccessPopup,
    closeBookingPopup,
    showSuccessMessage,
    closeSuccessPopup,
    isLoaded,
  } = usePopup();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle popup visibility
  // useEffect(() => {
  //   if (showBookingPopup || showSuccessPopup) {
  //     document.body.style.overflow = "hidden";
  //     setTimeout(() => setIsVisible(true), 50);
  //   } else {
  //     document.body.style.overflow = "unset";
  //     setIsVisible(false);
  //   }
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [showBookingPopup, showSuccessPopup]);
useEffect(() => {
  if (showBookingPopup || showSuccessPopup) {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "hidden";
    setTimeout(() => setIsVisible(true), 50);
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.overflowY = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    setIsVisible(false);
  }

  return () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.overflowY = "";
    document.body.style.width = "";
  };
}, [showBookingPopup, showSuccessPopup]);





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Send form via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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

      await emailjs.send(
        "service_evfvfgf", // your service ID
        "template_vzgme59", // your template ID
        templateParams,
        "XKNNeElEOX4ObAgRf" // your public key
      );

      showSuccessMessage();
      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong while sending your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeBookingPopup();
    }
  };

  if (!showBookingPopup && !showSuccessPopup && !isLoaded) return null;

  return (
    <>
      {/* Booking Form Popup */}
      {showBookingPopup && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
            isVisible ? "bg-white/10 backdrop-blur-sm" : "bg-opacity-0 backdrop-blur-0"
          }`}
          onClick={handleBackdropClick}
        >
          <div
            className={`relative bg-white rounded-2xl z-50 overflow-y-scroll shadow-2xl w-full max-w-4xl transition-all duration-500 transform ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            style={{ maxHeight: "95vh" }}
          >
            <button
              onClick={closeBookingPopup}
              className="absolute top-4 cursor-pointer right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex h-full">
              <div className="w-full p-6 lg:p-8 overflow-y-auto">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-8 bg-[#FDD700] mr-3"></div>
                    <h2 className="text-2xl font-extrabold text-gray-800">
                      Book Your Cab Now!
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Fill in the details below to book your ride instantly
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      id="fullName"
                      label="Full Name *"
                      type="text"
                      icon={User}
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                    <FormInput
                      id="phone"
                      label="Phone Number *"
                      type="tel"
                      icon={Phone}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      id="email"
                      label="Email Address"
                      type="email"
                      icon={Mail}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                    <div>
                      <label className="text-sm font-semibold text-gray-800 mb-2 block">
                        Trip Type *
                      </label>
                      <div className="flex bg-gray-50 rounded-lg p-1">
                        {["one-way", "round-trip"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData((p) => ({ ...p, tripType: type }))
                            }
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 capitalize ${
                              formData.tripType === type
                                ? "bg-[#FDD700] text-black shadow-md"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            {type.replace("-", " ")}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <FormInput
                    id="pickup"
                    label="Pick Up Location *"
                    type="text"
                    icon={MapPin}
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    required
                  />
                  <FormInput
                    id="destination"
                    label="Drop Off Location *"
                    type="text"
                    icon={MapPin}
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Enter destination"
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      id="passengers"
                      label="Passengers *"
                      type="number"
                      icon={Users}
                      value={formData.passengers}
                      onChange={handleChange}
                      placeholder="Number of passengers"
                      min="1"
                      required
                    />
                    <FormInput
                      id="vehicleType"
                      label="Vehicle Type *"
                      type="select"
                      icon={Car}
                      value={formData.vehicleType}
                      onChange={handleChange}
                      placeholder="Choose vehicle type"
                      options={VehicleOptions}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      id="date"
                      label="Pick Up Date *"
                      type="date"
                      icon={Calendar}
                      value={formData.date}
                      onChange={handleChange}
                      placeholder="Select date"
                      required
                    />
                    <FormInput
                      id="time"
                      label="Pick Up Time *"
                      type="time"
                      icon={Clock}
                      value={formData.time}
                      onChange={handleChange}
                      placeholder="Select time"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer py-3 bg-[#FDD700] text-black font-bold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 flex items-center justify-center space-x-2 mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
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
                        <span>Book Cab Now</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
            isVisible ? "bg-white/10 backdrop-blur-sm" : "bg-opacity-0 backdrop-blur-0"
          }`}
          onClick={closeSuccessPopup}
        >
          <div
            className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 lg:p-8 transition-all duration-500 transform ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="text-center">
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
                Your cab has been booked successfully. Our team will contact you
                soon for confirmation.
              </p>
              <button
                onClick={closeSuccessPopup}
                className="w-full bg-[#FDD700] text-gray-800 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
