// src/app/contact-us/page.jsx
"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";
import emailjs from '@emailjs/browser';

// Reusable Icon Card Component for the top section
const InfoCard = ({ icon: Icon, title, description, contact, image }) => (
  <div className="flex flex-col">
    {/* Image above the card content */}
    <div className="relative w-full overflow-hidden h-52">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      
    </div>
    {/* Card content adjusted for image overlap */}
    <div className="bg-white shadow-lg py-8 px-8 flex flex-col items-center text-center">
       {contact && (
      <h3 className="text-2xl font-semibold text-black mb-1"> <a href={contact.link}>{title}</a> </h3>
       )}
      <p className="text-lg text-black">{description}</p>
      
    </div>
  </div>
);

// Contact Form Component
const ContactForm = () => {
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
      source: "Contact Us Page",
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
            message: "" 
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

  return (
    <div className="relative p-8 md:p-12 bg-[#F2EFE8] shadow-2xl overflow-hidden h-full">
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
                className="w-full bg-[#FDD700] text-gray-800 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/contact/FormBgImg.png"
          alt="Jai Maa Baglamukhi Tour And Travels Banner"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Background Geometric Shapes */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDD700] transform rotate-45 origin-top-right translate-x-1/2 -translate-y-1/2 opacity-70 rounded-br-2xl"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500 transform rotate-45 origin-top-right opacity-50"></div>

      <div className="relative z-10">
        <div className="flex items-center text-sm mb-4">
          <span className="w-5 h-0.5 bg-[#FDD700] mr-2"></span>
          <span className="font-medium text-black">CONTACT US</span>
          <span className="w-5 h-0.5 bg-[#FDD700] ml-2"></span>
        </div>

        <h2 className="text-4xl font-extrabold text-black mb-8">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FDD700] focus:border-[#FDD700] transition duration-150"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FDD700] focus:border-[#FDD700] transition duration-150"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FDD700] focus:border-[#FDD700] transition duration-150"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FDD700] focus:border-[#FDD700] transition duration-150"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FDD700] focus:border-[#FDD700] transition duration-150 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center cursor-pointer py-2 px-6 border border-transparent shadow-lg text-lg font-bold text-black bg-[#FDD700] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FDD700] transition duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
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
                <span>Sending...</span>
              </div>
            ) : (
              <>
                SEND MESSAGE
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>
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
    </div>
  );
};

export default function ContactUs() {
  const infoCardData = [
    {
      icon: MapPin,
      title: 'Our Address',
      description: '170/5 gangabag colony, Indore',
      contact: {
        text: 'Call Now',
        link: 'tel:+917772075970'
      },
      image: '/assets/contact/address.jpg', // You can replace with your actual image
    },
    {
      icon: Mail,
      title: 'info.travellpartner@gmail.com',
      description: 'Email us anytime for any kind of query.',
      contact: {
        text: 'Send Email',
        link: 'mailto:info.travellpartner@gmail.com'
      },
      image: '/assets/contact/mail.jpg', // You can replace with your actual image
    },
    {
      icon: Phone,
      title: '+91 77720-75970',
      description: 'Call us any kind support, we will wait for it.',
      contact: {
        text: 'Call Now',
        link: 'tel:+919876543210'
      },
      image: '/assets/contact/phone.jpg', // You can replace with your actual image
    },
  ];

  // Placeholder image for the woman/taxi section
  const contactImage = '/assets/contact/contact.jpg';

  return (
    <div className="min-h-screen">
      {/* Banner Section - Remains Same */}
      <section className="relative w-full h-[25vh] md:h-[40vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/packages/packagesbanner.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 heading-font">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Get in touch with us for any queries or bookings
            </p>
          </div>
        </div>
      </section>

      {/* Top Section: Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {infoCardData.map((item, index) => (
              <InfoCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                contact={item.contact}
                image={item.image}
              />
            ))}
          </div>

          {/* Bottom Section: Image and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Image */}
            <div className="relative hidden lg:block h-[600px] w-full overflow-hidden shadow-2xl">
              <img
                src={contactImage}
                alt="Jai Maa Baglamukhi Tour And Travels Contact"
                className="w-full h-full object-cover"
              />
              {/* Yellow banner element */}
              <div className="absolute bottom-0 left-0 bg-[#FDD700] text-black text-3xl font-black py-2 px-6">
                JAI MAA BAGLAMUKHI TOUR AND TRAVELS
              </div>
            </div>
            
            {/* Right Side: Contact Form */}
            <div className="h-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details & Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl text-center md:text-start font-bold text-black mb-4">
                  Let's Connect
                </h2>
                <p className="text-black text-center md:text-start text-lg leading-relaxed">
                  We're always here to help you with your travel needs. 
                  Whether you have questions about our services, need assistance 
                  with booking, or want to provide feedback, don't hesitate to reach out.
                </p>
              </div>

              {/* Social Media */}
              <div>
  <h3 className="text-xl text-center md:text-start font-semibold text-black mb-4">
    Follow Us On Social Media
  </h3>

  <div className="flex justify-center md:justify-start space-x-4">
    <a
      href="#"
      className="group w-12 h-12 bg-[#FDD700] hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105"
    >
      <Facebook className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
    </a>

    <a
      href="#"
      className="group w-12 h-12 bg-[#FDD700] hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
    >
      <Twitter className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
    </a>

    <a
      href="#"
      className="group w-12 h-12 bg-[#FDD700] hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
    >
      <Instagram className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
    </a>
  </div>
</div>

            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-black font-medium">Monday - Friday</span>
                  <span className="text-black font-semibold">24/7 Available</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-black font-medium">Saturday</span>
                  <span className="text-black font-semibold">24/7 Available</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-black font-medium">Sunday</span>
                  <span className="text-black font-semibold">24/7 Available</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-black font-medium">Emergency Service</span>
                  <span className="text-black font-semibold">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}