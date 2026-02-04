'use client';

import Link from "next/link";


export default function About() {
  return (
    <section className="relative bg-primary-white overflow-hidden w-full flex items-center">
      {/* Full width container */}
      <div className="flex items-center w-full">
        <div className="relative w-full flex items-center justify-center">
          {/* Split Background - Full width */}
          <div className="absolute inset-0 flex flex-col md:flex-row w-full min-h-[90vh]">
            {/* Yellow Background - Full width on mobile, 30% on desktop */}
            <div className="w-full h-[20vh] relative md:w-[30%] md:h-auto bg-[#FFD700]">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="/assets/AboutBanner.png"
                  alt="Travel Partner Banner"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
            {/* White Background - Full width on mobile, 70% on desktop */}
            <div className="w-full relative flex-1 bg-[#FFD700] md:bg-[#fff4d8]">
              <div className="absolute flex md:hidden inset-0 w-full h-full">
                <img
                  src="/assets/AboutBanner.png"
                  alt="Travel Partner Banner"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Content Container with max-w-7xl */}
          <div className="relative z-10 w-full max-w-7xl mx-auto py-16 lg:py-20">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black heading-font">
                Indore’s Trusted Cab Service
              </h2>
            </div>

            {/* Content Grid - Reduced gap */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 px-4 lg:px-8">
              {/* Left Side - Image */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl md:mt-6 h-[300px] lg:h-[450px] xl:h-[500px]">
                  {/* Image Container */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    {/* Image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src="/assets/home/aboutus2.png"
                        alt="About Travel Partner"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="relative flex items-center">
                <div className="w-full flex flex-col justify-center items-center md:items-start">
                  {/* Three Paragraphs */}
                  <div className="space-y-4 text-center md:text-start  lg:space-y-5 mb-6 lg:mb-8">
                    <p className="text-black text-base lg:text-lg xl:text-xl leading-relaxed">
                     At Travel Partner, we’re more than just a cab service — we’re your trusted travel companion across Indore and beyond. Our mission is to make every journey safe, comfortable, and hassle-free. From daily city rides and airport transfers to corporate travel and outstation trips, we provide reliable taxi solutions for every need.
                    </p>

                    <p className="text-black text-base lg:text-lg xl:text-xl leading-relaxed">
                       With a fleet of well-maintained cars, verified drivers, and 24/7 customer support, Travel Partner ensures you reach your destination on time, every time. Experience smooth rides, transparent pricing, and true Indori hospitality with us.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link href="/about-us">
                  <button className="group bg-[#141414] md:bg-[#FFD700] text-white md:text-black px-4 lg:px-5 py-2 lg:py-2 rounded-lg font-semibold text-base lg:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 lg:space-x-3 cursor-pointer">
                    <span>View More</span>
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
