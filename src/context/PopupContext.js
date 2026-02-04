
"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Check if user is on home page and hasn't seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenBookingPopup');
    const isHomePage = pathname === '/';

    if (isHomePage && !hasSeenPopup) {
      // Show popup after 2 seconds only on home page and first visit in this session
      const timer = setTimeout(() => {
        setShowBookingPopup(true);
        // Mark as seen in sessionStorage (only for this browser session)
        sessionStorage.setItem('hasSeenBookingPopup', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setShowBookingPopup(false);
    }
  }, [pathname]);

  const closeBookingPopup = () => {
    setShowBookingPopup(false);
  };

  const openBookingPopup = () => {
    // Only allow opening if on home page
    if (pathname === '/') {
      setShowBookingPopup(true);
    }
  };

  const showSuccessMessage = () => {
    setShowBookingPopup(false);
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  // Function to reset popup state (useful for testing)
  const resetPopup = () => {
    sessionStorage.removeItem('hasSeenBookingPopup');
  };

  return (
    <PopupContext.Provider value={{
      showBookingPopup,
      showSuccessPopup,
      closeBookingPopup,
      openBookingPopup,
      showSuccessMessage,
      closeSuccessPopup,
      isLoaded,
      resetPopup
    }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};