
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Main navigation links
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services', dropdown: true },
  { name: 'Packages', href: '/our-packages' },
  { name: 'Our Vehicles', href: '/our-vehicles' },
  { name: 'Pricing', href: '/our-pricing' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
];

// Dropdown links for Services
const SERVICE_DROPDOWN_LINKS = [
  { name: 'All Services', href: '/our-services' },
  { name: 'Corporate Cab Service', href: '/our-services/corporate-cab-services' },
  { name: 'Airport Cab Service', href: '/our-services/airport-cab-services' },
  { name: 'Indore to Ujjain', href: '/our-services/indore-to-ujjain' },
  { name: 'Indore to Omkareshwar', href: '/our-services/indore-to-omkareshwar' },
  { name: 'Indore to Maheshwar', href: '/our-services/indore-to-maheshwar' },
  { name: 'Indore to Mandav', href: '/our-services/indore-to-mandav' },
  { name: 'Indore to Bhopal', href: '/our-services/indore-to-bhopal' },
  { name: 'Ujjain to Indore', href: '/our-services/ujjain-to-indore' },
  { name: 'Omkareshwar to Indore', href: '/our-services/omkareshwar-to-indore' },
  { name: 'Mandav to Indore', href: '/our-services/mandav-to-indore' },
  { name: 'Bhopal to Indore', href: '/our-services/bhopal-to-indore' },
];

// Helper component for the Phone and Book Button section (Right Div)
const ContactCTA = () => (
  <div className="flex items-center justify-end h-full px-4 sm:px-6 lg:px-8 w-full lg:w-auto">
    {/* Phone Number Section */}
    <a href="tel:+917772075970" className="flex items-center space-x-2 text-white transition-colors hover:text-[#FFD700]">
      <svg
        className="w-5 h-5 text-[#FFD700] flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.74 21 3 13.26 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.25 1.02l-2.2 2.2z" />
      </svg>
      <span className="text-lg font-extrabold tracking-tight hidden lg:inline-block">+91 77720 75970</span>
      <span className="text-lg font-extrabold tracking-tight lg:hidden">+91 77720 75970</span>
    </a>

    {/* Book Now Button Section */}
    <Link href="/book-cab">
    <button
      onClick={() => console.log('Book Now Clicked')}
      className="ml-4 lg:ml-6 py-2 lg:py-3 px-4 lg:px-6 cursor-pointer text-sm font-bold uppercase rounded-md transition duration-300 ease-in-out transform hover:scale-105"
      style={{
        backgroundColor: '#FFD700',
        color: '#141414',
        boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.75)',
        border: '1px solid #141414'
      }}
    >
      <svg
        className="inline-block w-4 h-4 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 12l.62-1.87c.21-.62.79-1.04 1.44-1.04h10.88c.65 0 1.23.42 1.44 1.04L19 12H5z" />
      </svg>
      <span className="hidden sm:inline">Book a Taxi</span>
      <span className="sm:hidden">Book</span>
    </button>
    </Link>
  </div>
);

// Logo Component
const Logo = () => (
  <div className="flex items-center flex-shrink-0 ml-2 lg:ml-0">
    <Link href="/" className="flex items-center">
      {/* Replace this with your actual logo image path */}
      <div className="relative w-48 h-12 sm:w-56 sm:h-14 lg:w-60 lg:h-16">
        <Link
        href="/"
         className="text-xl font-bold flex items-center pt-4"
>
  <span className="text-yellow-500">JMB</span>
  <span className="text-[#141414] ml-1">Tours & Travels</span>
</Link>

      </div>
    </Link>
  </div>
);

// Mobile Logo Component (for mobile menu)
const MobileLogo = () => (
  <div className="flex items-center flex-shrink-0 ml-2">
    <Link href="/" className="flex items-center">
      <div className="relative w-40 h-10 sm:w-48 sm:h-12">
        <Image
          src="/assets/logo.png" // Replace with your logo path
          alt="JMB Tour And Travels Logo"
          fill
          className="object-contain object-left"
          priority
          sizes="(max-width: 640px) 160px, 192px"
        />
      </div>
    </Link>
  </div>
);

