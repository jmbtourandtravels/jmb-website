import { FaCar } from "react-icons/fa";

export default function WhyWeAreDifferent() {
  const stats = [
    {
      number: "1500+",
      label: "Trips Completed",
    },
    {
      number: "15+",
      label: "Years Experience",
    },
    {
      number: "3000+",
      label: "Happy Customers",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top Content Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
          {/* Small Yellow Heading */}
          <div className="mb-4 sm:mb-6 flex justify-center md:justify-start">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-[#FFD700] text-black font-semibold rounded-full text-sm sm:text-base">
              Why We Are Different
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl text-center md:text-start sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 max-w-2xl">
            Where Comfort Meets Every Journey
          </h1>

          {/* Paragraph */}
          <p className="text-sm text-center md:text-start sm:text-base md:text-lg lg:text-xl text-black max-w-2xl leading-relaxed mb-8 sm:mb-12">
            At Travel Partner, we go beyond just cab rides — we create travel experiences. Combining comfort, safety, and reliability, every trip with us is designed to make your journey smooth, enjoyable, and truly memorable.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative">
        {/* Spacer Section */}
        <div className="h-8 sm:h-12 lg:h-16 xl:h-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full items-end">
              {/* Left Side - Image spacer */}
              <div className="relative h-full lg:col-span-8 xl:col-span-9">
                <div className="relative w-full h-6 sm:h-8 lg:h-12 xl:h-16 rounded-t-xl overflow-hidden">
                  <div className="absolute bottom-0 w-full h-1 sm:h-2"></div>
                </div>
              </div>

              {/* Right Side - Stats Card spacer */}
              <div className="relative h-full flex items-end justify-end lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10">
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-full h-6 sm:h-8 lg:h-12 xl:h-16">
                  {/* Spacer content */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Yellow Background with Content */}
        <div className="relative bg-[#FFD700]">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/Banner6.png"
              alt="Travel Partner Banner"
              className="w-full h-full rounded-xl object-cover object-center"
              loading="eager"
            />
          </div>

          <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start -mt-8 sm:-mt-12 lg:-mt-16 xl:-mt-20">
              {/* Left Side - Image */}
              <div className="relative lg:col-span-8 xl:col-span-9">
                <div className="relative w-full -mt-2 sm:-mt-4 lg:-mt-6 xl:-mt-8">
                  <img
                    src="/assets/home/ertiga.png"
                    alt="Taxi Images"
                    className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover mt-16 md:mt-0"
                  />
                </div>
              </div>

              {/* Right Side - Stats Card */}
              <div className="relative flex justify-center lg:justify-end lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10">
                <div className="relative rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl -mt-2 sm:-mt-4 lg:-mt-6 xl:-mt-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-56 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 flex items-center mb-10">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="/assets/CardBgBanner.png"
                      alt="Travel Partner Banner"
                      className="w-full h-full rounded-xl object-cover object-center"
                      loading="eager"
                    />
                  </div>

                  <div className="space-y-4 relative z-10 sm:space-y-6 lg:space-y-8 w-full">
                    {stats.map((stat, index) => {
                      return (
                        <div key={index} className="text-center">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            {stat.number}
                          </h3>
                          <p className="text-gray-300 text-sm sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2">
                            {stat.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
