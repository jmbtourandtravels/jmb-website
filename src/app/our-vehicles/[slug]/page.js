import Head from 'next/head';
import { FaCheckCircle, FaCar, FaClock } from 'react-icons/fa';
import { getCarBySlug, getAllCars } from '../fleetsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// --- 1. Sidebar Booking/Price Card Component ---
const BookingCard = ({ car }) => (
  <div className="relative text-white p-6 rounded-lg shadow-2xl w-full">
    <div className="absolute inset-0 w-full h-full">
      <img
        src="/assets/CardBgBanner.png"
        alt="Travel Partner Banner"
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
    </div>
    <div className='relative z-10'>
      <h2 className="text-2xl md:text-3xl font-bold mb-1 text-center md:text-left">{car.name}</h2>
      <p className="text-white mb-6 text-sm text-center md:text-left">{car.brand}</p>

      <div className="space-y-3 mb-8 text-base md:text-lg border-b border-gray-100 pb-4">
<div className="flex justify-between items-center">
          <span className="text-white text-sm md:text-base">Charges / Km</span>
          <span className="font-bold">₹{car.additionalChargePerKm}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white text-sm md:text-base">Per Day Charges</span>
          <span className="font-bold">₹{car.startingPrice}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-white text-sm md:text-base">Passengers Seat</span>
          <span className="font-bold">{car.passengers} Seat</span>
        </div>
      </div>

<Link href="/book-cab"> 
      <button className="w-full cursor-pointer bg-[#FDD700] text-black font-bold py-3 uppercase tracking-wider transition duration-300 flex items-center justify-center text-sm md:text-base">
        <FaClock className="mr-2" /> BOOK NOW
      </button></Link>
    </div>
  </div>
);

const EmergencyCard = () => (
  <div className="relative p-6 rounded-lg h-96 shadow-lg w-full mt-6 overflow-hidden bg-white border border-gray-200">
    <div className="absolute inset-0 w-full h-full">
      <img
        src="/assets/FleetsCardBg2.png"
        alt="Travel Partner Banner"
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
    </div>

    <div className="relative z-10 h-full flex flex-col justify-between items-center p-2 md:p-4">
      <div className="text-center w-full pt-2">
        <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg">
          Need Any Emergency Cab Service?
        </h3>
      </div>

      <div className="flex-1 flex items-center justify-center w-full py-2 md:py-4">
        <img
          src="https://bracketweb.com/cityridewp/wp-content/uploads/2025/04/taxi-sidebar-contact-car.png"
          alt="Emergency Taxi"
          className="w-48 md:w-64 h-32 md:h-40 object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="text-center w-full">
        <div className="text-black p-2 md:p-4 inline-block">
          <p className="text-2xl font-extrabold tracking-tight">
            +91 77720 75970
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. Feature Item Component ---
const FeatureItem = ({ title, content1, content2 }) => (
  <div className="w-full sm:w-1/2 p-2 md:p-3">
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-2">
      <div className="flex items-center space-x-2">
        <FaCheckCircle className="text-yellow-500 text-lg flex-shrink-0" />
        <h4 className="font-bold text-base md:text-lg">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{content1}</p>
      {content2 && <p className="text-gray-600 text-sm md:text-base mt-1 leading-relaxed">{content2}</p>}
    </div>
  </div>
);

// --- Main Page Component ---
const CarDetail = ({ params }) => {
  const car = getCarBySlug(params.slug);

  // If car not found, show 404
  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/PagesBanner.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 heading-font">
              {car.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
              Your trusted travel partner with years of excellence in transportation services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="container mx-auto px-4 sm:px-6 py-8 md:py-16 lg:py-28 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:w-2/3">
            {/* A. Hero Image Section */}
            <div className="relative mb-6 md:mb-8 overflow-hidden text-center md:text-left">
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              <div className="p-0 pt-4 border-b-2 border-black text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{car.name}</h1>
                <p className="text-gray-500 text-lg md:text-xl mb-4 md:mb-6">{car.brand}</p>
              </div>
            </div>

            {/* B. Description Section */}
            <div className="mb-6 md:mb-8 text-center md:text-left">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {car.description}
              </p>
            </div>

            {/* C. Special Features Section */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl  text-center md:text-left font-bold mb-4 border-b pb-2">Special Features</h2>
              <div className="flex flex-wrap -mx-2 justify-center sm:justify-start">
                {car.features.map((feature, index) => {
                  const [title, ...contentParts] = feature.split(' - ');
                  const content = contentParts.join(' - ');
                  return (
                    <FeatureItem
                      key={index}
                      title={title}
                      content1={content}
                      content2=""
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Cards/Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="text-center md:text-left">
              <BookingCard car={car} />
            </div>
            <div className="text-center md:text-left">
              <EmergencyCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Generate static params for all cars
export async function generateStaticParams() {
  const cars = getAllCars();

  return cars.map((car) => ({
    slug: car.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const car = getCarBySlug(params.slug);

  if (!car) {
    return {
      title: 'Car Not Found',
    };
  }

  return {
    title: `${car.name} - ${car.brand} | Our Fleets`,
    description: car.description.substring(0, 160),
  };
}

export default CarDetail;