// "use client";
// import { useState } from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMdTime } from "react-icons/io";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     question: "",
//   });

//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission here
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const contactDetails = [
//     {
//       icon: <FaPhoneAlt />,
//       title: "Call Us",
//       details: ["+91 77720-75970"],
//     },
//     {
//       icon: <MdOutlineEmail />,
//       title: "Email Us",
//       details: ["info.travellpartner@gmail.com"],
//     },
//     {
//       icon: <FaLocationDot />,
//       title: "Visit Us",
//       details: ["170/5 gangabag colony, Indore - 452015"],
//     },
//     {
//       icon: <IoMdTime />,
//       title: "Working Hours",
//       details: ["Mon - Sun: 24/7", "Customer Support"],
//     },
//   ];

//   return (
//     <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16">
//       {/* Success Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 lg:p-8 transform animate-scale-in">
//             <div className="text-center">
//               {/* Success Icon */}
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg 
//                   className="w-8 h-8 text-green-500" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     strokeWidth={2} 
//                     d="M5 13l4 4L19 7" 
//                   />
//                 </svg>
//               </div>
              
//               <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
//                 Message Sent!
//               </h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Thank you for contacting us! Your message has been sent successfully. Our team will get back to you soon.
//               </p>
              
//               <button
//                 onClick={closePopup}
//                 className="w-full bg-[#FFD700] text-gray-800 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src="/assets/Banner5.png"
//           alt="Jmb tour and travels Banner"
//           className="w-full h-full object-cover object-center"
//           loading="eager"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Side - Header and Contact Details */}
//           <div>
//             {/* Header Section */}
//             <div className="mb-12">
//               <div className="mb-4 flex justify-center md:justify-start">
//                 <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full">
//                   Contact Us
//                 </span>
//               </div>
//               <h2 className="text-3xl md:text-4xl text-center md:text-start lg:text-5xl font-bold text-black mb-4">
//                 Get in Touch with Jmb tour and travels
//               </h2>
//               <p className="text-black text-center md:text-start text-lg max-w-2xl">
//                 Have questions or need assistance? We're here to help! Reach out
//                 to us through any of the following channels and our team will
//                 get back to you promptly.
//               </p>
//             </div>

//             {/* Contact Details Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {contactDetails.map((contact, index) => (
//                 <div
//                   key={index}
//                   className="rounded-xl relative p-6 shadow-lg border border-gray-200 text-center flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                 >
//                   <div className="absolute inset-0 w-full h-full">
//                     <img
//                       src="/assets/CardBgBanner.png"
//                       alt="JMB Tour And Travels Banner"
//                       className="w-full h-full object-cover object-center"
//                       loading="eager"
//                     />
//                   </div>

//                   {/* Contact Icon */}
//                   <div className="relative z-10 w-12 h-12 bg-secondary-dark rounded-full flex items-center justify-center mb-4">
//                     <span className="text-2xl text-white">  {contact.icon} </span>
//                   </div>

//                   {/* Contact Details */}
//                   <h4 className="text-lg relative z-10  font-bold text-white mb-2">
//                     {contact.title}
//                   </h4>
//                   <div className="relative z-10  space-y-1">
//                     {contact.details.map((detail, idx) => (
//                       <p key={idx} className="text-white text-sm">
//                         {detail}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="relative rounded-2xl shadow-2xl p-8 h-full flex flex-col">
//             <div className="absolute inset-0 w-full h-full">
//               <img
//                 src="/assets/CardBgBanner.png"
//                 alt="Jmb tour and travels Banner"
//                 className="w-full h-full object-cover object-center"
//                 loading="eager"
//               />
//             </div>

//             <h3 className="text-3xl relative z-10 font-bold text-primary-white mb-6">
//               Send us a Message
//             </h3>

//             <form
//               onSubmit={handleSubmit}
//               className="relative z-10 space-y-6 flex-1 flex flex-col"
//             >
//               {/* Full Name */}
//               <div>
//                 <label className="block text-primary-white font-medium mb-2 text-base ">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                   className="w-full px-4 py-3 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600  focus:border-transparent outline-none transition-all duration-200 text-base"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-primary-white font-medium mb-2 text-base">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email address"
//                   className="w-full px-4 py-3 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600  focus:border-transparent outline-none transition-all duration-200 text-base"
//                   required
//                 />
//               </div>

//               {/* Phone Number */}
//               <div>
//                 <label className="block text-primary-white font-medium mb-2 text-base">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   className="w-full px-4 py-3 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition-all duration-200 text-base"
//                   required
//                 />
//               </div>

//               {/* Question */}
//               <div className="flex-1">
//                 <label className="block text-primary-white font-medium mb-2 text-base">
//                   Ask a Question *
//                 </label>
//                 <textarea
//                   name="question"
//                   value={formData.question}
//                   onChange={handleChange}
//                   placeholder="Type your question or message here..."
//                   rows="3"
//                   className="w-full px-4 py-4 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition-all duration-200 text-base resize-none flex-1"
//                   required
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="mt-auto pt-4">
//                 <button
//                   type="submit"
//                   className="w-full bg-[#FFD700] text-black py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
//                 >
//                   Submit Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Add custom animation for popup */}
//       <style jsx>{`
//         @keyframes scale-in {
//           from {
//             transform: scale(0.9);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//         .animate-scale-in {
//           animation: scale-in 0.2s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template params for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      source: "Contact Section",
    };

    // Use EmailJS to send the contact form data
    emailjs
      .send(
        "service_evfvfgf", // Your EmailJS Service ID
        "template_6kuk8wb", // Your Contact Form Template ID
        templateParams,
        "XKNNeElEOX4ObAgRf" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setShowPopup(true);
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSubmitting(false);
          alert("Something went wrong! Please try again later.");
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      details: ["+91 77720-75970"],
    },
    {
      icon: <MdOutlineEmail />,
      title: "Email Us",
      details: ["info.travellpartner@gmail.com"],
    },
    {
      icon: <FaLocationDot />,
      title: "Visit Us",
      details: ["170/5 gangabag colony, Indore - 452015"],
    },
    {
      icon: <IoMdTime />,
      title: "Working Hours",
      details: ["Mon - Sun: 24/7", "Customer Support"],
    },
  ];

  return (
    <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 lg:p-8 transform animate-scale-in">
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-green-500" 
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
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                Message Sent!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for contacting us! Your message has been sent successfully. Our team will get back to you soon.
              </p>
              
              <button
                onClick={closePopup}
                className="w-full bg-[#FFD700] text-gray-800 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/Banner5.png"
          alt="JMB Tour And Travels Banner"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Header and Contact Details */}
          <div>
            {/* Header Section */}
            <div className="mb-12">
              <div className="mb-4 flex justify-center md:justify-start">
                <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full">
                  Contact Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl text-center md:text-start lg:text-5xl font-bold text-black mb-4">
                Get in Touch with JMB Tour And Travels
              </h2>
              <p className="text-black text-center md:text-start text-lg max-w-2xl">
                Have questions or need assistance? We're here to help! Reach out
                to us through any of the following channels and our team will
                get back to you promptly.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactDetails.map((contact, index) => (
                <div
                  key={index}
                  className="rounded-xl relative p-6 shadow-lg border border-gray-200 text-center flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="/assets/CardBgBanner.png"
                      alt="JMB Tour And Travels Banner"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>

                  {/* Contact Icon */}
                  <div className="relative z-10 w-12 h-12 bg-secondary-dark rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">  {contact.icon} </span>
                  </div>

                  {/* Contact Details */}
                  <h4 className="text-lg relative z-10  font-bold text-white mb-2">
                    {contact.title}
                  </h4>
                  <div className="relative z-10  space-y-1">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-white text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative rounded-2xl shadow-2xl p-8 h-full flex flex-col">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/assets/CardBgBanner.png"
                alt="JMB Tour And Travels Banner"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>

            <h3 className="text-3xl relative z-10 font-bold text-primary-white mb-6">
              Send us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6 flex-1 flex flex-col"
            >
              {/* Name and Email in single row on desktop, separate on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-primary-white font-medium mb-2 text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition-all duration-200 text-base"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-primary-white font-medium mb-2 text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition-all duration-200 text-base"
                    required
                  />
                </div>
              </div>

              {/* Phone and Subject in single row on desktop, separate on mobile */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                {/* Phone Number */}
                <div>
                  <label className="block text-primary-white font-medium mb-2 text-base">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition-all duration-200 text-base"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-primary-white font-medium mb-2 text-base">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition-all duration-200 text-base"
                    required
                  />
                </div>
              {/* </div> */}

              {/* Message - Single row */}
              <div className="flex-1">
                <label className="block text-primary-white font-medium mb-2 text-base">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows="4"
                  className="w-full px-4 py-4 bg-white text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition-all duration-200 text-base resize-none flex-1"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-auto pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFD700] text-black py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin h-5 w-5 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Add custom animation for popup */}
      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </section>
  );
}