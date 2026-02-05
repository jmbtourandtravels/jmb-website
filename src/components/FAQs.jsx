'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
  {
    question: "How can I book a cab with Jmb tour and travels?",
    answer:
      "Booking your ride with Jmb tour and travels is quick and easy! Simply visit our website, fill out the booking form, or call our 24/7 support team. Just share your pickup location, destination, and preferred time — we’ll handle the rest.",
  },
  {
    question: "What types of vehicles are available at Jmb tour and travels?",
    answer:
      "Jmb tour and travels offers a diverse fleet including hatchbacks, sedans, SUVs, and premium cars. Every vehicle is clean, air-conditioned, and regularly serviced to ensure a comfortable and safe journey.",
  },
  {
    question: "Are the drivers at Jmb tour and travels verified and experienced?",
    answer:
      "Yes, all our drivers are fully verified, professionally trained, and experienced with Indore city routes as well as nearby destinations like Ujjain, Dewas, and Bhopal. Your safety and comfort are always our top priority.",
  },
  {
    question: "Can I cancel my cab booking?",
    answer:
      "Yes, you can cancel your booking free of charge up to 30 minutes before your scheduled pickup. For later cancellations, a minimal fee may apply depending on the type of booking.",
  },
  {
    question: "Does Jmb tour and travels offer airport transfer services?",
    answer:
      "Absolutely! Jmb tour and travels provides reliable airport pickup and drop services in Indore. Our drivers track flight timings to ensure timely pickups and a stress-free airport experience.",
  },
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#FDD700]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDD700]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#141414]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FDD700]/10 rounded-full border border-[#FDD700]/20 mb-4">
            <span className="text-sm font-semibold text-black tracking-wide">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#FDD700]">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find quick answers to common questions about our cab services, booking process, and policies.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 lg:px-10 cursor-pointer py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#FDD700]/20 focus:ring-offset-2 rounded-2xl"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4 group-hover:text-[#141414] transition-colors duration-200">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 bg-[#FDD700] rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 ${
                  openIndex === index ? 'rotate-180 bg-[#141414]' : ''
                }`}>
                  <ChevronDown 
                    className={`w-4 h-4 lg:w-5 lg:h-5 text-black transition-transform duration-500 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#FDD700] to-transparent mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 lg:mt-16 relative text-center">

<div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/Banner6.png"
          alt="Jmb tour and travels Banner"
          className="w-full h-full object-cover rounded-xl object-center"
          loading="eager"
        />
      </div>

          <div className="relative z-10 rounded-xl p-8 lg:p-10 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3">
              Still have questions?
            </h3>
            <p className="text-black mb-6 text-lg">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-[#141414] text-white px-8 py-2 cursor-pointer rounded-lg font-semibold transition-all text-center duration-300 transform hover:scale-105 shadow-lg">
                Contact Support
              </Link>
              <Link href="tel:+917772075970" className="bg-white hover:bg-[#141414] text-black hover:text-white cursor-pointer px-8 py-2 text-center rounded-lg font-semibold border border-white hover:border-[#141414] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Smooth Animations */}
      <style jsx>{`
        .transition-all {
          transition-property: all;
        }
        
        /* Smooth scroll behavior for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom easing for FAQ animations */
        .faq-enter {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Focus states for accessibility */
        button:focus {
          outline: 2px solid #FDD700;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  )
}