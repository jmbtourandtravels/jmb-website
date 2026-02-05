// src/app/about-us/page.jsx
"use client";
import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Clock,
  Users,
  Car,
  MapPin,
  Phone,
  Calendar,
  Star,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Crossing from "@/components/crossing";
import Link from "next/link";


export default function AboutUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ... testimonials array remains the same ...
  const testimonials = [
  {
    id: 1,
    name: "Rohit Verma",
    designation: "Corporate Client",
    review:
      "Jmb tour and travels is our go-to for all corporate travel needs in Indore. The cabs are always on time, clean, and the drivers are extremely professional. Highly reliable service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Joshi",
    designation: "Airport Traveler",
    review:
      "I often use Jai Maa Baglamukhi Tour And Travels for airport transfers. The driver tracked my flight and was right on time at the pickup point. Smooth and stress-free experience every time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Karan Patel",
    designation: "City Commuter",
    review:
      "Best cab service in Indore! Booking is quick, fares are fair, and the cars are spotless. Perfect for my daily city rides and short business trips.",
    rating: 5,
  },
  {
    id: 4,
    name: "Pooja Mehra",
    designation: "Tourist",
    review:
      "I booked a cab for my Indore to Ujjain trip and had a wonderful experience. The driver was polite and knew all the routes and sightseeing spots. Truly dependable service.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sandeep Yadav",
    designation: "Frequent Traveler",
    review:
      "Jmb tour and travels never disappoints — clean cars, safe drivers, and always on time. Definitely the best option for anyone looking for a trustworthy taxi in Indore.",
    rating: 4,
  },
  {
    id: 6,
    name: "Divya Sharma",
    designation: "Corporate Employee",
    review:
      "We regularly book Jai Maa Baglamukhi Tour And Travels for office drop and outstation meetings. The punctuality and comfort they provide are unmatched. A truly professional service.",
    rating: 5,
  },
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    {
      number: "15+",
      title: "Years of Experience",
      description: "Decade of trusted service excellence",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "100+",
      title: "Cities Covered",
      description: "Expanding our network nationwide",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      number: "50+",
      title: "Premium Cars",
      description: "Luxury fleet for every occasion",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      number: "3K+",
      title: "Happy Customers",
      description: "Satisfied clients and counting",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section - Fixed positioning */}
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/about/aboutbanner.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 heading-font">
              About Us
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Your trusted Jai Maa Baglamukhi Tour And Travels
            </p>
          </div>
        </div>
      </section>
      {/* <Crossing /> */}

      {/* About Section with Image - Fixed image size */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/Banner5.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  About Jai Maa Baglamukhi Tour And Travels
                </h2>
                <div className="w-20 h-1 bg-[#FDD700]"></div>
                <p className="text-black font-semibold text-lg">
                  Your Trusted Cab & Travel Companion in Indore
                </p>
                <p className="text-black text-center md:text-start text-lg leading-relaxed">
                 Welcome to Jai Maa Baglamukhi Tour And Travels, Indore’s most reliable cab and travel service dedicated to making every journey safe, comfortable, and memorable. We provide a wide range of travel solutions — from local city rides and airport transfers to outstation trips and corporate travel.
                </p>
                <p className="text-black text-center md:text-start text-lg leading-relaxed">
                  Our mission is simple: to redefine convenience and trust in every ride. With a fleet of clean, well-maintained cars and experienced, verified drivers, Jai Maa Baglamukhi Tour And Travels ensures timely pickups, transparent pricing, and 24/7 availability. Whether you’re traveling within Indore or exploring nearby destinations like Ujjain, Dewas, or Bhopal, we make your journey seamless from start to finish.
                </p>
                <p className="text-black text-center md:text-start text-lg leading-relaxed">
                  At Jai Maa Baglamukhi Tour And Travels, we don’t just take you places — we make sure you enjoy the journey.
                </p>
              </div>
            </div>

            {/* Right Image - Properly sized to match content height */}
            <div className="relative h-full flex items-center">
              <img
                src="/assets/about/aboutus.png"
                alt="About Jai Maa Baglamukhi Tour And Travels"
                className="w-full h-[300px] md:h-[450px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section with Background Image */}
      <section className="relative py-8 md:py-20 px-4 sm:px-6 lg:px-8 min-h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/about/CtaBanner.png"
            alt="Call to Action Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
          <div className="ml-auto w-full lg:w-1/2 text-center md:text-start space-y-2 md:space-y-6 text-black">
            <h2 className="text-3xl  font-bold pt-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-black">
              Book your ride today and experience the difference with Jai Maa Baglamukhi Tour And Travels. Professional service, comfortable vehicles, and memorable
              journeys await you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-cab" className="bg-[#141414] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer">
                <Calendar className="w-5 h-5" />
                Book a Trip
              </Link>
              <Link href="https://wa.me/917772075970" className="bg-transparent text-black hover:text-white hover:bg-[#141414] border-2 border-[#141414] px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer">
                <Phone className="w-5 h-5" />
                Book via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <Crossing /> */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Banner */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/Banner9.png"
            alt="Why Choose Us Background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* 1st Row - Subheading */}
          <div className="text-center mb-4">
            <h3 className="inline-block px-4 py-2 bg-[#FDD700] text-black font-semibold rounded-full text-sm sm:text-base">
              Why Choose Us
            </h3>
          </div>

          {/* 2nd Row - Main Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Driven by Trust, <span className="text-[#FDD700]">Powered by Comfort</span>
            </h2>
          </div>

          {/* 3rd Row - Three Columns with Flex */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
            {/* 1st Column - Points */}
            <div className="flex-1 max-w-md lg:max-w-none">
              <div className="space-y-6 sm:space-y-8">
                {/* Point 1 */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Safe & Secure
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    Your safety is our top priority. We maintain the highest
                    standards of vehicle safety and driver verification to
                    ensure a secure journey every time.
                  </p>
                </div>

                {/* Horizontal Line */}
                <div className="w-20 h-0.5 bg-[#FDD700] mx-auto lg:mx-0"></div>

                {/* Point 2 */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    24/7 Availability
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    Whether it's early morning or late night, our services are
                    available round the clock to cater to your travel needs
                    anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd Column - Vertical Image */}
            <div className="flex-1 flex justify-center max-w-sm lg:max-w-md xl:max-w-lg">
              <div className="relative w-full h-96 sm:h-80 lg:h-96 xl:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/about/AboutWhyImg.png"
                  alt="Luxury Car Interior"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* 3rd Column - Points */}
            <div className="flex-1 max-w-md lg:max-w-none">
              <div className="space-y-6 sm:space-y-8">

                {/* Point 2 */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl  font-bold text-white mb-3">
                    Comfort & Luxury
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    Travel in style with our premium fleet of well-maintained
                    vehicles equipped with modern amenities for ultimate
                    comfort.
                  </p>
                </div>

                {/* Horizontal Line */}
                <div className="w-20 h-0.5 bg-[#FDD700] mx-auto lg:mx-0"></div>

                {/* Point 3 */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl  font-bold text-white mb-3">
                    Easy Booking
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    Simple and hassle-free booking process through multiple
                    channels. Book your ride in just a few clicks or a single
                    call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Crossing />

      {/* Testimonials Section - Responsive (1 card on mobile, 3 cards on desktop) */}
      <section className="py-20  relative px-4 sm:px-6 lg:px-8 bg-secondary-dark">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/Banner2.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-center text-xl mb-4 text-black">
            {" "}
            // Our Testimonials //
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
            Peoples talk about our services
          </h2>

          {/* Container with responsive width */}
          <div className="w-full overflow-hidden">
            <div className="flex justify-center">
              <div className="w-full max-w-[1200px] overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{
                    x: `-${currentTestimonial * (isMobile ? 100 : 33.333)}%`,
                  }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.8,
                  }}
                >
                  {/* Create enough duplicates for seamless continuous scrolling */}
                  {[...testimonials, ...testimonials, ...testimonials].map(
                    (testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${index}`}
                        className={`flex-shrink-0 ${
                          isMobile ? "w-full px-4" : "w-1/3 px-3"
                        }`}
                      >
                        <div className="bg-white relative rounded-2xl p-6 md:p-8 shadow-lg h-full mx-auto max-w-md md:max-w-none">
                          <div className="absolute inset-0 w-full h-full">
                            <img
                              src="/assets/CardBgBanner.png"
                              alt="About Us Banner"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="relative z-10 text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FDD700] rounded-full mx-auto mb-4 flex items-center justify-center text-black text-xl md:text-2xl font-bold">
                              {testimonial.name.charAt(0)}
                            </div>

                            <div className="flex justify-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 md:w-5 md:h-5 ${
                                    i < testimonial.rating
                                      ? "text-[#FDD700] fill-current"
                                      : "text-gray-400"
                                  }`}
                                />
                              ))}
                            </div>

                            <p className="text-gray-100 italic mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                              "{testimonial.review}"
                            </p>

                            <div>
                              <h4 className="font-semibold text-white text-base md:text-lg">
                                {testimonial.name}
                              </h4>
                              <p className="text-[#FDD700] text-xs md:text-sm">
                                {testimonial.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Dots Indicator - Responsive */}
          <div className="flex justify-center mt-8 space-x-2">
            {[
              ...Array(Math.ceil(testimonials.length / (isMobile ? 1 : 3))),
            ].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index ===
                  currentTestimonial %
                    Math.ceil(testimonials.length / (isMobile ? 1 : 3))
                    ? "bg-yellow-500 scale-125"
                    : "bg-black/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Fixed Alignment and Padding */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/FooterBanner.png"
            alt="Jai Maa Baglamukhi Tour And Travels Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
        {/* Background with Gradient Overlay */}
        <div className="relative z-10 inset-0 w-full h-full">
          {/* <div className="absolute inset-0 bg-[#141414]"></div> */}
          {/* Animated Background Elements */}
          {/* <div className="absolute top-10 left-10 w-72 h-72 bg-[#FDD700]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FDD700]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FDD700]/10 rounded-full blur-3xl animate-pulse delay-500"></div> */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#FDD700]">Journey</span> in Numbers
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by thousands, serving across multiple cities with
              excellence and dedication
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#FDD700]/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Glow Effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#FDD700]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FDD700] to-yellow-400 opacity-0 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-[2px] bg-gray-900 mt-2 rounded-2xl"></div>
                </div>

                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FDD700] to-yellow-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FDD700]/25">
                    <div className="text-black">{stat.icon}</div>
                  </div>

                  {/* Number */}
                  <div className="mb-3">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FDD700] to-yellow-400 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#FDD700] transition-colors duration-300">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FDD700] to-yellow-400 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                </div>

                {/* Floating Animation */}
                {/* <div className="absolute top-2 right-2 w-4 h-4 bg-[#FDD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#FDD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce delay-200"></div> */}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 lg:mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 hover:border-[#FDD700]/30 transition-all duration-300">
              <span className="text-white text-lg font-semibold">
                Ready to experience premium service?
              </span>
              <Link href="/book-cab" className="bg-gradient-to-r cursor-pointer from-[#FDD700] to-yellow-500 hover:from-yellow-500 hover:to-[#FDD700] text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Your Cab Now
              </Link>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
        `}</style>
      </section>
    </div>
  );
}
