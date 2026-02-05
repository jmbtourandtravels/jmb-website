'use client';
import React from "react";
import { servicesData, allServices } from '../servicesData';
import { useParams } from 'next/navigation';

const ServiceLink = ({ title, isActive = false, slug }) => (
  <a
    href={`/our-services/${slug}`}
    className={`relative flex justify-between items-center py-3 px-4 cursor-pointer border-l-4 overflow-hidden group ${
      isActive
        ? "bg-[#FFD700] border-[#FDD700] text-black font-semibold"
        : "bg-[#F4F1EA] border-[#FDD700] text-gray-700"
    }`}
  >
    <div className="absolute inset-0 bg-[#FDD700] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
    <span className="text-xl text-black relative z-10 group-hover:text-black transition-colors duration-300">
      {title}
    </span>
    <span className="font-bold text-lg relative z-10 group-hover:text-black transition-colors duration-300">
      &raquo;
    </span>
  </a>
);

// Component to properly render formatted content
const FormattedContent = ({ content }) => {
  return (
    <div className="text-black mb-6 text-sm sm:text-base leading-relaxed">
      <div className="prose prose-lg max-w-none">
        <div 
          className="formatted-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

const DetailedServices = ({ params }) => {
  const { slug } = useParams ? useParams() : params;
  const serviceSlug = Array.isArray(slug) ? slug[0] : slug;
  const formattedSlug = serviceSlug?.toLowerCase().replace(/\s+/g, '-');
  
  const serviceData = servicesData[formattedSlug];

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <p className="text-gray-600">The service you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/about/aboutbanner.png"
            alt={`${serviceData.title} - Jmb tour and travels`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 heading-font">
              {serviceData.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
              {serviceData.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <div className="shadow-lg rounded-lg overflow-hidden">
              {allServices.map((service, index) => (
                <ServiceLink 
                  key={service.id}
                  title={service.title}
                  isActive={service.title === serviceData.title}
                  slug={service.title.toLowerCase().replace(/\s+/g, '-')}
                />
              ))}
            </div>

            {/* Driver Image & Contact Card */}
            <div className="mt-6 md:mt-8 shadow-lg overflow-hidden relative">
              <img
                src="/assets/CardBg.png"
                alt="Jai Maa Baglamukhi Tour And Travels Driver"
                className="w-full h-96 object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 pb-6 p-4">
                <div className="text-center text-black">
                  <p className="text-lg font-semibold mb-1">
                    MON-SUN 8:00AM - 9:00PM
                  </p>
                  <p className="text-2xl md:text-3xl font-bold">
                    +91 77720 75970
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2">
            {/* Top Full Width Image */}
            <div className="w-full mb-6 md:mb-8">
              <img
                src={serviceData.image}
                alt={`${serviceData.title} - Jai Maa Baglamukhi Tour And Travels`}
                className="w-full h-48 sm:h-64 md:h-98 object-cover rounded-lg"
              />
            </div>

            {/* Main Content */}
            <h2 className="text-xl text-center md:text-start sm:text-2xl md:text-3xl font-bold mb-6 text-black">
              {serviceData.title}
            </h2>
            
            {/* Formatted Content */}
            <FormattedContent content={serviceData.detailedDescription} />

            {/* Features Card */}
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 mt-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="w-full md:w-1/2 space-y-4">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center md:justify-start text-sm sm:text-base text-gray-700">
                      <span className="text-yellow-500 mr-3 text-xl font-extrabold">
                        &#10003;
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src="/assets/services/detailedservicesfeatured.jpg"
                    alt="Jai Maa Baglamukhi Tour And Travels Service Features"
                    className="w-full max-w-md h-56 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <p className="text-gray-500 text-center md:text-start text-sm md:text-md mt-8 leading-relaxed">
             Jai Maa Baglamukhi Tour And Travels continually redefines transportation experiences by combining comfort, safety, and reliability. We strategically optimize every journey, ensuring timely and seamless travel for corporate, airport, intercity, and pilgrimage needs. With professional drivers, well-maintained vehicles, and customer-centric services, we create a stress-free and efficient travel experience for every passenger, every time.
            </p>
          </div>
        </div>
      </div>

      {/* Add comprehensive CSS for proper formatting */}
      <style jsx global>{`
        .formatted-content {
          text-align: left;
        }
        
        .formatted-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          color: #0f1216ff;
          line-height: 1.3;
        }
        
        .formatted-content h3:first-child {
          margin-top: 0;
        }
        
        .formatted-content p {
          margin-bottom: 1.25rem;
          line-height: 1.7;
          color: #4b5563;
          font-size: 1rem;
        }
        
        .formatted-content ul,
        .formatted-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
          padding-left: 0;
        }
        
        .formatted-content li {
          margin-bottom: 0.75rem;
          line-height: 1.6;
          color: #4b5563;
          font-size: 1rem;
        }
        
        .formatted-content ul li {
          list-style-type: disc;
        }
        
        .formatted-content ol li {
          list-style-type: decimal;
        }
        
        .formatted-content br {
          display: block;
          margin-bottom: 0.5rem;
          content: "";
        }
        
        .formatted-content strong {
          font-weight: bold;
          color: #374151;
        }
        
        .formatted-content em {
          font-style: italic;
        }
        
        /* Specific styling for service points and lists */
        .formatted-content p:has(> br) {
          margin-bottom: 1rem;
        }
        
        .formatted-content p br {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default DetailedServices;