// Main Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const darkSectionStyle = {
    backgroundColor: '#141414',
    backgroundImage: `repeating-linear-gradient(
      -45deg,
      #1f1f1f,
      #1f1f1f 2px,
      #141414 2px,
      #141414 4px
    )`,
  };

  const handleLinkClick = (href) => {
    console.log(`Navigating to ${href}`);
    closeMenu();
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className="shadow-xl sticky top-0 z-50 font-sans bg-white">
      {/* Top Yellow Stripe */}
      <div className="w-full h-2 bg-[#FFD700]"></div>

      <div className="flex flex-col lg:flex-row w-full min-h-20">
        {/* LEFT DIV: Logo & Navigation Links - Responsive width */}
        <div className="w-full lg:w-3/4 bg-white flex items-center justify-between px-4 sm:px-6 lg:pl-12 lg:pr-8 relative py-4 lg:py-0">
          {/* Logo Section */}
          <Logo />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-medium h-full">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.dropdown && setIsServicesDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setIsServicesDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="px-2 xl:px-3 py-2 text-gray-700 uppercase tracking-wider transition duration-150 ease-in-out hover:text-[#FFD700] hover:border-b-4 hover:border-[#FFD700] h-full flex items-center text-xs xl:text-sm"
                  onClick={(e) => {
                    if (link.dropdown) e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.name}
                  {link.dropdown && (
                    <span className="ml-1">
                      <svg className={`w-3 h-3 transition-transform duration-200 ${isServicesDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  )}
                </a>

                {/* Services Dropdown Panel (Desktop) */}
                {link.dropdown && isServicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-0 w-56 xl:w-64 bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden z-20"
                  >
                    <div className="p-2">
                      {SERVICE_DROPDOWN_LINKS.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#FFD700] hover:text-[#141414] rounded-md transition-colors"
                          onClick={() => handleLinkClick(subLink.href)}
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button - Only show menu icon on mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-[#141414] hover:text-[#FFD700] focus:outline-none menu-button"
            aria-label="Open Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* RIGHT DIV: Phone & CTA Button - Hidden on mobile, show on desktop */}
        <div
          className="hidden lg:flex lg:w-1/4 h-20"
          style={darkSectionStyle}
        >
          <ContactCTA />
        </div>
      </div>

      {/* MOBILE MENU (Sliding Panel from Left) */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[100] overflow-y-auto mobile-menu ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-100 bg-white sticky top-0">
          <MobileLogo />
          <button
            onClick={closeMenu}
            className="text-gray-900 hover:text-red-500 focus:outline-none"
            aria-label="Close Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 flex flex-col space-y-2">
          {NAV_LINKS.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={toggleMobileServices}
                    className="w-full text-center py-4 text-xl font-bold text-gray-800 uppercase rounded-lg hover:bg-[#FFD700] hover:text-[#141414] transition-colors flex items-center justify-center"
                  >
                    {link.name}
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                        isMobileServicesOpen ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown for Services - Centered with equal gaps */}
                  {isMobileServicesOpen && (
                    <div className="mt-2 space-y-2 px-4 bg-gray-50 rounded-lg p-3 mx-2">
                      {SERVICE_DROPDOWN_LINKS.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="block text-center py-3 px-4 text-lg text-gray-700 rounded-lg hover:bg-[#FFD700] hover:text-[#141414] transition-colors border-b border-gray-200 last:border-b-0"
                          onClick={() => handleLinkClick(subLink.href)}
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="block text-center py-4 text-xl font-bold text-gray-800 uppercase rounded-lg hover:bg-[#FFD700] hover:text-[#141414] transition-colors"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}

          <div className="p-4 mt-6 border-t pb-8 border-gray-100 rounded-xl"
        style={darkSectionStyle}>
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-white mb-2">Need a ride?</p>
            <a
              href="tel:+917772075970"
              className="inline-flex items-center justify-center text-xl font-bold text-[#FFD700] hover:text-[#141414] hover:bg-[#FFD700] rounded-lg transition-colors px-6 py-3 border-2 border-[#FFD700] w-full max-w-xs"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.74 21 3 13.26 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.25 1.02l-2.2 2.2z" />
              </svg>
              +91 77720 75970
            </a>
          </div>
          <button
            onClick={() => handleLinkClick('/book-cab')}
            className="w-full py-4 text-lg font-bold uppercase rounded-lg transition duration-300 ease-in-out transform bg-[#FFD700] text-black hover:bg-gray-800 hover:scale-105 max-w-xs mx-auto block"
            style={{
              boxShadow: '4px 4px 0px 0px #141414',
              border: '2px solid #141414'
            }}
          >
            <svg
              className="inline-block w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 12l.62-1.87c.21-.62.79-1.04 1.44-1.04h10.88c.65 0 1.23.42 1.44 1.04L19 12H5z" />
            </svg>
            BOOK A TAXI
          </button>
        </div>
        </nav>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-[90] lg:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;