"use client";
import Link from 'next/link';
import { FaCar, FaPlane, FaHotel, FaUmbrellaBeach, FaUserFriends, FaBriefcase } from 'react-icons/fa';
import { allServices } from './servicesData';

const OurServices = () => {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'briefcase':
        return <FaBriefcase className="text-white text-lg" />;
      case 'plane':
        return <FaPlane className="text-white text-lg" />;
      case 'car':
        return <FaCar className="text-white text-lg" />;
      case 'umbrella-beach':
        return <FaUmbrellaBeach className="text-white text-lg" />;
      case 'hotel':
        return <FaHotel className="text-white text-lg" />;
      case 'user-friends':
        return <FaUserFriends className="text-white text-lg" />;
      default:
        return <FaCar className="text-white text-lg" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/services/servicesbanner.png"
            alt="Our Services Banner - Jmb tour and travels"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 heading-font">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Premium transportation services by Jmb tour and travels for all your travel needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/Banner5.png"
            alt="Jai Maa Baglamukhi Tour And Travels Services Background"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Jai Maa Baglamukhi Tour And Travels Premium Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of transportation services designed to meet all your travel requirements with comfort and reliability across Madhya Pradesh.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allServices.map((service) => (
              <Link 
                key={service.id} 
                href={`/our-services/${service.link}`}
                className="group relative block overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-52 md:h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Jai Maa Baglamukhi Tour And Travels`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2" />
                  
                  {/* Service Info at Bottom */}
                </div>
                  <div className="bottom-0 bg-[#FDD700] left-0 right-0 p-2 text-black">
                    <h3 className="text-xl md:text-2xl  text-center font-bold mb-1 transition-colors">
                      {service.title}
                    </h3>
                  </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              * All Jmb tour and travels services include professional drivers, well-maintained vehicles, and 24/7 customer support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;