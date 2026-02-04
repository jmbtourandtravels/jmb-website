// // components/BannerSection.jsx
// 'use client'
// import { useState, useEffect } from 'react'

// export default function BannerSection() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <>
//       {/* This section will be placed behind the navbar */}
//       <section className="relative w-full h-screen  md:max-h-[800px] overflow-hidden" id="banner">
//         {/* Banner Background Image - This extends behind navbar */}
//         <div className="absolute inset-0 w-full h-full">
//           <img 
//             src="/assets/HeroBanner.png" 
//             alt="Travel Partner Banner"
//             className="w-full h-full object-cover object-center"
//             loading="eager"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-wrap items-center">
//           <div className="w-full lg:w-1/2">
//             <div className={`text-center lg:text-left space-y-6 transition-all duration-700 transform ${
//               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}>
              
//               {/* Subheading - Best Cab Service in Town */}
//               <div className="inline-block">
//                 <span className="text-white text-sm sm:text-base font-semibold tracking-wider uppercase bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
//                   🚗 Best Cab Service in Town
//                 </span>
//               </div>

//               {/* Main Heading - Book your cab from anywhere today */}
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//                 Book Your Cab From{' '}
//                 <span className="text-[#FFD700]">Anywhere</span>{' '}
//                 Today
//               </h1>

//               {/* Description */}
//               <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 font-light">
//                 Experience premium cab services with reliable drivers, comfortable rides, and affordable prices. Your journey, our responsibility.
//               </p>

//               {/* CTA Button - Services */}
//               <div className="pt-4">
//                 <button className="group relative bg-[#FFD700] text-[#141414] font-bold cursor-pointer py-2 md:py-3 px-4 md:px-5 rounded-lg text-sm md:text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-400">
//                   {/* Button Shadow Effect */}
//                   <div className="absolute -inset-1 bg-[#FFD700]/50 rounded-lg blur-sm group-hover:blur-md transition duration-300 group-hover:scale-105"></div>
                  
//                   {/* Button Content */}
//                   <div className="relative flex items-center justify-center space-x-2">
//                     <span>Our Services</span>
//                     <svg 
//                       className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                     </svg>
//                   </div>
//                 </button>
//               </div>

//               {/* Additional Features */}
//               <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-6">
//                 <div className="flex items-center space-x-2 text-white/80">
//                   <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <span className="text-sm sm:text-base">24/7 Availability</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-white/80">
//                   <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <span className="text-sm sm:text-base">Safe & Secure</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-white/80">
//                   <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <span className="text-sm sm:text-base">Affordable Prices</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Image/Content - Hidden on mobile, shown on desktop */}
//           <div className="block lg:w-1/2">
//             <div className={`relative h-full flex items-center justify-center transition-all duration-1000 delay-300 ${
//               isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
//             }`}>
//               {/* Right Side Image Container */}
//               <div className="relative w-full max-w-2xl">
//                 {/* Main Image with Floating Effect */}
//                 <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
//                   <img 
//                     src="/assets/HeroImage.png" 
//                     alt="Luxury Cab - Travel Partner"
//                     className="w-full h-auto object-contain drop-shadow-2xl"
//                     loading="eager"
//                   />
//                 </div>
                
//                 {/* Floating Elements for Visual Interest */}
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700]/20 rounded-full blur-xl animate-pulse"></div>
//                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                
//                 {/* Decorative Circles */}
//                 <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-[#FFD700] rounded-full animate-ping"></div>
//                 <div className="absolute bottom-10 -left-4 w-6 h-6 border-2 border-[#FFD700] rounded-full animate-ping delay-700"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//           <div className="animate-bounce">
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//             </svg>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }


// components/BannerSection.jsx
'use client'
import { useState, useEffect } from 'react'
import Link from "next/link";

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {/* This section will be placed behind the navbar */}
      <section className="relative w-full h-screen md:max-h-[850px] overflow-hidden" id="banner">
        {/* Banner Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/home/herobanner.png" 
            alt="Travel Partner Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Section - Centered */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="w-full max-w-4xl text-center">
            <div className={`space-y-6 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              
              {/* Subheading - Best Cab Service in Town */}
              <div className="inline-block">
                <span className="text-white text-xs md:text-sm font-semibold tracking-wider uppercase bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  Trusted Cabs & Taxi Service in Indore
                </span>
              </div>

              {/* Main Heading - Book your cab from anywhere today */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Ride Smart. {' '}
                <span className="text-[#FFD700]">Ride Safe </span>{' '}
                with Travel Partner.
              </h1>

              {/* Description */}
              <p className="text-md sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                Book reliable cabs in Indore for city rides, outstation trips, or airport transfers. Enjoy clean cars, expert drivers, and affordable fares — anytime, anywhere.
              </p>

              {/* CTA Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                {/* Services Button */}
                <Link href="/our-services">
                <button className="group relative bg-[#FFD700] text-[#141414] font-bold cursor-pointer py-2 px-5 rounded-lg text-md uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-400 w-auto">
                  {/* Button Shadow Effect */}
                  <div className="absolute -inset-1 bg-[#FFD700]/50 rounded-lg blur-sm group-hover:blur-md transition duration-300 group-hover:scale-105"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center justify-center space-x-2">
                    <span>Our Services</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </div>
                </button>
                </Link>

                {/* Book Now Button */}
                 <Link href="/book-cab">
                <button className="group relative bg-transparent text-white font-bold cursor-pointer py-2 px-5 rounded-lg text-md uppercase tracking-wider border-2 border-white transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-[#141414] w-auto">
                  {/* Button Content */}
                  <div className="relative flex items-center justify-center space-x-2">
                    <span>Book Now</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                    </svg>
                  </div>
                </button>
</Link>
              </div>

              {/* Additional Features */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-6">
                <div className="flex items-center space-x-2 text-white/80">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base md:text-lg">24/7 Availability</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base md:text-lg">Safe & Secure</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base md:text-lg">Affordable Prices</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}