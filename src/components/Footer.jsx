"use client";
import Link from "next/link";

import React, { useState, useEffect, useCallback } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowUp,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

// Mock Data
const quickLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/our-services" },
  { name: "Our Blogs", href: "/blogs" },
  { name: "Our Vehicles", href: "/our-vehicles" },
  { name: "Our Packages", href: "/our-packages" },
  { name: "Contact Us", href: "/contact-us" },
];

const recentPosts = [
  {
    date: "28 Oct, 25",
    title: "Top 5 Benefits of Using Cab Services in Indore",
    imagePlaceholder: "/assets/blogs/banner1.jpg",
    href: "/blogs/benefits-cab-services-indore-daily-commute",
  },
  {
    date: "28 Oct, 25",
    title: "How to Book the Best Cab Service in Indore",
    imagePlaceholder: "/assets/blogs/banner2.jpg",
    href: "/blogs/book-best-cab-service-indore-guide",
  },
];

// Social Links Data
const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/travelpartnerr001",
    label: "Instagram",
    color: "hover:text-pink-500 hover:border-pink-500",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/travelpartner",
    label: "Facebook",
    color: "hover:text-blue-500 hover:border-blue-500",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/917772075970",
    label: "WhatsApp",
    color: "hover:text-green-500 hover:border-green-500",
  },
  {
    icon: Phone,
    href: "tel:+917772075970",
    label: "Call",
    color: "hover:text-blue-500 hover:border-blue-500",
  },
];

// Helper component for Link Items
const LinkItem = ({ href, name }) => (
  <a
    href={href}
    className="flex items-center text-gray-400 hover:text-[#FDD700] transition duration-200 group"
  >
    <ChevronRight className="w-4 h-4 mr-2 text-[#FDD700] transition-transform duration-300 group-hover:translate-x-1" />
    {name}
  </a>
);

// Helper component for Post Items
const PostItem = ({ date, title, imagePlaceholder, href }) => (
  <a href={href} className="flex space-x-3 mb-4 last:mb-0 group">
    {/* Image Placeholder */}
    <div
      className="flex-shrink-0 w-16 h-16 bg-gray-700 rounded-md overflow-hidden transition duration-300 group-hover:scale-105"
      style={{
        backgroundImage: `url(${imagePlaceholder})`,
        backgroundSize: "cover",
      }}
    >
      {/* You would use a Next.js Image component here with a real source */}
    </div>

    <div className="flex flex-col">
      <p className="text-xs text-[#FDD700]">{date}</p>
      <p className="text-gray-200 text-sm font-medium leading-tight group-hover:text-[#FDD700] transition duration-200">
        {title}
      </p>
    </div>
  </a>
);

// Logo Component for Footer
const FooterLogo = () => (
  <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
    <div className="relative w-40 h-40 sm:w-30 sm:h-30 lg:w-40 lg:h-40">
     <Image
        src="/assets/logoNew2.png"
        alt="Travel Partner Logo"
        fill
        className="object-contain object-center md:object-left"
        priority
        // sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 240px"
      />
    </div>
    <p className="text-gray-400 text-sm leading-relaxed max-w-xs -mt-4  md:-mt-6">
      JMB Tour And Travels — Indore's trusted cab service for city rides, outstation trips, and airport transfers. Safe, affordable, and available 24/7.
    </p>

    {/* Updated Social Icons */}
    <div className="flex justify-center items-center space-x-3 pt-2">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 rounded-lg transition duration-200 ${social.color}`}
          aria-label={social.label}
        >
          <social.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Function to handle the scroll event and show/hide the button
  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  // Function to scroll to the top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  return (
    <>
      <footer className="text-gray-200 font-sans relative">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/FooterBanner.png"
            alt="JMB Tour And Travels Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 border-b border-gray-800/50">
            {/* Column 1: Logo and Description */}
            <FooterLogo />

            {/* Column 2 & 3: Quick Links & Recent Posts */}
            <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 lg:gap-12">
              {/* Column 2: Quick Links */}
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-xl font-bold text-white mb-5 relative pb-2 w-full text-center sm:text-left">
                  Quick Links
                  <span className="block absolute bottom-0 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-10 h-0.5 bg-[#FDD700]"></span>
                </h3>
                <div className="space-y-3 w-full flex flex-col items-center sm:items-start">
                  {quickLinks.map((link, index) => (
                    <LinkItem key={index} {...link} />
                  ))}
                </div>
              </div>

              {/* Column 3: Recent Posts */}
              <div className="flex flex-col items-center sm:items-start px-10 md:px-0">
                <h3 className="text-xl font-bold text-white mb-5 relative pb-2 w-full text-center sm:text-left">
                  Recent Posts
                  <span className="block absolute bottom-0 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-10 h-0.5 bg-[#FDD700]"></span>
                </h3>
                <div className="space-y-4 w-full flex flex-col items-center sm:items-start">
                  {recentPosts.map((post, index) => (
                    <PostItem key={index} {...post} />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 4: Office Address & Subscribe Form */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <h3 className="text-xl font-bold text-white mb-5 relative pb-2 w-full text-center md:text-left">
                Office Address
                <span className="block absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-10 h-0.5 bg-[#FDD700]"></span>
              </h3>

              {/* Contact Info */}
              <div className="space-y-3 w-full flex flex-col items-center md:items-start">
                <a
                  href="mailto:info.jmbtourandtravels@gmail.com"
                  className="flex items-center text-gray-400 hover:text-[#FDD700] transition duration-200 justify-center md:justify-start"
                >
                  <Mail className="w-5 h-5 mr-3 text-[#FDD700] flex-shrink-0" />
                  info.jmbtourandtravels@gmail.com
                </a>
                <a
                  href="tel:+917772075970"
                  className="flex items-center text-gray-400 hover:text-[#FDD700] transition duration-200 justify-center md:justify-start"
                >
                  <Phone className="w-5 h-5 mr-3 text-[#FDD700] flex-shrink-0" />
                  +91 77720-75970
                </a>
                <div className="flex items-start text-gray-400 pt-1 justify-center md:justify-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#FDD700] flex-shrink-0 mt-0.5" />
                  <span className="text-center md:text-left">
                    170/5 gangabag colony, Indore
                  </span>
                </div>
              </div>

              {/* Subscribe Form */}
              <form className="space-y-3 mt-4 w-full max-w-xs">
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 bg-white rounded-l-lg text-black placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-200 text-sm"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="p-3 bg-[#FDD700] text-stone-950 rounded-r-lg hover:bg-yellow-400 transition duration-200 flex-shrink-0"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Checkbox */}
                <label className="flex items-center text-gray-400 text-sm cursor-pointer justify-center md:justify-start">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-[#FDD700] bg-gray-800 border-gray-600 rounded mr-2 focus:ring-yellow-500"
                    required
                  />
                  I agree to the{" "}
                  <a href="#" className="underline hover:text-[#FDD700] ml-1">
                    Privacy Policy
                  </a>
                </label>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="relative z-10 bg-[#FDD700] py-4 text-stone-950 font-medium">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
            <p className="text-center md:text-left">
                © Copyright {new Date().getFullYear()} By JMB Tour And Travels
            </p>
            <div className="flex space-x-6 justify-center">
              <span className="text-center">
                Designed & Developed by Astex AI |
                <a
                  href="https://astexai.in/"
                  className="hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;